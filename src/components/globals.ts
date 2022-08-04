// Globally register Base Components
import type { Plugin } from "vue";
import BaseButton from "@/components/base/base-button.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BaseButton: typeof BaseButton;
  }
}

const plugin: Plugin = {
  install(app) {
    app.component("BaseButton", BaseButton);
  },
};

export default plugin;
