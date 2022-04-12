import { useEffect } from 'react';
import { Layout, ConfigProvider } from 'antd';
import styled, { ThemeProvider } from 'styled-components';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { Header } from '@difx/core-ui';
import { themeAtom } from '@difx/shared';
import { light, dark } from './../themes';
import GlobalStyles from './../themes/GlobalStyles';
import 'antd/dist/antd.variable.min.css';

const LayoutStyled = styled(Layout)`
  background: ${({theme})=> theme.backgroundColor} !important;
`

const ContentStyled = styled.div`
  margin-top: 74px;
  background: ${({theme})=> theme.backgroundColor}
`
export interface AppLayoutProps {
  children: React.ReactChild;
  ghost?: boolean
}

export function AppLayout({ children, ghost }: AppLayoutProps) {

  const { Footer } = Layout;
  const router = useRouter();

  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const { pathname } = router;
    if (pathname === '/') router.push('/home');
  }, [router]);

  useEffect(() => {
    const themeFromLocalStorage = localStorage?.getItem('theme');
    setTheme(themeFromLocalStorage || 'light');
  }, [setTheme]);

  const LIGHT = 'light';
  const DARK = 'dark';

  const changeTheme = () => {
    const themeChanged = theme === LIGHT ? DARK : LIGHT
    localStorage.setItem('theme', themeChanged);
    setTheme(themeChanged);
  }

  // Config for antd
  ConfigProvider.config(
    theme === LIGHT
      ? { theme: light }
      : { theme: dark }
  );

  return (

    // Use theme in ThemeProvider to reuse variable when customize the styled-component
    <ThemeProvider theme={theme === LIGHT ? light : dark}>
      <GlobalStyles/>
      <LayoutStyled style={ghost && {display:'none'}}>
        <Header onChangeTheme={changeTheme} onNavigation={(page: string) => router.push(page)} />
        <ContentStyled>{children}</ContentStyled>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </LayoutStyled>
    </ThemeProvider>
  );
}

export default AppLayout;
