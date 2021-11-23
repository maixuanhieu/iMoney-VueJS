<template>
  <h1>Logout Page</h1>
</template>

<script>
import { useLogout } from "@/composables/useLogout";
import { use}

export default {
  setup() {
    const { error, logout } = useLogout();

    async function onLogout(){
    await logout();
    if (!error.value)
  }
    return { error };
  },
};
</script>
