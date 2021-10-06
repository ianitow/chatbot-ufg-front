<template>
  <q-page class="flex container-master">
    <header
      class="q-px-sm q-py-xs row self-start items-center non-selectable"
      st
    >
      <q-avatar
        class="avatar"
        :class="{ online: isOnline, busy: !isOnline }"
        size="80px"
        text-color="white"
      >
        <img class="q-pa-sm" src="~assets/teguinha.svg"
      /></q-avatar>
      <div class="column q-ml-sm">
        <span class="name">Teguinha</span>
        <span class="status">{{ isOnline ? "Online" : "Ocupada" }}</span>
      </div>
    </header>
    <div
      class="container-chat flex container-master fit"
      style="overflow-y: scroll"
      ref="containerRef"
    >
      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">O que há de errado?</div>
            <small>Essa informação veio diferente da qual esperava?</small>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              v-model="address"
              autofocus
              @keyup.enter="prompt = false"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Enviar" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <div class="row">
        <span class="full-width text-center block date q-mb-md">{{
          date
        }}</span>
        <div class="row container-messages q-pb-md wrap">
          <message-chat
            v-for="(msg, index) in messages"
            :key="index"
            :message="msg.message"
            :isTyping="msg.isTyping"
            :sender="msg.isSender"
            @onReportMessage="onReportMessage"
          />
        </div>
      </div>
    </div>
    <send-message @onSendMessage="onMessage" :disabled="isInputChatDisabled" />
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import MessageChat from "../components/MessageChat";
import SendMessage from "../components/SendMessage";

import moment from "moment";
import { sendQuestion, state } from "../use/useApi";
import { setText, playText } from "../use/useVoice";
export default {
  name: "Chat",
  components: { SendMessage, MessageChat },

  setup() {
    const MIN_WAITING_TO_TYPING = 1000;
    const containerRef = ref(null);
    const isOnline = ref(true);
    const router = useRouter();
    const prompt = ref(false);
    let id = 1;
    const messages = ref([]);
    const isInputChatDisabled = ref(false);
    moment.locale("pt-BR");
    const date = ref(moment().format("LLL"));
    function updateScroll() {
      setTimeout(() => {
        containerRef.value.scrollTop = containerRef.value.scrollHeight;
      }, 5);
    }
    function addMessage(message = "", isSender = true, isTyping = false) {
      messages.value.push({ message, isSender, isTyping });
      updateScroll();
    }
    function updateLastMessage(message) {
      messages.value[messages.value.length - 1].isTyping = false;
      messages.value[messages.value.length - 1].message = message;
      setText(message);
      // playText();
    }
    function onMessage(text, isOnlyBot = false) {
      if (!isOnlyBot) {
        isInputChatDisabled.value = true;
        addMessage(text);
      }
      setTimeout(() => {
        addMessage(null, false, true);
      }, MIN_WAITING_TO_TYPING);

      sendQuestion(text, id)
        .then(({ data }) => {
          updateLastMessage(data.message);

          id++;
        })
        .catch(({ message }) => {
          isOnline.value = false;
          updateLastMessage(message);
        })
        .finally(() => {
          isInputChatDisabled.value = false;
          updateScroll();
        });
    }
    onMounted(() => {
      if (!state.course || !state.name) {
        router.push({ name: "Home" });
      }
      onMessage(
        `Olá, me chamo ${state.name} e estou cursando ${state.course.value}.`
      );
    });
    function onReportMessage() {
      prompt.value = !prompt.value;
    }
    return {
      messages,
      onMessage,
      isInputChatDisabled,
      containerRef,
      isOnline,
      date,
      prompt,
      onReportMessage,
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
  max-height: 64.5vh;
  scroll-behavior: smooth;
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
    content: "";
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
