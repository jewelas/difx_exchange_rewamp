export interface Order {
  id: string
  mfee: number;
  p: number; // Price
  q: number; // Quantity
  s: number; // s=1 : sell, s!=1 : buy
  symbol: string;
  tfee: number;
  timestamp: string;
}