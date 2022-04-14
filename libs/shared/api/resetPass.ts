import { AxiosResponse } from 'axios';
import { ResetPassRequest, ResetPassResponse } from '../type/ResetPass';
import { axiosInstance as instance } from './index';

export function resetPass(request: ResetPassRequest) {
    return instance.post<ResetPassRequest, AxiosResponse<ResetPassResponse>>('/api/v1/password/reset', request);
}