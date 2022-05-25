/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import SwitchIcon from "../Icon/SwitchIcon";
import { Typography } from "../Typography";
import { PairType } from "./../../../shared";

export interface OrderBookHeadProps {
  pairInfo: PairType;
  layout?: string;
  totalType: 'total' | 'sum';
  setTotalType: (value:'total' | 'sum')=>void;
}

export function OrderBookHead({
  pairInfo,
  layout = 'default',
  totalType,
  setTotalType
}: OrderBookHeadProps) {

  return (
    <div className="table-head">
      {
        !['compact'].includes(layout)
        &&
        <div>
          <Typography level="text">{`Price(${pairInfo.currency2})`}</Typography>
        </div>
      }

      <div>
        <Typography level="text">{`Quantity(${pairInfo.currency1})`}</Typography>
      </div>
      <div className="col-total">
        <div style={{ marginTop: '-19px !important' }}>
          <Button onClick={() => { setTotalType(totalType === 'sum' ? 'total' : 'sum') }} ghost><SwitchIcon useDarkMode /></Button>
        </div>
        {
          !['compact'].includes(layout)
            ?
            <div>
              <Typography level="text">{totalType === 'sum' ? `Sum` : `Total`}</Typography>
              <Typography level="text">{totalType === 'sum' ? `(${pairInfo.currency1})` : `(${pairInfo.currency2})`}</Typography>
            </div>
            :
            <div>
              <Typography level="text">{totalType === 'sum' ? `Sum` : `Total`}</Typography>
              <Typography level="text">{totalType === 'sum' ? `(${pairInfo.currency1})` : `(${pairInfo.currency2})`}</Typography>
            </div>
        }
      </div>
    </div>
  );
}