<template>
  <q-layout class="row full-height items-center justify-center">
    <container />
  </q-layout>
</template>

<script>
import Container from "src/components/Container.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Container },
  name: "MainLayout",
});
</script>

<style lang="scss">
.q-layout {
  background-image: url("~assets/background-header.svg");
  background-size: contain;
  background-color: #e5e5e5;
  background-repeat: no-repeat;
  color: $text;
}
</style>
