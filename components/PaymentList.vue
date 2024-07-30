<script setup lang="ts">
const { payments } = storeToRefs(useStore());
</script>

<template>
  <ul class="flex flex-col gap-2">
    <UCard v-for="payment in payments">
      <template #header>
        {{ payment.name }}
      </template>
      <div>
        <p>{{ formatNumber(payment.price) }}원</p>
      </div>
    </UCard>
  </ul>
</template>
