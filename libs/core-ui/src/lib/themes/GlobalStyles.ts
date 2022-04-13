import { createGlobalStyle } from 'styled-components';
import { Color } from './../Color';
import { CustomThemeProps } from './themes'

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
    }
    
    .noselect,
    button,
    div {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome and Opera */
    }

    

    .ant-btn.ant-btn-text{
        color: ${({ theme }: { theme: CustomThemeProps }) => theme.textColor};
        &:hover{
            color: ${({ theme }: { theme: CustomThemeProps }) => theme.textHoverColor}; !important;
        }
    }
    .ant-btn-text:focus, .ant-btn-text:hover{
      color: unset !important;
    }

    .ant-form-item {

        // Input
        .ant-input{
          height: 48px;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
        }
        &:not(.ant-form-item-has-error) {
          .ant-form-item-control-input-content {
            input {
              background: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBackgroundColor};
              color: ${({ theme }: { theme: CustomThemeProps }) => theme.textColor};;
              border-color: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBorderColor};
              box-shadow: unset;
            }
          }
        }
  
        &.ant-form-item-has-error {
          .ant-form-item-control-input-content {
            input {
              background: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBackgroundColor};
              color: ${({ theme }: { theme: CustomThemeProps }) => theme.textColor};
              border-color: #ff4d4f !important;
            }
          }
          .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input, .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover{
            background: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBackgroundColor};
          }
        }
      } //end .ant-form-item

    

      // Select
      .ant-select {
          .ant-select-selection-placeholder{
            z-index: 1;
          }
          .ant-select-selector {
            background: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBackgroundColor} !important;
            border-color: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBorderColor} !important;
            color: ${({ theme }: { theme: CustomThemeProps }) => theme.textColor};
            box-shadow: unset !important;
          }
          .ant-select-arrow {
            svg {
              fill: ${({ theme }: { theme: CustomThemeProps }) => theme.textColor};
            }
          }
      } // end .ant-select

      .ant-select-dropdown{
        background: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBackgroundColor} !important;
        .ant-select-item-option-active:not(.ant-select-item-option-disabled){
          background: ${({ theme }) => theme.currentTheme === 'light' ? '#f5f5f5' : 'rgba(13, 20, 33, 0.6)'};
        }
        .ant-select-item.ant-select-item-option.ant-select-item-option-selected{
          background: ${({ theme }) => theme.currentTheme === 'light' ? 'var(--ant-primary-1)' : 'rgba(13, 20, 33, 0.6)'};
        }
        .ant-select-item-option-content{
          .val{
            color:${({ theme }: { theme: CustomThemeProps }) => theme.textColor}; !important;
          }
        }
      } // end .ant-select-dropdown

    // Button
    button.ant-btn{
      height: 48px;
      &.with-icon{
        background: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBackgroundColor} !important;
        border-color: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBorderColor} !important;
      }
      &[disabled]{
        background-color: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBorderColor};
        border-color: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBorderColor};
        color: ${({ theme }: { theme: CustomThemeProps }) => theme.textColor};
        opacity: 0.5;
        &:hover{
          background-color: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBorderColor};
          border-color: ${({ theme }: { theme: CustomThemeProps }) => theme.inputBorderColor};
          color: ${({ theme }: { theme: CustomThemeProps }) => theme.textColor};
        }
      }
    } // end button.ant-btn


    // Popover content
    .ant-popover-content{
      .ant-popover-arrow .ant-popover-arrow-content{
        &:before{
          background:unset;
        }
        background: ${({ theme }) => theme.inputBackgroundColor};
      }
      .ant-popover-inner{
        background: ${({ theme }) => theme.inputBackgroundColor};
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
              color: ${Color.red.failure} !important;
              &.success{
                color: ${Color.green.success} !important;
              }
            }
          }
        }
      }
    } // end ant-popover-content
    

    // Notification
    .ant-notification{
      margin-top: 64px !important;
      .ant-notification-notice{
        .ant-notification-notice-message{
          color: ${({ theme }) => theme.textColor};
        }
        color: ${({ theme }) => theme.textColor};
        background ${({ theme }) => theme.backgroundColor2};
      }
    }


`

export { GlobalStyles };