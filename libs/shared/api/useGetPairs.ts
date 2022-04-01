import axios, { AxiosResponse } from 'axios';
import { PairType } from './../type/Pair';
import instance from './index';

export function getPairs() {
    return instance.get<null, AxiosResponse<PairType[]>>('/api/v1/pairs');
}