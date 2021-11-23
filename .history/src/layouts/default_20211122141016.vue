<template>
  <slot />
  <navigation-bottom />
</template>

<script>
import NavigationBottom from "@/components/NavigationBottom.vue";
import Navigation
export default {
  components: { NavigationBottom },
};
</script>
