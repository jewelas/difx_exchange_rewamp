const calcChartDateRange = (type:string) => {
  const to = Math.floor(new Date().getTime() / 1000);

  const date = new Date();
  let from = 0;
  switch (type) {
    case '5m': date.setDate(date.getDate() - 3)
      break;
    case '15m': date.setDate(date.getDate() - 6)
      break;
    case '30m': date.setDate(date.getDate() - 12)
      break;
    case '1h': date.setDate(date.getDate() - 24)
      break;
    case '1d': date.setMonth(date.getMonth() - 12)
      break;
  }
  return { to, from: Math.floor(date.getTime() / 1000) };
}


export const REFRESH_TOKEN = {
  EXPIRY_TIME: 300000,
};

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export const DEFAULT_PAIR = "BNBUSDT";

export const QUERY_KEY = {
  COUNTRIES: 'countries',
  PAIRS: 'pairs',
  TRADES: 'trades',
  CHART_HISTORY: 'chart_history',
  CHART_CURRENT: 'chart_current',
  BALANCE: 'balance',
  OPEN_ORDERS: 'open_orders'
}

export const REFETCH = {
  _10SECS: 10000,
  _3SECS: 3000
}

export const STORE_KEY = {
  FAVORITE_PAIRS: 'favoritePairs'
}

export const API_ENDPOINT = {
  GET_COUNTRY: '/api/v1/public/country-iso',
  GET_ANONYMOUS_TOKEN: '/api/v1/public/anonymous',
  GET_PAIRS: 'api/v1/market/pairs',
  GET_TRADES: (symbol: string) => `/api/v1/market/trades/${symbol}`,
  GET_MY_TRADES: (symbol:string) => `/api/v1/user/trades/${symbol}`,
  GET_CHART_HISTORY: (symbol: string, resolution: string = '5m') => {
    const { from, to } = calcChartDateRange(resolution);
    return `api/v1/chart/normal-view?symbol=ETCUSDT&resolution=${resolution || '5m'}&from=${from}&to=${to}`
  },
  GET_CHART_CURRENT: (symbol: string, resolution: string = '5m') => {
    const { from, to } = calcChartDateRange(resolution);
    return `api/v1/chart/normal-view-current?symbol=${symbol}&resolution=${resolution}`
  },
  GET_BALANCE: '/api/v1/user/balance',
  SIGNIN: '/api/v1/auth/login',
  SIGNUP_VERIFICATION: '/api/v1/auth/pre-check',
  SIGNUP: `/api/v1/auth/signup`,
  FORGOT: '/api/v1/password/forgot',
  RESET_PASS: '/api/v1/password/reset',
  TWO_FACTOR: '/api/v1/auth/verify-twofa',
  VERIFY_IP: '/api/v1/auth/verify-ip',
  REFRESH_TOKEN: '/api/v1/auth/refresh',
  GET_ORDER_OPEN: '/api/v1/user/orderbook',
  GET_ORDER_STOP_LIMIT: '/api/v1/user/stoplimits',
  PLACE_ORDER_LIMIT: '/api/v1/order/make-limit',
  PLACE_ORDER_MARKET: '/api/v1/order/make-market',
  PLACE_ORDER_STOP: '/api/v1/order/make-stop',
  CANCEL_BID_ORDER: '/api/v1/order/cancel-bid',
  CANCEL_ASK_ORDER: '/api/v1/order/cancel-ask',
  CANCEL_STOP_LIMIT_ORDER: '/api/v1/order/cancel-stop'
}