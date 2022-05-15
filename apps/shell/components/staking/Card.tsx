import { Icon, Typography, ValueField } from '@difx/core-ui';
import { Staking, StakingDetail } from '@difx/shared';
import { getDaysBetweenDates, getPriceFormatted } from '@difx/utils';
import { Button } from 'antd';
import clsx from 'clsx';
import React, { useState } from "react";

/* eslint-disable-next-line */
export interface CardProps {
  data: Staking;
  onStake: (data: Staking, detailIndex: number) => void;
}

export function Card({ onStake, data }: CardProps) {

  const [configIndex, setConfigIndex] = useState(0);

  return (
    <div className="card-item">
      <div className="card-head">
        <div className="cleft">
          <Icon.CoinIcon coin={data.coin} />
          <Typography fontSize={20} fontWeight={500} lineHeight={22} className="coin-name">{data.coin}</Typography>
        </div>

        {/* Display Bookmark */}
        {
          getDaysBetweenDates(new Date(data.st_conf_detail[configIndex].start_date), new Date()) <= 2
          &&
          <div className="cright">
            <Icon.HeadTagIcon />
            <div className="new">New</div>
          </div>
        }

      </div>
      <div className="card-body">
        <div className="line1">
          <Typography fontSize={40} fontWeight={700} lineHeight={46} className="interest-rate">{data.st_conf_detail[configIndex].apy}%</Typography>
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
              data.st_conf_detail.map((e, i) => <Button onClick={() => { setConfigIndex(i) }} className={clsx(i === configIndex && 'active')} key={`period_${e.id}`} ghost>{e.period}</Button>)
            }
          </div>
        </div>
        <div className="line3">
          <ValueField title="Min. Locked Amt." value={`${getPriceFormatted(data.st_conf_detail[configIndex].min_amount, 0)} ${data.coin}`} />
          <ValueField title="Max. Locked Amt." value={`${getPriceFormatted(data.st_conf_detail[configIndex].max_amount, 0)} ${data.coin}`} />
        </div>

      </div>
      <div className="card-bottom">
        <Button onClick={()=>{onStake(data, configIndex)}} type="primary">Stake Now</Button>
      </div>
    </div>
  );
}

export default Card;
