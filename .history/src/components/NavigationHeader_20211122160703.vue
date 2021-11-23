<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div v class="w-10 h-10 overflow-hidden rounded-full">
            <img
              class="w-full h-auto object-cover"
              src="https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-avatar-de-thuong-cute.jpg"
              size="sm"
              alt="User's Profile Avatar"
            />
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">Hey, Xuan Hieu</h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <i class="t2ico t2ico-notification text-2xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup(){
  const route = useRoute();

    return {
      meta: computed(() => route.meta),
    };
  },
}
</script>
