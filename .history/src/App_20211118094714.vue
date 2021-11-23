<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
export default {
  setup() {
    console.log()
    return {
      layout
    }
  }
};
</script>
