import { Button, Col, Drawer, Layout, Menu, Row } from 'antd';
import clsx from 'clsx';
import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import t from '../../../../locale';
import { Icon } from '../Icon';

export interface HeaderProps {
  onNavigation: (page: string) => void;
  onChangeTheme: () => void;
}

export const themeAtom = atom<string>('light');

const StyledButtonGroup = styled.div`
  display:flex;
  margin-top: 23px;
`

const StyledMoreMenuGroup = styled.div`
  .items{
    display:flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    background: ${({theme})=> theme.backgroundColor};
    color: ${({theme})=> theme.textColor};
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

const StyledIconButton = styled(Button)`
  background: unset;
  border: unset !important;
  box-shadow: unset !important;
  svg{
    margin: 0 auto
  }
`
const StyledLine = styled.div`
  height: 21px;
  margin-left: 10px;
  margin-top: 2px;
  width: 1px;
  opacity: 0.32;
  border-right: solid 1px #707070;
`

const StyledHeader = styled(Layout.Header)`
    padding: unset !important;
    height: 70px !important;
    line-height: 70px !important;
    z-index: 9999;
    position: fixed;
    width: 100%;
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

const SMALL_SIZE: number = 637;

export function Header(props: HeaderProps) {
  const { onNavigation } = props;

  const {
    LogoIcon, ArrowDownIcon, EarthIcon, MoonIcon, HorizontalLineIcon, CloseIcon, HomeIcon,
    ExchangeIcon,
    EarnIcon,
    WalletIcon,
    OrderIcon,
    MarketIcon,
    LightIcon
  } = Icon;

  const [theme,] = useAtom(themeAtom);

  const [showDrawer, setShowDrawer] = useState(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      const width: number = document?.body?.clientWidth;
      if (width) {
        setWidth(width);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onOpenDrawer = () => {
    setShowDrawer(!showDrawer);
  }

  const onCloseDrawer = () => {
    setShowDrawer(false);
  }

  const onCloseMenu = () => {
    setShowDrawer(false);
  }

  const router = useRouter();

  return (
    <StyledHeader>
      <Row>
        <Col span={24}>
          <div className='group'>
            <div className='logo'>
              <LogoIcon />
              <div className='title'>DIFX</div>
            </div>
            <Menu mode="horizontal" selectedKeys={[router?.pathname]}>
              <Menu.Item className='left-nav' onClick={() => onNavigation('/home')} key="/home">{t('header.home')}</Menu.Item>
              <Menu.Item className='left-nav' onClick={() => onNavigation('/market')} key="/market">{t('header.markets')}</Menu.Item>
              <Menu.Item className='left-nav' key="4">{t('header.trade')}</Menu.Item>
              <Menu.Item className='left-nav' key="5">{t('header.earn')}</Menu.Item>
              <Menu.Item className='left-nav' key="6">{t('header.wallet')}</Menu.Item>
              <Menu.Item className='left-nav' key="7">{t('header.order')}</Menu.Item>

              <Menu.Item className='right-nav login' style={{ position: 'absolute', right: 260 }} key="/login">
                <Button onClick={() => { onNavigation('/login') }} type="text">{t('header.login')}</Button>
              </Menu.Item>
              <Menu.Item className='right-nav register' style={{ position: 'absolute', right: 150 }} key="9">
                <Button onClick={() => { onNavigation('/register') }} type="primary">{t('header.register')}</Button>
              </Menu.Item>
              <Menu.Item className='right-nav' style={{ position: 'absolute', right: 86 }} key="10">
                <StyledButtonGroup>
                  <StyledIconButton ghost icon={<ArrowDownIcon useDarkMode />} size={'small'} />
                  <StyledLine />
                </StyledButtonGroup>
              </Menu.Item>
              <Menu.Item className='right-nav' style={{ position: 'absolute', right: 36 }} key="11">
                <StyledButtonGroup>
                  <StyledIconButton ghost icon={<EarthIcon useDarkMode />} size={'small'} />
                  <StyledLine />
                </StyledButtonGroup>
              </Menu.Item>
              <Menu.Item className='right-nav' style={{ position: 'absolute', right: 0 }} key="12">
                <StyledButtonGroup>
                  <StyledIconButton ghost onClick={props.onChangeTheme} icon={theme === 'light' ? <MoonIcon useDarkMode /> : <LightIcon useDarkMode />} size={'small'} />
                </StyledButtonGroup>
              </Menu.Item>

              <Menu.Item className='more-nav' key="13">
                <StyledButtonGroup>
                  <StyledIconButton ghost onClick={onOpenDrawer} icon={<HorizontalLineIcon useDarkMode />} size={'small'} />
                </StyledButtonGroup>
              </Menu.Item>
            </Menu>

            <Drawer
              width={250}
              placement="right"
              onClose={onCloseDrawer}
              visible={showDrawer}
            >
              <StyledMoreMenuGroup>
                <div className={clsx('items', showDrawer ? 'open' : 'close')}>
                  <div className='close-icon' onClick={onCloseMenu}><CloseIcon useDarkMode /></div>
                  <div className='menu-item-group'>
                    <div className='menu-item-btn'>
                      <Button onClick={() => { onNavigation('/login') }} type="text">{t('header.login')}</Button>
                    </div>
                    <div className='menu-item-btn'>
                      <Button onClick={() => { onNavigation('/register') }} type="primary">{t('header.register')}</Button>
                    </div>
                    {
                      width <= SMALL_SIZE
                      &&
                      <>
                        <div onClick={() => onNavigation('/home')} className='menu-item'>
                          <HomeIcon useDarkMode />
                          <div className='txt'>{t('header.home')}</div>
                        </div>
                        <div className='menu-item'>
                          <MarketIcon useDarkMode />
                          <div className='txt'>{t('header.markets')}</div>
                        </div>
                        <div className='menu-item'>
                          <ExchangeIcon useDarkMode />
                          <div className='txt'>{t('header.trade')}</div>
                        </div>
                        <div className='menu-item'>
                          <EarnIcon useDarkMode />
                          <div className='txt'>{t('header.earn')}</div>
                        </div>
                        <div className='menu-item'>
                          <WalletIcon useDarkMode />
                          <div className='txt'>{t('header.wallet')}</div>
                        </div>
                        <div className='menu-item'>
                          <OrderIcon useDarkMode />
                          <div className='txt'>{t('header.order')}</div>
                        </div>
                      </>
                    }

                    <div className='line' />
                    <div className='menu-item'>
                      <ArrowDownIcon useDarkMode />
                      <div className='txt'>{t('header.download')}</div>
                    </div>
                    <div className='menu-item'>
                      <EarthIcon useDarkMode />
                      <div className='txt'>{t('header.english')}</div>
                    </div>
                    <div onClick={props.onChangeTheme} className='menu-item'>
                      {theme === 'light' ? <MoonIcon useDarkMode /> : <LightIcon useDarkMode />}
                      <div className='txt'>{theme === 'light' ? t('header.dark_mode') : t('header.light_mode')}</div>
                    </div>
                  </div>
                </div>
              </StyledMoreMenuGroup>
            </Drawer>

          </div>
        </Col>
      </Row>
    </StyledHeader>
  );
}

export default Header;
