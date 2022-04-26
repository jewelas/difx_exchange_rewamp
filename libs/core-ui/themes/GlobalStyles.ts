import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";
// import { Color } from "../components/Color";
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

    .ant-btn{
      background: transparent !important;
      color: ${({ theme }: { theme: ThemeInterface }) =>theme.color.primary} !important;
      border-radius: ${({ theme }: { theme: ThemeInterface }) => theme.borderRadius.regular} !important;
      height: ${({ theme }: { theme: ThemeInterface }) => theme.buttonHeight.medium} !important;
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.primary} !important;
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
      height: ${({ theme }: { theme: ThemeInterface }) => theme.inputFieldHeight} !important;
    }

    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
      background-color:unset !important;
    }

    a.ant-typography, .ant-typography a{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.link} !important;
    }
`;

export { GlobalStyles };

// const GlobalStyles = createGlobalStyle`
//     html {
//         -webkit-text-size-adjust: 100%;
//         font-family: "Lato", sans-serif !important;
//         line-height: 1.5;
//         tab-size: 4;
//         scroll-behavior: smooth;
//     }
//     body {
//         font-family: "Lato", sans-serif !important;
//     }

//     .noselect,
//     button,
//     div {
//         -webkit-touch-callout: none; /* iOS Safari */
//         -webkit-user-select: none; /* Safari */
//         -khtml-user-select: none; /* Konqueror HTML */
//         -moz-user-select: none; /* Firefox */
//         -ms-user-select: none; /* Internet Explorer/Edge */
//         user-select: none; /* Non-prefixed version, currently
//                                         supported by Chrome and Opera */
//     }

//     .ant-btn.ant-btn-text{
//         color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.button};
//         &:hover{
//             color: ${({ theme }: { theme: ThemeInterface }) =>
//               theme.fontColor.button} !important;
//         }
//     }
//     .ant-btn-text:focus, .ant-btn-text:hover{
//       color: unset !important;
//     }

//     .ant-form-item {

//         // Input
//         .ant-input{
//           height: 48px;
//           font-weight: 400;
//           font-size: 14px;
//           line-height: 22px;
//         }
//         &:not(.ant-form-item-has-error) {
//           .ant-form-item-control-input-content {
//             input {
//               background: ${({ theme }: { theme: ThemeInterface }) =>
//                 theme.inputbackground.primary};
//               color: ${({ theme }: { theme: ThemeInterface }) =>
//                 theme.fontColor.primary};;
//               border-color: ${({ theme }: { theme: ThemeInterface }) =>
//                 theme.inputBorderColor};
//               box-shadow: unset;
//             }
//           }
//         }

//         &.ant-form-item-has-error {
//           .ant-form-item-control-input-content {
//             input {
//               background: ${({ theme }: { theme: ThemeInterface }) =>
//                 theme.inputbackground.primary};
//               color: ${({ theme }: { theme: ThemeInterface }) =>
//                 theme.fontColor.primary};
//               border-color: #ff4d4f !important;
//             }
//           }
//           .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input, .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover{
//             background: ${({ theme }: { theme: ThemeInterface }) =>
//               theme.inputbackground.primary};
//           }
//         }
//       } //end .ant-form-item

//       // Select
//       .ant-select {
//           .ant-select-selection-placeholder{
//             z-index: 1;
//           }
//           .ant-select-selector {
//             background: ${({ theme }: { theme: ThemeInterface }) =>
//               theme.inputbackground.primary} !important;
//             border-color: ${({ theme }: { theme: ThemeInterface }) =>
//               theme.inputBorderColor} !important;
//             color: ${({ theme }: { theme: ThemeInterface }) =>
//               theme.fontColor.primary};
//             box-shadow: unset !important;
//           }
//           .ant-select-arrow {
//             svg {
//               fill: ${({ theme }: { theme: ThemeInterface }) =>
//                 theme.fontColor.primary};
//             }
//           }
//       } // end .ant-select

