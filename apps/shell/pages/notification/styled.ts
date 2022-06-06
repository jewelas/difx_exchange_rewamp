import { Layout } from "antd";
import styled from "styled-components";

const PageStyled = styled.div``;

const NotificationContentStyled = styled(Layout.Content)`
  .site-layout-background {
    background: #fff;
  }
  .toggle-card-wrapper {
    padding: 0px 20px 20px 20px;
    margin-top: 2px;
    background: ${({ theme }) => theme.background.secondary};
    .toggle-card {
      & > div {
        display: flex;
        align-items: center;
        span {
          color: ${({ theme }) => theme.fontColor.secondary};
        }
      }
    }
  }
  .notification-wrapper {
    .ant-list-pagination {
      display: flex;
      justify-content: center;
    }
    .ant-pagination-item-active {
      background : #3D7EFF;
      a{
        color: #F8FAFD;
      }
    } 

    .notification-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .notification-title {
        font-weight: bold;
        display: flex;
      }
      .ant-list-item-meta {
        margin-bottom: 0;
      }
      .ant-list-item-meta-avatar {
        margin-top: 5px;
      }
      .notification-icon {
        display: flex;
        width: 36px;
        justify-content: space-around;
        .notification-dote {
          height: 8px;
          width: 8px;
          background: #fdb044;
          margin-bottom: 5px;
          border-radius: 50%;
          margin-top: 5px;
        }
      }
    }
  }
`;

export { PageStyled, NotificationContentStyled };
