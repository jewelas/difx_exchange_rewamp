import { AxiosResponse } from 'axios';
import { UserRequest, UserResponse} from '../type/User';
import instance from './index';

export function useLogin(userRequest: UserRequest) {
    return instance.post<UserRequest, AxiosResponse<UserResponse>>('/api/v1/auth/login', userRequest);
}