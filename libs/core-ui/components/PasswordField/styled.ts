import styled from "styled-components";

export const FieldStyled = styled.div`
  width: 100%;
  border: ${({ theme }) => theme.border};
  border-radius: 2px;
  height: 54px;
  .ant-form-item-control-input-content {
    /* height: 48px; */
  }
  .ant-form-item-control-input {
    background: ${({ theme }) => theme.background.primary};
  }
  .ant-input {
    background: transparent !important;
    margin-top: -4px;
  }
  &.fail {
    border-color: ${({ theme }) => theme.color.danger};
  }
  .view-pass {
    display: inline-block;
    position: absolute;
    top: 16px;
    right: 10px;
    cursor: pointer;
  }
  input {
    /* height: 48px; */
  }
  .ant-input-suffix {
    svg {
      path {
        fill: ${({ theme }) => theme.fontColor.primary};
      }
    }
  }
`;
