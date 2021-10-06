<template>
  <q-page class="flex container-master justify-center items-center">
    <div
      class="
        justify-center
        text-center
        items-center
        flex
        container-master
        q-pa-none
      "
    >
      <q-img src="~assets/bug_fixing.svg" style="width: 20vw" />
      <h2 class="q-mb-none">Conte-nos o que deu errado?</h2>
      <small class="block full-width q-mb-md"
        >Descreva um pouco do que aconteceu.</small
      >
      <q-input
        v-model="ratingModel"
        class="full-width q-px-none q-mx-none"
        size="3.5em"
        color="primary"
        icon="star_border"
        icon-selected="star"
      />
    </div>
    <div class="row full-width justify-end">
      <q-btn
        style="width: 160px; height: 45px"
        class="text-center q-pr-xs text-weight-bold"
        color="primary"
        icon-right="arrow_forward_ios"
        label="Enviar"
        type="submit"
        :disabled="isButtonDisabled"
        @click="onSubmit"
      />
    </div>
  </q-page>
</template>

<script>
import InputComponent from "src/components/InputComponent.vue";
import SelectComponent from "src/components/SelectComponent.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { setName, setCourse } from "../use/useApi";
export default {
  components: {},
  setup() {
    const router = useRouter();
    const userInput = ref(null);
    const selectedInput = ref(null);
    function onInputChange(nameStudent) {
      userInput.value = nameStudent;
    }
    function onSelectedChange(nameCourse) {
      selectedInput.value = nameCourse;
    }

    const isButtonDisabled = computed(() =>
      !userInput.value ||
      userInput.value.length < 4 ||
      userInput.value == "" ||
      selectedInput.value == "" ||
      !selectedInput.value
        ? true
        : false
    );
    function onSubmit() {
      console.log("Clicado");
      setName(userInput.value);
      setCourse(selectedInput.value);
      router.push({ name: "Chat" });
    }
    return { onInputChange, onSelectedChange, isButtonDisabled, onSubmit };
  },
};
</script>
<style lang="scss" scoped>
.q-page {
  padding: 50px 30px 20px 30px;
}

h2 {
  font-size: 2rem;
  font-weight: 200;
}
span {
  color: $text;
}
</style>
