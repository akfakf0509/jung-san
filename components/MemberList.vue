<script setup lang="ts">
const store = useStore();
const { members } = storeToRefs(store);

function handleDelete(index: number) {
  members.value.splice(index, 1);
}
</script>

<template>
  <ul class="flex flex-col gap-2">
    <li v-for="(member, index) in members" class="flex align-center">
      <span class="grow">{{ member }}</span>
      <UButton label="삭제" @click="handleDelete(index)" />
    </li>
  </ul>
</template>
