<template>
  <div class="home">Sheeh</div>
  <div class="mt-6">{{ user.d}}</div>
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