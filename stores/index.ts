import type { BillPart, Member } from "~/types";

export const useStore = defineStore("index", () => {
  const title = ref("");

  const members = ref<Member[]>([]);

  const billParts = ref<BillPart[]>([]);

  return { title, members, billParts };
});