//       .ant-select-dropdown{
//         background: ${({ theme }: { theme: ThemeInterface }) =>
//           theme.inputbackground.primary} !important;
//         .ant-select-item-option-active:not(.ant-select-item-option-disabled){
//           background: ${({ theme }) =>
//             theme.currentTheme === "light"
//               ? "#f5f5f5"
//               : "rgba(13, 20, 33, 0.6)"};
//         }
//         .ant-select-item.ant-select-item-option.ant-select-item-option-selected{
//           background: ${({ theme }) =>
//             theme.currentTheme === "light"
//               ? "var(--ant-primary-1)"
//               : "rgba(13, 20, 33, 0.6)"};
//         }
//         .ant-select-item-option-content{
//           .val{
//             color:${({ theme }: { theme: ThemeInterface }) =>
//               theme.fontColor.primary} !important;
//           }
//         }
//         .rc-virtual-list-holder{
//           .ant-select-item-option.ant-select-item-option-disabled{
//             opacity: 0.2;
//           }
//           .ant-select-item-option{
//             color:${({ theme }: { theme: ThemeInterface }) =>
//               theme.fontColor.primary} !important;
//           }
//         }
//       }

//     // Button
//     button.ant-btn{
//       height: 48px;
//       &.with-icon{
//         background: ${({ theme }: { theme: ThemeInterface }) =>
//           theme.inputbackground.primary} !important;
//         border-color: ${({ theme }: { theme: ThemeInterface }) =>
//           theme.inputBorderColor} !important;
//       }
//       &[disabled]{
//         background-color: ${({ theme }: { theme: ThemeInterface }) =>
//           theme.inputBorderColor};
//         border-color: ${({ theme }: { theme: ThemeInterface }) =>
//           theme.inputBorderColor};
//         color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
//         opacity: 0.5;
//         &:hover{
//           background-color: ${({ theme }: { theme: ThemeInterface }) =>
//             theme.inputBorderColor};
//           border-color: ${({ theme }: { theme: ThemeInterface }) =>
//             theme.inputBorderColor};
//           color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
//         }
//       }
//     } // end button.ant-btn

//     // Popover content
//     .ant-popover-content{
//       .ant-popover-arrow .ant-popover-arrow-content{
//         &:before{
//           background:unset;
//         }
//         background: ${({ theme }) => theme.inputbackground.primary};
//       }
//       .ant-popover-inner{
//         background: ${({ theme }) => theme.inputbackground.primary};
//         .check-list-group{
//           .check-item{
//             margin: 5px 0;
//             display:flex;
//             .icon{
//               padding-top: 4px;
//               margin-right: 8px;
//             }
//             .content{
//               margin-top: 3px;
//               font-size: 12px;
//               font-weight: 400;
//               line-height: 20px;
//               color: ${Color.red.failure} !important;
//               &.success{
//                 color: ${Color.green.success} !important;
//               }
//             }
//           }
//         }
//       }
//     } // end ant-popover-content

//     // Notification
//     .ant-notification{
//       margin-top: 64px !important;
//       .ant-notification-notice{
//         .ant-notification-notice-message{
//           color: ${({ theme }) => theme.fontColor.primary};
//         }
//         color: ${({ theme }) => theme.fontColor.primary};
//         background: ${({ theme }) => theme.background.secondary};
//       }
//     }

//     .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
//       background-color:unset !important;
//     }
//     .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left{
//       border-right: unset !important;
//     }
//     .ant-form-item-control-input-content{
//       .ant-input-affix-wrapper.ant-input-password{
//         background: ${({ theme }) => theme.inputbackground.primary} !important;
//         &:not(.ant-input-affix-wrapper-status-error){
//           border: unset;
//         }
//         svg path{
//           fill: ${({ theme }) => theme.fontColor.primary} !important;
//         }
//       }
//       .ant-input-affix-wrapper-focused, .ant-input-affix-wrapper:focus{
//         box-shadow: unset;
//       }
//     }
//     .ant-menu-item:active, .ant-menu-submenu-title:active{
//       background: transparent !important;
//     }
// `;

// export { GlobalStyles };
