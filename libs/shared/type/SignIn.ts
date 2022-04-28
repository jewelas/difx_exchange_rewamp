import { BaseResponse } from "./Base";
import { User } from "./User";
export interface SignInRequest {
  dial_code?: string;
  phonenumber?: string;
  email?: string;
  password: string;
  usertype: "IND" | "BUS";
  captcha: string;
  captcha_type: string;
  device_token: string;
  device: string
}

export interface SignInResponse extends User, BaseResponse {
  sessionId: string;
}
