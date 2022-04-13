import { AxiosResponse } from 'axios';
import { VerifyIpRequest, VerifyIpResponse } from '../type/VerifyIp';
import { axiosInstance as instance } from './index';

export function verifyIp(request: VerifyIpRequest) {
    return instance.post<VerifyIpRequest, AxiosResponse<VerifyIpResponse>>('/api/v1/auth/verify-ip', request);
}