export type Receipt = {
  id: number;
  title: string;
  date: Date;
  amount: number;
  payments: Payment[];
};
export type Payment = {
  id: number;
  name: string;
  unitPrice: number;
  count: number;
  price: number;
};
