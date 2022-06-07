import styled from "styled-components";
import { Layout } from "antd";
const { Sider } = Layout;
export const PageStyled = styled.div``;
export const SidebarWrapper = styled(Sider)`
  height: calc(100vh - 50px);
  .ant-menu-item {
    gap: 10px;
    &.ant-menu-item-active > div {
      fill: #08c;
    }
    &.ant-menu-item-selected,
    :hover {
      background-color: ${({ theme }) => theme.color.primaryLight} !important;
      & > div,
      & > div svg,
      & > div svg path {
        fill: ${({ theme }) => theme.color.primary};
      }
      .ant-menu-title-content,
      .ant-menu-title-content a {
        color: ${({ theme }) => theme.color.primary};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      }
    }
    .ant-menu-title-content,
    .ant-menu-title-content a {
      color: ${({ theme }) => theme.fontColor.secondary};
    }
    & > div {
      display: flex;
      align-items: center;
    }
  }
  .ant-menu-item-group {
    border-top: ${({ theme }) => theme.border.secondary};
  }
`;

export const NotificationWrapper = styled.div`
  padding: 25px;
  background: ${({ theme }) => theme.background.secondary};
  display: flex;
  justify-content: space-between;
`;
