import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getPairs } from './../api/useGetPairs'
import { PairType } from '../type/Pair'
import React, {useState, useEffect} from 'react';


export interface GetPairsResponse {
    error?: string;
    pairs?: Array<Array<any>>;
}

export interface UseGetPairsProps { }

export function useGetPairs(props?: UseGetPairsProps) {
    const query = useQuery<PairType[], AxiosError>(
        'useGetPairs',
        async () => {
            const res = await getPairs();
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