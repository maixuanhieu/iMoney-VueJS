<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    console.log(route)
    return {
      layout: computed(() => route.meta)
    }
  }
};
</script>
