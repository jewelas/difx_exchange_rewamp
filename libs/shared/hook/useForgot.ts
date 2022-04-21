import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { forgot } from "../api/forgot";
import { ForgotRequest, ForgotResponse } from "../type/Forgot";

interface Props {
  onSuccess: (response: AxiosResponse<ForgotResponse>) => void;
  onError: (error: AxiosError) => void;
}

export function useForgot({ onSuccess, onError }: Props) {
  const mutation = useMutation(
    (request: ForgotRequest) => {
      return forgot(request);
    },
    {
      onSuccess: (response: AxiosResponse<ForgotResponse>) => {
        onSuccess && onSuccess(response);
      },
      onError: (error: AxiosError) => {
        onError(error as AxiosError);
      },
    }
  );
  return mutation;
}
