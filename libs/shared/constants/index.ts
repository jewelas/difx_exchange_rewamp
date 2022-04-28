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

export const API_ENDPOINT = {
  GET_COUNTRY: 'https://ip2c.org/s',
  GET_PAIRS: '/api/v1/pairs',
  SIGNIN: '/api/v1/auth/login',
  SIGNUP: '/api/v1/auth/sign-up',
  FORGOT: '/api/v1/password/forgot',
  RESET_PASS: '/api/v1/password/reset',
  TWO_FACTOR: '/api/v1/auth/twofa-login',
  VERIFY_IP: '/api/v1/auth/verify-ip'
}
