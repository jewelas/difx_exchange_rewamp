import LogoIcon from './LogoIcon';
import ArrowDownIcon from './ArrowDownIcon';
import EarthIcon from './EarthIcon';
import MoonIcon from './MoonIcon';

export interface IconProps {
  color?: string;
  rotateDegree?: number;
  width?: number;
  height?: number;
  className?: string;
  fillColorClassName?: string;
  round?: boolean;
}

export {
  LogoIcon,
  ArrowDownIcon,
  EarthIcon,
  MoonIcon
}