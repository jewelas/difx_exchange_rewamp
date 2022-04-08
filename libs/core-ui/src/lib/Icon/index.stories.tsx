import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { Icon } from './index';

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

const Template: Story = (args) => {

  const {
    ArrowDownIcon, EarthIcon, MoonIcon, CloseIcon, EarnIcon, MarketIcon, ExchangeIcon, WalletIcon, OrderIcon, LogoIcon, HomeIcon, HorizontalLineIcon, UserIcon,
    BankIcon, MenuDownIcon, MenuUpIcon, CheckCircleIcon, CloseCircleIcon, EyeHiddenIcon, EyeVisibleIcon,
    LightIcon,
  } = Icon;

  const renderIcon = (iconName: string, iconComponent: JSX.Element) => {
    return (
      <LineStyled>
        {iconComponent}
        <div className='description'>{`Icon.${iconName}`}</div>
      </LineStyled>
    )
  }

  return (
    <div>
      <h2>
        Icon
      </h2>
      <div style={{ fontSize: '12px', display: 'inline-block', border: 'solid 1px #ccc', padding: '5px' }}>
        {`import { Icon } from @difx/core-ui`}
      </div>
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
        {renderIcon('UserIcon', <UserIcon />)}
        {renderIcon('BankIcon', <BankIcon />)}
        {renderIcon('MenuDownIcon', <MenuDownIcon />)}
        {renderIcon('MenuUpIcon', <MenuUpIcon />)}
        {renderIcon('CheckCircleIcon', <CheckCircleIcon />)}
        {renderIcon('CloseCircleIcon', <CloseCircleIcon />)}
        {renderIcon('EyeHiddenIcon', <EyeHiddenIcon />)}
        {renderIcon('EyeVisibleIcon', <EyeVisibleIcon />)}
        {renderIcon('LightIcon', <LightIcon />)}
      </div>
    </div>
  )
}

export const Primary = Template.bind({});
Primary.args = {};
