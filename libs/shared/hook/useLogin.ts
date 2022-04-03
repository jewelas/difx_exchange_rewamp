import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getPairs } from '../api/useGetPairs'
import { PairType } from '../type/Pair'
import React, {useState, useEffect} from 'react';
import { useLogin } from '../api/useLogin';


export interface UseLoginProps { }

export function useGetPairs(props?: UseLoginProps) {
    const query = useQuery<PairType[], AxiosError>(
        'useLogin',
        async () => {
            const res = await useLogin();
            const data:PairType[] = res.data;
            if(data) return data;
            throw new Error('no-data');
        },
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          }
    );
    return query;
}