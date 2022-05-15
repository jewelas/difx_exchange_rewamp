import React from "react";
import { Typography, Timeline } from '@difx/core-ui';
import { ModalStyled } from './styled';
import { StakingDetail } from "@difx/shared";
import { getCurrentDateTimeByDateString } from "@difx/utils";

/* eslint-disable-next-line */
export interface ModalStackingProps {
  title: string;
  visible: boolean;
  data?: StakingDetail;
  onCancel: () => void;
}

export function ModalStacking({ onCancel, title, visible, data }: ModalStackingProps) {
  if(!data) return null;
  return (
    <ModalStyled
      visible={visible}
      title={title}
      onCancel={onCancel}
    >
      <div className='estimated'>
        <div className='es-title'>
          <Typography fontSize={12} fontWeight={400} lineHeight={14.4} color="secondary">Estimated Interested Earned</Typography>
        </div>
        <div className='es-content'>
          <Typography fontSize={41} fontWeight={400} lineHeight={49.2}>{data.apy}%</Typography>
        </div>

        <Timeline values={
          [
          <span key={`locking-start-time_${data.id}`}>Locking start time</span>, 
          <div key={`start-time_${data.id}`}>{getCurrentDateTimeByDateString(data.start_date)}</div>, 
          <div key={`end-time_${data.id}`}>
            {getCurrentDateTimeByDateString(data.end_date)}
          </div>
        ]
        } />

      </div>
      <div className='amount'>
        xxxxx
      </div>
      <div className='durations'>
        <div className='du-title'>
          xxx
        </div>
        <div className='du-arr'>
          xxxx
        </div>
      </div>
      <div className='locked-amount'>
        <div className='locked-amount-title'>
          sxxx
        </div>
        <div className='locked-amount-content'>
          xxxxx
        </div>
      </div>

      <div className='conditions'>
        xxxx
      </div>

    </ModalStyled>
  );
}

export default ModalStacking;
