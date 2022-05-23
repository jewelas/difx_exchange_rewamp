import { Select } from "antd";
import styled from "styled-components";

export const SelectStyled = styled(Select)`
  &.large {
    .ant-select-selection-placeholder {
      padding-top: 8px !important;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px !important;
    }
    .ant-select-selector {
      /* height: 48px !important; */
      .ant-select-selection-search {
        input {
          /* height: 48px !important; */
          font-size: 20px;
          padding-left: 48px;
        }
      }
    }
  }
  &.medium {
    .ant-select-selection-placeholder {
      padding-top: 8px !important;
      font-size: 14px;
      font-weight: 400;
      line-height: 28px !important;
    }
    .ant-select-selector {
      padding-right: 30px !important;
      height: 38px !important;
      .ant-select-selection-search {
        input {
          height: 38px !important;
          font-size: 14px;
          padding-left: 48px;
        }
      }
      .ant-select-selection-item{
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
    .flag-custom{
      padding-top: 0px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      svg{
        height: 22px !important;
      }
    }
    .val{
      padding-top: 0px !important;
    }
  }
`;

export const OptionGroupStyled = styled.div`
  display: flex;
  &.large {
    .flag-custom {
      padding-top: 11px;
      margin-right: 9px;
      svg {
        width: 38px;
      }
    }
    .val {
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      padding-top: 9px;
    }
  }
  &.medium {
    .flag-custom {
      padding-top: 11px;
      margin-right: 9px;
      svg {
        width: 38px;
      }
    }
    .val {
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      padding-top: 9px;
    }
  }
`;
