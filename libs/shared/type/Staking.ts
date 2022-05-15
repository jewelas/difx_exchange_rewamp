export interface StakingDetail {
  id: number;
  st_config_id:number;
  amount_cap: number;
  apy: number;
  end_date: string;
  max_amount: number;
  min_amount: number;
  payout_in: string;
  payout_type: string;
  period: number;
  start_date: string;
}
export interface Staking {
  id: number;
  coin: string;
  st_conf_detail: Array<StakingDetail>
}
