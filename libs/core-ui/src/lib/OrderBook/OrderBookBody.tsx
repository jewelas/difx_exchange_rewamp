import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Typography } from '../Typography';
import { BarStyled } from './styled';

/* eslint-disable-next-line */
export type SortType = 'all' | 'bid' | 'ask';
export interface OrderBookProps {
  bids?: Array<Array<number>>;
  asks?: Array<Array<number>>;
  numberFormat?: string;
}

const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function renderData(max_row: number, type: 'sell' | 'buy', data: Array<Array<number>> | undefined, numberFormat:string) {
  const result = [];

  const formatNumber = (value:number): string=>{
    let numberFormatted = 0.00;
    let digit = 2;
    if(numberFormat === '0.01'){
      numberFormatted = Number(value.toFixed(2));
      digit = 2;
    }else if(numberFormat === '0.1'){
      numberFormatted = Number(value.toFixed(1));
      digit = 1;
    }else if(numberFormat === '1'){
      numberFormatted = value;
      digit = 0;
    }else if(numberFormat === '10'){
      numberFormatted = value * 10;
      digit = 0
    }
    if(numberFormatted !== 0.00) return numberFormatted.toLocaleString('en-us', {maximumFractionDigits: digit, minimumFractionDigits: digit});
    return numberFormatted.toString();
  }

  if (!data) return [];
  let _data = data;
  if (type === 'sell') _data = data.reverse();
  for (let i = 0; i < max_row; i++) {
    const row = _data[i];
    if (row) {
      result.push(
        <div key={`${type}_${row[0]}_${i}`} className='table-row'>
          <BarStyled className={type} width={row[2].toString()} />
          <Typography level="B3" className='price'>
            {formatNumber(row[0])}
          </Typography>
          <Typography level="B3" className='amount'>
            {formatNumber(row[1])}
          </Typography>
          <Typography level="B3" className='total'>
            {formatNumber(row[0] * row[1])}
          </Typography>
        </div>
      )
    }

  }
  return result;
}

export function BidAskData({ bids, asks, numberFormat = '0.01' }: OrderBookProps) {
  const MAX_ROW = 12;

  if (!bids || !asks) {
    return <Spin className='loading' indicator={loadingIcon} />
  }

  return (
    <div className='table-body'>
      <div className='sell'>
        {renderData(MAX_ROW, 'sell', asks, numberFormat)}
      </div>

      <div className='center-group'>
        <div className='left'>
          <Typography level="B1" className='price'>
            38,348.75≈$38,360.25
          </Typography>
        </div>
        <div className='right'>
          More
        </div>
      </div>

      <div className='buy'>
        {renderData(MAX_ROW, 'buy', bids, numberFormat)}
      </div>
    </div>
  );
}

export function OnlyBidData({ bids, numberFormat = '0.01' }: OrderBookProps) {
  const MAX_ROW = 24;

  if (!bids) {
    return <Spin className='loading' indicator={loadingIcon} />
  }

  return (
    <div className='table-body'>
      <div className='center-group'>
        <div className='left'>
          <Typography level="B1" className='price buy'>
            38,348.75≈$38,360.25
          </Typography>
        </div>
        <div className='right'>
          More
        </div>
      </div>
      <div className='buy'>
        {renderData(MAX_ROW, 'buy', bids, numberFormat)}
      </div>
    </div>
  );
}

export function OnlyAskData({ asks, numberFormat = '0.01' }: OrderBookProps) {
  const MAX_ROW = 24;

  if (!asks) {
    return <Spin className='loading' indicator={loadingIcon} />
  }

  return (
    <div className='table-body'>
      <div className='center-group'>
        <div className='left'>
          <Typography level="B1" className='price sell'>
            38,348.75≈$38,360.25
          </Typography>
        </div>
        <div className='right'>
          More
        </div>
      </div>
      <div className='sell'>
        {renderData(MAX_ROW, 'sell', asks, numberFormat)}
      </div>
    </div>
  );
}