<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { useRoute } from "vue-router"
export default {
  setup() {
    const route
    console.log()
    return {
      layout
    }
  }
};
</script>
