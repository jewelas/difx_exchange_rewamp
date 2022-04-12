import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { signUp } from '../api/signUp';
import { SignUpRequest, SignUpResponse } from '../type/SignUp';

interface Props {
    onSuccess: (
        response: AxiosResponse<SignUpResponse>,
    ) => void;
    onError: (error: AxiosError) => void;
}

export function useSignUp({ onSuccess, onError }: Props) {
    const mutation = useMutation(
        (request: SignUpRequest) => { return signUp(request) },
        {
            onSuccess: (
                response: AxiosResponse<SignUpResponse>,
            ) => {
                onSuccess && onSuccess(response);
            },
            onError: (error: AxiosError) => {
                onError(error as AxiosError);
            },
        }
    );
    return mutation;
}