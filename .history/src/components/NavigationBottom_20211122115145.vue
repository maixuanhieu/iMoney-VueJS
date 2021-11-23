<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to>
            <i class="t2ico t2ico-category text-2xl"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const navItems = reactive([
      {
        icon: "t2ico-category",
        text: "Home",
        name: "Home",
      },
    ]);
    return { navItems };
  },
};
</script>
