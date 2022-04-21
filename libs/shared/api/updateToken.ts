import { AxiosResponse } from "axios";
import { UpdateTokenRequest, UpdateTokenResponse } from "../type/UpdateToken";
import { axiosInstance as instance } from "./index";

export function updateToken(request: UpdateTokenRequest) {
  let token = { headers: { "x-access-token": request.token } };
  return instance.post<UpdateTokenRequest, AxiosResponse<UpdateTokenResponse>>(
    "/api/v1/auth/update-token",
    {},
    token
  );
}
