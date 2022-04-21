import { AxiosResponse } from "axios";
import { SignUpRequest, SignUpResponse } from "../type/SignUp";
import { axiosInstance as instance } from "./index";

export function signUp(request: SignUpRequest) {
  return instance.post<SignUpRequest, AxiosResponse<SignUpResponse>>(
    "/api/v1/auth/sign-up",
    request
  );
}
