import { Theme } from 'antd/lib/config-provider/context';

export interface CustomThemeProps extends Theme {
  currentTheme? : 'light' | 'dark';
  borderColor?: string,
  backgroundColor?: string,
  backgroundColor2?: string,
  inputBorderColor?: string,
  inputBackgroundColor?: string
  textColor?: string,
  textHoverColor?: string,
  logoFillColor?: string,
  titleColor?: string,
  primaryColor?: string
}

/* 
   Note: Overriding fields value inside Theme interface (e.g: primaryColor, infoColor,...) it will affect on the whole antd component
 */

export const light: CustomThemeProps = {
  currentTheme: 'light',
  backgroundColor: '#F7F7F8',
  backgroundColor2: '#FFF',
  borderColor: '#eee',
  inputBorderColor: '#d9d9d9',
  inputBackgroundColor: '#fff',
  textColor: '#000',
  textHoverColor: '#000',
  logoFillColor: '#3d7eff',
  titleColor: '#3d7eff',
  primaryColor:'#1890F8'
}

export const dark: CustomThemeProps = {
  currentTheme: 'dark',
  backgroundColor: '#161f30',
  backgroundColor2: '#0d1421',
  borderColor: '#000',
  inputBorderColor: '#161f30',
  inputBackgroundColor: '#161f30',
  textColor: '#fff',
  textHoverColor: '#1890ff',
  logoFillColor: '#fff',
  titleColor: '#fff',
  primaryColor:'#1890F8'
}