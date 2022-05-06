import { BaseResponse } from "./Base";
import { User } from "./User";

export type CaptchaType = {
  captcha_id: string;
  captcha_output: string;
  gen_time: string;
  lot_number: string;
  pass_token: string;
}
export interface SignInRequest {
  dial_code?: string;
  phonenumber?: string;
  email?: string;
  password: string;
  usertype: "IND" | "BUS";
  captcha: string | CaptchaType;
  captcha_type: string;
  device_token: string;
  device: string
}

export interface SignInResponse extends User, BaseResponse {
  data: any
  message: string
  timestamp: string
}
