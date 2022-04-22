export function getAveragePrice(
  askLowPrice: number,
  bidHighPrice: number,
  precision = 1
): number {
  return Number(((askLowPrice + bidHighPrice) / 2).toFixed(precision));
}

export function getTrendPrice(
  previousPrice: number,
  currentPrice: number
): string {
  if (previousPrice < currentPrice) return "bid";
  else if (previousPrice > currentPrice) return "ask";
  else return null;
}

export function getPricePercentChange(last: number, open: number): number {
  return ((last - open) / open) * 100;
}
