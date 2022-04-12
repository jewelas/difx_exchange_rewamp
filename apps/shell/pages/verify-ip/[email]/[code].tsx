
import { useVerifyIp, VerifyIpRequest, VerifyIpResponse } from '@difx/shared';
import { AxiosError, AxiosResponse } from 'axios';
import t from '@difx/locale';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import AppLayout from '../..';
import { showNotification } from './../../../utils/pageUtils';

export function VerifyIpPage() {

  const router = useRouter();
  const { email, code } = router.query;

  const onSuccess =
    (
      response: AxiosResponse<VerifyIpResponse>
    ) => {
      const { data } = response;
      const { statusText } = data;
      showNotification('success', t('signin.ip_verification'), statusText);
      router.push('/login');
    }

  const onError = useCallback(
    (
      error: AxiosError
    ) => {
      const { response } = error;
      const { statusText } = response.data;
      showNotification('error', t('signin.ip_verification'), statusText);
    }, []
  );

  const { mutate: verifyIp } = useVerifyIp({ onSuccess, onError });

  useEffect(() => {
    if (email && code) {

      console.log(email, code)

      const request: VerifyIpRequest = {
        email: email.toString(), activationCode: code.toString()
      }

      verifyIp(request);
    }

  }, [email, code, verifyIp]);

  return (
    <AppLayout ghost>.</AppLayout>
  );
}

export default VerifyIpPage;
