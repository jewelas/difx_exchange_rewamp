import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getToken } from '../api/captcha';


export function useGetCaptcha() {
    const query = useQuery<string[], AxiosError>(
        'useGetCaptcha',
        async () => {
            const res = await getToken();
            const data:string[] = res.data;
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