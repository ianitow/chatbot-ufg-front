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
            <q-input dense v-model="reportMessage" autofocus @keyup.enter="sendReportMessage" />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Enviar" v-close-popup @click="sendReportMessage" />
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
            :context="message.context"
            :sender="message.sender"
            :document_id="message.document_id"
            :meta="message.meta"
            :answerUser="message.answerUser"
            @onReportMessage="handleReportMessage"
          />
        </div>
      </div>
    </div>
    <send-message @onSendMessage="onUserSendMessage" @onInputFocus="updateScroll" :disabled="isInputChatDisabled" />
  </q-page>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import MessageChat from '../components/MessageChat';
import SendMessage from '../components/SendMessage';

import moment from 'moment';
import { sendQuestionToAPI, sendReportMessageToAPI } from '../use/useApi';
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
    const reportMessage = ref(null);
    const answersAPI = ref([]);
    const answersLastIndex = ref(0);
    const isInputChatDisabled = ref(false);
    const reportedMessage = ref({});
    moment.locale('pt-BR');
    const date = ref(moment().format('LLL'));

    function updateScroll(ms = 5) {
      setTimeout(() => {
        containerRef.value.scrollTop = containerRef.value.scrollHeight;
      }, ms);
    }
    function createEffectTyping() {
      return new Promise((resolve, reject) => {
        messages.value.push({
          context: null,
          isTyping: true,
          sender: false,
        });
        setTimeout(() => {
          resolve();
        }, 500);
      });
    }
    async function onUserSendMessage(context) {
      try {
        messages.value.push({
          context,
          sender: true,
        });
        answersLastIndex.value = 0;
        isInputChatDisabled.value = true;
        console.log('bot');
        await createEffectTyping();
        const { answers } = await sendQuestionToAPI(context);
        answersAPI.value = answers.map((item) => {
          item.value.answerUser = context;
        });
        const [firstMessage] = answersAPI.value;
        updateLastElement(firstMessage);
      } catch (err) {
        isOnline.value = false;
        updateLastElement('Desculpe, não estou conseguindo estabelecer uma conexão!');
      } finally {
        isInputChatDisabled.value = false;
      }

      updateScroll();
    }
    function updateLastElement({ context, document_id, meta, answerUser }) {
      const lastElementIndex = messages.value.length - 1;
      const lastElement = messages.value[lastElementIndex];

      lastElement.context = context;
      lastElement.isTyping = false;
      lastElement.document_id = document_id;
      lastElement.meta = meta;
      lastElement.answerUser = answerUser;
    }

    function onBotSendMessage(context = null, isTyping = true) {
      messages.value.push({
        context,
        sender: false,
        isTyping,
        document_id: null,
        meta: {},
        answerUser: null,
      });
      updateScroll();
    }

    onBotSendMessage('OI MEU NOME É TEGUINHA', false);
    function handleReportMessage({ document_id, context, meta }) {
      if (!lastMessageUser) {
        $q.notify({
          message: 'Não é possivel reportar a mensagem inicial!',
          color: 'negative',
        });
        return;
      }
      prompt.value = true;
      reportedMessage.value = { document_id, context, meta, answer: lastMessageUser };
    }
    async function sendReportMessage() {
      await sendReportMessageToAPI(reportedMessage.value);
    }
    return {
      isOnline,
      handleReportMessage,
      reportedMessage,
      sendReportMessage,
      prompt,
      containerRef,
      messages,
      isInputChatDisabled,
      date,
      onUserSendMessage,
      onBotSendMessage,
      updateScroll,
      createEffectTyping,
      reportMessage,
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
