<script setup lang="ts">
import { format } from "date-fns";

const receiptStore = useReceiptStore();
const { title, date } = storeToRefs(receiptStore);
</script>

<template>
  <UContainer as="main" class="flex flex-col items-start gap-4 min-h-full p-10">
    <p class="text-3xl font-extrabold">영수증 생성</p>
    <UFormGroup label="제목" class="w-full">
      <UInput v-model="title" placeholder="새로운 영수증" />
    </UFormGroup>
    <UFormGroup label="날짜" class="w-full">
      <UPopover :popper="{ placement: 'bottom-start' }">
        <UButton
          icon="i-heroicons-calendar-days-20-solid"
          :label="format(date, 'yyyy-MM-dd')"
        />
        <template #panel="{ close }">
          <DatePicker v-model="date" is-required @close="close" />
        </template>
      </UPopover>
    </UFormGroup>
    <UFormGroup label="항목">
      <UButton>새로운 항목 생성하기</UButton>
      <UButton>기존 항목 추가하기</UButton>
    </UFormGroup>
    <UButton label="새로운 영수증 생성하기" />
  </UContainer>
</template>

<!-- <script setup lang="ts">
const { title } = storeToRefs(useStore());
</script>

<template>
  <UContainer
    as="main"
    class="flex flex-col justify-center align-center gap-4 min-h-full p-10"
  >
    <UFormGroup label="제목">
      <UInput v-model="title" />
    </UFormGroup>
    <UDivider label="인원" />
    <MemberForm />
    <MemberList />
    <UDivider label="결제" />
    <PaymentForm />
    <PaymentList />
  </UContainer>
</template> -->
