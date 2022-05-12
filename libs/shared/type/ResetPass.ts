import { BaseResponse } from "./Base";

export interface ResetPassRequest {
  email?: string;
  phoneNumber?: string;
  token: string;
  password: string;
  repeat_password: string;
}

export interface ResetPassResponse extends BaseResponse {
  statusCode: string;
  statusText: string;
}
