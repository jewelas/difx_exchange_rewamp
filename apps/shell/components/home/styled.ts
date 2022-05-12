import { Layout } from "antd";
import styled from "styled-components";

export const PageStyled = styled.div``;

export const MarketContentStyled = styled(Layout.Content)`
  .title {
    color:${({theme})=>theme.fontColor.primary} !important;
    font-weight: 600;
    font-size: 30px;
    color: #090e16;
  }
  .summary {
    color:${({theme})=>theme.fontColor.primary} !important;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #090e16;
  }
  .widgets {
  }
`;

export const ListPairsContentStyled = styled(Layout.Content)`
  background: #fff;
  margin-top: 20px;
  .title {
    font-size: 16px;
    font-weight: 600;
    color: #3d7eff;
    text-transform: uppercase;
    height: 32px;
    border-bottom: solid 2px;
    display: inline-block;
  }
  .pairs {
    margin-top: 20px;
  }
`;
