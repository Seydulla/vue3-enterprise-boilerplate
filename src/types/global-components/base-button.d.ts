import BaseButton from "@/components/base/base-button.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BaseButton: typeof BaseButton;
  }
}
