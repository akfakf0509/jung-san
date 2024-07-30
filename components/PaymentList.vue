<script setup lang="ts">
const { payments } = storeToRefs(useStore());
</script>

<template>
  <ul>
    <li v-for="payment in payments">
      <p>이름: {{ payment.name }}</p>
      <p>가격: {{ payment.price }}</p>
    </li>
  </ul>
</template>
