import { Select } from 'antd';
import clsx from 'clsx';
import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import OrderBuyIcon from './../Icon/OrderBuyIcon';
import OrderBuySellIcon from './../Icon/OrderBuySellIcon';
import OrderSellIcon from './../Icon/OrderSellIcon';
import { Typography } from './../Typography';
import { BidAskData, OnlyAskData, OnlyBidData } from './OrderBookBody';
import { ComponentStyled } from './styled';

/* eslint-disable-next-line */
export type SortType = 'all' | 'bid' | 'ask';
export interface OrderBookProps {
  bids?: Array<Array<number>>;
  asks?: Array<Array<number>>;
  priceTrend: string;
  currentPrice: number;
  networkStatus?: string;
}

export function OrderBook({priceTrend, currentPrice, bids, asks, networkStatus }: OrderBookProps) {

  const { Option } = Select;
  const [sortType, setSortType] = useState<SortType>('all');
  const [numberFormat, setNumberFormat] = useState('0.01');

  if (asks) {
    const maxValueOfAsks = Math.max(...asks.map((ask) => ask[1]), 0);
    if (asks.length > 0) {

      for (let i = 0; i < asks.length; i++) {
        asks[i].push((asks[i][1] / maxValueOfAsks) * 100);
      }
    }
  }

  if (bids) {
    const maxValueOfBids = Math.max(...bids.map((bid) => bid[1]), 0);
    if (bids.length > 0) {
      for (let i = 0; i < bids.length; i++) {
        bids[i].push((bids[i][1] / maxValueOfBids) * 100);
      }
    }
  }

  const renderTableBody = (type: SortType, format: string) => {
    if (!asks || !bids) return null;
    if (type === 'all') return <BidAskData networkStatus={networkStatus} priceTrend={priceTrend} currentPrice={currentPrice} bids={bids} asks={asks} numberFormat={numberFormat} />
    else if (type === 'ask') return <OnlyAskData networkStatus={networkStatus} priceTrend={priceTrend} currentPrice={currentPrice} asks={asks} numberFormat={numberFormat} />
    else if (type === 'bid') return <OnlyBidData networkStatus={networkStatus} priceTrend={priceTrend} currentPrice={currentPrice} bids={bids} numberFormat={numberFormat} />
    return null;
  }

  return (
    <ComponentStyled>
      <div className='com-title'>
        <Typography level="text">Order Book</Typography>
      </div>
      <div className="com-head">
        <div className='left'>
          <div onClick={() => { setSortType('all') }} className={clsx(sortType === 'all' && 'active')}>
            <OrderBuySellIcon useDarkMode />
          </div>
          <div onClick={() => { setSortType('bid') }} className={clsx(sortType === 'bid' && 'active')}>
            <OrderBuyIcon useDarkMode />
          </div>
          <div onClick={() => { setSortType('ask') }} className={clsx(sortType === 'ask' && 'active')}>
            <OrderSellIcon useDarkMode />
          </div>
        </div>
        <div className='right'>
          <Select defaultValue="0.01" style={{ width: 120 }} onChange={(v: string) => { setNumberFormat(v) }}>
            <Option value="0.01">0.01</Option>
            <Option value="0.1">0.1</Option>
            <Option value="1">1</Option>
            <Option value="10">10</Option>
          </Select>
        </div>
      </div>
      <div className="com-table-content">
        <div className='table-head'>
          <div><Typography level="text">Price(USDT)</Typography></div>
          <div><Typography level="text">Quantity(BTC)</Typography></div>
          <div><Typography level="text">Total</Typography></div>
        </div>
        {renderTableBody(sortType, numberFormat)}
      </div>
    </ComponentStyled>
  );
}