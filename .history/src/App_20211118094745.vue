<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { useRoute }
export default {
  setup() {
    console.log()
    return {
      layout
    }
  }
};
</script>
