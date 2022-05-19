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
        theme.background.body} !important;
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
    .text-muted{color:${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary};}

    //---------------------- Ant Design Custom Design -------------------------------------------------
    .ant-checkbox-wrapper{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
    }
    .ant-typography.ant-typography-secondary{color:${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important;}
    .ant-typography{color:${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};}
    .common-table{
    tr th, tr td{border-bottom:${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important;}
    tr{
      padding:0 30px
    }
    .ant-table .ant-table-thead th{color:${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important;padding:15px 0;font-weight:500;font-size:16px;background:${({ theme }: { theme: ThemeInterface }) => theme.table.head} !important}
    .ant-table .ant-table-thead th:first-child{
      padding-left: 20px;
    }
    .ant-table .ant-table-thead th:last-child{
      padding-right: 20px;
    }
    .ant-table-measure-row td{border-bottom:none !important}
    .ant-tag {
        font-size: 14px;
        padding: 7px 20px;
      &.roundtag{
        border-radius: 35px;
        border:none
      }
      &.ant-tag-green{background:${({ theme }: { theme: ThemeInterface }) => theme.color.successDisabled};color:${({ theme }: { theme: ThemeInterface }) => theme.color.success};}
      &.ant-tag-red{background:${({ theme }: { theme: ThemeInterface }) => theme.color.dangerDisabled};color:${({ theme }: { theme: ThemeInterface }) => theme.color.danger};}
    }
    }

    .ant-btn{
      background: transparent !important;
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
      border-radius: ${({ theme }: { theme: ThemeInterface }) => theme.borderRadius.regular} !important;
      height: ${({ theme }: { theme: ThemeInterface }) => theme.buttonHeight.medium} !important;
      box-shadow: none !important;

      &.success{
        background: ${({ theme }: { theme: ThemeInterface }) => theme.successColor} !important;
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.successColor} !important;
        &:hover, &:focus, &:active{
          background: ${({ theme }: { theme: ThemeInterface }) => theme.successColor} !important;
          border-color: ${({ theme }: { theme: ThemeInterface }) => theme.successColor} !important;
          &:not([disabled]){
            opacity: 0.9;
          }
        }
      }
      &.successOutline{
        background: transparent !important;
        color: ${({ theme }: { theme: ThemeInterface }) => theme.successColor} !important;
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.successColor} !important;
        &:hover, &:focus, &:active{
          background: ${({ theme }: { theme: ThemeInterface }) => theme.successColor} !important;
          border-color: ${({ theme }: { theme: ThemeInterface }) => theme.successColor} !important;
          color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.button} !important;
          &:not([disabled]){
            opacity: 0.9;
          }
        }
      }
      &.danger{
        background: ${({ theme }: { theme: ThemeInterface }) => theme.errorColor} !important;
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.errorColor} !important;
        &:hover, &:focus, &:active{
          background: ${({ theme }: { theme: ThemeInterface }) => theme.errorColor} !important;
          border-color: ${({ theme }: { theme: ThemeInterface }) => theme.errorColor} !important;
          &:not([disabled]){
            opacity: 0.9;
          }
        }
      }
      &.dangerOutline{
        background: transparent !important;
        color: ${({ theme }: { theme: ThemeInterface }) => theme.errorColor} !important;
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.errorColor} !important;
        &:hover, &:focus, &:active{
          background: ${({ theme }: { theme: ThemeInterface }) => theme.errorColor} !important;
          border-color: ${({ theme }: { theme: ThemeInterface }) => theme.errorColor} !important;
          color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.button} !important;
          &:not([disabled]){
            opacity: 0.9;
          }
        }
      }
      &.ant-btn-default{
        border: ${({ theme }: { theme: ThemeInterface }) => theme.border.primary} !important;
        color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.link} !important;
      }
    }

    .ant-btn.ant-btn-background-ghost:not(.ant-btn-primary){
      border: unset !important;
      margin: unset !important;
      &:hover{
        svg{
          opacity: 0.8;
        }
      }
    }
    .ant-btn.ant-btn-primary.ant-btn-background-ghost{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important; 
    }
    .ant-btn.ant-btn-default.ant-btn-background-ghost{
      height: unset !important;
      width: unset !important;
      padding: unset !important;
      padding-left: 5px !important
    }
    .ant-input-affix-wrapper.ant-input-password.ant-input-affix-wrapper-borderless{
      .ant-input.ant-input-borderless{
        margin-top: 1px;
      }
    }
    .ant-input-affix-wrapper.ant-input-password{
      .ant-input-suffix svg{
        fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important; 
      }
    }

    .ant-btn:hover{
      border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
    }

    .ant-btn-sm{
      height: ${({ theme }: { theme: ThemeInterface }) => theme.buttonHeight.small} !important;
    }

    .ant-btn-link{
      &.anchor-link{padding:0px;height:auto !important;display: flex;
    align-items: center;
    gap: 10px;border:none !important}
    &.anchor-link:hover{
      border: transparent !important;
    }
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
      border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
      background: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
    }

    .ant-btn-link{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.link} !important;
      padding: 0px !important;
      margin: 0px !important;
    }

    .ant-btn-primary[disabled], .ant-btn-primary[disabled]:hover, .ant-btn-primary[disabled]:focus, .ant-btn-primary[disabled]:active{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
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
      &::placeholder{
        color: ${({ theme }: { theme: ThemeInterface }) => theme.color.InputPlaceholder} !important;;
      }
      &:hover{
        border: ${({ theme }: { theme: ThemeInterface }) => theme.border.primary} !important;
      }
    }
    .ant-input-suffix{
        color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
      }

    .ant-input:hover{
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.primary} !important;
    }

    .ant-input-affix-wrapper,
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
      &:focus{
        box-shadow: none !important;
      }
    }

    .ant-input-affix-wrapper > input.ant-input{
      border: none !important;
    }

    .ant-input-affix-wrapper{
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important;
      height: 48px;
      .ant-input-prefix{
        svg{
          height: 20px;
          width: 20px;
          fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important;
        }
      }
      .ant-input{
        height: 40px !important;
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

              &:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before{
                display: none;
              }
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

    .ant-switch{
      background: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.muted} !important;
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

    .ant-typography{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
    }

    .ant-modal-close-x{
      svg{
        fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
      }
    }

    .ant-modal-title{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
    }

    .ant-modal-header{
      border-bottom: solid 1px ${({ theme }: { theme: ThemeInterface }) => theme.color.rowHover} !important;
    }
    .ant-modal-content, .ant-modal-header{
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary} !important;
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
    }

    .ant-modal-mask{
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      opacity: 0.7;
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

    .ant-menu-item:active{
      background: transparent !important;
    }
    .ant-menu-item:focus-visible, .ant-menu-submenu-title:focus-visible{
      box-shadow: unset !important;
    }
    .ant-menu-title-content{
      svg:hover{
        opacity: 0.8;
      }
    }

    .ant-typography.ant-typography-success {
      color: ${({ theme }: { theme: ThemeInterface }) => theme.color.success} !important;
    }
    .ant-typography.ant-typography-danger {
      color: ${({ theme }: { theme: ThemeInterface }) => theme.color.danger} !important;
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

      .ant-popover.ant-popover-placement-bottomRight{
        .ant-popover-arrow{
          display:none;
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
      z-index: 9;
    }
    .ant-notification-notice{
      margin-top: 62px;
    }
    .successTag{background:${({ theme }) => theme.successColor};color:${({ theme }) => theme.fontColor.button};border-radius:${({ theme }) => theme.borderRadius.regular};padding:5px 10px;font-size:13px;}
    .errorTag{background:${({ theme }) => theme.errorColor};color:${({ theme }) => theme.fontColor.button};border-radius:${({ theme }) => theme.borderRadius.regular};padding:5px 10px;font-size:13px}
    .search-input .ant-input-affix-wrapper, .search-input .ant-input-affix-wrapper input{background:${({ theme }) => theme.background.secondary} !important}
    .ant-notification-notice-error{
      border: 1px solid ${({ theme }) => theme.color.danger} !important;
      background: ${({ theme }) => theme.color.dangerDisabled} !important;
      box-shadow: none !important;
    }


    /* Skeletion loading */
    .react-loading-skeleton{
      background: ${({ theme }) => theme.loadingSkeleton.base} !important;
      &::after{
        background-image: linear-gradient(90deg, 
          ${({ theme }) => theme.loadingSkeleton.base}, 
          ${({ theme }) => theme.loadingSkeleton.highLight}, 
          ${({ theme }) => theme.loadingSkeleton.base}
        ) !important
      }
    }
    .ant-drawer-body,.ant-drawer-header{background: ${({ theme }) => theme.background.secondary} !important;}
    .ant-drawer-title{color:${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;}
    .cursor-pointer{cursor: pointer;}

    //MISC SETTINGS

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }

`;

export { GlobalStyles };