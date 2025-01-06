import type { Payment } from "~/types";

export const useCreateReceiptStore = defineStore("create-receipt", () => {
  const title = ref("");
  const date = ref(new Date());
  const amount = ref(0);
  const payments = ref<Payment[]>([]);

  return { title, date, amount, payments };
});
