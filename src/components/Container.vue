<template>
  <div id="container" class="row">
    <aside class="col-md-4 col-lg-3 gt-sm"><header-container /></aside>

    <q-page-container
      class="router-view col-xs-12 col-md-8 col-lg-9 col-sm-12"
      style="min-height: 100% !important"
    >
      <transition
        enter-active-class="animated fadeIn"
        appear
        leave-active-class="animated fadeOut"
        :duration="300"
      >
        <router-view style="min-height: 100% !important" />
      </transition>
    </q-page-container>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import HeaderContainer from "./HeaderContainer.vue";
export default defineComponent({
  name: "Container",
  components: { HeaderContainer },
});
</script>

<style lang="scss" scoped>
aside {
  background-color: #0075be;
  border-radius: 10px;
  /* max-width: 450px !important; */
}
@media (min-width: $breakpoint-sm-max) {
  #container {
    min-height: 88vh;
    width: 70vw;
  }
}
@media (max-width: $breakpoint-sm-max) {
  #container {
    width: 100vw;
    height: 100vh;
  }
}
#container {
  background-color: #fff;
  align-self: center;
  border-radius: 10px;
}
</style>
