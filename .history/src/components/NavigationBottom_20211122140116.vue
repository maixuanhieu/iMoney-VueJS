<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
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
      {
        icon: "t2ico-chart",
        text: "Report",
        name: "Home",
      },
      {
        icon: "t2ico-presentation",
        text: "Budget",
        name: "Home",
      },
      {
        icon: "t2ico-profile",
        text: "Profile",
        name: "Profile",
      },
    ]);
    return { navItems };
  },
};
</script>

<style lang="css" scoped>
footer#footer::before {
  @apply absolute;

  content: "";
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

footer#footer::after {
  @apply absolute flex items-center just;
  @apply bg-primary;

  content: "\e921";
  font-family: "t2ico";
}
</style>
