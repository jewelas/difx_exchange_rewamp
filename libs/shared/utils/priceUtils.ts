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
): string | null {
  if (previousPrice < currentPrice) return "bid";
  else if (previousPrice > currentPrice) return "ask";
  else return null;
}

export function getPricePercentChange(last: number, open: number): number {
  const result = ((last - open) / open) * 100;
  return isNaN(result) ? 0 : result;
}

export function getPriceFormatted(price: number, precision: number): string {
  if (isNaN(price)) return "0.00";
  return price.toLocaleString("en-us", {
    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
  });
}
