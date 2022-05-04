import { Select } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { useAtom } from "jotai";

import { NetworkStatusType } from "./../../../shared/type/Network";
import OrderBuyIcon from "../Icon/OrderBuyIcon";
import OrderBuySellIcon from "../Icon/OrderBuySellIcon";
import OrderSellIcon from "../Icon/OrderSellIcon";
import { Typography } from "../Typography";
import { OrderData, CurrentPrice } from "./OrderBookBody";
import { ComponentStyled } from "./styled";
import { PairType, priceSelectedAtom } from "./../../../shared";

/* eslint-disable-next-line */
export type SortType = "all" | "bid" | "ask";
export interface OrderBookProps {
  pairInfo: PairType;
  bids?: Array<Array<number>>;
  asks?: Array<Array<number>>;
  priceTrend: string;
  currentPrice: number;
  networkStatus?: NetworkStatusType;
}

export function OrderBook({
  pairInfo,
  priceTrend,
  currentPrice,
  bids,
  asks,
  networkStatus,
}: OrderBookProps) {
  const { Option } = Select;
  const [sortType, setSortType] = useState<SortType>("all");
  const [numberFormat, setNumberFormat] = useState("0.01");

  const [, setPriceSelected] = useAtom(priceSelectedAtom);

  if (asks) {
    const maxValueOfAsks = Math.max(...asks.map((ask) => ask[1]), 0);
    if (asks.length > 0) {
      for (let i = 0; i < asks.length; i++) {
        const value = (asks[i][1] / maxValueOfAsks) * 100;
        if (asks[i].length >= 3) asks[i][2] = value;
        else asks[i].push(value);
      }
    }
  }

  if (bids) {
    const maxValueOfBids = Math.max(...bids.map((bid) => bid[1]), 0);
    if (bids.length > 0) {
      for (let i = 0; i < bids.length; i++) {
        const value = (bids[i][1] / maxValueOfBids) * 100;
        if (bids[i].length >= 3) bids[i][2] = value;
        else bids[i].push(value);
      }
    }
  }

  const BidComponent = ({ maxRow = 12 }: { maxRow?: number }) => (
    <OrderData
      type="bid"
      data={bids}
      numberFormat={numberFormat}
      onPriceSelected={setPriceSelected}
      priceOpenOrders={[]}
      maxRowData={maxRow}
    />
  )

  const AskComponent = ({ maxRow = 12 }: { maxRow?: number }) => (
    <OrderData
      type="ask"
      data={asks}
      numberFormat={numberFormat}
      onPriceSelected={setPriceSelected}
      priceOpenOrders={[]}
      maxRowData={maxRow}
    />
  )

  const CurrentPriceComponent = () => (
    <CurrentPrice
      networkStatus={networkStatus}
      priceTrend={priceTrend}
      currentPrice={currentPrice}
    />
  )

  const renderTableBody = (type: SortType) => {
    if (!asks || !bids) return null;
    if (type === "all")
      return (
        <>
          <AskComponent />
          <CurrentPriceComponent />
          <BidComponent />
        </>
      );
    else if (type === "ask")
      return (
        <AskComponent maxRow={24} />
      );
    else if (type === "bid")
      return (
        <BidComponent maxRow={24} />
      );
    return null;
  };

  return (
    <ComponentStyled>
      <div className="com-title">
        <Typography level="text">Order Book</Typography>
      </div>
      <div className="com-head">
        <div className="left">
          <div
            onClick={() => {
              setSortType("all");
            }}
            className={clsx(sortType === "all" && "active")}
          >
            <OrderBuySellIcon useDarkMode />
          </div>
          <div
            onClick={() => {
              setSortType("bid");
            }}
            className={clsx(sortType === "bid" && "active")}
          >
            <OrderBuyIcon useDarkMode />
          </div>
          <div
            onClick={() => {
              setSortType("ask");
            }}
            className={clsx(sortType === "ask" && "active")}
          >
            <OrderSellIcon useDarkMode />
          </div>
        </div>
        <div className="right">
          <Select
            defaultValue="0.01"
            style={{ width: 120 }}
            onChange={(v: string) => {
              setNumberFormat(v);
            }}
          >
            <Option value="0.01">0.01</Option>
            <Option value="0.1">0.1</Option>
            <Option value="1">1</Option>
            <Option value="10">10</Option>
          </Select>
        </div>
      </div>
      <div className="com-table-content">
        <div className="table-head">
          <div>
            <Typography level="text">{`Price(${pairInfo.currency2})`}</Typography>
          </div>
          <div>
            <Typography level="text">{`Quantity(${pairInfo.currency1})`}</Typography>
          </div>
          <div>
            <Typography level="text">Total</Typography>
          </div>
        </div>
        <div className="table-body">
          {renderTableBody(sortType)}
        </div>
      </div>
    </ComponentStyled>
  );
}