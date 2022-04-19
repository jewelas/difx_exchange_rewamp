import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import clsx from 'clsx';
import { formatNumber } from './../../util/formatter';
import { Typography } from './../Typography';
import { BarStyled } from './styled';

/* eslint-disable-next-line */
export type SortType = 'all' | 'bid' | 'ask';
export interface OrderBookProps {
  bids?: Array<Array<number>>;
  asks?: Array<Array<number>>;
  numberFormat?: '0.01' | '0.1' | '1' | '10' | string;
  priceTrend: string;
  currentPrice: number;
}

const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


function renderData(max_row: number, type: 'bid' | 'ask', data: Array<Array<number>> | undefined, numberFormat: string) {
  const result = [];

  if (!data) return [];
  for (let i = 0; i < max_row; i++) {
    const row = data[i];
    if (row) {
      result.push(
        <div key={`${type}_${row[0]}_${i}`} className='table-row'>
          <BarStyled className={type} width={row[2].toString()} />
          <Typography level="B3" className='price'>
            {formatNumber(row[0], numberFormat)}
          </Typography>
          <Typography level="B3" className='amount'>
            {formatNumber(row[1], numberFormat)}
          </Typography>
          <Typography level="B3" className='total'>
            {formatNumber(row[0] * row[1], numberFormat)}
          </Typography>
        </div>
      )
    }
  }
  return result;
}

function renderCurrentPrice(currentPrice: number, priceTrend: string) {
  return (
    <div className='center-group'>
      <div className='left'>
        <Typography level="B1" className={clsx('price', priceTrend)}>
          {formatNumber(currentPrice)}
        </Typography>
      </div>
      <div className='right'>
        More
      </div>
    </div>
  )
}

export function BidAskData({ bids, asks, numberFormat = '0.01', currentPrice, priceTrend }: OrderBookProps) {
  const MAX_ROW = 12;

  if (!bids || !asks) {
    return <Spin className='loading' indicator={loadingIcon} />
  }

  return (
    <div className='table-body'>
      <div className='ask'>
        {renderData(MAX_ROW, 'ask', asks, numberFormat)}
      </div>

      {renderCurrentPrice(currentPrice, priceTrend)}

      <div className='bid'>
        {renderData(MAX_ROW, 'bid', bids, numberFormat)}
      </div>
    </div>
  );
}

export function OnlyBidData({ bids, numberFormat = '0.01', currentPrice, priceTrend }: OrderBookProps) {
  const MAX_ROW = 24;

  if (!bids) {
    return <Spin className='loading' indicator={loadingIcon} />
  }

  return (
    <div className='table-body'>
      {renderCurrentPrice(currentPrice, priceTrend)}
      <div className='bid'>
        {renderData(MAX_ROW, 'bid', bids, numberFormat)}
      </div>
    </div>
  );
}

export function OnlyAskData({ asks, numberFormat = '0.01', currentPrice, priceTrend }: OrderBookProps) {
  const MAX_ROW = 24;

  if (!asks) {
    return <Spin className='loading' indicator={loadingIcon} />
  }

  return (
    <div className='table-body'>
      <div className='ask'>
        {renderData(MAX_ROW, 'ask', asks.reverse(), numberFormat)}
      </div>
      {renderCurrentPrice(currentPrice, priceTrend)}
    </div>
  );
}