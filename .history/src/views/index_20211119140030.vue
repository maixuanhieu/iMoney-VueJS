<template>
  <div class="home">Sheeh</div>
  <div class=""></div>
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();


    return { user };
  }
}
</script>