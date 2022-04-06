import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getCountryCode } from '../api/country';


export function useGetCountry() {
    const query = useQuery<string, AxiosError>(
        'useGetCountry',
        async () => {
            const res = await getCountryCode();
            const data:string = res.data;
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