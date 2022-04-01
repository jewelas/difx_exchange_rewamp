import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: process.env.NX_API_URL
  });

export default instance;