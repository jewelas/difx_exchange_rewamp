import { useState } from 'react';
import { Button } from 'antd';
import { useAtom } from 'jotai';
import { themeAtom } from './../../../shared';
import { Typography } from './../Typography';
import { StyledSettingPopover } from './styled';
import CandleGreen from './svg/CandleGreen';
import CandleGreenUp from './svg/CandleGreenUp';
import CandleRed from './svg/CandleRed';
import CandleRedUp from './svg/CandleRedUp';
import LayoutCompact from './svg/LayoutCompact';
import LayoutDefault from './svg/LayoutDefault';
import LayoutPro from './svg/LayoutPro';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SettingPopoverProps {
  // onNavigation: (page: string) => void;
}

export function SettingPopover(props: SettingPopoverProps) {

  const [theme] = useAtom(themeAtom);
  const [layoutType, setLayoutType] = useState<'default' | 'compact' | 'pro'>('default');
  const [candleType, setCandleType] = useState<'greenUp' | 'redUp'>('greenUp');

  return (
    <StyledSettingPopover>
      <div className="head" style={{ marginTop: 10 }}>
        <Typography level='B3'>Layout Settings</Typography>
      </div>
      <div className='content'>
        <Button onClick={() => { setLayoutType('default') }} ghost className={clsx('layout', layoutType === 'default' && 'active')}>
          <LayoutDefault theme={theme} />
          <div className='name'>
            <Typography level='B3' fontWeight={600}>Default</Typography>
          </div>
        </Button>
        <Button onClick={() => { setLayoutType('compact') }} ghost className={clsx('layout', layoutType === 'compact' && 'active')}>
          <LayoutCompact theme={theme} />
          <div className='name'>
            <Typography level='B3'>Compact</Typography>
          </div>
        </Button>
        <Button onClick={() => { setLayoutType('pro') }} ghost className={clsx('layout', layoutType === 'pro' && 'active')}>
          <LayoutPro theme={theme} />
          <div className='name'>
            <Typography level='B3'>Pro</Typography>
          </div>
        </Button>
      </div>

      <div className="head">
        <Typography level='B3'>Rise/Fall Settings</Typography>
      </div>
      <div className="content">
        <Button onClick={() => { setCandleType('greenUp') }} ghost>
          <div className={clsx('candle', 'first', candleType === 'greenUp' && 'active')}>
            <div className='name'>
              <Typography level='B3'>Green - Up</Typography>
            </div>
            <CandleGreenUp />
          </div>
        </Button>
        <Button onClick={() => { setCandleType('redUp') }} ghost>
          <div className={clsx('candle', 'last', candleType === 'redUp' && 'active')}>
            <div className='name'>
              <Typography level='B3'>Red - Up</Typography>
            </div>
            <CandleRedUp />
          </div>
        </Button>
      </div>

      <div className="head">
        <Typography level='B3'>Candles Color Settings</Typography>
      </div>
      <div className="content" style={{ justifyContent: 'flex-start' }}>
        <Button className='candle-color' ghost>
          <CandleGreen />
        </Button>
        <Button className='candle-color' ghost>
          <CandleRed />
        </Button>
      </div>
    </StyledSettingPopover >
  )
}

export default SettingPopover;
