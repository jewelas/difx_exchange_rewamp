import { BaseResponse } from "./Base";

export interface TwoFactorRequest {
  code: string;
  session_id: string;
}

export interface TwoFactorResponse extends BaseResponse {
  data: any
  message: string
  timestamp: string
}
