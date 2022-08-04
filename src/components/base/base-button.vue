<script lang="ts">
export default {
  name: "BaseButton",
};
</script>

<script lang="ts" setup>
defineProps({
  color: {
    type: String,
    default: "primary",
  },
});
</script>

<template>
  <div class="w-full">
    <button
      v-bind="$attrs"
      class="py-2 w-full h-full bg-primary text-white border border-primary"
    >
      <slot></slot>
    </button>
  </div>
</template>
