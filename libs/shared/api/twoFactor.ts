import { AxiosResponse } from "axios";
import { TwoFactorRequest, TwoFactorResponse } from "../type/TwoFactor";
import { axiosInstance as instance } from "./index";

export function twoFactor(request: TwoFactorRequest) {
  return instance.post<TwoFactorRequest, AxiosResponse<TwoFactorResponse>>(
    "/api/v1/auth/twofa-login",
    request
  );
}
