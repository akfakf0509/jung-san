export const useReceiptsStore = defineStore("receipts", () => {
  const receipts = useLocalStorage<Receipt[]>("jung-san:receipts", []);

  return { receipts };
});
