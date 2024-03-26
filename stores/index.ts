import type { BillPart, Member } from "~/types";

export const useStore = defineStore("index", () => {
  const members = ref<Member[]>([]);

  const billParts = ref<BillPart[]>([]);

  return { members, billParts };
});
