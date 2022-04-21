import { OrderBook } from "@difx/core-ui";
import { useSocket, useSocketProps, useNetwork } from "@difx/shared";
import isEmpty from 'lodash/isEmpty';
import { useEffect, useState } from "react";

/* eslint-disable-next-line */
export interface OrderBookWrapperProps {
    pair?: string | string[];
}

export function OrderBookWrapper({pair}: OrderBookWrapperProps) {
    const [bids, setBids] = useState([]);
    const [asks, setAsks] = useState([]);

    const [currentPrice, setCurrentPrice] = useState(0.00);
    const [priceTrend, setPriceTrend] = useState<string | undefined>();

    const { effectiveType, online } = useNetwork();

    const param: useSocketProps = {pair, event:'orderbook_limited'};
    const data = useSocket(param);
    useEffect(()=>{
        if(data){
            setBids(data.bids);
            setAsks(data.asks)
        }
    }, [data]);

    useEffect(() => {
        if (asks && bids && !isEmpty(asks) && !isEmpty(bids)) {
            const newPrice = Number(((asks[asks.length - 1][0] + bids[0][0]) / 2).toFixed(1));
            setCurrentPrice(newPrice);
            if (currentPrice < newPrice) setPriceTrend('bid');
            else if (currentPrice > newPrice) setPriceTrend('ask');
            else setPriceTrend('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [asks, bids]);

    return (
        <OrderBook networkStatus={online ? effectiveType : 'off'} priceTrend={priceTrend} currentPrice={currentPrice} bids={bids} asks={asks} />
    );
}

export default OrderBookWrapper;
