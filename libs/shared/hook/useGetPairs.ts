import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getPairs } from '../api/pairs';
import { PairType } from '../type/Pair';

export interface UseGetPairsProps {
}

export function useGetPairs(isCheckStatus?: boolean) {
    const query = useQuery<PairType[], AxiosError>(
        'useGetPairs',
        async () => {
            const res = await getPairs();
            const data: PairType[] | any = res.data;

            if (data) {
                return data;
            }
            throw new Error('no-data');
        },
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );
    return query;
}