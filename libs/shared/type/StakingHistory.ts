import { BaseRequest, BaseResponse } from "..";

export interface StakingHistoryResponse extends BaseResponse {
  active: boolean;
  amount: number;
  apy: number;
  coin: string;
  complete: boolean;
  duration: number
  end_date: string;
  id: string;
  start_date: string;
  type: string;

  payout_type: string;
  payout_in: string;
  staking_id: number;
  timestamp: string;
}
