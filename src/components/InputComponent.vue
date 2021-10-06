<template>
  <div class="row">
    <span class="block q-mb-sm header-name full-width">{{ name }}</span>
    <q-input
      type="text"
      dense
      outlined
      class="full-width"
      autofocus
      v-model="nameStudent"
      required
      @update:model-value="this.$emit('update:model-value', nameStudent)"
    />
  </div>
</template>

<script>
export default {
  props: { name: { type: String, required: true } },
  emits: ["update:model-value"],
  data() {
    return { nameStudent: "" };
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
span {
  color: #8898aa;
}
input {
  all: unset;
  width: 100%;
  height: 100%;
  height: 3vh;
  border-radius: 5px;
  background: none;
  border: none;
  border: 1px solid #cad1d7;
  border-width: 1px;
  padding: 5px 15px 5px 15px;
}
input:focus {
  background: white;
  border: 1px solid $primary;
}

div {
  width: 100%;
}
</style>
