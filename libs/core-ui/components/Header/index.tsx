import { Button, Col, Drawer, Menu, Row, Popover } from "antd";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Icon } from "../Icon";
import t from "./../../../locale";
import { useAuth, useTheme, useRTL } from "./../../../shared";
import SettingPopover from "./SettingPopover";
import {
  StyledButtonGroup,
  StyledHeader,
  StyledLine,
  StyledMoreMenuGroup
} from "./styled";


export interface HeaderProps {
  onNavigation: (page: string) => void;
}

const SMALL_SIZE = 637;

export function Header(props: HeaderProps) {
  const { onNavigation } = props;

  const {
    LogoIcon,
    EarthIcon,
    MoonIcon,
    HorizontalLineIcon,
    CloseIcon,
    HomeIcon,
    ExchangeIcon,
    EarnIcon,
    WalletIcon,
    OrderIcon,
    MarketIcon,
    LightIcon,
    UserIcon,
    NotificationIcon,
    SettingIcon,
    DownloadIcon,
  } = Icon;

  const [showDrawer, setShowDrawer] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const { theme, switchTheme } = useTheme();
  const { isLoggedIn, logOut } = useAuth();
  const { toggleRTL } = useRTL()

  useEffect(() => {
    function handleResize() {
      const width: number = document?.body?.clientWidth;
      if (width) {
        setWidth(width);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onOpenDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const onCloseDrawer = () => {
    setShowDrawer(false);
  };

  const onCloseMenu = () => {
    setShowDrawer(false);
  };

  const router = useRouter();

  return (
    <StyledHeader>
      <Row>
        <Col span={24}>
          <div className="group">
            <div className="logo">
              <LogoIcon />
              <div className="title">DIFX</div>
            </div>
            <Menu mode="horizontal" selectedKeys={[router?.pathname]}>
              <Menu.Item
                className="left-nav"
                onClick={() => onNavigation("/home")}
                key="/home"
              >
                {t("header.home")}
              </Menu.Item>
              <Menu.Item
                className="left-nav"
                onClick={() => onNavigation("/market")}
                key="/market"
              >
                {t("header.markets")}
              </Menu.Item>
              <Menu.Item 
                className="left-nav"
                key="/exchange/[pair]"
                onClick={() => onNavigation("/exchange")}
              >
                {t("header.trade")}
              </Menu.Item>
              <Menu.Item className="left-nav" key="/orders" onClick={() => onNavigation("/orders")}>
                {t("header.order")}
              </Menu.Item>
              <Menu.Item
                className="left-nav"
                key="/wallet"
                onClick={() => onNavigation("/wallet")}
              >
                {t("header.wallet")}
              </Menu.Item>
              <Menu.Item
                className="left-nav"
                key="/staking"
                onClick={() => onNavigation("/staking")}
              >
                {t("header.staking")}
              </Menu.Item>

              <Menu.Item className="more-nav" key="open-drawer">
                <StyledButtonGroup>
                  <Button
                    onClick={onOpenDrawer}
                    icon={<HorizontalLineIcon useDarkMode />}
                    size={"small"}
                  />
                </StyledButtonGroup>
              </Menu.Item>
            </Menu>

            <Menu className="right-nav-group">
              {!isLoggedIn ? (
                <>
                  <Menu.Item className="right-nav login" key="/login">
                    <Button
                      style={{ marginRight: 10 }}
                      onClick={() => {
                        onNavigation("/login");
                      }}
                      type="text"
                    >
                      {t("header.login")}
                    </Button>
                  </Menu.Item>
                  <Menu.Item className="right-nav register" key="/register">
                    <Button
                      style={{ marginRight: 30 }}
                      onClick={() => {
                        onNavigation("/register");
                      }}
                      type="primary"
                    >
                      {t("header.register")}
                    </Button>
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item className="right-nav" key="logout">
                    <StyledButtonGroup onClick={() => logOut()}>
                      {t("header.logout")}
                      <StyledLine style={{ opacity: 0 }} />
                    </StyledButtonGroup>
                  </Menu.Item>
                  <Menu.Item className="right-nav icon" key="/notification">
                    <StyledButtonGroup>
                      <Button
                        icon={<NotificationIcon useDarkMode />}
                        size={"small"}
                        type="text"
                      />
                      <StyledLine style={{ opacity: 0 }} />
                    </StyledButtonGroup>
                  </Menu.Item>
                  <Menu.Item className="right-nav icon" key="/user">
                    <StyledButtonGroup>
                      <Button
  
                        icon={<UserIcon useDarkMode />}
                        size={"small"}
                        onClick={() => onNavigation("/profile")}
                        type="text"
                      />
                      <StyledLine style={{ opacity: 0 }} />
                    </StyledButtonGroup>
                  </Menu.Item>
                </>
              )}

              <Menu.Item className="right-nav icon" key="download">
                <StyledButtonGroup>
                  <Button
                    icon={<DownloadIcon useDarkMode />}
                    size={"small"}
                    type="text"
                  />
                  <StyledLine />
                </StyledButtonGroup>
              </Menu.Item>
              <Menu.Item className="right-nav icon" key="lang">
                <StyledButtonGroup>
                  <Button
                    icon={<EarthIcon useDarkMode />}
                    size={"small"}
                    type="text"
                    onClick={()=>toggleRTL()}
                  />
                  <StyledLine />
                </StyledButtonGroup>
              </Menu.Item>
              <Menu.Item className="right-nav icon" key="theme">
                <StyledButtonGroup>
                  <Button
                    onClick={() => {switchTheme()}}
                    icon={
                      theme === "light" ? (
                        <MoonIcon useDarkMode />
                      ) : (
                        <LightIcon useDarkMode />
                      )
                    }
                    size={"small"}
                    type="text"
                  />
                </StyledButtonGroup>
              </Menu.Item>

              {router && router.pathname === '/exchange/[pair]' && (
                <Menu.Item className="right-nav icon" key="setting">
                  <StyledButtonGroup>
                    <StyledLine />
                    <Popover content={<SettingPopover/>} trigger="click" placement="bottomRight">
                    <Button
                      icon={<SettingIcon useDarkMode />}
                      size={"small"}
                      type="text"
                    />
                    </Popover>
                  </StyledButtonGroup>
                </Menu.Item>
              )}
            </Menu>

            <Drawer
              width={250}
              placement="right"
              onClose={onCloseDrawer}
              visible={showDrawer}
            >
              <StyledMoreMenuGroup>
                <div className={clsx("items", showDrawer ? "open" : "close")}>
                  <div className="close-icon" onClick={onCloseMenu}>
                    <CloseIcon useDarkMode />
                  </div>
                  <div className="menu-item-group">
                    {!isLoggedIn ? (
                      <>
                        <div className="menu-item-btn">
                          <Button
                            onClick={() => {
                              onNavigation("/login");
                            }}
                            type="text"
                          >
                            {t("header.login")}
                          </Button>
                        </div>
                        <div className="menu-item-btn">
                          <Button
                            onClick={() => {
                              onNavigation("/register");
                            }}
                            type="primary"
                          >
                            {t("header.register")}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          onClick={() => onNavigation("/home")}
                          className="menu-item"
                        >
                          <NotificationIcon useDarkMode />
                          <div className="txt">{t("header.notification")}</div>
                        </div>
                        <div
                          onClick={() => onNavigation("/home")}
                          className="menu-item"
                        >
                          <UserIcon useDarkMode />
                          <div className="txt">{t("header.profile")}</div>
                        </div>
                      </>
                    )}

                    {width <= SMALL_SIZE && (
                      <>
                        <div
                          onClick={() => onNavigation("/home")}
                          className="menu-item"
                        >
                          <HomeIcon useDarkMode />
                          <div className="txt">{t("header.home")}</div>
                        </div>
                        <div className="menu-item">
                          <MarketIcon useDarkMode />
                          <div className="txt">{t("header.markets")}</div>
                        </div>
                        <div 
                        onClick={() => onNavigation("/exchange")}
                        className="menu-item">
                          <ExchangeIcon useDarkMode />
                          <div className="txt">{t("header.trade")}</div>
                        </div>
                        <div className="menu-item">
                          <EarnIcon useDarkMode />
                          <div className="txt">{t("header.earn")}</div>
                        </div>
                        <div className="menu-item">
                          <WalletIcon useDarkMode />
                          <div className="txt">{t("header.wallet")}</div>
                        </div>
                        <div className="menu-item">
                          <OrderIcon useDarkMode />
                          <div className="txt">{t("header.order")}</div>
                        </div>
                      </>
                    )}

                    <div className="line" />
                    <div className="menu-item">
                      <DownloadIcon useDarkMode />
                      <div className="txt">{t("header.download")}</div>
                    </div>
                    <div className="menu-item">
                      <EarthIcon useDarkMode />
                      <div className="txt">{t("header.english")}</div>
                    </div>
                    <div onClick={() => {switchTheme()}} className="menu-item">
                      {theme === "light" ? (
                        <MoonIcon useDarkMode />
                      ) : (
                        <LightIcon useDarkMode />
                      )}
                      <div className="txt">
                        {theme === "light"
                          ? t("header.dark_mode")
                          : t("header.light_mode")}
                      </div>
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
