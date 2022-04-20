import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import clsx from 'clsx';
import { NetworkStatusType } from './../../../../shared/type/Network';
import { formatNumber } from '../../utils/formatter';
import WifiIcon from '../Icon/WifiIcon';
import { Typography } from '../Typography';
import { BarStyled } from './styled';

/* eslint-disable-next-line */
export type SortType = 'all' | 'bid' | 'ask';
export interface OrderBookProps {
  bids?: Array<Array<number>>;
  asks?: Array<Array<number>>;
  numberFormat?: '0.01' | '0.1' | '1' | '10' | string;
  priceTrend: string;
  currentPrice: number;
  networkStatus?: NetworkStatusType;
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

function renderCurrentPrice(currentPrice: number, priceTrend: string, networkStatus?: string) {
  if (!currentPrice) {
    return <Spin className='loading' indicator={loadingIcon} />
  }
  return (
    <div className='center-group'>
      <div className='left'>
        <Typography level="B1" className={clsx('price', priceTrend)}>
          {formatNumber(currentPrice)}
        </Typography>
      </div>
      <div className='right'>
        <WifiIcon variant={networkStatus || 'fast'}/>
      </div>
    </div>
  )
}

export function BidAskData({networkStatus, bids, asks, numberFormat = '0.01', currentPrice, priceTrend }: OrderBookProps) {
  const MAX_ROW = 12;

  if (!bids || !asks) {
    return <Spin className='loading' indicator={loadingIcon} />
  }

  return (
    <div className='table-body'>
      <div className='ask'>
        {renderData(MAX_ROW, 'ask', asks, numberFormat)}
      </div>

      {renderCurrentPrice(currentPrice, priceTrend, networkStatus)}

      <div className='bid'>
        {renderData(MAX_ROW, 'bid', bids, numberFormat)}
      </div>
    </div>
  );
}

export function OnlyBidData({networkStatus, bids, numberFormat = '0.01', currentPrice, priceTrend }: OrderBookProps) {
  const MAX_ROW = 24;

  if (!bids) {
    return <Spin className='loading' indicator={loadingIcon} />
  }

  return (
    <div className='table-body'>
      {renderCurrentPrice(currentPrice, priceTrend, networkStatus)}
      <div className='bid'>
        {renderData(MAX_ROW, 'bid', bids, numberFormat)}
      </div>
    </div>
  );
}

export function OnlyAskData({networkStatus, asks, numberFormat = '0.01', currentPrice, priceTrend }: OrderBookProps) {
  const MAX_ROW = 24;

  if (!asks) {
    return <Spin className='loading' indicator={loadingIcon} />
  }

  return (
    <div className='table-body'>
      <div className='ask'>
        {renderData(MAX_ROW, 'ask', asks, numberFormat)}
      </div>
      {renderCurrentPrice(currentPrice, priceTrend, networkStatus)}
    </div>
  );
}