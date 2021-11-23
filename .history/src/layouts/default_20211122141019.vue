<template>
  <slot />
  <navigation-bottom />
</template>

<script>
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader
export default {
  components: { NavigationBottom },
};
</script>
