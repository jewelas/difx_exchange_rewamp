const calcChartDateRange = (type: string) => {
  const to = Math.floor(new Date().getTime() / 1000);

  const date = new Date();
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

export const ANONYMOUS_TOKEN_EXPIRY = 162000000

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export const DEFAULT_PAIR = "DIFXUSDT";

export const QUERY_KEY = {
  COUNTRIES: 'countries',
  PAIRS: 'pairs',
  TRADES: 'trades',
  CHART_HISTORY: 'chart_history',
  CHART_CURRENT: 'chart_current',
  STAKING: 'STAKING',
  BALANCE: 'balance',
  OPEN_ORDERS: 'open_orders',
  MARKET_PAIRS: 'market_pairs',
  MARKET_PAIRS_INFO: (coin: string) => `market_pairs_info_${coin}`,
  CURRENCY_PAIRS: 'currency_pair',
  AVAILABLE_LANGUAGES: 'available_languages'
}

export const ASSETS_URL = "https://media.difx.com/"

export const REFETCH = {
  _10SECS: 10000,
  _3SECS: 3000
}

export const STORE_KEY = {
  FAVORITE_PAIRS: 'favoritePairs',
  LAST_PAIR: 'lastPair',
  EXCHANGE_STYLE: 'exchangeStyle'
}

export const API_ENDPOINT = {
  GET_COUNTRY: '/api/v1/public/country-iso',
  GET_CURRENCY_PAIRS: '/api/v1/public/fiat-currency',
  GET_AVAILABLE_LANGUAGES: '/api/v1/public/lang',
  GET_ANONYMOUS_TOKEN: '/api/v1/public/anonymous',
  GET_PAIRS: 'api/v1/market/pairs',
  GET_TRADES: (symbol: string) => `/api/v1/market/trades?symbol=${symbol}`,
  GET_MY_TRADES: (symbol?: string) => `/api/v1/user/trade-history${symbol ? `?symbol=${symbol}` : ''}`,
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
  GET_LOGIN_QR: '/api/v1/auth/qr',
  SIGNUP_VERIFICATION: '/api/v1/auth/pre-check',
  RESEND_SIGNUP_VERIFICATION:`api/v1/auth/resend-pre-check`,
  SIGNUP: `/api/v1/auth/signup`,
  FORGOT: '/api/v1/auth/forgot-password',
  VERIFY_FORGOT: '/api/v1/auth/verify-code',
  RESEND_FORGOT_OTP: `api/v1/auth/resend-forgot-password`,
  RESET_PASS: '/api/v1/auth/reset-password',
  TWO_FACTOR: '/api/v1/auth/verify-twofa',
  VERIFY_IP: '/api/v1/auth/verify-ip',
  RESEND_IP_VERIFICATION_MAIL: `api/v1/auth/resend-ip-verification`,
  REFRESH_TOKEN: '/api/v1/auth/refresh',
  GET_ORDER_OPEN: (symbol?: string) => `/api/v1/user/open-orders${symbol ? `?symbol=${symbol}` : ''}`,
  GET_ORDER_STOP_LIMIT: (symbol?: string) => `/api/v1/user/sl-orders${symbol ? `?symbol=${symbol}` : ''}`,
  PLACE_ORDER_LIMIT: '/api/v1/order/limit-order',
  PLACE_ORDER_MARKET: '/api/v1/order/market-order',
  PLACE_ORDER_STOP: '/api/v1/order/sl-order',
  CANCEL_BID_ORDER: '/api/v1/order/cancel-bid',
  CANCEL_ASK_ORDER: '/api/v1/order/cancel-ask',
  CANCEL_STOP_LIMIT_ORDER: '/api/v1/order/cancel-stop',
  GET_MARKET_PAIRS: '/api/v1/market/pairs',
  GET_SELECTED_MARKET_PAIRS: (coin: string) => `/api/v1/market/pair-detail?coin=${coin}`,
  GET_STAKING_LIST: '/api/v1/staking/list',
  ADD_FAVORITES: '/api/v1/user/favorite-pair',
  REMOVE_FAVORITES: '/api/v1/user/unfavorite-pair',
  CREATE_STAKING: '/api/v1/staking/create',
}