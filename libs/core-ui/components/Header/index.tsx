import { Button, Col, Drawer, Menu, Row } from 'antd';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { User } from './../../../shared';
import t from './../../../locale';
import { Icon } from '../Icon';
import { StyledButtonGroup, StyledHeader, StyledIconButton, StyledLine, StyledMoreMenuGroup } from './styled';

export interface HeaderProps {
  onNavigation: (page: string) => void;
  onChangeTheme: () => void;
  theme?: string;
  currentUser?: User;
}

const SMALL_SIZE = 637;

export function Header(props: HeaderProps) {
  const { onNavigation, theme, currentUser } = props;

  const {
    LogoIcon, EarthIcon, MoonIcon, HorizontalLineIcon, CloseIcon, HomeIcon,
    ExchangeIcon,
    EarnIcon,
    WalletIcon,
    OrderIcon,
    MarketIcon,
    LightIcon,
    UserIcon,
    NotificationIcon,
    SettingIcon,
    DownloadIcon
  } = Icon;

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
              <Menu.Item className='left-nav' key="/trade">{t('header.trade')}</Menu.Item>
              <Menu.Item className='left-nav' key="/earn">{t('header.earn')}</Menu.Item>
              <Menu.Item className='left-nav' key="/wallet">{t('header.wallet')}</Menu.Item>
              <Menu.Item className='left-nav' key="/order">{t('header.order')}</Menu.Item>

              <Menu.Item className='more-nav' key="open-drawer">
                <StyledButtonGroup>
                  <StyledIconButton ghost onClick={onOpenDrawer} icon={<HorizontalLineIcon useDarkMode />} size={'small'} />
                </StyledButtonGroup>
              </Menu.Item>
            </Menu>

            <Menu className='right-nav-group'>
              {
                !currentUser
                  ?
                  <>
                    <Menu.Item className='right-nav login' key="/login">
                      <Button style={{ marginRight: 10 }} onClick={() => { onNavigation('/login') }} type="text">{t('header.login')}</Button>
                    </Menu.Item>
                    <Menu.Item className='right-nav register' key="/register">
                      <Button style={{ marginRight: 30 }} onClick={() => { onNavigation('/register') }} type="primary">{t('header.register')}</Button>
                    </Menu.Item>
                  </>
                  :
                  <>
                    <Menu.Item className='right-nav' key="/notification">
                      <StyledButtonGroup>
                        <StyledIconButton ghost icon={<NotificationIcon useDarkMode />} size={'small'} />
                        <StyledLine style={{ opacity: 0 }} />
                      </StyledButtonGroup>
                    </Menu.Item>
                    <Menu.Item className='right-nav' key="/user">
                      <StyledButtonGroup>
                        <StyledIconButton ghost icon={<UserIcon useDarkMode />} size={'small'} />
                        <StyledLine style={{ opacity: 0 }} />
                      </StyledButtonGroup>
                    </Menu.Item>
                  </>
              }


              <Menu.Item className='right-nav' key="download">
                <StyledButtonGroup>
                  <StyledIconButton ghost icon={<DownloadIcon useDarkMode />} size={'small'} />
                  <StyledLine />
                </StyledButtonGroup>
              </Menu.Item>
              <Menu.Item className='right-nav' key="lang">
                <StyledButtonGroup>
                  <StyledIconButton ghost icon={<EarthIcon useDarkMode />} size={'small'} />
                  <StyledLine />
                </StyledButtonGroup>
              </Menu.Item>
              <Menu.Item className='right-nav' key="theme">
                <StyledButtonGroup>
                  <StyledIconButton ghost onClick={props.onChangeTheme} icon={theme === 'light' ? <MoonIcon useDarkMode /> : <LightIcon useDarkMode />} size={'small'} />
                </StyledButtonGroup>
              </Menu.Item>

              {
                currentUser
                &&
                <Menu.Item className='right-nav' key="setting">
                  <StyledButtonGroup>
                    <StyledLine />
                    <StyledIconButton ghost icon={<SettingIcon useDarkMode />} size={'small'} />
                  </StyledButtonGroup>
                </Menu.Item>
              }
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
                    {
                      !currentUser
                        ?
                        <>
                          <div className='menu-item-btn'>
                            <Button onClick={() => { onNavigation('/login') }} type="text">{t('header.login')}</Button>
                          </div>
                          <div className='menu-item-btn'>
                            <Button onClick={() => { onNavigation('/register') }} type="primary">{t('header.register')}</Button>
                          </div>
                        </>
                        :
                        <>
                          <div onClick={() => onNavigation('/home')} className='menu-item'>
                            <NotificationIcon useDarkMode />
                            <div className='txt'>{t('header.notification')}</div>
                          </div>
                          <div onClick={() => onNavigation('/home')} className='menu-item'>
                            <UserIcon useDarkMode />
                            <div className='txt'>{t('header.profile')}</div>
                          </div>
                        </>
                    }

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
                      <DownloadIcon useDarkMode />
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
