<script lang="ts" setup>
defineProps<{
  label?: string;
}>();
</script>

<template>
  <button
    class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    <slot>{{ label }}</slot>
  </button>
</template>
