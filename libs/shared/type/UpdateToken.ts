import { BaseResponse } from "./Base";

export interface UpdateTokenRequest {
  token: string;
}

export interface UpdateTokenResponse extends BaseResponse {
  token: string;
}
