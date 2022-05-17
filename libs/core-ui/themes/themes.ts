import { Theme } from 'antd/lib/config-provider/context';

/* 
   Note: Overriding fields value inside Theme interface (e.g: primaryColor, infoColor,...) it will affect on the whole antd component
 */
export interface ThemeInterface extends Theme {
  color: {
    primary: string;
    primaryLight: string,
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    primaryHover: string;
    successHover: string;
    dangerHover: string;
    primaryActive: string;
    successActive: string;
    dangerActive: string;
    primaryDisabled: string;
    successDisabled: string;
    dangerDisabled: string;
    disabled: string;
    selected: string;
    InputPlaceholder: string
    rowHover: string
  };
  scrollbar: {
    bar: string;
    background: string
  }
  background: {
    primary: string;
    secondary: string;
    space: string;
    body: string,
    white: string,
    star: string
  };
  fontColor: {
    primary: string;
    secondary: string;
    button: string;
    muted: string;
    link: string;
    invert: string;
  };
  fontWeight: {
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
  };
  typography: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    xlarge: string,
    large: string;
    medium: string;
    small: string;
    xsmall: string;
  };
  shadow: {
    light: string;
    strong: string;
    accent: string
  };
  border: {
    primary: string,
    secondary: string,
    color: string
  };
  borderRadius: {
    regular: string;
    rounded: string;
    circle: string;
  };
  buttonHeight: {
    large: string;
    medium: string;
    small: string;
  };
  chart: {
    line: string;
  },
  loadingSkeleton:{
    base: string,
    highLight: string
  },
  inputFieldHeight: string,
  otpBoxSize: string,
  transition: string;
}

