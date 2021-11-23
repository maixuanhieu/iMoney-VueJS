<template>
  <form @submit.prevent="onSubmit">
      <div class="row mt-8">
          <div class="bg-white rounded-lg py-4">
              Xuanhieu
          </div>
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
