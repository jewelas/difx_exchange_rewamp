import { BaseResponse } from "./Base";
import { User } from "./User";
import { CaptchaType } from ".."

export interface SignUpRequest {
  email?: string,
  phonenumber?: string,
  dial_code?: string
  password: string,
  referral_code: string,
  type: string,
  captcha: string | CaptchaType,
  captcha_type: string
  country: string,
  device: string,
  device_token: string
}

export interface SignUpResponse extends User, BaseResponse {}
