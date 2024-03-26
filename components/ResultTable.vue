<script setup lang="ts">
import type { PaymentItem } from "~/types/payment-item";

const store = useStore();
const { members, paymentItems } = storeToRefs(store);

const columns = computed(() => {
  return [
    { key: "payment-item", label: "" },
    ...members.value.map((members) => ({
      key: members.name,
      label: members.name,
    })),
    { key: "total", label: "합계" },
  ];
});
const rawRows = computed(() => {
  const rows = paymentItems.value.map((paymentItem) => ({
    "payment-item": paymentItem.name,
    ...getCurrentRows(paymentItem),
    total: paymentItem.price,
  }));
  rows.push({
    "payment-item": "합계",
    ...members.value.reduce((acc, cur) => {
      acc[cur.name] = rows.reduce((rowAcc, rowCur) => {
        return rowAcc + (rowCur[cur.name] || 0);
      }, 0);
      return acc;
    }, {} as any),
    total: paymentItems.value.reduce(
      (acc, paymentItem) => acc + paymentItem.price,
      0
    ),
  });
  return rows;
});
const formattedRaws = computed(() => {
  return rawRows.value.map((rawRow) => {
    const newRow = {} as any;
    Object.entries(rawRow).forEach(([key, value]) => {
      newRow[key] =
        typeof value === "number" ? `${formatKoreaNumber(value)}원` : value;
    });
    return newRow;
  });
});

const GETTER_MAP = {
  divide: getCurrentRowsDivide,
  plus: getCurrentRowsPlus,
};
function getCurrentRows(paymentItem: PaymentItem) {
  return GETTER_MAP[paymentItem.type](paymentItem);
}
function getCurrentRowsDivide(paymentItem: PaymentItem) {
  const memberCount = members.value.length;
  const pricePerMember = paymentItem.price / memberCount;
  return members.value.reduce((acc, member) => {
    acc[member.name] = pricePerMember;
    return acc;
  }, {} as any);
}
function getCurrentRowsPlus(paymentItem: PaymentItem) {
  return members.value.reduce((acc, member) => {
    acc[member.name] = paymentItem.price;
    return acc;
  }, {} as any);
}
</script>

<template>
  <UTable :columns="columns" :rows="formattedRaws" />
</template>
