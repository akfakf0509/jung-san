<script setup lang="ts">
import { format } from "date-fns";
import { date, object, string, type InferType } from "yup";

const schema = object({
  title: string().required(),
  date: date().required(),
});
type Scheme = InferType<typeof schema>;

const state = reactive<Scheme>({
  title: "",
  date: new Date(),
});

function handleSubmit() {}
</script>

<template>
  <UContainer as="main" class="flex flex-col items-start gap-4 min-h-full p-10">
    <p class="text-3xl font-extrabold">새로운 영수증 생성</p>
    <UForm
      :schema
      :state
      class="flex flex-col gap-4 w-full"
      @submit="handleSubmit"
    >
      <UFormGroup label="제목" class="w-full">
        <UInput v-model="state.title" placeholder="새로운 영수증" />
      </UFormGroup>
      <UFormGroup label="날짜" class="w-full">
        <UPopover :popper="{ placement: 'bottom-start' }">
          <UButton
            icon="i-heroicons-calendar-days-20-solid"
            :label="format(state.date, 'yyyy-MM-dd')"
          />
          <template #panel="{ close }">
            <DatePicker v-model="state.date" is-required @close="close" />
          </template>
        </UPopover>
      </UFormGroup>
      <UButton
        label="새로운 영수증 생성하기"
        type="submit"
        class="self-start"
      />
    </UForm>
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
