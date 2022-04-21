export interface CommonThemeInterface {
  fontFamily: string,
  fontWeight:{
    regular:number,
    medium: number,
    semiBold: number,
    bold: number
  },
  typography:{
    h1: number,
    h2: number,
    h3: number,
    h4: number,
    h5: number,
    h6: number,
    large: number,
    medium: number,
    small: number,
    xsmall: number,
  },
  shadow: {
    light: string,
    strong: string,
  }
  border: string,
  borderRadius: {
    regular: string,
    rounded: string,
    circle: string,
  },
  buttonHeight:{
    large: string,
    medium: string,
    small: string
  }
}
export interface CustomThemeInterface extends CommonThemeInterface {
  color:{
    primary: string,
    secondary: string,
    success: string,
    danger: string,
    warning: string,
    info: string,
  },
  background:{
    primary: string,
    secondary: string,
  },
  fontColor: {
    primary: string,
    secondary: string,
    muted: string,
    link: string
  },
}

// export const light : CustomThemeInterface = {
// }

// export const dark = {

// }



















//--------------------- OLD THEME --------------------------------------


// import { Theme } from "antd/lib/config-provider/context";

// export interface CustomThemeProps extends Theme {
//   currentTheme?: "light" | "dark";
//   borderColor?: string;
//   borderColorLighter?: string;
//   backgroundColor?: string;
//   backgroundColor2?: string;
//   inputBorderColor?: string;
//   inputBackgroundColor?: string;
//   textColor?: string;
//   textHoverColor?: string;
//   logoFillColor?: string;
//   titleColor?: string;
// }

// /* 
//    Note: Overriding fields value inside Theme interface (e.g: primaryColor, infoColor,...) it will affect on the whole antd component
//  */

// export const light: CustomThemeProps = {
//   currentTheme: "light",
//   backgroundColor: "#F7F7F8",
//   backgroundColor2: "#FFF",
//   borderColor: "#eee",
//   borderColorLighter: "#eee",
//   inputBorderColor: "#d9d9d9",
//   inputBackgroundColor: "#fff",
//   textColor: "#000",
//   textHoverColor: "#000",
//   logoFillColor: "#3d7eff",
//   titleColor: "#3d7eff",
//   primaryColor: "#1890F8",
// };

// export const dark: CustomThemeProps = {
//   currentTheme: "dark",
//   backgroundColor: "#161f30",
//   backgroundColor2: "#0d1421",
//   borderColor: "#000",
//   borderColorLighter: "#191E27",
//   inputBorderColor: "#161f30",
//   inputBackgroundColor: "#161f30",
//   textColor: "#fff",
//   textHoverColor: "#1890ff",
//   logoFillColor: "#fff",
//   titleColor: "#fff",
//   primaryColor: "#1890F8",
// };


