import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { ArrowDownIcon, EarthIcon, MoonIcon, CloseIcon, EarnIcon, MarketIcon, ExchangeIcon, WalletIcon, OrderIcon, LogoIcon, HomeIcon, HorizontalLineIcon } from './index';

export default {
  title: 'Core/Icon',
} as Meta;

const LineStyled = styled.div`
  display: flex;
  margin-bottom:15px;
  .description{
    font-size: 12px;
    margin-left: 10px;
    color: #777;
    border: solid 1px #ccc;
    padding: 0 5px;
    width: 300px;
  }
`

const Template: Story<{}> = (args) => {

  const renderIcon = (iconName: string, iconComponent: JSX.Element) => {
    return (
      <LineStyled>
        {iconComponent}
        <div className='description'>{`import {${iconName}} from '@difx/icon`}</div>
      </LineStyled>
    )
  }


  return (
    <div style={{
      marginTop: '20px',
      display: 'grid',
      gridGap: '10px 10px',
      gridTemplateColumns: 'auto auto auto',
      marginBottom: '50px',
  }}>
      {renderIcon('ArrowDownIcon', <ArrowDownIcon />)}
      {renderIcon('CloseIcon', <CloseIcon />)}
      {renderIcon('EarnIcon', <EarnIcon />)}
      {renderIcon('EarthIcon', <EarthIcon />)}
      {renderIcon('ExchangeIcon', <ExchangeIcon />)}
      {renderIcon('HomeIcon', <HomeIcon />)}
      {renderIcon('HorizontalLineIcon', <HorizontalLineIcon />)}
      {renderIcon('LogoIcon', <LogoIcon />)}
      {renderIcon('MarketIcon', <MarketIcon />)}
      {renderIcon('MoonIcon', <MoonIcon />)}
      {renderIcon('OrderIcon', <OrderIcon />)}
      {renderIcon('WalletIcon', <WalletIcon />)}
    </div>
  )
}

export const Primary = Template.bind({});
Primary.args = {};
