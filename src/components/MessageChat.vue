<template>
  <div class="row fit q-pl-xs" :class="{ 'justify-end': sender }">
    <div class="chat-container row self-end">
      <div
        class="chat q-pa-md"
        :class="{
          'text-justify': !isTyping,
          'text-center': isTyping,
          'chat-send': sender,
          'chat-receive': !sender,
        }"
      >
        <span class="text">
          <svg
            v-if="isTyping"
            class="q-spinner"
            fill="currentColor"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 120 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15">
              <animate
                attributeName="r"
                from="15"
                to="15"
                begin="0s"
                dur="0.8s"
                values="15;9;15"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="fill-opacity"
                from="1"
                to="1"
                begin="0s"
                dur="0.8s"
                values="1;.5;1"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
            </circle>
            <circle cx="60" cy="15" r="9" fill-opacity=".3">
              <animate
                attributeName="r"
                from="9"
                to="9"
                begin="0s"
                dur="0.8s"
                values="9;15;9"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="fill-opacity"
                from=".5"
                to=".5"
                begin="0s"
                dur="0.8s"
                values=".5;1;.5"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
            </circle>
            <circle cx="105" cy="15" r="15">
              <animate
                attributeName="r"
                from="15"
                to="15"
                begin="0s"
                dur="0.8s"
                values="15;9;15"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="fill-opacity"
                from="1"
                to="1"
                begin="0s"
                dur="0.8s"
                values="1;.5;1"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
            </circle>
          </svg>
          <span v-else
            >{{ context }}

            <q-icon
              class="q-ml-xs icon text-right"
              name="volume_up"
              @click="onClickPlayMessage"
              size="1.1rem"
              :class="{
                'icon-sender': sender,
                'icon-receiver': !sender,
              }"
            />
          </span>
        </span>
      </div>
      <div v-if="!sender" class="icon-report row items-center justify-center q-px-xs">
        <div class="row items-center justify-start desktop-only">
          <span class="block full-width cursor-pointer q-mb-md">👍</span>
          <span @click="emitReport" class="block full-width cursor-pointer">👎</span>
        </div>
      </div>
    </div>
    <small class="fit" :class="{ 'text-right': sender, hidden: isTyping }">{{ hour }}</small>
  </div>
</template>
<script>
import { setText, playText } from '../use/useVoice';
import moment from 'moment';

export default {
  props: {
    sender: { type: Boolean },
    isTyping: { type: Boolean },
    context: { type: String },
    document_id: { type: String, required: false },
    meta: { type: Object, required: false },
    answerUser: { type: String, required: false },
  },
  emits: ['onReportMessage'],
  setup(props, { emit }) {
    const hour = moment().format('LT');

    function onClickPlayMessage() {
      setText(props.context);
      playText();
    }
    function emitReport() {
      emit('onReportMessage', props);
    }
    return { onClickPlayMessage, hour, prompt, emitReport };
  },
};
</script>

<style lang="scss" scoped>
.icon-sender {
  color: white;
  background-color: $primary;
}
.icon-receiver {
  color: $primary;
  background-color: white;
}
.icon {
  border: 1px solid white;
  border-radius: 1.1rem;
}
.icon:hover {
  cursor: pointer;
}
.chat-receive {
  background: #0075be;
  border-radius: 13.8346px 13.8346px 13.8346px 0px;
  color: white;
}
.chat-send {
  background: rgba(196, 196, 196, 0.3);
  border-radius: 13.8346px 13.8346px 0px 13.8346px;
  color: #414141;
  font-weight: lighter;
}
.chat-container:hover .icon-report {
  display: flex;
  opacity: 1;
}
.icon-report {
  opacity: 0;
  transition: opacity 100ms ease-out;
}
.chat {
  min-width: 70px;
  max-width: 340px;

  font-weight: normal;
}
span.text {
  word-spacing: 0.5pt;
}
small {
  color: rgba(196, 196, 196, 1);
}
</style>
