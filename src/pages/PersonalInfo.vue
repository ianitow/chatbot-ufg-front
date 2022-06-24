<template>
  <q-page class="flex container-master justify-center items-center fit">
    <form class="fit q-mb-sm" @submit.prevent="onSubmit">
      <div class="row justify-center">
        <div class="row justify-center">
          <q-img class="row" src="~assets/avatar.svg" width="150px" height="150px" />
          <span class="text-center full-width q-mt-lg">Preencha algumas informações</span>
          <div class="row" style="max-width: 300px">
            <input-component name="Seu nome" class="q-mt-lg" />
            <select-component name="Curso" class="q-mt-md" />
          </div>
        </div>
      </div>
    </form>
    <div class="flex fit justify-end items-end">
      <q-btn
        style="width: 160px; height: 45px"
        class="text-center q-pr-xs text-weight-bold"
        color="primary"
        icon-right="arrow_forward_ios"
        label="Acessar"
        type="submit"
        :disabled="!isButtonEnabled"
        @click="onSubmit"
      />
    </div>
  </q-page>
</template>

<script>
import InputComponent from 'src/components/InputComponent.vue';
import SelectComponent from 'src/components/SelectComponent.vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { state } from '../use/useApi';
export default {
  components: { InputComponent, SelectComponent },
  setup() {
    const router = useRouter();
    const isButtonEnabled = computed(() => {
      const { name, course } = state;
      if (!name || name.length < 4) return false;
      if (!course) return false;
      return true;
    });
    function onSubmit() {
      router.push({ name: 'Chat' });
    }
    return { onSubmit, isButtonEnabled };
  },
};
</script>
<style lang="scss" scoped>
.q-page {
  padding: 50px 30px 20px 30px;
}

span {
  color: $text;
}
</style>
