import { Icon, Typography, ValueField } from '@difx/core-ui';
import { Staking } from '@difx/shared';
import { getPriceFormatted, getDaysBetweenDates } from '@difx/utils';
import { Button } from 'antd';
import React from "react";

/* eslint-disable-next-line */
export interface CardProps {
  data: Staking
}

export function Card({ data }: CardProps) {

  return (
    <div className="card-item">
      <div className="card-head">
        <div className="cleft">
          <Icon.CoinIcon coin="USDT" />
          <Typography fontSize={20} fontWeight={500} lineHeight={22} className="coin-name">{data.coin}</Typography>
        </div>

        {/* Display Bookmark */}
        {
          getDaysBetweenDates(new Date(data.start_date), new Date()) <= 2
          &&
          <div className="cright">
            <Icon.HeadTagIcon />
            <div className="new">New</div>
          </div>
        }

      </div>
      <div className="card-body">
        <div className="line1">
          <Typography fontSize={40} fontWeight={700} lineHeight={46} className="interest-rate">{data.apy}%</Typography>
          <div className="coin-name">
            <Typography fontSize={13} fontWeight={500} lineHeight={22} >Ast. APY</Typography>
          </div>
        </div>
        <div className="line2">
          <div className="ltitle">
            <Typography level="B2">Duration (days)</Typography>
          </div>
          <div className="lcontent">
            {
              data.period.map(e => <Button key={e} ghost>{e}</Button>)
            }
          </div>
        </div>
        <div className="line3">
          <ValueField title="Min. Locked Amt." value={`${getPriceFormatted(data.min_amount, 0)} ${data.coin}`} />
          <ValueField title="Max. Locked Amt." value={`${getPriceFormatted(data.max_amount, 0)} ${data.coin}`} />
        </div>

      </div>
      <div className="card-bottom">
        <Button type="primary">Stake Now</Button>
      </div>
    </div>
  );
}

export default Card;
