<template>
  <navigation-header />

  <slot />
  <navigation-bottom />
</template>

<script>

import { useRoute } from "vue-router";
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
import { computed } from '@vue/reactivity';
export default {
  components: { NavigationBottom, NavigationHeader },

  setup(){
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    }
  }
};
</script>
