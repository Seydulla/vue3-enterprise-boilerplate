<script lang="ts" setup>
import { useCountStore } from "@/store/count";
import { toRefs } from "vue";

const countStore = useCountStore();

const { count, increment } = toRefs(countStore);
</script>

<template>
  <h1>Home</h1>
  <span>
    {{ count }}
  </span>
  <button @click="increment">Increment</button>
</template>
