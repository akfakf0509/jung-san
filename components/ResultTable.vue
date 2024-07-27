<script setup lang="ts">
const store = useStore();
const { members, billParts } = storeToRefs(store);

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
  const rows: {
    [key: string]: any;
  }[] = billParts.value.map((billPart) => ({
    "payment-item": billPart.name,
    ...members.value.reduce((acc, member) => {
      acc[member.name] = billPart.price;
      return acc;
    }, {} as Record<string, number>),
    total: billPart.price,
  }));
  rows.push({
    "payment-item": "합계",
    ...members.value.reduce((acc, member) => {
      acc[member.name] = rows.reduce((rowAcc, rowCur) => {
        return rowAcc + (rowCur[member.name] || 0);
      }, 0);
      return acc;
    }, {} as Record<string, number>),
    total: billParts.value.reduce((acc, billPart) => acc + billPart.price, 0),
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
</script>

<template>
  <UTable :columns="columns" :rows="formattedRaws" />
</template>
