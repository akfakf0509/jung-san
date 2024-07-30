<script setup lang="ts">
const { members } = storeToRefs(useStore());

const state = reactive({
  name: "",
});
function add() {
  members.value.push(state.name);
  state.name = "";
}
</script>

<template>
  <UForm :state class="flex flex-col gap-2" @submit="add()">
    <UFormGroup label="새로운 인원 이름">
      <UInput v-model="state.name" class="flex-grow" />
    </UFormGroup>
    <UButton label="추가" type="submit" class="justify-center" />
  </UForm>
</template>
