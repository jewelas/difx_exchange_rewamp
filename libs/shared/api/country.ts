import axios, { AxiosResponse } from 'axios';
import { PairType } from '../type/Pair';
import instance from './index';

export function getCountryCode() {
    return instance.get<null, AxiosResponse<string>>('https://ip2c.org/s');
}