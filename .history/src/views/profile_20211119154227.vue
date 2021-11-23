<template>
  <!-- Start: Info -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-avatar-de-thuong-cute.jpg"
            alt="User's Profile Avatar"
            size="xs"
          />
        </div>

        <div class="font-bold text-2xl text-primary mt-3">Mon Pham</div>
        <p class="font-semibold text-gray-400 mt-1">mon.pham@gmail.com</p>
      </div>
    </div>
  </div>

  <!-- Start: Menu -->
  <div class="row">
    <div class="container mx-auto px-10">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul class="last:text-red">
            <li v-for="profileOption in profileOptions" :key="profileOption.name">
              <router-link
                :to="profileOption.route"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>

                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const profileOptions = reactive([
      {
        name: "My Wallet",
        icon: "t2ico-wallet",
        route: {
          name: "Home",
          params: {},
        },
      },
       {
        name: "Tools",
        icon: "t2ico-ticket-star",
        route: {
          name: "Home",
          params: {},
        },
      },
       {
        name: "Privacy",
        icon: "t2ico-lock",
        route: {
          name: "Home",
          params: {},
        },
      },
       {
        name: "About",
        icon: "t2ico-info-square",
        route: {
          name: "Home",
          params: {},
        },
      },
       {
        name: "Logout",
        icon: "t2ico-logout",
        route: {
          name: "Home",
          params: {},
        },
      },
    ]);

    return { profileOptions };
  },
};
</script>
