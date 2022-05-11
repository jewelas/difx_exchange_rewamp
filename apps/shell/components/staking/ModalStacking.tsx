import React from "react";
import { Typography, Timeline } from '@difx/core-ui';
import { ModalStyled } from './styled';

/* eslint-disable-next-line */
export interface ModalStackingProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
}

export function ModalStacking({ onCancel, title, visible }: ModalStackingProps) {

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
          <Typography fontSize={41} fontWeight={400} lineHeight={49.2}>90%</Typography>
        </div>

        <Timeline values={
          ['Locking at start time', 'Locking at start time', 'Locking at start time']
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
