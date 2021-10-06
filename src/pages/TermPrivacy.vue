<template>
  <q-page class="flex container-master justify-center items-center fit">
    <form class="fit" @submit.prevent="onSubmit">
      <div class="fit container-terms justify-center">
        <span class="text-header text-center block q-mb-lg"
          >Termos de privacidade</span
        >

        <div class="text-terms">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam
          quos nihil eveniet commodi iusto, ut voluptatum. Dolore alias maxime
          obcaecati eius repudiandae natus sit iusto rem quam laborum ipsum, ea
          voluptatem omnis ex ratione facere tenetur dolorum beatae quis
          cupiditate nesciunt dolorem laboriosam ad doloribus! Sequi ipsa
          accusamus doloribus quae, illum repellat voluptas laudantium
          aspernatur tempora. Consectetur omnis quas sit explicabo fuga laborum
          soluta, modi nemo itaque a nihil iste voluptates nostrum earum
          temporibus corporis quos autem repellat incidunt molestiae. Dolorem
          sapiente porro cumque corrupti et non<br /><br />
          doloribus nam! Nobis voluptate, corrupti culpa molestiae ratione
          error, fugiat dolorum odio consequatur officia nostrum dolorem
          numquam, laboriosam nam reiciendis animi? Quas quasi voluptatum, nihil
          rerum voluptas, sapiente doloribus sed iusto doloremque impedit vel
          autem debitis minus asperiores non commodi ipsum facilis enim, dolorem
          nesciunt? Aliquam officia omnis aliquid saepe sunt beatae explicabo
          sed est<br /><br />
          dignissimos! Cupiditate, minus, ex aut suscipit error praesentium,
          architecto doloremque eveniet quis commodi totam illum vero ratione
          autem quia accusamus illo quasi? Eius et nesciunt eaque rerum sapiente
          soluta velit architecto iste, ex in suscipit impedit? Incidunt ducimus
          consequuntur tenetur fugit temporibus quos odio fuga laborum omnis,<br /><br />
          laudantium hic consequatur minus magni nesciunt recusandae. Dolor,
          quos minus!
        </div>
      </div>
    </form>
    <div class="flex justify-end text-right self-end">
      <div class="full-width">
        <q-checkbox v-model="val" size="2rem" />
        <span class="text-check">Concordo com os termos</span>
      </div>
      <q-btn
        style="width: 160px; height: 45px"
        class="text-center q-pr-xs text-weight-bold"
        color="primary"
        icon-right="arrow_forward_ios"
        label="Próximo"
        @click="onSubmit"
        :disabled="!val"
      />
    </div>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  data() {
    return { val: false };
  },
  setup() {
    const router = useRouter();
    function onSubmit() {
      router.push({
        name: "PersonalInfo",
      });
    }
    return { onSubmit };
  },
};
</script>
<style lang="scss" scoped>
.q-page {
  flex-flow: column;
}
.container-terms {
  flex: 1;
  flex-grow: 2;
  flex-flow: column;
  padding: 20px;
  border: 1px solid #f0f0f0;
  overflow-y: scroll;
}
.text-terms {
  max-height: 50vh;
}
.container-check {
  padding-top: 10px;
  font-size: 10pt;
}
.text-check {
  color: $text;
}
.text-header {
  font-weight: bold;
  flex-grow: 1;
  font-size: 22px;
}
.q-page {
  padding: 20px 20px 10px 20px;
}
</style>
