/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spin } from "antd";
import clsx from "clsx";
import { formatNumber } from "./../../utils/formatter";
import DotIcon from "./../Icon/DotIcon";
import WifiIcon from "./../Icon/WifiIcon";
import { Typography } from "../Typography";
import { NetworkStatusType } from "./../../../shared/type/Network";
import Loading from "./../Loading";
import { BarStyled } from "./styled";

export interface OrderBookBodyProps {
  numberFormat?: "0.01" | "0.1" | "1" | "10" | string;
  priceTrend?: string;
  currentPrice?: number;
  networkStatus?: NetworkStatusType;
  onPriceSelected?: (price: number) => void;
  priceOpenOrders?: Array<any>;
  totalType?: 'total' | 'sum';
  hideColumns?: string[];
  layout?: string;

  maxRowData?: number;
  type?: 'bid' | 'ask';
  data?: Array<Array<number>>;
}

function renderData(
  totalType: 'total' | 'sum',
  max_row: number,
  type: "bid" | "ask",
  data: Array<Array<number>> | undefined,
  numberFormat: string,
  onPriceSelected: (price: number) => void,
  priceOpenOrders: Array<number>,
  hideColumns: string[],
  layout = 'default'
) {
  const result = [];

  if (!data) return [];
  for (let i = 0; i < max_row; i++) {
    const row = data[i];
    if(!row) break;
    const barStyle: any = {};
    barStyle.width = `${row[2].toString()}%`;
    if (layout === 'compact') {
      barStyle.width = `${(row[2] / 2).toString()}%`;
      if (type === 'ask') {
        barStyle.right = '1px';
        barStyle.marginRight = '50%';
      } else if (type === 'bid') {
        barStyle.left = '1px'
        barStyle.marginLeft = '50%';
      }
    }

    if (row) {
      result.push(
        <div onClick={() => { onPriceSelected && onPriceSelected(row[0]) }} key={`${type}_${row[0]}_${i}`} className="table-row">
          <BarStyled className={type} style={barStyle} />
          {
            priceOpenOrders.find((e: any) => e.side === type && e.price === row[0]) &&
            <div className={clsx("dot", type)}>
              <DotIcon fill={type === 'ask' ? '#DB5354' : '#21C198'} />
            </div>
          }
          {
            !hideColumns.includes('price') &&
            <Typography level="B3" className="price">
              {formatNumber(row[0], numberFormat)}
            </Typography>
          }
          <Typography level="B3" className="amount">
            {formatNumber(row[1], numberFormat)}
          </Typography>
          <Typography level="B3" className="total">
            {
              totalType === 'total'
                ?
                formatNumber(row[0] * row[1], numberFormat)
                :
                formatNumber(row[3], numberFormat)
            }
          </Typography>
        </div>
      );
    }
  }
  return result;
}

export function CurrentPrice({ currentPrice, priceTrend, networkStatus }: OrderBookBodyProps) {
  if (!currentPrice) {
    return <Spin className="loading" indicator={<Loading />} />;
  }
  return (
    <div className="center-group">
      <div className="left">
        <Typography level="B1" className={clsx("price", priceTrend)}>
          {formatNumber(currentPrice)}
        </Typography>
      </div>
      <div className="right">
        <WifiIcon variant={networkStatus || "fast"} />
      </div>
    </div>
  );
}


export function OrderData({
  type,
  data,
  numberFormat = "0.01",
  onPriceSelected,
  priceOpenOrders,
  maxRowData = 12,
  totalType = 'total',
  hideColumns = [],
  layout = 'default'
}: OrderBookBodyProps) {

  if (!data) {
    return <Spin className="loading" indicator={<Loading />} />;
  }

  if (!type || !onPriceSelected) return null;
  return (
    <div className={type}>
      {renderData(totalType, maxRowData, type, data, numberFormat, onPriceSelected, priceOpenOrders || [], hideColumns, layout)}
    </div>
  );
}