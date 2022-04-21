import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { signIn } from "../api/signIn";
import { SignInRequest, SignInResponse } from "../type/SignIn";

interface Props {
  onSuccess: (response: AxiosResponse<SignInResponse>) => void;
  onError: (error: AxiosError) => void;
}

export function useSignIn({ onSuccess, onError }: Props) {
  const mutation = useMutation(
    (request: SignInRequest) => {
      return signIn(request);
    },
    {
      onSuccess: (response: AxiosResponse<SignInResponse>) => {
        onSuccess && onSuccess(response);
      },
      onError: (error: AxiosError) => {
        onError(error as AxiosError);
      },
    }
  );
  return mutation;
}
