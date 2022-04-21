import { useEffect, useState } from 'react';
import { socket } from './../api/index';

export function useSocket(pair: string | string[]) {
    const [state, setState] = useState(null);

    useEffect(() => {
        if (pair) {
            socket.send('leave', pair);
            socket.send('join', pair);
            socket.listen('orderbook_limited', data => {
                setState(data);
            });
        }
    }, [pair])
    return state;
}