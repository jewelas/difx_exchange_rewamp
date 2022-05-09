import { ReactElement } from "react";
import { IconProps } from ".";

interface CoinIconProps extends IconProps {
  coin?: string | 'USDT' | 'ADA' | 'ETH' | 'ADA' | 'LINK'
}

const getIcon = (coinName:string, width: number, height: number) : ReactElement => {
  const coins: {[key:string]: ReactElement} = {
    USDT: <svg width={width} height={height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 0C26.3884 0 34 7.61158 34 17C34 26.3884 26.3881 34 17 34C7.61192 34 0 26.3905 0 17C0 7.60954 7.61056 0 17 0Z" fill="#53AE94" />
      <path d="M19.0951 14.7337V12.2048H24.8782V8.35156H9.13075V12.2048H14.9145V14.7317C10.214 14.9476 6.67969 15.8785 6.67969 16.9937C6.67969 18.1089 10.2157 19.0398 14.9145 19.2571V27.3576H19.0965V19.2564C23.7885 19.0398 27.3157 18.1096 27.3157 16.9954C27.3157 15.8812 23.7885 14.951 19.0965 14.7344L19.0951 14.7337ZM19.0965 18.5703V18.5682C18.9785 18.5757 18.3723 18.6121 17.0225 18.6121C15.9433 18.6121 15.1841 18.5815 14.9165 18.5675V18.5709C10.7638 18.387 7.66399 17.6638 7.66399 16.7985C7.66399 15.9332 10.7641 15.2111 14.9165 15.0268V17.8505C15.1885 17.8692 15.9664 17.9151 17.0402 17.9151C18.3298 17.9151 18.9782 17.8614 19.0972 17.8505V15.0268C23.2418 15.2114 26.3344 15.9353 26.3344 16.7975C26.3344 17.6597 23.2404 18.3839 19.0972 18.5686" fill="white" />
    </svg>
  }
  return coins[coinName]
}

function Icon({
  width = 34,
  height = 34,
  coin = 'USDT',
}: CoinIconProps) {
  return getIcon(coin, width, height)
}

export default Icon;
