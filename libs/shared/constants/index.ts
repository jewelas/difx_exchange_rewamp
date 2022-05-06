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
  PAIRS: 'pairs'
}

export const FETCHING = {
  REFETCH_INTERVAL: 10000
}

export const STORE_KEY = {
  FAVORITE_PAIRS : 'favoritePairs'
}

export const API_ENDPOINT = {
  GET_COUNTRY: '/api/v1/public/country-iso',
  GET_ANONYMOUS_TOKEN: '/api/v1/public/anonymous',
  GET_PAIRS: 'api/v1/market/pairs',
  SIGNIN: '/api/v1/auth/login',
  SIGNUP: '/api/v1/auth/sign-up',
  FORGOT: '/api/v1/password/forgot',
  RESET_PASS: '/api/v1/password/reset',
  TWO_FACTOR: '/api/v1/auth/verify-twofa',
  VERIFY_IP: '/api/v1/auth/verify-ip',
  REFRESH_TOKEN: '/api/v1/auth/refresh'
}
