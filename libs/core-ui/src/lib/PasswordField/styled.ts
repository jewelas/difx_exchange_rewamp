import styled from 'styled-components';
import { Color } from '../Color';

export const FieldStyled = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.inputBorderColor || Color.grey.buttonSecondary};
  border-radius:2px;
  height: 54px;
  .ant-form-item-control-input-content{
    height: 48px;
  }
  .ant-form-item-control-input{
    background: ${({ theme }) => theme.inputBackgroundColor};
  }
  .ant-input{
    background: transparent !important;
    margin-top: -4px;
  }
  &.fail{
    border-color: ${Color.red.failure}
  }
  .view-pass{
    display: inline-block;
    position: absolute;
    top: 16px;
    right: 10px;
    cursor:pointer;
  }
  input{
    height: 48px;
  }
  .ant-input-suffix{
    svg{
      path{
        fill: ${({ theme }) => theme.textColor};
      } 
    }
}`
