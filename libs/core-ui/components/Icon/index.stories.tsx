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
    FavoriteIcon,
    QuestionIcon,
    SearchIcon,
    CoinPlaceholder,
    SwitchIcon,
    CandleSolidIcon,
    CandleStrokeIcon,
    CandleUpStrokeIcon,
    CandleDownStrokeIcon,
    BarIcon,
    AreaIcon,
    IndicatorIcon,
    FullScreenIcon,
    ChartInd2SlashIcon,
    ChartInd3SlashIcon,
    ChartIndFibIcon,
    ChartIndHLine1Icon,
    ChartIndHLine2Icon,
    ChartIndHLine3Icon,
    ChartIndPriceLineIcon,
    ChartIndSlash1Icon,
    ChartIndSlash2Icon,
    ChartIndSlash3Icon,
    ChartIndVLine1Icon,
    ChartIndVLine2Icon,
    ChartIndVLine3Icon,
    TrashIcon,
    DepositIcon,
    ListViewIcon,
    CardViewIcon,
    DotIcon,
    ExpandIcon,
    CompodingIcon,
    RewardIcon,
    CoinIcon,
    HeadTagIcon,
    NoDataIcon,
    CancelOrderIcon,
    OverviewIcon,
    SpotIcon,
    FutureIcon,
    HistoryIcon,
    SupportIcon,
    GiftIcon,
    BoardIcon,
    PieChartIcon,
    CopyIcon
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
        {renderIcon("FavoriteIcon", <FavoriteIcon {...iconArgs} />)}
        {renderIcon("QuestionIcon", <QuestionIcon {...iconArgs} />)}
        {renderIcon("SearchIcon", <SearchIcon {...iconArgs} />)}
        {renderIcon("CoinPlaceholder", <CoinPlaceholder {...iconArgs} />)}
        {renderIcon("SwitchIcon", <SwitchIcon {...iconArgs} />)}
        {renderIcon("CandleSolidIcon", <CandleSolidIcon {...iconArgs} />)}
        {renderIcon("CandleStrokeIcon", <CandleStrokeIcon {...iconArgs} />)}
        {renderIcon("CandleUpStrokeIcon", <CandleUpStrokeIcon {...iconArgs} />)}
        {renderIcon("CandleDownStrokeIcon", <CandleDownStrokeIcon {...iconArgs} />)}
        {renderIcon("BarIcon", <BarIcon {...iconArgs} />)}
        {renderIcon("AreaIcon", <AreaIcon {...iconArgs} />)}
        {renderIcon("IndicatorIcon", <IndicatorIcon {...iconArgs} />)}
        {renderIcon("FullScreenIcon", <FullScreenIcon {...iconArgs} />)}
        {renderIcon("ChartIndSlash3Icon", <ChartIndSlash3Icon {...iconArgs} />)}
        {renderIcon("ChartIndSlash2Icon", <ChartIndSlash2Icon {...iconArgs} />)}
        {renderIcon("ChartIndSlash1Icon", <ChartIndSlash1Icon {...iconArgs} />)}
        {renderIcon("ChartIndPriceLineIcon", <ChartIndPriceLineIcon {...iconArgs} />)}
        {renderIcon("ChartIndHLine3Icon", <ChartIndHLine3Icon {...iconArgs} />)}
        {renderIcon("ChartIndHLine2Icon", <ChartIndHLine2Icon {...iconArgs} />)}
        {renderIcon("ChartIndHLine1Icon", <ChartIndHLine1Icon {...iconArgs} />)}
        {renderIcon("ChartIndFibIcon", <ChartIndFibIcon {...iconArgs} />)}
        {renderIcon("ChartInd3SlashIcon", <ChartInd3SlashIcon {...iconArgs} />)}
        {renderIcon("ChartInd2SlashIcon", <ChartInd2SlashIcon {...iconArgs} />)}
        {renderIcon("TrashIcon", <TrashIcon {...iconArgs} />)}
        {renderIcon("ChartIndVLine3Icon", <ChartIndVLine3Icon {...iconArgs} />)}
        {renderIcon("ChartIndVLine2Icon", <ChartIndVLine2Icon {...iconArgs} />)}
        {renderIcon("ChartIndVLine1Icon", <ChartIndVLine1Icon {...iconArgs} />)}
        {renderIcon("DepositIcon", <DepositIcon {...iconArgs} />)}
        {renderIcon("ListViewIcon", <ListViewIcon {...iconArgs} />)}
        {renderIcon("CardViewIcon", <CardViewIcon {...iconArgs} />)}
        {renderIcon("DotIcon", <DotIcon {...iconArgs} />)}
        {renderIcon("ExpandIcon", <ExpandIcon {...iconArgs} />)}
        {renderIcon("RewardIcon", <RewardIcon {...iconArgs} />)}
        {renderIcon("CompodingIcon", <CompodingIcon {...iconArgs} />)}
        {renderIcon("CoinIcon", <CoinIcon {...iconArgs} />)}
        {renderIcon("HeadTagIcon", <HeadTagIcon {...iconArgs} />)}
        {renderIcon("NoDataIcon", <NoDataIcon {...iconArgs} />)}
        {renderIcon("CancelOrderIcon", <CancelOrderIcon {...iconArgs} />)}
        {renderIcon("OverviewIcon", <OverviewIcon {...iconArgs} />)}
        {renderIcon("SpotIcon", <SpotIcon {...iconArgs} />)}
        {renderIcon("FutureIcon", <FutureIcon {...iconArgs} />)}
        {renderIcon("HistoryIcon", <HistoryIcon {...iconArgs} />)}
        {renderIcon("SupportIcon", <SupportIcon {...iconArgs} />)}
        {renderIcon("GiftIcon", <GiftIcon {...iconArgs} />)}
        {renderIcon("BoardIcon", <BoardIcon {...iconArgs} />)}
        {renderIcon("PieChartIcon", <PieChartIcon {...iconArgs} />)}
        {renderIcon("CopyIcon", <CopyIcon {...iconArgs} />)}
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
