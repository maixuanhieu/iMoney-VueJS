<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { }
import { useRoute } from "vue-router"
export default {
  setup() {
    const route = useRoute();
    console.log(route)
    return {
      layout: "default",
    }
  }
};
</script>
