<!-- <script setup lang="ts">
const memberAddModalOpened = ref(false);
const paymentItemAddModalOpened = ref(false);
</script>

<template>
  <UContainer as="main" class="py-10">
    <div class="flex gap-1">
      <UButton label="인원 추가" @click="memberAddModalOpened = true" />
      <UButton
        label="결제 항목 추가"
        @click="paymentItemAddModalOpened = true"
      />
    </div>
    <ResultTable />

    <MemberAddModal v-model:opened="memberAddModalOpened" />
    <PaymentItemAddModal v-model:opened="paymentItemAddModalOpened" />
  </UContainer>
</template> -->

<template>
  <NuxtPage />
</template>

<style lang="css">
html,
body,
#__nuxt {
  height: 100%;
}
</style>
