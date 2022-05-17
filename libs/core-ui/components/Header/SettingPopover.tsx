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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SettingPopoverProps {
  // onNavigation: (page: string) => void;
}

export function SettingPopover(props: SettingPopoverProps) {

  const [theme] = useAtom(themeAtom);

  return (
    <StyledSettingPopover>
      <div className="head" style={{ marginTop: 10 }}>
        <Typography level='B3'>Layout Settings</Typography>
      </div>
      <div className='content'>
        <Button ghost className='layout'>
          <LayoutDefault theme={theme} />
          <div className='name'>
            <Typography level='B3' fontWeight={600}>Default</Typography>
          </div>
        </Button>
        <Button ghost className='layout'>
          <LayoutCompact theme={theme} />
          <div className='name'>
            <Typography level='B3'>Compact</Typography>
          </div>
        </Button>
        <Button ghost className='layout'>
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
        <Button className='candle first' ghost>
          <div className='name'>
            <Typography level='B3'>Green - Up</Typography>
          </div>
          <CandleGreenUp />
        </Button>
        <Button className='candle last' ghost>
          <div className='name'>
            <Typography level='B3'>Red - Up</Typography>
          </div>
          <CandleRedUp />
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
