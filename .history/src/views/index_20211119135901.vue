<template>
  <div class="home">Sheeh</div>
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const {} = getUser()
  }
}
</script>