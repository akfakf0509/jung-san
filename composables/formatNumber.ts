export function formatNumber(number: number) {
  return Intl.NumberFormat("ko-KR").format(number);
}
