<template>
  <slot />
  <navigation-bottom />
</template>

<script>
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/Na"
export default {
  components: { NavigationBottom },
};
</script>
