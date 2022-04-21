import { BaseResponse } from "./Base";

export interface ForgotRequest {
  dial_code: string;
  phonenumber: string;
  email: string;
}

export interface ForgotResponse extends BaseResponse {}
