<script setup lang="ts">
const store = useStore();
const { members } = storeToRefs(store);

function handleDelete(index: number) {
  members.value.splice(index, 1);
}
</script>

<template>
  <ul class="flex flex-col gap-2">
    <UCard as="li" v-for="(member, index) in members">
      <template #header>
        {{ member }}
      </template>
      <template #footer>
        <UButton label="삭제" @click="handleDelete(index)" />
      </template>
    </UCard>
  </ul>
</template>
