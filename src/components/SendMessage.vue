<template>
  <form @submit.prevent="onSendMessage" class="message-send q-mt-sm row items-center">
    <div v-if="options.isCapturingVoice" class="col row justify-center items-center">
      <q-spinner-audio class="full-width" size="1rem" />
      <small class="self-end">Capturando voz...</small>
    </div>
    <input
      v-else
      ref="inputElement"
      v-model="message"
      class="col q-ml-md"
      type="text"
      placeholder="Digite algo..."
      minlength="4"
      :disabled="disabled"
      @focus="onFocusable"
    />

    <div class="message-icon q-mx-sm flex items-center justify-center" :class="{ disabled }" @click="onSendMessage">
      <q-icon size="20px" name="send" />
    </div>
    <div
      class="message-icon q-mr-sm flex items-center justify-center"
      :class="{ disabled }"
      @mousedown.left="onVoiceCaptured"
      @mouseup.left="stopVoice"
    >
      <q-icon size="20px" name="mic" />
    </div>
  </form>
</template>
<script>
import { ref, watch, nextTick, onMounted } from 'vue';
import { captureVoice, stopVoice, options } from '../use/useVoice';
import { useQuasar } from 'quasar';
export default {
  name: 'SendMessage',
  emits: ['onSendMessage', 'onInputFocus'],
  props: {
    disabled: Boolean,
  },

  setup(props, { emit }) {
    const message = ref('');
    const inputElement = ref(null);
    const $q = useQuasar();
    watch(
      () => props.disabled,
      (newValue) => {
        if (!newValue && !$q.platform.is.mobile) {
          nextTick(() => {
            inputElement.value.focus();
          });
        }
      },
    );
    function onSendMessage() {
      if (!props.disabled && message.value.length != 0) {
        emit('onSendMessage', message.value);
        message.value = '';
      }
    }
    function onVoiceCaptured() {
      captureVoice().then((text) => {
        message.value = text;
        onSendMessage();
      });
    }
    function onFocusable() {
      emit('onInputFocus', 500);
    }
    return {
      message,
      onSendMessage,
      inputElement,
      onVoiceCaptured,
      stopVoice,
      options,
      onFocusable,
    };
  },
};
</script>

<style lang="scss" scoped>
.message-icon {
  background-color: $primary;
  color: white;
  border-radius: 24px;
  padding: 2px;
  width: 28px;
  height: 28px;
}
.message-send {
  background-color: #f2f2f2;
  border-radius: 30px;
  height: 2.5rem;
}
.message-icon:hover {
  cursor: pointer;
}
.message-send input:focus {
  outline: none;
}
.message-send input {
  background: transparent;
  border: none;
  border-radius: 30px;
}
</style>
