import LogoIcon from './LogoIcon';
import ArrowDownIcon from './ArrowDownIcon';
import EarthIcon from './EarthIcon';
import MoonIcon from './MoonIcon';
import HorizontalLineIcon from './HorizontalLineIcon';
import CloseIcon from './CloseIcon';
import HomeIcon from './HomeIcon';
import ExchangeIcon from './ExchangeIcon';
import EarnIcon from './EarnIcon';
import WalletIcon from './WalletIcon';
import OrderIcon from './OrderIcon';
import MarketIcon from './MarketIcon';
import UserIcon from './UserIcon';
import BankIcon from './BankIcon';
import MenuDownIcon from './MenuDownIcon';
import MenuUpIcon from './MenuUpIcon';
import CheckCircleIcon from './CheckCircleIcon';
import CloseCircleIcon from './CloseCircleIcon';
import EyeHiddenIcon from './EyeHiddenIcon';
import EyeVisibleIcon from './EyeVisibleIcon';
import LightIcon from './LightIcon';
import LockIcon from './LockIcon';
import QRCodeIcon from './QRCodeIcon';
import NotificationIcon from './NotificationIcon';
import SettingIcon from './SettingIcon';
import DownloadIcon from './DownloadIcon';
import OrderBuySellIcon from './OrderBuySellIcon';
import OrderBuyIcon from './OrderBuyIcon';
import OrderSellIcon from './OrderSellIcon';
import WifiIcon from './WifiIcon';

export interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  variant?: 'min' | 'medium' | 'max' | 'off' | '2g' | '3g' | '4g' | string;
  useDarkMode?: boolean; // If true: just use black/white color
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
  WifiIcon
}

export { Icon }