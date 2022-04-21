import { BaseResponse } from "./Base";

export interface VerifyIpRequest {
  email: string;
  activationCode: string;
}

export interface VerifyIpResponse extends BaseResponse {}
