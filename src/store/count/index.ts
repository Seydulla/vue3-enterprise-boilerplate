import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCountStore = defineStore("count", {
  state: () => {
    return {
      count: useStorage("count", 0),
    };
  },

  getters: {
    getCount(state): number {
      return state.count;
    },
  },

  actions: {
    increment() {
      this.count = this.count + 1;
    },
  },
});
