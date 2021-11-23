import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import './assets/styles/tailwind.css';
import './assets/styles/global.css';

const app = createApp(App)

app.use(router).mount("#app");
