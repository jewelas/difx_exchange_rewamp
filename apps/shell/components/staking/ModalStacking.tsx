import { Modal } from 'antd';
import React from "react";
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
          Estimated Interested Earned
        </div>
        <div className='es-content'>
          90%
        </div>
        <div className='timeline'>
          <div>dot</div>
        </div>
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
