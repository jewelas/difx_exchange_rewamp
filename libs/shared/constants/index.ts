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


export type EXCHANGE_LAYOUT = 'default' | 'compact' | 'pro'

export const DEFAULT_PAIR = "LTCUSDT";

export const PAIRS = {
  INITIALPAIR: 'BTCUSDT',
  CURRENCY1: 'KOKO',
  CURRENCY2: 'USDT'
}

export const QUERY_KEY = {
  COUNTRIES: 'countries',
  PAIRS: 'pairs',
  ORDER_BOOK: 'order_book',
  TRADES: 'trades',
  STAKING_HISTORY: 'staking_history',
  CHART_HISTORY: 'chart_history',
  CHART_CURRENT: 'chart_current',
  STAKING: 'STAKING',
  BALANCE: 'balance',
  OPEN_ORDERS: 'open_orders',
  MARKET_PAIRS: 'market_pairs',
  MARKET_PAIRS_INFO: (coin: string) => `market_pairs_info_${coin}`,
  CURRENCY_PAIRS: 'currency_pair',
  AVAILABLE_LANGUAGES: 'available_languages',
  CURRENCIES: 'currencies',
  MARKET_CURRENT_PRICE: (coin: string) => `market_current_price_${coin}`,
  WALLET_OVERVIEW: 'recent_transactions',
  RECENT_TRANSACTIONS: 'recent_transactions',
  COIN_INFO: (coin: string) => `coin_info_${coin}`,
}

export const ASSETS_URL = "https://media.difx.com/"

export const REFETCH = {
  _10SECS: 10000,
  _3SECS: 3000
}

export const STORE_KEY = {
  FAVORITE_PAIRS: 'favoritePairs',
  FAVORITE_SPOT_PAIRS: 'favoriteSpotPairs',
  FAVORITE_FUTURE_PAIRS: 'favoriteFuturePairs',
  LAST_PAIR: 'lastPair',
  EXCHANGE_STYLE: 'exchangeStyle',
  RECENT_TRANSACTIONS: 'recentTransactions'
}

export const API_ENDPOINT = {
  GET_COUNTRY: '/api/v1/public/country-iso',
  GET_CURRENCY_PAIRS: '/api/v1/public/fiat-currency',
  CANCEL_ALL_ORDERS: '/api/v1/order/cancel-all-order',
  GET_AVAILABLE_LANGUAGES: '/api/v1/public/lang',
  GET_ANONYMOUS_TOKEN: '/api/v1/public/anonymous',
  GET_PAIRS: 'api/v1/market/pairs',
  GET_ORDER_BOOK: (symbol: string) => `/api/v1/market/order-book?symbol=${symbol}`,
  GET_TRADES: (symbol: string) => `/api/v1/market/trades?symbol=${symbol}`,
  GET_MY_TRADES: (symbol?: string) => `/api/v1/user/trade-history${symbol ? `?symbol=${symbol}` : ''}`,
  GET_ORDER_HISTORY: (symbol?: string) => `/api/v1/user/order-history${symbol ? `?symbol=${symbol}` : ''}`,
  GET_STAKING_HISTORY: (startDate:string, endDate:string, page:number, limit:number) => `/api/v1/staking/history?end_date=${endDate}&page=${page}&limit=${limit}&start_date=${startDate}`,
  GET_STAKING_INTEREST_LIST: (startDate:string, endDate:string, page:number, limit:number) => `/api/v1/staking/interest?end_date=${endDate}&page=${page}&limit=${limit}&start_date=${startDate}`,
  GET_CHART_HISTORY: (symbol: string, resolution: string = '5m', from: number, to: number) => {
    return `api/v1/chart/normal-view?symbol=${symbol}&resolution=${resolution || '5m'}&from=${from}&to=${to}`
  },
  GET_CHART_CURRENT: (symbol: string, resolution: string = '5m') => {
    return `api/v1/chart/normal-view-current?symbol=${symbol}&resolution=${resolution}`
  },
  GET_BALANCE: '/api/v1/user/spot-balance',
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
  VERIFY_OTP: '/api/v1/auth/verify-profile-code',
  RESEND_IP_VERIFICATION_MAIL: `api/v1/auth/resend-ip-verification`,
  LOG_OUT: `/api/v1/auth/logout`,
  REFRESH_TOKEN: '/api/v1/auth/refresh',
  GET_ORDER_OPEN: (symbol?: string) => `/api/v1/user/open-orders${symbol ? `?symbol=${symbol}` : ''}`,
  GET_ORDER_STOP_LIMIT: (symbol?: string) => `/api/v1/user/sl-orders${symbol ? `?symbol=${symbol}` : ''}`,
  PLACE_ORDER_LIMIT: '/api/v1/order/limit-order',
  PLACE_ORDER_MARKET: '/api/v1/order/market-order',
  PLACE_ORDER_STOP: '/api/v1/order/sl-order',
  CANCEL_ORDER: '/api/v1/order/cancel-order',
  CANCEL_STOP_LIMIT_ORDER: '/api/v1/order/cancel-slorder',
  GET_MARKET_PAIRS: '/api/v1/market/pairs',
  GET_SELECTED_MARKET_PAIRS: (coin: string) => `/api/v1/market/pairs?symbol=${coin}`,
  GET_COIN_DETAILS: (coin: string) => `/api/v1/market/coin-detail?coin=${coin}`,
  GET_STAKING_LIST: '/api/v1/staking/list',
  ADD_FAVORITES: '/api/v1/user/favorite-pair',
  REMOVE_FAVORITES: '/api/v1/user/unfavorite-pair',
  CREATE_STAKING: '/api/v1/staking/create',
  GET_CURRENCIES: '/api/v1/market/coins',
  PREVIEW_CURRENCY: '/api/v1/market/preview-currency',
  GET_MARKET_COIN_PRICE: (coin: any) => `/api/v1/market/coin-price?coin=${coin}`,
  GET_WALLET_OVERVIEW: '/api/v1/wallet/overview',
  GET_SPOT_OVERVIEW: '/api/v1/wallet/spot-overview',
  GET_TRANSACTION_LIST: (page: number, limit: number) => `/api/v1/wallet/transaction?page=${page}&limit=${limit}`,
  GENERATE_DEPOSIT_ADDRESS: `/api/v1/wallet/deposit-address`,
  WITHDRAW_REQUEST: `/api/v1/wallet/withdraw`,
  GET_RECENT_TRANSACTIONS: `api/v1/wallet/recent-transaction`,
}