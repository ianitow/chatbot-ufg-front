<template>
  <q-page padding class="row justify-center items-center non-selectable">
    <div class="text-center">
      <q-img src="~assets/welcome.svg" style="width: 100%" />

      <h2 class="q-mb-none">Seja muito bem vindo(a)</h2>
      <small class="block full-width q-mb-md"
        >Conheça a Teguinha, a assistente virtual que irá te ajudar com suas
        dúvidas.</small
      >
      <q-btn
        style="width: 160px; height: 45px"
        class="text-center q-pr-xs text-weight-bold"
        color="primary"
        icon-right="arrow_forward_ios"
        label="Próximo"
        @click="onClick"
        autofocus
      />
    </div>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function onClick() {
      router.push({
        name: "TermPrivacy",
      });
    }
    return { onClick };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 2rem;
  font-weight: 200;
}
</style>
