import { BaseResponse } from "./Base";

export interface VerifyIpRequest {
  code: number
  email: string;
  phone?: string;
}

export interface VerifyIpResponse extends BaseResponse {
  data: string,
  message: string,
  timestamp: string
}
