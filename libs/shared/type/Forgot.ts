import { BaseResponse } from "./Base";
import { CaptchaType } from ".."

export interface ForgotRequest {
  dial_code?: number;
  phonenumber: string;
  email: string;
  captcha: string | CaptchaType;
  captcha_type: string
}

export interface ForgotResponse extends BaseResponse {}
