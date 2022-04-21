import { OrderBook } from "@difx/core-ui";
import { useNetwork, useSocket, useSocketProps } from "@difx/shared";

/* eslint-disable-next-line */
export interface OrderBookWrapperProps {
    pair?: string;
}

export function OrderBookWrapper({ pair }: OrderBookWrapperProps) {
    let bids = [];
    let asks = [];

    let currentPrice = 0.0;
    let priceTrend = null;

    const { effectiveType, online } = useNetwork();

    const param: useSocketProps = { pair, event: "orderbook_limited" };
    const data = useSocket(param);
    if (data) {
        const { bids: _bids, asks: _asks } = data;
        bids = _bids;
        asks = _asks;
        const newPrice = Number(
            ((asks[asks.length - 1][0] + bids[0][0]) / 2).toFixed(1)
        );
        if (currentPrice < newPrice) priceTrend = "bid";
        else if (currentPrice > newPrice) priceTrend = "ask";
        else priceTrend = null;
        currentPrice = newPrice;
    }

    return (
        <OrderBook
            networkStatus={online ? effectiveType : "off"}
            priceTrend={priceTrend}
            currentPrice={currentPrice}
            bids={bids}
            asks={asks}
        />
    );
}

export default OrderBookWrapper;
