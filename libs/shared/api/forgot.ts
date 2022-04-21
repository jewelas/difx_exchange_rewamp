import { AxiosResponse } from "axios";
import { ForgotRequest, ForgotResponse } from "../type/Forgot";
import { axiosInstance as instance } from "./index";

export function forgot(request: ForgotRequest) {
  return instance.post<ForgotRequest, AxiosResponse<ForgotResponse>>(
    "/api/v1/password/forgot",
    request
  );
}
