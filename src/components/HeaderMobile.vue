<template>
  <q-header class="text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
      <img class="q-ml-sm" src="~/assets/ufg-logo.svg" style="width: 90px" />
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="drawer"
    show-if-above
    :width="250"
    :breakpoint="1920"
    class="bg-primary"
  >
    <q-scroll-area class="fit text-white">
      <a href="https://ufg.br" class="flex">
        <q-img
          src="~assets/ufg-logo.svg"
          class="non-selectable responsive q-my-md q-mx-auto"
          style="width: 180px; align-self: center"
      /></a>
      <q-separator style="background-color: #2f81b5"></q-separator>
      <q-list padding class="menu-list">
        <q-item clickable v-ripple @click="this.$router.push({ name: 'Home' })">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section> Página inicial </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="this.$router.push({ name: 'Report' })"
        >
          <q-item-section avatar>
            <q-icon name="warning" />
          </q-item-section>

          <q-item-section> Relatar um problema </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="this.$router.push({ name: 'Rating' })"
        >
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section> Avalie-nos </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>
