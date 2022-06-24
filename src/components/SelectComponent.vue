<template>
  <div>
    <span class="block q-mb-sm header-name full-width nowrap">{{ name }}</span>
    <q-select
      class="select"
      outlined
      v-model="courseSelected"
      :options="coursesShowing"
      dense
      hide-dropdown-icon
      options-dense
      use-input
      @filter="filterFn"
      input-debounce="200"
      behavior="menu"
      @update:model-value="setCourse(courseSelected)"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> Sem resultados </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
import { setCourse } from '../use/useApi';
import { courses } from '../utils/courses';
import { ref, reactive, toRefs } from 'vue';
export default {
  props: { name: { type: String, required: true }, selected: { type: String } },

  setup() {
    const courseSelected = ref(null);
    const store = reactive({
      coursesShowing: null,
    });
    function filterFn(val, update, abort) {
      if (val.length < 4) {
        abort();
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        store.coursesShowing = courses.filter((v) => v.label.toLowerCase().indexOf(needle) > -1);
      });
    }

    return {
      ...toRefs(store),
      courseSelected,
      setCourse,
      filterFn,
    };
  },
};
</script>
<style lang="scss" scoped>
span {
  color: #8898aa;
}

.select {
  width: 100%;
}
input:focus {
  background: white;
  border: 1px solid $primary;
}

div {
  width: 100%;
}
</style>
