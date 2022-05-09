export interface Order {
  id: string
  mfee: number;
  p: number; // Price
  q: number; // Quantity
  side: number;
  s: number; // s=1 : sell, s!=1 : buy
  symbol: string;
  tfee: number;
  timestamp: string;

  amount: number;
  limit: number;
  stop: number;
  usetokens: true
}