import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import {getNetworkStatus} from './utils';
import { getPairs } from '../api/pairs'
import { PairType } from '../type/Pair'
import React, { useState, useEffect } from 'react';


export interface UseGetPairsProps {
}

export function useGetPairs(isCheckStatus?: boolean) {
    const query = useQuery<PairType[], AxiosError>(
        'useGetPairs',
        async () => {
            const timeBeforeCall = new Date().getTime();
            const res = await getPairs();
            const timeAfterCall = new Date().getTime();
            const data: PairType[] | any = res.data;

            if (data) {
                if(isCheckStatus){
                    const waitTime = timeAfterCall - timeBeforeCall;
                    const status = getNetworkStatus(waitTime);
                    data[0].networkStatus = status;
                }
                return data;
            }
            throw new Error('no-data');
        },
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchInterval: 3000,
        }
    );
    return query;
}