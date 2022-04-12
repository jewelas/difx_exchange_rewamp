import { AxiosResponse } from 'axios';
import { SignInRequest, SignInResponse } from '../type/SignIn';
import instance from './index';

export function signIn(request: SignInRequest) {
    return instance.post<SignInRequest, AxiosResponse<SignInResponse>>('/api/v1/auth/login', request);
}