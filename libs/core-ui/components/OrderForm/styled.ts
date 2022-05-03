import styled from "styled-components";
import { dark, light, ThemeInterface } from "./../../themes";


export const ComponentStyled = styled.div`
  .ant-input {
    height: 48px !important;
  }
  .ant-row.ant-form-item{
    margin-bottom: 8px;
  }
  .ant-btn{
      width: 100%;
      margin-top:10px;
  }
  .slider-group{
    margin-top:15px;
    margin-bottom:10px;
    padding:0 10px 0 5px;
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

