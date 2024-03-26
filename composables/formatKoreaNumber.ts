const UNITS = ["만", "억", "조", "경", "해", "자", "양", "구", "간"] as const;
export function formatKoreaNumber(number: number) {
  let result = "";
  let value = number;
  let index = -1;
  const limit = UNITS.length - 1;
  while (value) {
    const n = value % 10000;
    if (n) {
      const formatted = formatNumber(n);
      if (index < 0) result = formatted;
      else {
        if (!result) result = formatted + UNITS[index];
        else result = `${formatted}${UNITS[index]} ` + result;
      }
    }

    value = Math.floor(value / 10000);
    index++;
    if (index >= limit) break;
  }
  return result || "0";
}
