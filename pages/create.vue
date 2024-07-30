<script setup lang="ts">
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
</template>
