import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { resetPass } from '../api/resetPass';
import { ResetPassRequest, ResetPassResponse } from '../type/ResetPass';

interface Props {
    onSuccess: (
        response: AxiosResponse<ResetPassResponse>,
    ) => void;
    onError: (error: AxiosError) => void;
}

export function useResetPass({ onSuccess, onError }: Props) {
    const mutation = useMutation(
        (request: ResetPassRequest) => { return resetPass(request) },
        {
            onSuccess: (
                response: AxiosResponse<ResetPassResponse>,
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