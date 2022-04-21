import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { twoFactor } from "../api/twoFactor";
import { TwoFactorRequest, TwoFactorResponse } from "../type/TwoFactor";

interface Props {
  onSuccess: (response: AxiosResponse<TwoFactorResponse>) => void;
  onError: (error: AxiosError) => void;
}

export function useTwoFactor({ onSuccess, onError }: Props) {
  const mutation = useMutation(
    (request: TwoFactorRequest) => {
      return twoFactor(request);
    },
    {
      onSuccess: (response: AxiosResponse<TwoFactorResponse>) => {
        onSuccess && onSuccess(response);
      },
      onError: (error: AxiosError) => {
        onError(error as AxiosError);
      },
    }
  );
  return mutation;
}
