import styled from "styled-components";
import { ThemeInterface } from "./../../themes";


export const ComponentStyled = styled.div`
  padding:5px;

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

  .ant-input-affix-wrapper.ant-input-affix-wrapper-disabled{
    opacity:0.6;
  }

  .balance{
    color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
    .value{

    }
    .deposit{
      svg{
        cursor: pointer;
        margin-top:2px;
        margin-left:10px;
        opacity: 0.8;
        &:hover{
          opacity: 1;
        }
      }
    }
  }
  .ant-input {
    height: 48px !important;
  }
  .ant-input-affix-wrapper{
    height: 48px !important;
    .ant-input {
      height: 36px !important;
    }
  }
  .ant-row.ant-form-item{
    margin-bottom: 8px;
  }
  .ant-btn{
      width: 100%;
      margin-top:10px;
  }
  .slider-group{
    margin-top:25px;
    margin-bottom:35px;
    padding:0 6px 0 3px;
    .ant-slider-dot{
      top: -5px;
      width: 14px;
      height: 14px;
    }
    &.ask{
      .ant-slider-dot.ant-slider-dot-active{
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.danger};
      }
      .ant-slider-track{
        background: ${({ theme }: { theme: ThemeInterface }) => theme.color.danger};
      }
      .ant-slider-handle{
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.danger};
        &:focus,&:hover{
          box-shadow: 0 0 0 5px rgb(219 83 84 / 12%)
        }
      }
    }
    &.bid{
      .ant-slider-dot.ant-slider-dot-active{
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.success};
      }
      .ant-slider-track{
        background: ${({ theme }: { theme: ThemeInterface }) => theme.color.success};
      }
      .ant-slider-handle{
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.success};
        &:focus,&:hover{
          box-shadow: 0 0 0 5px rgb(33 192 152 / 12%)
        }
      }
    }
  }
`;

