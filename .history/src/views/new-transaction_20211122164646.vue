<template>
  <form @submit.prevent="onSubmit">
      <div class="row mt-8">
          <div class="bg-white rou"></div>
      </div>
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
