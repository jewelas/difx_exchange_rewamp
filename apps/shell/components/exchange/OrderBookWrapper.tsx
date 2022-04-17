import { Typography, OrderBook, SortType } from "@difx/core-ui";
import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import AppLayout from '..';
import { PageStyled } from './styled';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

/* eslint-disable-next-line */
export interface OrderBookWrapperProps { }

export function OrderBookWrapper(props: OrderBookWrapperProps) {
    const [sortType, setSortType] = useState<SortType>('all')
    return (
        <OrderBook sortType={sortType} onChangeSort={(type) => { setSortType(type) }} />
    );
}

export default OrderBookWrapper;
