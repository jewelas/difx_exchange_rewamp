/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import clsx from "clsx";
import { getPriceFormatted } from "../../../shared/utils/priceUtils";
import { Typography } from "../Typography";
import { useCurrency } from "./../../../shared/hook/useCurrency";
import { NetworkStatusType } from "./../../../shared/type/Network";
import { formatNumber } from "./../../utils/formatter";
import DotIcon from "./../Icon/DotIcon";
import WifiIcon from "./../Icon/WifiIcon";
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
    if (!row) break;
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

    const Price = () => (
      !hideColumns.includes('price') ?
        <Typography level="B3" className="price">
          {formatNumber(row[0], numberFormat)}
        </Typography>
        : <></>
    )

    const Amount = () => (
      !hideColumns.includes('amount') ?
        <Typography level="B3" className="amount">
          {formatNumber(row[1], numberFormat)}
        </Typography>
        : <></>
    )

    const Total = () => (
      !hideColumns.includes('total') ?
        <Typography level="B3" className="total">
          {
            totalType === 'total'
              ?
              formatNumber(row[0] * row[1], numberFormat)
              :
              formatNumber(row[3], numberFormat)
          }
        </Typography>
        : <></>
    )

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
            layout !== 'compact' ?
              <>
                <Price />
                <Amount />
                <Total />
              </>
              :
              type === 'bid' ?
                <>
                  <Price />
                  <Amount />
                  <Total />
                </>
                :
                <>
                  <Total />
                  <Amount />
                  <Price />
                </>
          }
        </div>
      );
    }
  }
  return result;
}

export function CurrentPrice({ currentPrice, priceTrend, networkStatus, layout }: OrderBookBodyProps) {
  const { currentCurrency: fiatCurrency } = useCurrency();

  if (!currentPrice) {
    return <Loading type="component" style={{position:'absolute', width:'100%', height:'100%'}} />;
  }

  return (
    <div className="center-group">
      <div style={{ display: "flex" }} className="left">
        <Typography level="B1" className={clsx("price", priceTrend)}>
          {formatNumber(currentPrice)}
        </Typography>
        {
          fiatCurrency &&
          <div style={{ marginLeft: '5px' }}>
            <Typography level="B2" className={clsx("price", priceTrend)}>
              {` ≈ ${fiatCurrency.symbol}${getPriceFormatted(
                currentPrice * fiatCurrency.usd_rate,
                2
              )}`}
            </Typography>
          </div>
        }
      </div>
      <div className="right">
        <div style={{ display: 'flex' }}>
          <WifiIcon variant={networkStatus || "fast"} />
          {
            layout !== 'compact' &&
            <Button ghost>More</Button>
          }

        </div>
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
    return <Loading type="component" style={{ height: 300 }} />;
  }

  if (!type || !onPriceSelected) return null;
  return (
    <div className={type}>
      {renderData(totalType, maxRowData, type, data, numberFormat, onPriceSelected, priceOpenOrders || [], hideColumns, layout)}
    </div>
  );
}