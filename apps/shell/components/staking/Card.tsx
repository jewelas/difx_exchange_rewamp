import { Icon, Typography } from '@difx/core-ui';
import { Button } from 'antd';
import React from "react";

/* eslint-disable-next-line */
export interface CardProps {
}

export function Card(props: CardProps) {

  return (
    <div className="card-item">
    <div className="card-head">
      <div className="cleft">
        <Icon.CoinIcon coin="USDT" />
        <Typography fontSize={20} fontWeight={500} lineHeight={22} className="coin-name">USDT</Typography>
      </div>
      <div className="cright">
        <Icon.HeadTagIcon />
        <div className="new">New</div>
      </div>
    </div>
    <div className="card-body">
      <div className="line1">
        <Typography fontSize={40} fontWeight={700} lineHeight={46} className="interest-rate">50.40%</Typography>
        <div className="coin-name">
          <Typography fontSize={13} fontWeight={500} lineHeight={22} >Ast. APY</Typography>
        </div>
      </div>
      <div className="line2">
        <div className="ltitle">
          <Typography level="B2">Duration (days)</Typography>
        </div>
        <div className="lcontent">
          <Button ghost>10</Button>
          <Button ghost>30</Button>
          <Button ghost>60</Button>
          <Button ghost>90</Button>
          <Button ghost>120</Button>
        </div>
      </div>
      <div className="line3">
        <div className="minmax">
          <div className="mtitle">
            <Typography level="B2">Min. Locked Amt.</Typography>
          </div>
          <div className="mvalue">
          <Typography lineHeight={22} level="B1">0 USDT</Typography>
          </div>
        </div>
        <div className="minmax">
          <div className="mtitle">
            <Typography level="B2">Max. Locked Amt.</Typography>
          </div>
          <div className="mvalue">
            <Typography lineHeight={22} level="B1">100 USDT</Typography>
          </div>
        </div>
      </div>

    </div>
    <div className="card-bottom">
      <Button type="primary">Stake Now</Button>
    </div>
  </div>
  );
}

export default Card;
