import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { verifyIp } from "../api/verifyIp";
import { VerifyIpRequest, VerifyIpResponse } from "../type/VerifyIp";

interface Props {
  onSuccess: (response: AxiosResponse<VerifyIpResponse>) => void;
  onError: (error: AxiosError) => void;
}

export function useVerifyIp({ onSuccess, onError }: Props) {
  const mutation = useMutation(
    (request: VerifyIpRequest) => {
      return verifyIp(request);
    },
    {
      onSuccess: (response: AxiosResponse<VerifyIpResponse>) => {
        onSuccess && onSuccess(response);
      },
      onError: (error: AxiosError) => {
        onError(error as AxiosError);
      },
    }
  );
  return mutation;
}
