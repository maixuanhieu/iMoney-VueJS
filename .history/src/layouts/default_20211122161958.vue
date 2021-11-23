<template>
  <navigation-header />

  <slot />
  <navigation-bottom />
</template>

<script>
import { useRoute } fro
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
export default {
  components: { NavigationBottom, NavigationHeader },

  setup(){
    return {

    }
  }
};
</script>
