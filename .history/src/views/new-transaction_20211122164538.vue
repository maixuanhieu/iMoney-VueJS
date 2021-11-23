<template>
  <form @submit.prevent="onSubmit">
      <div class="row"></div>
  </form>
</template>

<script>
export default {
  setup() {
    function onSubmit() {}
    return {
      onSubmit,
    };
  },
};
</script>
