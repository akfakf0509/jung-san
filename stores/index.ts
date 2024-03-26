import type { PaymentItem } from "~/types/payment-item";
import type { Member } from "~/types/member";

export const useStore = defineStore("index", () => {
  const members = ref<Member[]>([]);
  const paymentItems = ref<PaymentItem[]>([]);

  return { members, paymentItems };
});
