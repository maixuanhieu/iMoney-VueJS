import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth"))
  );

  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth"))
  );
}
