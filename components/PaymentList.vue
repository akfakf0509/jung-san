<script setup lang="ts">
const { payments } = storeToRefs(useStore());

const DIVISION_OPTIONS = [
  { label: "공평하게", value: "fairly" },
  { label: "평등하게", value: "equally" },
  { label: "커스텀", value: "custom" },
];
const divisionOption = ref(DIVISION_OPTIONS[0].value);

function handleDelete(index: number) {
  payments.value.splice(index, 1);
}
</script>

<template>
  <ul class="flex flex-col gap-2">
    <UCard v-for="(payment, index) in payments">
      <template #header>
        {{ payment.name }}
      </template>
      <div>
        <USelect
          v-model="divisionOption"
          :options="DIVISION_OPTIONS"
          option-attribute="label"
        />
        <p>{{ formatNumber(payment.price) }}원</p>
      </div>
      <template #footer>
        <UButton label="삭제" @click="handleDelete(index)" />
      </template>
    </UCard>
  </ul>
</template>
