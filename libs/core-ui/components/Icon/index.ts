import LogoIcon from "./LogoIcon";
import ArrowDownIcon from "./ArrowDownIcon";
import EarthIcon from "./EarthIcon";
import MoonIcon from "./MoonIcon";
import HorizontalLineIcon from "./HorizontalLineIcon";
import CloseIcon from "./CloseIcon";
import HomeIcon from "./HomeIcon";
import ExchangeIcon from "./ExchangeIcon";
import EarnIcon from "./EarnIcon";
import WalletIcon from "./WalletIcon";
import OrderIcon from "./OrderIcon";
import MarketIcon from "./MarketIcon";
import UserIcon from "./UserIcon";
import BankIcon from "./BankIcon";
import MenuDownIcon from "./MenuDownIcon";
import MenuUpIcon from "./MenuUpIcon";
import CheckCircleIcon from "./CheckCircleIcon";
import CloseCircleIcon from "./CloseCircleIcon";
import EyeHiddenIcon from "./EyeHiddenIcon";
import EyeVisibleIcon from "./EyeVisibleIcon";
import LightIcon from "./LightIcon";
import LockIcon from "./LockIcon";
import QRCodeIcon from "./QRCodeIcon";
import NotificationIcon from "./NotificationIcon";
import SettingIcon from "./SettingIcon";
import DownloadIcon from "./DownloadIcon";
import OrderBuySellIcon from "./OrderBuySellIcon";
import OrderBuyIcon from "./OrderBuyIcon";
import OrderSellIcon from "./OrderSellIcon";
import WifiIcon from "./WifiIcon";
import FavoriteIcon from "./FavoriteIcon";
import QuestionIcon from "./QuestionIcon";
import SearchIcon from "./SearchIcon";
import CoinPlaceholder from "./CoinPlaceholder";
import SwitchIcon from "./SwitchIcon";
import CandleSolidIcon from "./CandleSolidIcon";
import CandleStrokeIcon from "./CandleStrokeIcon";
import CandleUpStrokeIcon from "./CandleUpStrokeIcon";
import CandleDownStrokeIcon from "./CandleDownStrokeIcon";
import BarIcon from "./BarIcon";
import AreaIcon from "./AreaIcon";
import IndicatorIcon from "./IndicatorIcon";
import FullScreenIcon from "./FullScreenIcon";
import ChartInd2SlashIcon from "./ChartInd2SlashIcon";
import ChartInd3SlashIcon from "./ChartInd3SlashIcon";
import ChartIndFibIcon from "./ChartIndFibIcon";
import ChartIndHLine1Icon from "./ChartIndHLine1Icon";
import ChartIndHLine2Icon from "./ChartIndHLine2Icon";
import ChartIndHLine3Icon from "./ChartIndHLine3Icon";
import ChartIndPriceLineIcon from "./ChartIndPriceLineIcon";
import ChartIndSlash1Icon from "./ChartIndSlash1Icon";
import ChartIndSlash2Icon from "./ChartIndSlash2Icon";
import ChartIndSlash3Icon from "./ChartIndSlash3Icon";
import ChartIndVLine1Icon from "./ChartIndVLine1Icon";
import ChartIndVLine2Icon from "./ChartIndVLine2Icon";
import ChartIndVLine3Icon from "./ChartIndVLine3Icon";
import TrashIcon from "./TrashIcon";
import DepositIcon from "./DepositIcon";
import ListViewIcon from "./ListViewIcon";
import CardViewIcon from "./CardViewIcon";
import DotIcon from "./DotIcon";
import ExpandIcon from "./ExpandIcon";
import RewardIcon from "./RewardIcon";
import CompodingIcon from "./CompodingIcon";
import CoinIcon from "./CoinIcon";
import HeadTagIcon from "./HeadTagIcon";
import NoDataIcon from "./NoDataIcon";
import CancelOrderIcon from "./CancelOrderIcon";
import PasteIcon from "./PasteIcon";
import SuccessIcon from "./SuccessIcon";
import InfoIcon from "./InfoIcon";
import ErrorIcon from "./ErrorIcon";
import WarningIcon from "./WarningIcon";
import OverviewIcon from "./OverviewIcon";
import SpotIcon from "./SpotIcon";
import FutureIcon from "./FutureIcon";
import HistoryIcon from "./HistoryIcon";
import SupportIcon from "./SupportIcon";
import GiftIcon from "./GiftIcon";
import WalletWithdrawIcon from "./WalletWithdrawIcon"
import WalletDepositIcon from "./WalletDepositIcon"
import WalletTransferIcon from "./WalletTransferIcon"
import BoardIcon from "./BoardIcon";
import PieChartIcon from "./PieChartIcon";
import CopyIcon from "./CopyIcon"
export interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  variant?: "min" | "medium" | "max" | "off" | "2g" | "3g" | "4g" | string;
  useDarkMode?: boolean; // If true: just use black/white color
  useDarkModeFor?: 'svg' | 'path' // default is 'path'
  stroke?: string;
  displayStroke?: boolean;
}

const Icon = {
  LogoIcon,
  ArrowDownIcon,
  EarthIcon,
  MoonIcon,
  HorizontalLineIcon,
  CloseIcon,
  HomeIcon,
  ExchangeIcon,
  EarnIcon,
  WalletIcon,
  OrderIcon,
  MarketIcon,
  UserIcon,
  BankIcon,
  MenuDownIcon,
  MenuUpIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  EyeVisibleIcon,
  EyeHiddenIcon,
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
  CompodingIcon,
  RewardIcon,
  ExpandIcon,
  CoinIcon,
  HeadTagIcon,
  NoDataIcon,
  CancelOrderIcon,
  PasteIcon,
  SuccessIcon,
  InfoIcon,
  ErrorIcon,
  WarningIcon,
  OverviewIcon,
  SpotIcon,
  FutureIcon,
  HistoryIcon,
  SupportIcon,
  GiftIcon,
  BoardIcon,
  PieChartIcon,
  WalletWithdrawIcon,
  WalletDepositIcon,
  WalletTransferIcon,
  CopyIcon
};

export { Icon };
