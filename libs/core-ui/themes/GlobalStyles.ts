import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";
import { ThemeInterface } from "./themes";

const GlobalStyles = createGlobalStyle`
    html {
        -webkit-text-size-adjust: 100%;
        font-family: "Lato", sans-serif !important;
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
    }
    body {
        font-family: "Lato", sans-serif !important;
        transform: ${({ theme }: { theme: ThemeInterface }) =>
          theme.transition} !important;
        background: ${({ theme }: { theme: ThemeInterface }) =>
          theme.background.primary} !important;
    }

    

    /* .ant-btn.ant-btn-text{
      color: ${({ theme }: { theme: ThemeInterface }) =>
        theme.fontColor.button};
      &:hover{
        color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary};
      }
    } */

    //---------------------- Ant Design Custom Design -------------------------------------------------

    .ant-menu-vertical{
      border-right: unset !important;
    }
    .ant-btn{
      background: transparent !important;
      color: ${({ theme }: { theme: ThemeInterface }) =>theme.color.primary} !important;
      border-radius: ${({ theme }: { theme: ThemeInterface }) => theme.borderRadius.regular} !important;
      height: ${({ theme }: { theme: ThemeInterface }) => theme.buttonHeight.medium} !important;
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.primary};
      box-shadow: none !important;
    }

    .ant-btn:hover{
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.primary};
    }

    .ant-btn-sm{
      height: ${({ theme }: { theme: ThemeInterface }) => theme.buttonHeight.small} !important;
    }

    .ant-btn-lg{
      height: ${({ theme }: { theme: ThemeInterface }) => theme.buttonHeight.large} !important;
    }

    .ant-btn-text{
      color: ${({ theme }: { theme: ThemeInterface }) =>theme.fontColor.primary} !important;
      border: none !important;
    }

    .ant-btn-primary{
      color: ${({ theme }: { theme: ThemeInterface }) =>
        theme.fontColor.button} !important;
      border-color: ${({ theme }: { theme: ThemeInterface }) =>
        theme.color.primary} !important;
      background: ${({ theme }: { theme: ThemeInterface }) =>
        theme.color.primary} !important;
    }

    .ant-btn-primary[disabled], .ant-btn-primary[disabled]:hover, .ant-btn-primary[disabled]:focus, .ant-btn-primary[disabled]:active{
      color: ${({ theme }: { theme: ThemeInterface }) =>
        theme.fontColor.button} !important;
      border-color: ${({ theme }: { theme: ThemeInterface }) =>
        theme.color.primary} !important;
      background: ${({ theme }: { theme: ThemeInterface }) =>
        theme.color.primary} !important;
      opacity: 0.5;
    }
    .ant-input{
      height: ${({ theme }: { theme: ThemeInterface }) => theme.inputFieldHeight} !important;
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      border-radius: ${({ theme }: { theme: ThemeInterface }) => theme.borderRadius.regular} !important;
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important;
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
    }

    .ant-input:hover{
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.primary} !important;
    }

    .ant-input-affix-wrapper-borderless, 
    .ant-input-affix-wrapper-borderless:hover,
    .ant-input-affix-wrapper-borderless:focus, 
    .ant-input-affix-wrapper-borderless-focused, 
    .ant-input-affix-wrapper-borderless-disabled, 
    .ant-input-affix-wrapper-borderless[disabled]{
      height: ${({ theme }: { theme: ThemeInterface }) => theme.inputFieldHeight} !important;
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      border-radius: ${({ theme }: { theme: ThemeInterface }) => theme.borderRadius.regular} !important;
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important;
    }

    .ant-input-affix-wrapper > input.ant-input{
      border: none !important;
    }

    .ant-select-selector{
      height: ${({ theme }: { theme: ThemeInterface }) => theme.inputFieldHeight};
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      border-radius: ${({ theme }: { theme: ThemeInterface }) => theme.borderRadius.regular} !important;
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important;
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
    }
    .ant-select-dropdown{
        background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
        .ant-select-item-option-active:not(.ant-select-item-option-disabled){
          background: ${({ theme }) => theme.color.disabled};
        }
        .ant-select-item.ant-select-item-option.ant-select-item-option-selected{
          background: ${({ theme }) => theme.color.selected};
        }
        .ant-select-item-option-content{
          .val{
            color:${({ theme }: { theme: ThemeInterface }) =>
              theme.fontColor.primary} !important;
          }
        }
        .rc-virtual-list-holder{
          .ant-select-item-option.ant-select-item-option-disabled{
            opacity: 0.2;
          }
          .ant-select-item-option{
            color:${({ theme }: { theme: ThemeInterface }) =>
              theme.fontColor.primary} !important;
          }
        }
      }

    .ant-select-arrow {
      svg {
        fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
      }
    }

    .ant-switch-checked{
      background: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
    }

    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
      background-color:unset !important;
    }

    a.ant-typography, .ant-typography a{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.link} !important;
    }
`;

export { GlobalStyles };