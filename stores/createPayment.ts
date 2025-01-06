export const useCreatePaymentStore = defineStore("create-payment", () => {
  const name = ref("");
  const unitPrice = ref(0);
  const count = ref(1);
  const price = computed(() => unitPrice.value * count.value);

  return { name, unitPrice, count, price };
});
