/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, Button } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { useAtom } from "jotai";

import { NetworkStatusType } from "./../../../shared/type/Network";
import OrderBuyIcon from "../Icon/OrderBuyIcon";
import OrderBuySellIcon from "../Icon/OrderBuySellIcon";
import OrderSellIcon from "../Icon/OrderSellIcon";
import SwitchIcon from "../Icon/SwitchIcon";
import { Typography } from "../Typography";
import { OrderData, CurrentPrice } from "./OrderBookBody";
import { ComponentStyled } from "./styled";
import { PairType, priceSelectedAtom } from "./../../../shared";
import { OrderBookHead } from "./OrderBookHead";

/* eslint-disable-next-line */
export type SortType = "all" | "bid" | "ask";
export type LayoutType = "default" | "compact" | "pro";
export interface OrderBookProps {
  pairInfo: PairType;
  bids?: Array<Array<number>>;
  asks?: Array<Array<number>>;
  priceTrend: string;
  currentPrice: number;
  networkStatus?: NetworkStatusType;
  priceOpenOrders?: Array<any>;
  layout?: LayoutType;
}

export function OrderBook({
  pairInfo,
  priceTrend,
  currentPrice,
  bids,
  asks,
  networkStatus,
  priceOpenOrders,
  layout = 'default'
}: OrderBookProps) {
  const { Option } = Select;
  const [sortType, setSortType] = useState<SortType>("all");
  const [numberFormat, setNumberFormat] = useState("0.01");
  const [totalType, setTotalType] = useState<'total' | 'sum'>('total');

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

  const BidComponent = ({ layout = 'default', maxRow = 16, hideColumns }: { layout?: string, maxRow?: number, hideColumns?: string[] }) => (
    <OrderData
      layout={layout}
      hideColumns={hideColumns}
      type="bid"
      data={bids}
      numberFormat={numberFormat}
      onPriceSelected={setPriceSelected}
      priceOpenOrders={priceOpenOrders}
      maxRowData={maxRow}
      totalType={totalType}
    />
  )

  const AskComponent = ({ layout = 'default', maxRow = 16, hideColumns = [] }: { layout?: string; maxRow?: number, hideColumns?: string[] }) => (
    <OrderData
      layout={layout}
      hideColumns={hideColumns}
      type="ask"
      data={asks}
      numberFormat={numberFormat}
      onPriceSelected={setPriceSelected}
      priceOpenOrders={priceOpenOrders}
      maxRowData={maxRow}
      totalType={totalType}
    />
  )

  const CurrentPriceComponent = () => (
    <CurrentPrice
      networkStatus={networkStatus}
      priceTrend={priceTrend}
      currentPrice={currentPrice}
      layout = {layout}
    />
  )

  const renderTableBody = (type: SortType) => {
    if (!asks || !bids) return null;

    if (layout === 'compact') {
      return (
        <div className={layout}>
          <div className="left">
            <AskComponent layout={layout} hideColumns={['amount']} />
          </div>
          <div className="right">
            <BidComponent layout={layout} hideColumns={['amount']} />
          </div>
        </div>
      )
    } else {
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
    }
    return null;
  };

  return (
    <ComponentStyled>
      {
        layout !== 'compact' &&
        <div className="com-title">
          <Typography level="text">Order Book</Typography>
        </div>
      }

      <div className="com-head">
        <div className="left">
          {
            layout !== 'compact' ?
              <>
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
              </>
              :
              <div style={{ marginLeft: -33 }}>
                <Typography level="text">Order Book</Typography>
              </div>
          }

        </div>
        <div className="right">
          {layout==='compact' && <Button ghost>More</Button>}
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

      {
        layout === 'compact' &&
        <div className="com-priceinfo">
          <Button className="btn-change-total" onClick={() => { setTotalType(totalType === 'sum' ? 'total' : 'sum') }} ghost><SwitchIcon useDarkMode /></Button>
          <CurrentPriceComponent />
        </div>
      }

      <div className="com-table-content">
        {layout !== 'compact'
          ?
          <OrderBookHead pairInfo={pairInfo} layout={layout} totalType={totalType} setTotalType={setTotalType} />
          :
          <div className={clsx('head', layout)}>
            <div className="left">
              <div className="t1">{totalType==='sum'?'Sum':'Total'}</div>
              <div className="t2">Price</div>
            </div>
            <div className="right">
              <div className="t1">Price</div>
              <div className="t2">{totalType==='sum'?'Sum':'Total'}</div>
            </div>
          </div>
        }
        <div className="table-body">
          {renderTableBody(sortType)}
        </div>
      </div>
    </ComponentStyled>
  );
}