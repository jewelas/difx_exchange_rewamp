/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useAtom } from 'jotai';
import isEmpty from "lodash/isEmpty";
import { themeAtom, layoutTypeAtom, candleTypeAtom, useLocalStorage } from './../../../shared';
import { STORE_KEY } from './../../../shared/constants';
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
  const [layoutType, setLayoutType] = useAtom(layoutTypeAtom);
  const [candleType, setCandleType] = useAtom(candleTypeAtom);

  const { value: exchangeStyles, setValue: setExchangeStyles } = useLocalStorage(STORE_KEY.EXCHANGE_STYLE, null);
  useEffect(() => {
    if (!isEmpty(exchangeStyles)) {
      const { layout } =  exchangeStyles || {};
      setLayoutType(layout);
    }
  }, []);


  const onChangeLayoutType = (type: string) => {
    setLayoutType(type as string);
    const exchangeStylesJSON = exchangeStyles || {};
    exchangeStylesJSON.layout = type;
    setExchangeStyles(exchangeStylesJSON);
  }

  const onChangeCandleType = (type: string) => {
    setCandleType(type as string);
    const exchangeStylesJSON = exchangeStyles || {};
    exchangeStylesJSON.candle = type;
    setExchangeStyles(exchangeStylesJSON);
  }

  return (
    <StyledSettingPopover>
      <div className="head" style={{ marginTop: 10 }}>
        <Typography level='B3'>Layout Settings</Typography>
      </div>
      <div className='content'>
        <Button onClick={() => { onChangeLayoutType('default') }} ghost className={clsx('layout', layoutType === 'default' && 'active')}>
          <LayoutDefault theme={theme} />
          <div className='name'>
            <Typography level='B3' fontWeight={600}>Default</Typography>
          </div>
        </Button>
        <Button onClick={() => { onChangeLayoutType('compact') }} ghost className={clsx('layout', layoutType === 'compact' && 'active')}>
          <LayoutCompact theme={theme} />
          <div className='name'>
            <Typography level='B3'>Compact</Typography>
          </div>
        </Button>
        <Button onClick={() => { onChangeLayoutType('pro') }} ghost className={clsx('layout', layoutType === 'pro' && 'active')}>
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
        <Button onClick={() => { onChangeCandleType('greenUp') }} ghost>
          <div className={clsx('candle', 'first', candleType === 'greenUp' && 'active')}>
            <div className='name'>
              <Typography level='B3'>Green - Up</Typography>
            </div>
            <CandleGreenUp />
          </div>
        </Button>
        <Button onClick={() => { onChangeCandleType('redUp') }} ghost>
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
