import axios, { AxiosResponse } from 'axios';
import { PairType } from '../type/Pair';
import instance from './index';

export function getToken() {
    return instance.post<null, AxiosResponse<string[]>>('https://recaptcha.net/recaptcha/api2/reload?k=6Lc_bTocAAAAAEdBFuwabJr5of-6kdhfZW4aag3E');
}