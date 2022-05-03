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

    scrollbar-color: ${({ theme }: { theme: ThemeInterface }) => theme.scrollbar.bar} ${({ theme }: { theme: ThemeInterface }) => theme.scrollbar.background};
    scrollbar-width: thin;
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background: ${({ theme }: { theme: ThemeInterface }) => theme.scrollbar.background};
    }

    ::-webkit-scrollbar-corner {
      background: ${({ theme }: { theme: ThemeInterface }) => theme.scrollbar.background};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }: { theme: ThemeInterface }) => theme.scrollbar.bar};
      border-radius: 4px;
      background-clip: content-box;
    }

    //---------------------- Ant Design Custom Design -------------------------------------------------

    .ant-btn{
      /* background: transparent !important; */
      /* color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important; */
      /* border-radius: ${({ theme }: { theme: ThemeInterface }) => theme.borderRadius.regular} !important; */
      height: ${({ theme }: { theme: ThemeInterface }) => theme.buttonHeight.medium} !important;
      /* border: ${({ theme }: { theme: ThemeInterface }) => theme.border.primary}; */
      /* box-shadow: none !important; */

      &.success{
        background: ${({ theme }: { theme: ThemeInterface }) => theme.successColor};
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.successColor};
        &:hover, &:focus, &:active{
          background: ${({ theme }: { theme: ThemeInterface }) => theme.successColor};
          border-color: ${({ theme }: { theme: ThemeInterface }) => theme.successColor};
          &:not([disabled]){
            filter: brightness(80%);
          }
        }
      }
    }

    .ant-btn:hover{
      /* border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important; */
    }

    .ant-btn-sm{
      height: ${({ theme }: { theme: ThemeInterface }) => theme.buttonHeight.small} !important;
    }

    .ant-btn-lg{
      height: ${({ theme }: { theme: ThemeInterface }) => theme.buttonHeight.large} !important;
    }

    .ant-btn-text{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
      border: none !important;
    }

    .ant-btn-primary{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.button} !important;
      /* border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important; */
      /* background: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important; */
    }

    .ant-btn-primary[disabled], .ant-btn-primary[disabled]:hover, .ant-btn-primary[disabled]:focus, .ant-btn-primary[disabled]:active{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.button} !important;
      border-color: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      opacity: 0.8;
    }
    
    .ant-input{
      height: ${({ theme }: { theme: ThemeInterface }) => theme.inputFieldHeight} !important;
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      border-radius: ${({ theme }: { theme: ThemeInterface }) => theme.borderRadius.regular} !important;
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important;
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
    }
    .ant-input-suffix{
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

    .ant-input-affix-wrapper{
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important;
      .ant-input-prefix{
        svg{
          height: 20px;
          width: 20px;
          fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important;
        }
      }
    }

    .ant-table-placeholder{
      .ant-empty-description{
        color: ${({ theme }) => theme.fontColor.primary}
      }
    }
    .ant-tabs{
      .ant-tabs-tab{
        padding: 5px 0;
        color: ${({ theme }) => theme.fontColor.primary};
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        &.ant-tabs-tab-active .ant-tabs-tab-btn{
          color: ${({ theme }) => theme.color.primary};
        }
        &:hover{
          color: ${({ theme }) => theme.color.primary};
        }
      }
      .ant-tabs-ink-bar{
        background: ${({ theme }) => theme.color.primary};
      }
      .ant-tabs-tab + .ant-tabs-tab{
        margin: 0 0 0 20px;
      }
      .ant-tabs-nav{
        ::before{
          border:unset !important;
        }
      }
    }
    .ant-table{
          background: transparent !important;
          .ant-table-cell-scrollbar{
            box-shadow: unset;
          }
          .ant-table-thead{
            th{
              background: transparent !important;
              color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
              border-bottom: unset;
              padding: 16px 0;
              .ant-table-column-sorters{
                justify-content: unset;
                .ant-table-column-title{
                  flex: unset !important;
                }
              }
            }
          }
          .ant-table-tbody{
            tr{
              line-height: 0.5;
              td{
                border:unset;
                background: transparent !important;
                color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
                padding: 7px 0;
              }
            }
          }
          .ant-table-body{
            overflow: hidden !important;
            padding-right: 5px;
            &:hover{
              overflow: hidden scroll !important;
              padding-right: 0;
              ::-webkit-scrollbar {
                  width: 5px;
                  background: transparent;
              }
            }
          }
        }

    .ant-select-selector{
      height: ${({ theme }: { theme: ThemeInterface }) => theme.inputFieldHeight} !important;
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      border-radius: ${({ theme }: { theme: ThemeInterface }) => theme.borderRadius.regular} !important;
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important;
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
    }

    .ant-select-arrow {
      svg {
        fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
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

    .ant-slider{
      .ant-slider-mark{
        .ant-slider-mark-text{
          color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
        }
      }
    }

    .ant-menu-vertical{
      border: none !important;
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
            color:${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
          }
        }
        .rc-virtual-list-holder{
          .ant-select-item-option.ant-select-item-option-disabled{
            opacity: 0.2;
          }
          .ant-select-item-option{
            color:${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
          }
        }
      }

      .ant-popover.ant-popover-placement-bottom{
        .ant-popover-content{
          margin-top: -10px;
          .ant-popover-arrow{
            margin-top: -10px;
          }
        }
      }
      .ant-popover-content{
        .ant-popover-arrow .ant-popover-arrow-content{
          &:before{
            background:unset;
          }
          background: ${({ theme }) => theme.background.primary};
        }
        .ant-popover-inner{
          background: ${({ theme }) => theme.background.primary};
          .check-list-group{
            .check-item{
              margin: 5px 0;
              display:flex;
              .icon{
                padding-top: 4px;
                margin-right: 8px;
              }
              .content{
                margin-top: 3px;
                font-size: 12px;
                font-weight: 400;
                line-height: 20px;
                color: #DB5354 !important;
                &.success{
                  color: #21C198 !important;
                }
              }
            }
          }
        }
      }

    .ant-layout-header{
      z-index: 9999;
    }
    .ant-notification-notice{
      margin-top: 62px;
    }


`;

export { GlobalStyles };