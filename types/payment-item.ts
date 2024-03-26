export type PaymentItem = PaymentEquityItem | PaymentEqualItem;
export interface PaymentItemBase {
  member: string[];
  name: string;
}
export interface PaymentEquityItem extends PaymentItemBase {
  price: number;
  type: "divide";
}
export interface PaymentEqualItem extends PaymentItemBase {
  price: number;
  type: "plus";
}
