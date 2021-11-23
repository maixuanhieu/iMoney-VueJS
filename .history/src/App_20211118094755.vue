<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { useRoute } from "vue-router"
export default {
  setup() {
    console.log()
    return {
      layout
    }
  }
};
</script>
