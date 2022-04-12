import { Header } from '@difx/core-ui';
import { themeAtom, UpdateTokenRequest, UpdateTokenResponse, useUpdateToken } from '@difx/shared';
import { ConfigProvider, Layout } from 'antd';
import 'antd/dist/antd.variable.min.css';
import { AxiosResponse } from 'axios';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { REFRESH_TOKEN } from './../constants/index';
import { dark, light } from './../themes';
import GlobalStyles from './../themes/GlobalStyles';

const LayoutStyled = styled(Layout)`
  background: ${({ theme }) => theme.backgroundColor} !important;
`

const ContentStyled = styled.div`
  margin-top: 74px;
  background: ${({ theme }) => theme.backgroundColor}
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

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const request: UpdateTokenRequest = { token: currentUser.token }
      updateToken(request);
    }

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

  const { mutate: updateToken } = useUpdateToken({
    onSuccess: (response: AxiosResponse<UpdateTokenResponse>) => { setTimeout(() => { updateToken({ token: response.data.token }) }, REFRESH_TOKEN.EXPIRY_TIME) },
  });

  return (

    // Use theme in ThemeProvider to reuse variable when customize the styled-component
    <ThemeProvider theme={theme === LIGHT ? light : dark}>
      <GlobalStyles />
      <LayoutStyled style={ghost && { display: 'none' }}>
        <Header onChangeTheme={changeTheme} onNavigation={(page: string) => router.push(page)} />
        <ContentStyled>{children}</ContentStyled>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </LayoutStyled>
    </ThemeProvider>
  );
}

export default AppLayout;