export const light: ThemeInterface = {

  // antd color
  successColor: "#21C198",
  primaryColor: "#3D7EFF",
  errorColor: "#DB5354",

  color: {
    primary: "#3D7EFF",
    primaryLight: "#E0EFFF",
    secondary: "#FAAD14",
    success: "#21C198",
    danger: "#DB5354",
    warning: "#FAAD14",
    info: "#124CBF",
    primaryHover: "#125AEB",
    successHover: "#19D9A8",
    dangerHover: "#FF6666",
    primaryActive: "#0973DD",
    successActive: "#21C198",
    dangerActive: "#DB5354",
    primaryDisabled: "#E8F3FE",
    successDisabled: "#E8F8F2",
    dangerDisabled: "#FFF3F3",
    disabled: "#f5f5f5",
    selected: "var(--ant-primary-1)",
    InputPlaceholder: "#8C8C8C",
    rowHover: "rgba(0,0,0,0.1)"
  },
  scrollbar: {
    bar: "#999",
    background: "#eee"
  },
  chart: {
    line: "rgba(0,0,0,0.1)"
  },
  loadingSkeleton:{
    base: "#ebebeb",
    highLight: "#f5f5f5"
  },
  background: {
    primary: "#F8FAFD",
    secondary: "#FFFFFF",
    space: "#F3F6FB",
    body: "#F3F6FB",
    white: "#FFFFFF",
    star: "#FFC107"
  },
  fontColor: {
    primary: "#454552",
    secondary: "#9AA5B4",
    button: "#FFFFFF",
    muted: "#9AA5B4",
    link: "#3D7EFF",
    invert: "#161F30"
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  typography: {
    h1: "56px",
    h2: "46px",
    h3: "38px",
    h4: "30px",
    h5: "24px",
    h6: "20px",
    xlarge: "22px",
    large: "16px",
    medium: "14px",
    small: "12px",
    xsmall: "10px",
  },
  shadow: {
    light: "0 3px 10px rgb(0,0,0,0.05)",
    strong: "0 3px 10px rgb(0,0,0,0.2)",
    accent: "0 3px 10px #3D7EFF",
  },
  border: {
    primary: "1px solid #3D7EFF",
    secondary: "1px solid rgba(0, 0, 0, 0.06)",
    color: "rgba(0, 0, 0, 0.06)"
  },
  borderRadius: {
    regular: "2px",
    rounded: "10px",
    circle: "50%",
  },
  buttonHeight: {
    large: "48px",
    medium: "42px",
    small: "32px",
  },
  inputFieldHeight: "48px",
  otpBoxSize: "63px",
  transition: "all 0.2s ease-in-out",
};

export const dark: ThemeInterface = {
  
  // antd color
  successColor: "#21C198",
  primaryColor: "#3D7EFF",
  errorColor: "#DB5354",

  color: {
    primary: "#3D7EFF",
    primaryLight: "#E0EFFF",
    secondary: "#FAAD14",
    success: "#21C198",
    danger: "#DB5354",
    warning: "#FAAD14",
    info: "#124CBF",
    primaryHover: "#125AEB",
    successHover: "#19D9A8",
    dangerHover: "#FF6666",
    primaryActive: "#0973DD",
    successActive: "#21C198",
    dangerActive: "#DB5354",
    primaryDisabled: "#E8F3FE",
    successDisabled: "#E8F8F2",
    dangerDisabled: "#FFF3F3",
    disabled: "rgba(13, 20, 33, 0.6)",
    selected: "rgba(13, 20, 33, 0.6)",
    InputPlaceholder: "#8C8C8C",
    rowHover: "rgba(255,255,255,0.1)"
  },
  scrollbar: {
    bar: "#464D5F",
    background: "#000",
  },
  chart: {
    line: "rgba(255,255,255,0.1)"
  },
  loadingSkeleton:{
    base: "rgba(0,0,0,0.15)",
    highLight: "rgba(0,0,0,0.05)"
  },
  background: {
    primary: "#161F30",
    secondary: "#0D1421",
    space: "#000",
    body: "#161F30",
    white: "#FFFFFF",
    star: "#FFC107"
  },
  fontColor: {
    primary: "#FFFFFF",
    secondary: "#9AA5B4",
    button: "#FFFFFF",
    muted: "#9AA5B4",
    link: "#3D7EFF",
    invert: "#FFFFFF"
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  typography: {
    h1: "56px",
    h2: "46px",
    h3: "38px",
    h4: "30px",
    h5: "24px",
    h6: "20px",
    xlarge: "22px",
    large: "16px",
    medium: "14px",
    small: "12px",
    xsmall: "10px",
  },
  shadow: {
    light: "0 3px 10px rgb(0,0,0,0.05)",
    strong: "0 3px 10px rgb(0,0,0,0.2)",
    accent: "0 3px 10px #3D7EFF",
  },
  border: {
    primary: "1px solid #3D7EFF",
    secondary: "1px solid #161F30",
    color: "rgba(255,255,255,0.1)"
  },
  borderRadius: {
    regular: "2px",
    rounded: "10px",
    circle: "50%",
  },
  buttonHeight: {
    large: "48px",
    medium: "42px",
    small: "38px",
  },
  inputFieldHeight: "48px",
  otpBoxSize: "58px",
  transition: "all 0.2s ease-in-out",
};

//--------------------- OLD THEME --------------------------------------

// import { Theme } from "antd/lib/config-provider/context";

// export interface ThemeInterface extends Theme {
//   currentTheme?: "light" | "dark";
//   borderColor?: string;
//   borderColorLighter?: string;
//   background.primary?: string;
//   background.secondary?: string;
//   inputBorderColor?: string;
//   inputbackground.primary?: string;
//   fontColor.primary?: string;
//   textHoverColor?: string;
//   logoFillColor?: string;
//   titleColor?: string;
// }

// /*
//    Note: Overriding fields value inside Theme interface (e.g: primaryColor, infoColor,...) it will affect on the whole antd component
//  */

// export const light: ThemeInterface = {
//   currentTheme: "light",
//   background.primary: "#F7F7F8",
//   background.secondary: "#FFF",
//   borderColor: "#eee",
//   borderColorLighter: "#eee",
//   inputBorderColor: "#d9d9d9",
//   inputbackground.primary: "#fff",
//   fontColor.primary: "#000",
//   textHoverColor: "#000",
//   logoFillColor: "#3d7eff",
//   titleColor: "#3d7eff",
//   primaryColor: "#1890F8",
// };

// export const dark: ThemeInterface = {
//   currentTheme: "dark",
//   background.primary: "#161f30",
//   background.secondary: "#0d1421",
//   borderColor: "#000",
//   borderColorLighter: "#191E27",
//   inputBorderColor: "#161f30",
//   inputbackground.primary: "#161f30",
//   fontColor.primary: "#fff",
//   textHoverColor: "#1890ff",
//   logoFillColor: "#fff",
//   titleColor: "#fff",
//   primaryColor: "#1890F8",
// };
