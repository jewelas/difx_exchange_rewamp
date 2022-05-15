/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import clsx from 'clsx';
import { Typography, Timeline } from '@difx/core-ui';
import { Button, Input, Checkbox } from 'antd';
import { ModalStyled } from './styled';
import { Staking } from "@difx/shared";
import { getCurrentDateTimeByDateString } from "@difx/utils";

/* eslint-disable-next-line */
export interface ModalStackingProps {
  title: string;
  visible: boolean;
  data?: Staking;
  atDetailIndex?: number;
  onCancel: () => void;
}

export function ModalStacking({ onCancel, title, visible, data, atDetailIndex = 0 }: ModalStackingProps) {

  const [configIndex, setConfigIndex] = useState(0);
  const [isAgreeTerm, setIsAgreeTerm] = useState(false);

  const onReplaceComma = (e: any) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
  }

  if (!data) return null;
  return (
    <ModalStyled
      visible={visible}
      title={title}
      onCancel={onCancel}
      footer={null}
    >
      <div className='estimated'>
        <div className='es-title'>
          <Typography fontSize={12} fontWeight={400} lineHeight={14.4} color="secondary">Estimated Interested Earned</Typography>
        </div>
        <div className='es-content'>
          <Typography fontSize={41} fontWeight={400} lineHeight={49.2}>{data.st_conf_detail[atDetailIndex].apy}%</Typography>
        </div>

        <Timeline values={
          [
            <span key={`locking-start-time_${data.id}`}>Locking start time</span>,
            <div key={`start-time_${data.id}`}>{getCurrentDateTimeByDateString(data.st_conf_detail[atDetailIndex].start_date)}</div>,
            <div key={`end-time_${data.st_conf_detail[atDetailIndex].id}`}>
              {getCurrentDateTimeByDateString(data.st_conf_detail[atDetailIndex].end_date)}
            </div>
          ]
        } />

      </div>
      <div className='amount'>
        <div className="am-title">
          <div className="am-left">Lock amount</div>
          <div className="am-right">Avaible amount 0.0000 BTC</div>
        </div>
        <Input type="text" onInput={onReplaceComma} onWheel={(e: any) => { e.target.blur() }} suffix={<div>xxxx</div>} />
      </div>
      <div className='durations'>
        <div className='du-title'>
          Duration (Days)
        </div>
        <div className='du-arr'>
          {
            data.st_conf_detail.map((e, i) => <Button onClick={() => { setConfigIndex(i) }} className={clsx(i === configIndex && 'active')} key={`_period_${e.id}`} ghost>{e.period}</Button>)
          }
        </div>
      </div>
      <div className='locked-amount'>
        <div className='locked-amount-title'>
          Locked amount limitation
        </div>
        <div className='locked-amount-content'>
          <div className="locked-left">
            <div className="locked-title">
              Minimum
            </div>
            <div className="locked-value">
              0.01 BTC
            </div>
          </div>
          <div className="locked-right">
            <div className="locked-title">
              Maximum
            </div>
            <div className="locked-value">
              0.01 BTC
            </div>
          </div>
        </div>
      </div>

      <div className='conditions'>
        <Checkbox checked={isAgreeTerm} onChange={() => {setIsAgreeTerm(!isAgreeTerm)}}>
          <Typography level="text">
            I have read and I agree to
            <a style={{ marginLeft: 5 }} target="_blank" href="/term">
              DIFX STACKING CONDITIONS
            </a>
          </Typography>
        </Checkbox>
      </div>

      <div className="staking-now">
        <Button disabled={!isAgreeTerm} type="primary">Stake Now</Button>
      </div>

    </ModalStyled>
  );
}

export default ModalStacking;
