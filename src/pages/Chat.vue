<template>
  <q-page class="flex container-master">
    <header class="q-px-sm q-py-xs row self-start items-center non-selectable" st>
      <q-avatar class="avatar" :class="{ online: isOnline, busy: !isOnline }" size="80px" text-color="white">
        <img class="q-pa-sm" src="~assets/teguinha.svg"
      /></q-avatar>
      <div class="column q-ml-sm">
        <span class="name">Teguinha</span>
        <span class="status">{{ isOnline ? 'Online' : 'Ocupada' }}</span>
      </div>
    </header>
    <div class="container-chat flex container-master" style="overflow-y: scroll" ref="containerRef">
      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">O que há de errado?</div>
            <small>Essa informação veio diferente da qual esperava?</small>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Enviar" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <div class="row">
        <span class="full-width text-center block date q-mb-md">{{ date }}</span>
        <div class="row container-messages q-pb-md wrap">
          <message-chat
            v-for="(message, index) in messages"
            :key="`message-${index}`"
            :isTyping="message.isTyping"
            :message="message.message"
            :sender="message.sender"
          />
        </div>
      </div>
    </div>
    <send-message @onSendMessage="onUserSendMessage" @onInputFocus="__updateScroll" :disabled="isInputChatDisabled" />
  </q-page>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import MessageChat from '../components/MessageChat';
import SendMessage from '../components/SendMessage';

import moment from 'moment';
import { sendQuestionToAPI } from '../use/useApi';
import { useQuasar } from 'quasar';

export default {
  name: 'Chat',
  components: { SendMessage, MessageChat },

  setup() {
    const containerRef = ref(null);
    const isOnline = ref(true);
    const prompt = ref(false);
    const $q = useQuasar();
    const messages = ref([]);
    const isInputChatDisabled = ref(false);
    moment.locale('pt-BR');
    const date = ref(moment().format('LLL'));

    function __updateScroll(ms = 5) {
      setTimeout(() => {
        containerRef.value.scrollTop = containerRef.value.scrollHeight;
      }, ms);
    }
    function createEffectTyping() {
      return new Promise((resolve, reject) => {
        messages.value.push({
          message: null,
          isTyping: true,
          sender: false,
        });
        setTimeout(() => {
          resolve();
        }, 500);
      });
    }
    async function onUserSendMessage(message) {
      try {
        messages.value.push({
          message,
          sender: true,
        });
        isInputChatDisabled.value = true;
        await createEffectTyping();
        const { data } = await sendQuestionToAPI(message);
        const botMessage = data[0].context;
        updateLastElement(botMessage);
      } catch (err) {
        isOnline.value = false;
        updateLastElement('Desculpe, não estou conseguindo estabelecer uma conexão!');
      } finally {
        isInputChatDisabled.value = false;
      }

      __updateScroll();
    }
    function updateLastElement(message) {
      const lastElementIndex = messages.value.length - 1;
      const lastElement = messages.value[lastElementIndex];
      lastElement.message = message;
      lastElement.isTyping = false;
    }

    function onBotSendMessage(message = null, isTyping = true) {
      messages.value.push({
        message,
        sender: false,
        isTyping,
      });
      __updateScroll();
    }

    onBotSendMessage('OI MEU NOME É TEGUINHA', false);

    return {
      isOnline,
      prompt,
      containerRef,
      messages,
      isInputChatDisabled,
      date,
      onUserSendMessage,
      onBotSendMessage,
      createEffectTyping,
    };
  },
};
</script>
<style lang="scss" scoped>
.q-page {
  flex-flow: column;
}
.container-chat {
  padding: 10px 10px 0px 10px;
  border: 1px solid #f0f0f0;
  border-top: none;
  scroll-behavior: smooth;
}
@media (min-width: $breakpoint-md-min) {
  .container-chat {
    max-height: 62.3vh;
  }
}
@media (max-width: $breakpoint-sm-max) {
  .container-chat {
    max-height: 70.3vh;
  }
}
.container-messages {
  overflow-y: auto;
  width: 100%;
  height: 100%;
}
.date {
  color: $text;
  font-size: 8pt;
}

span.status {
  color: #bcbaba;
  font-weight: 500;
  text-align: right;
}
span.name {
  font-size: 12pt;
  font-weight: lighter;
  margin-bottom: -6px;
}
header {
  border: 1px solid rgba(216, 216, 216, 0.34);
  width: 100%;

  border-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.avatar {
  position: relative;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 10px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 1px solid #fff;
  }

  border-radius: 50px;
  border: 1px solid #d8d8d8;
}
.online:before {
  background-color: lime;
}
.busy:before {
  background-color: rgb(231, 79, 9);
}

.container-master {
  padding: 10px;
}
</style>
