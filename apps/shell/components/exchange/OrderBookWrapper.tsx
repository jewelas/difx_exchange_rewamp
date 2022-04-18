import { OrderBook } from "@difx/core-ui";
import { socket } from "@difx/shared";
import { useEffect, useState } from "react";

/* eslint-disable-next-line */
export interface OrderBookWrapperProps {
}

export function OrderBookWrapper() {
    const [bids, setBids] = useState([]);
    const [asks, setAsks] = useState([]);

    useEffect(() => {
        socket.listen('orderbook_limited', data => {
            setBids(data.bids);
            setAsks(data.asks);
            console.log(data)
        });
        return ()=>{
            socket.off('orderbook_limited');
        }
    }, []);

    return (
        <OrderBook bids={bids} asks={asks} />
    );
}

export default OrderBookWrapper;
