import type { Payment } from "~/types";

export const useReceiptStore = defineStore("receipt", () => {
  const id = ref(-1);
  const title = ref("");
  const date = ref(new Date());
  const amount = ref(0);
  const payments = ref<Payment[]>([]);

  return { id, title, date, amount, payments };
});
