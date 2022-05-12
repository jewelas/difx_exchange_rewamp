export interface PairType {
  categories: string[];
  networkStatus?: string;
  symbol: string;
  order: number;
  currency1: string;
  currency2: string;
  status: string;
  bamount: number;
  group_precision: number;
  high: number;
  highest_bid: number;
  last: number;
  liq: number;
  low: number;
  lowest_ask: number;
  mfee: number;
  open: number;
  pricing: number[];
  quote_volume: number;
  tags: string[];
  tfee: number;
  volume: number;
}
