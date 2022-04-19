
import { Button, Layout } from 'antd';
import styled from 'styled-components';

export const StyledButtonGroup = styled.div`
display:flex;
margin-top: 23px;
`

export const StyledMoreMenuGroup = styled.div`
.items{
  display:flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  height: 100%;
  width: 250px;
  box-shadow: -4px 4px 16px 0px rgba(0,0,0,0.07);
  -webkit-box-shadow: -4px 4px 16px 0px rgba(0,0,0,0.07);
  -moz-box-shadow: -4px 4px 16px 0px rgba(0,0,0,0.07);
  
  .menu-item-group{
    margin-top:60px;
    overflow-y: auto;
    .line{
      line-height: 24px;
      border-top: solid 1px #eee;
      margin-bottom: 30px;
    }
    .menu-item-btn{
      padding: 0 10px;
      line-height: 24px;
      text-align: center;
      margin-bottom: 20px;
      button{
        width: 100%;
      }
    }
    .menu-item{
      display: flex;
      margin-bottom: 30px;
      cursor: pointer;
      svg{
        margin-left: 20px;
      }
      .txt{
        line-height:24px;
        margin-left: 15px
      }
    }
  }

  &.open{
    -webkit-animation: linear infinite;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-name: runOpen;
    -webkit-animation-duration: 0.1s;
      @keyframes runOpen {
        0% {
          right: -250px;
        }
        100% {
          right: 0; 
        }
      }
  }
  &.close{
    -webkit-animation: linear infinite;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-name: runClose;
    -webkit-animation-duration: 0.1s;
      @keyframes runClose {
        0% {
          right: 0;
        }
        100% {
          right: -250px; 
        }
      }
  }

  .close-icon{
    position: absolute;
    top: 30px;
    right: 20px;
  }

}
`

export const StyledIconButton = styled(Button)`
background: unset;
border: unset !important;
box-shadow: unset !important;
svg{
  margin: 0 auto
}
`
export const StyledLine = styled.div`
height: 21px;
margin-left: 10px;
margin-right: 10px;
width: 1px;
opacity: 0.32;
border-right: solid 1px #707070;
`

export const StyledHeader = styled(Layout.Header)`
  padding: unset !important;
  height: 70px !important;
  line-height: 70px !important;
  z-index: 9999;
  position: fixed;
  width: 100%;

  .right-nav-group{
    display: flex;
    position: absolute;
    right: 30px;
    .right-nav{
      height: 100%;
      button:not(.ant-btn-icon-only){
        margin-top: 6px;
      }
    }
    .ant-menu-item, .ant-menu-submenu-title{
      padding: 0 2px;
    }
  }
  .ant-menu-submenu-title{
    display: none !important;
  }
  .group{
    display:flex;
    background: #fff;
    border-bottom: solid 5px ${({ theme }) => theme.borderColor || '#eee'} !important;
    .logo{
      background: ${({ theme }) => theme.backgroundColor2};
      display: flex;
      width:122px;
      svg{
        height: 30px;
        margin-top: 20px;
        margin-left: 18px;
        margin-right: 5px;
        #Layer_5 path,
        #Layer_2-2 #Layer_3 path,
        #Layer_2-2 #Layer_4 path {
          fill: ${({ theme }) => theme.logoFillColor};
        }
      }
      .title{
        color: #3d7eff;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 2px;
        color: ${({ theme }) => theme.titleColor};
      }
    }
    .ant-menu{
      background: ${({ theme }) => theme.backgroundColor2};
      color: ${({ theme }) => theme.textColor};
      height: 70px;
      flex-grow:1;
      border-bottom: unset !important;
      .ant-menu-item::after{
        border-bottom: unset !important;
      }
    }
    .more-nav{
      position: absolute;
      right: 0;
      display:none;
    }
  }

  @media (max-width: 1083px) {
    .right-nav{
      display: none !important;
    }
    .more-nav{
      display: block !important;
    }    
  }

  @media (max-width: 637px) {
    .right-nav{
      display: none !important;
    }
    .left-nav{
      display: none !important;
    }
    .more-nav{
      display: block !important;
    }
  }
`;