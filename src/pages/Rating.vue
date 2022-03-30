<template>
  <q-page class="flex container-master justify-center items-center">
    <div class="justify-center text-center items-center">
      <q-img src="~assets/review.svg" style="width: 100%" />
      <h2 class="q-mb-none">Gostou da Teguinha?</h2>
      <small class="block full-width q-mb-md"
        >Avalie com uma nota para sabermos sua experiencia.</small
      >
      <q-rating
        v-model="ratingModel"
        size="3.5em"
        color="primary"
        icon="star_border"
        icon-selected="star"
        @update:model-value="
          () => {
            sendRating();
          }
        "
      >
        <template v-slot:tip-1>
          <q-tooltip>Péssima experiência</q-tooltip>
        </template>
        <template v-slot:tip-2>
          <q-tooltip>Ainda pode melhorar</q-tooltip>
        </template>
        <template v-slot:tip-3>
          <q-tooltip>Legal</q-tooltip>
        </template>
        <template v-slot:tip-4>
          <q-tooltip>Muito bom</q-tooltip>
        </template>
        <template v-slot:tip-5>
          <q-tooltip>Excelente</q-tooltip>
        </template>
      </q-rating>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { state, addNewRating } from "../use/useApi";
import { useQuasar } from "quasar";
export default {
  components: {},
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const ratingModel = ref(0);

    function sendRating() {
      addNewRating(state.name, ratingModel.value)
        .then(() => {
          $q.notify({
            message: "Sua avaliação foi computada. Obrigado!",
            color: "positive",
          });
        })
        .catch(() => {
          if (!state.name.length) {
            $q.notify({
              message:
                "Você não informou o nome, por favor, informe na página inicial!",
              color: "negative",
            });
          }
        });
    }
    return { sendRating, ratingModel };
  },
};
</script>
<style lang="scss" scoped>
.q-page {
  padding: 50px 30px 20px 30px;
}

h2 {
  font-size: 1.7rem;
  font-weight: 200;
}
span {
  color: $text;
}
</style>
