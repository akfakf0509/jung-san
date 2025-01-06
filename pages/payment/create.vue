<script setup lang="ts">
import { number, object, string, type InferType } from "yup";

const createPaymentStore = useCreatePaymentStore();
const { name, unitPrice, count, price } = storeToRefs(createPaymentStore);

const schema = object({
  name: string().required(),
  unitPrice: number().required(),
  count: number().required(),
});
type Scheme = InferType<typeof schema>;

const state = reactive<Scheme>({
  name: "",
  unitPrice: 1000,
  count: 1,
});

function handleSubmit() {
  // TODO: 결제 항목 생성
}
</script>

<template>
  <UContainer as="main" class="flex flex-col items-start gap-4 min-h-full p-10">
    <p class="text-3xl font-extrabold">새로운 결제 생성</p>
    <UForm
      :schema="schema"
      :state="state"
      class="flex flex-col gap-4 w-full"
      @submit="handleSubmit"
    >
      <UFormGroup label="이름" name="name">
        <UInput v-model="state.name" placeholder="새로운 결제" />
      </UFormGroup>
      <UFormGroup label="단가" name="unitPrice">
        <PriceInput v-model="state.unitPrice" />
      </UFormGroup>
      <UFormGroup label="수량" name="count">
        <UInput v-model="state.count" />
      </UFormGroup>
      <UButton label="생성하기" type="submit" class="self-start" />
    </UForm>
  </UContainer>
</template>
