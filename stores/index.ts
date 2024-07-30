import { type Payment, type BillPart, type Member } from "~/types";

export const useStore = defineStore("index", () => {
  const title = ref("");

  const members = ref<string[]>([]);
  const payments = ref<Payment[]>([]);

  const billParts = ref<BillPart[]>([]);

  return { title, members, payments, billParts };
});
