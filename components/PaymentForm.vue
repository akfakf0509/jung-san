<script setup lang="ts">
const { payments } = storeToRefs(useStore());

const state = reactive({
  name: "",
  price: 0,
});
function add() {
  payments.value.push({
    name: state.name,
    price: state.price,
  });
  state.name = "";
  state.price = 0;
}
</script>

<template>
  <UForm :state class="flex flex-col gap-2" @submit="add()">
    <UFormGroup label="이름">
      <UInput v-model="state.name" />
    </UFormGroup>
    <UFormGroup label="가격">
      <UInput v-model="state.price" type="number" step="100" />
    </UFormGroup>
    <UButton label="추가" type="submit" class="justify-center" />
  </UForm>
</template>
