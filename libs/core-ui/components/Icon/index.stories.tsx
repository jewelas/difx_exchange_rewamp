import { Story, Meta } from "@storybook/react";
import styled from "styled-components";
import { Icon } from "./index";

export default {
  title: "Core/Icon",
} as Meta;

const LineStyled = styled.div`
  display: flex;
  margin-bottom: 15px;
  .description {
    font-size: 12px;
    margin-left: 10px;
    color: #777;
    border: solid 1px #ccc;
    padding: 0 5px;
    width: 300px;
  }
`;

const Template: Story = (args) => {
  const {
    ArrowDownIcon,
    EarthIcon,
    MoonIcon,
    CloseIcon,
    EarnIcon,
    MarketIcon,
    ExchangeIcon,
    WalletIcon,
    OrderIcon,
    LogoIcon,
    HomeIcon,
    HorizontalLineIcon,
    UserIcon,
    BankIcon,
    MenuDownIcon,
    MenuUpIcon,
    CheckCircleIcon,
    CloseCircleIcon,
    EyeHiddenIcon,
    EyeVisibleIcon,
    LightIcon,
    LockIcon,
    QRCodeIcon,
    NotificationIcon,
    SettingIcon,
    DownloadIcon,
    OrderBuySellIcon,
    OrderBuyIcon,
    OrderSellIcon,
    WifiIcon,
  } = Icon;

  const renderIcon = (iconName: string, iconComponent: JSX.Element) => {
    return (
      <LineStyled>
        {iconComponent}
        <div className="description">{`Icon.${iconName}`}</div>
      </LineStyled>
    );
  };

  const iconArgs = {
    width: 20,
    height: 20,
    fill: "#000",
  };

  return (
    <div>
      <h2>Icon</h2>
      <div
        style={{
          fontSize: "12px",
          display: "inline-block",
          border: "solid 1px #ccc",
          padding: "5px",
        }}
      >
        {`import { Icon } from @difx/core-ui`}
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridGap: "10px 10px",
          gridTemplateColumns: "auto auto auto",
          marginBottom: "50px",
        }}
      >
        {renderIcon("ArrowDownIcon", <ArrowDownIcon {...iconArgs} />)}
        {renderIcon("CloseIcon", <CloseIcon {...iconArgs} />)}
        {renderIcon("EarnIcon", <EarnIcon {...iconArgs} />)}
        {renderIcon("EarthIcon", <EarthIcon {...iconArgs} />)}
        {renderIcon("ExchangeIcon", <ExchangeIcon {...iconArgs} />)}
        {renderIcon("HomeIcon", <HomeIcon {...iconArgs} />)}
        {renderIcon("HorizontalLineIcon", <HorizontalLineIcon {...iconArgs} />)}
        {renderIcon("LogoIcon", <LogoIcon {...iconArgs} />)}
        {renderIcon("MarketIcon", <MarketIcon {...iconArgs} />)}
        {renderIcon("MoonIcon", <MoonIcon {...iconArgs} />)}
        {renderIcon("OrderIcon", <OrderIcon {...iconArgs} />)}
        {renderIcon("WalletIcon", <WalletIcon {...iconArgs} />)}
        {renderIcon("UserIcon", <UserIcon {...iconArgs} />)}
        {renderIcon("BankIcon", <BankIcon {...iconArgs} />)}
        {renderIcon("MenuDownIcon", <MenuDownIcon {...iconArgs} />)}
        {renderIcon("MenuUpIcon", <MenuUpIcon {...iconArgs} />)}
        {renderIcon("CheckCircleIcon", <CheckCircleIcon {...iconArgs} />)}
        {renderIcon("CloseCircleIcon", <CloseCircleIcon {...iconArgs} />)}
        {renderIcon("EyeHiddenIcon", <EyeHiddenIcon {...iconArgs} />)}
        {renderIcon("EyeVisibleIcon", <EyeVisibleIcon {...iconArgs} />)}
        {renderIcon("LightIcon", <LightIcon {...iconArgs} />)}
        {renderIcon("LockIcon", <LockIcon {...iconArgs} />)}
        {renderIcon("QRCodeIcon", <QRCodeIcon {...iconArgs} />)}
        {renderIcon("NotificationIcon", <NotificationIcon {...iconArgs} />)}
        {renderIcon("SettingIcon", <SettingIcon {...iconArgs} />)}
        {renderIcon("DownloadIcon", <DownloadIcon {...iconArgs} />)}
        {renderIcon("OrderBuySellIcon", <OrderBuySellIcon {...iconArgs} />)}
        {renderIcon("OrderBuyIcon", <OrderBuyIcon {...iconArgs} />)}
        {renderIcon("OrderSellIcon", <OrderSellIcon {...iconArgs} />)}
        {renderIcon("WifiIcon", <WifiIcon {...iconArgs} />)}
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
