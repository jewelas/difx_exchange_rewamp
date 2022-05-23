import { Layout } from "antd";
import styled from "styled-components";

const PageStyled = styled.div``;

const WalletContentStyled = styled(Layout.Content)`
  .title {
    font-weight: 600;
    font-size: 30px;
    color: #090e16;
  }
  .summary {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #090e16;
  }
  .widgets {
  }

.site-layout-background {
  background: #fff;
}
`;

export {WalletContentStyled, PageStyled}