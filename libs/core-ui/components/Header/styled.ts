import { Layout } from "antd";
import styled from "styled-components";

export const StyledSettingPopover = styled.div`
  width: 272px !important;
  height: 316px;
  .head{
    margin-top:20px;
  }
  .content{
    display: flex;
    justify-content:space-between;
    margin-top:10px;
    .layout{
      svg{
        border: ${({ theme }) => theme.border.secondary} !important;
        padding:2px;
      }
      &.active{
        svg{
          border: solid 2px  ${({ theme }) => theme.color.primary} !important;
        }
      }
      .name{
        text-align: center;
      }
    }
    .candle-color{
      margin-right: 5px !important;
    }
    .candle{
      background: ${({ theme }) => theme.background.secondary} !important;
      display:flex;
      padding:10px 20px !important;
      flex-grow: 1;
      border-radius: 3px;
      border: ${({ theme }) => theme.border.secondary} !important;
      &.active{
          border: solid 2px  ${({ theme }) => theme.color.primary} !important;
      }
      &.first{
        margin-right:10px !important;
      }
      &.last{
        margin-left:10px !important;
      }
      .name{
        margin-right:10px;
      }
    }
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  height: 100%;
  justify-items: center;
  align-items: center;
`;

export const StyledMoreMenuGroup = styled.div`
  .items {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.fontColor.primary};
    height: 100%;
    width: 250px;

    .menu-item-group {
      margin-top: 60px;
      overflow-y: auto;
      .line {
        line-height: 24px;
        border-top: solid 1px #eee;
        margin-bottom: 30px;
      }
      .menu-item-btn {
        padding: 0 10px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 20px;
        button {
          width: 100%;
        }
      }
      .menu-item {
        display: flex;
        margin-bottom: 30px;
        cursor: pointer;
        svg {
          margin-left: 20px;
        }
        .txt {
          line-height: 24px;
          margin-left: 15px;
        }
      }
    }

    .close-icon {
      position: absolute;
      top: 30px;
      right: 20px;
    }
  }
`;

// export const StyledIconButton = styled(Button)`
//   background: unset;
//   border: unset !important;
//   box-shadow: unset !important;
//   margin-top:-4px;
//   svg {
//     margin: 0 auto;
//   }
// `;
export const StyledLine = styled.div`
  height: 21px;
  margin-left: 10px;
  margin-right: 10px;
  width: 1px;
  opacity: 0.32;
  border-right: solid 1px #707070;
`;

export const StyledHeader = styled(Layout.Header)`
  /* z-index: 9999; */
  padding: unset !important;
  height: 50px !important;
  line-height: 50px !important;
  position: relative;
  width: 100%;

  .right-nav-group {
    display: flex;
    position: absolute;
    right: 30px;
    .right-nav {
      height: 100%;
      &.icon{
        margin-top:-3px !important;
        svg{
          width: 15px;
        }
      }
      button:not(.ant-btn-icon-only) {
      }
    }
    .ant-menu-item,
    .ant-menu-submenu-title {
      padding: 0 2px;
    }
  }
  .ant-menu-title-content{
    .ant-btn{
      border: unset !important;
    }
    .ant-btn.ant-btn-icon-only{
       margin-top: 5px;
    }
  }
  .ant-menu-submenu-title {
    display: none !important;
  }
  .group {
    height: 50px;
    display: flex;
    background: ${({ theme }) => theme.background.secondary};
    border-bottom: solid 2px ${({ theme }) => theme.scrollbar.background} !important;
    .logo {
      background: transparent;
      display: flex;
      width: 122px;
      svg {
        height: 30px;
        margin-top: 10px;
        margin-left: 18px;
        margin-right: 5px;
        #Layer_5 path,
        #Layer_2-2 #Layer_3 path,
        #Layer_2-2 #Layer_4 path {
          fill: ${({ theme }) => theme.color.primary};
        }
      }
      .title {
        color: #3d7eff;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 2px;
        color: ${({ theme }) => theme.color.primary};
      }
    }
    .ant-menu {
      background: transparent;
      color: ${({ theme }) => theme.fontColor.primary};
      height: 50px;
      flex-grow: 1;
      border-bottom: unset !important;
      .ant-menu-item::after {
        border-bottom: unset !important;
      }
    }
    .more-nav {
      position: absolute;
      right: 0;
      display: none;
    }
  }

  .ant-menu-item{
    margin: 0px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1083px) {
    .right-nav {
      display: none !important;
    }
    .more-nav {
      display: block !important;
    }
  }

  @media (max-width: 637px) {
    .right-nav {
      display: none !important;
    }
    .left-nav {
      display: none !important;
    }
    .more-nav {
      display: block !important;
    }
  }
`;
