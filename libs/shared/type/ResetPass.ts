import { BaseResponse } from "./Base";

export interface ResetPassRequest {
  email: string;
  activationcode: string;
  password: string;
  rpassword: string;
}

export interface ResetPassResponse extends BaseResponse {
  statusCode: string;
  statusText: string;
}
