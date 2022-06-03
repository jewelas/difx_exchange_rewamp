import { Typography as AntdTypography } from "antd";
import styled from "styled-components";
import { Color } from "../Color";

const { Text } = AntdTypography;

export const TextStyled = styled(Text)`
  &.H1 {
    font-weight: 600;
    font-size: 56px;
    line-height: 64px;
    color: ${({ theme }) => theme.fontColor.primary};
  }
  &.H2 {
    font-weight: 600;
    font-size: 38px;
    line-height: 46px;
    color: ${({ theme }) => theme.fontColor.primary};
  }
  &.H4 {
    font-weight: 600;
    font-size: 34px;
    line-height: 46px;
    color: ${({ theme }) => theme.fontColor.primary};
  }
  &.H5 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.fontColor.primary};
  }
  &.H6 {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: ${({ theme }) => theme.fontColor.primary};
  }

  &.B1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.fontColor.primary};
  }

  &.B2 {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: ${({ theme }) => theme.fontColor.primary};
  }
  &.B3 {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.fontColor.primary};
  }

  &.text {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: ${({ theme }) => theme.fontColor.primary};
  }

  &.danger{
    color: ${({ theme }) => theme.color.danger} !important
  }
  &.primary{
    color: ${({ theme }) => theme.color.primary} !important
  }
  &.success{
    color:  ${({ theme }) => theme.color.success} !important
  }
  &.secondary{
    color:  #939393 !important
  }
`;
