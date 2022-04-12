import { AxiosError, AxiosResponse } from 'axios';
import { useQuery, useMutation } from 'react-query';
import { updateToken } from '../api/updateToken';
import { UpdateTokenRequest, UpdateTokenResponse } from '../type/UpdateToken';

interface Props {
    onSuccess: (
        response: AxiosResponse<UpdateTokenResponse>,
    ) => void;
}

export function useUpdateToken({ onSuccess }: Props) {
    const mutation = useMutation(
        (request: UpdateTokenRequest) => { return updateToken(request) },
        {
            onSuccess: (
                response: AxiosResponse<UpdateTokenResponse>,
            ) => {
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                currentUser.token = response.data.token;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                onSuccess && onSuccess(response);
            },
            onError: (error: AxiosError) => {
                console.log('error', error)
            },
        }
    );
    return mutation;
}