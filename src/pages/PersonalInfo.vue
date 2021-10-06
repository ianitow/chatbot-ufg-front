<template>
  <q-page class="flex container-master justify-center items-center fit">
    <form class="fit q-mb-sm" @submit.prevent="onSubmit">
      <div class="row justify-center">
        <div class="row justify-center">
          <q-img
            class="row"
            src="~assets/avatar.svg"
            width="150px"
            height="150px"
          />
          <span class="text-center full-width q-mt-lg"
            >Preencha algumas informações</span
          >
          <div class="row" style="max-width: 300px">
            <input-component
              @update:model-value="onInputChange"
              name="Seu nome"
              class="q-mt-lg"
            />
            <select-component
              @update:model-value="onSelectedChange"
              name="Curso"
              class="q-mt-md"
            />
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
  components: { InputComponent, SelectComponent },
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

span {
  color: $text;
}
</style>
