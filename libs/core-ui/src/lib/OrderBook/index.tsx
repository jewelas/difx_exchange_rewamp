import clsx from 'clsx';
import { Select } from 'antd';
import { Typography } from './../Typography';
import OrderBuySellIcon from './../Icon/OrderBuySellIcon';
import OrderBuyIcon from './../Icon/OrderBuyIcon';
import OrderSellIcon from './../Icon/OrderSellIcon';
import { ComponentStyled } from './styled';

/* eslint-disable-next-line */
export type SortType = 'all' | 'buy' | 'sell';
export interface OrderBookProps {
  sortType?: SortType,
  onChangeSort?: (type: SortType) => void;
}

export function OrderBook({ sortType = 'all', onChangeSort }: OrderBookProps) {

  const { Option } = Select;

  return (
    <ComponentStyled>
      <div className='com-title'>
        <Typography level="text">Order Book</Typography>
      </div>
      <div className="com-head">
        <div className='left'>
          <div onClick={() => { onChangeSort && onChangeSort('all') }} className={clsx(sortType === 'all' && 'active')}>
            <OrderBuySellIcon useDarkMode />
          </div>
          <div onClick={() => { onChangeSort && onChangeSort('buy') }} className={clsx(sortType === 'buy' && 'active')}>
            <OrderBuyIcon useDarkMode />
          </div>
          <div onClick={() => { onChangeSort && onChangeSort('sell') }} className={clsx(sortType === 'sell' && 'active')}>
            <OrderSellIcon useDarkMode />
          </div>
        </div>
        <div className='right'>
          <Select defaultValue="0.0001" style={{ width: 120 }} onChange={(v) => { console.log(v) }}>
            <Option value="0.0001">0.0001</Option>
            <Option value="0.001">0.001</Option>
            <Option value="0.1">0.1</Option>
            <Option value="1">1</Option>
          </Select>
        </div>
      </div>
      <div className="com-table-content">
        <div className='table-head'>
          <div><Typography level="text">Price(USDT)</Typography></div>
          <div><Typography level="text">Quantity(BTC)</Typography></div>
          <div><Typography level="text">Quantity</Typography></div>
        </div>
        <div className='table-body'>
          <div className='sell'>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
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
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
            <div className='table-row'>
              <Typography level="B3" className='price'>
                38273.61
              </Typography>
              <Typography level="B3">
                0.18031
              </Typography>
              <Typography level="B3">
                12,714.44068
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </ComponentStyled>
  );
}