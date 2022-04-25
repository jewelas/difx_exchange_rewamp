export interface ThemeInterface {
  color: {
    primary: string;
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
  };
  background: {
    primary: string;
    secondary: string;
  };
  fontColor: {
    primary: string;
    secondary: string;
    button: string;
    muted: string;
    link: string;
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
    large: string;
    medium: string;
    small: string;
    xsmall: string;
  };
  shadow: {
    light: string;
    strong: string;
  };
  border: string;
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
  transition: string;
}

export const light: ThemeInterface = {
  color: {
    primary: "#3D7EFF",
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
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#F8FAFD",
  },
  fontColor: {
    primary: "#454552",
    secondary: "#9AA5B4",
    button: "#FFFFF",
    muted: "A1A1A1",
    link: "#3D7EFF",
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
    large: "16px",
    medium: "14px",
    small: "12px",
    xsmall: "13px",
  },
  shadow: {
    light: "0 3px 10px rgb(0,0,0,0.05)",
    strong: "0 3px 10px rgb(0,0,0,0.2)",
  },
  border: "1px solid rgba(0, 0, 0, 0.06)",
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
  transition: "all 0.2s ease-in-out",
};

export const dark: ThemeInterface = {
  color: {
    primary: "#3D7EFF",
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
  },
  background: {
    primary: "#0D1421",
    secondary: "#161F30",
  },
  fontColor: {
    primary: "#FFFFFF",
    secondary: "#9AA5B4",
    button: "#FFFFFF",
    muted: "A1A1A1",
    link: "#3D7EFF",
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
    large: "16px",
    medium: "14px",
    small: "12px",
    xsmall: "13px",
  },
  shadow: {
    light: "0 3px 10px rgb(0,0,0,0.05)",
    strong: "0 3px 10px rgb(0,0,0,0.2)",
  },
  border: "1px solid rgba(0, 0, 0, 0.06)",
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
