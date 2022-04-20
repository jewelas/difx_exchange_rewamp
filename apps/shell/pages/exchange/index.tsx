import { DEFAULT_PAIR } from './../../constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export function ExchangeDefault() {
    const router = useRouter();
    useEffect(()=>{
        router.push(`/exchange/${DEFAULT_PAIR}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
}

export default ExchangeDefault;