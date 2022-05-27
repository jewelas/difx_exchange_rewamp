import { useHttpPost, VerifyIpRequest, VerifyIpResponse } from "@difx/shared";
import { showSuccess } from "@difx/core-ui";
import { AxiosError, AxiosResponse } from "axios";
import t from "@difx/locale";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import AppLayout from "../../index.page";
import { API_ENDPOINT } from "@difx/constants";

export function VerifyIpPage() {
  const router = useRouter();
  const { email, code } = router.query;

  const onSuccess = (response: AxiosResponse<VerifyIpResponse>) => {
    const { data } = response;
    const { statusText } = data;
    showSuccess(t("signin.ip_verification"), statusText);
    router.push("/login");
  };

  const onError = useCallback((error: AxiosError) => {
    const { response } = error;
    const { statusText } = response.data;
    showSuccess(t("signin.ip_verification"), statusText);
  }, []);

  const { mutate: verifyIp } = useHttpPost<VerifyIpRequest, VerifyIpResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.VERIFY_IP });

  useEffect(() => {
    if (email && code) {
      const request: VerifyIpRequest = {
        email: email.toString(),
        code: code.toString(),
      };

      verifyIp(request);
    }
  }, [email, code, verifyIp]);

  return <AppLayout><div></div></AppLayout>;
}

export default VerifyIpPage;
