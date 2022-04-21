import { BaseResponse } from "./Base";
import { User } from "./User";
export interface SignUpRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  rpassword: string;
  phonenumber: string;
  dial_code: string;
  code?: string;
  agree: boolean;
  usertype: "IND" | "BUS";
  type: string;
}

export interface SignUpResponse extends User, BaseResponse {}
