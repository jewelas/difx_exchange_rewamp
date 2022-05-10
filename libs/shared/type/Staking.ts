export interface Staking {
  amount_cap: number;
  apy: number;
  coin: string;
  end_date: string;
  id: number;
  max_amount: number;
  min_amount: number;
  payout_in: string;
  payout_type: string;
  period: number[];
  start_date: string;
}
