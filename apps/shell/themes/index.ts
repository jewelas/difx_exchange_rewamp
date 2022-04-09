import { Theme } from 'antd/lib/config-provider/context';

interface CustomThemeProps extends Theme {
    borderColor?: string,
    backgroundColor?: string,
    backgroundColor2?:string,
    textColor?: string
}

/* 
   Note: Overriding fields value inside Theme interface (e.g: primaryColor, infoColor,...) it will affect on the whole antd component
 */

export const light: CustomThemeProps = {
    backgroundColor: '#F7F7F8',
    backgroundColor2: '#FFF',
    borderColor: '#eee',
    textColor: '#000',
}

export const dark: CustomThemeProps = {
    backgroundColor: '#161f30',
    backgroundColor2: '#0d1421',
    borderColor: '#000',
    textColor: '#fff'
}