import { themeAtom, UpdateTokenResponse, useUpdateToken } from '@difx/shared';
import { ConfigProvider, Layout } from 'antd';
import 'antd/dist/antd.variable.min.css';
import { AxiosResponse } from 'axios';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import LoggedInLayout from '../layouts/LoggedInLayout';
import { REFRESH_TOKEN, THEME } from './../constants/index';
import GuestLayout from './../layouts/GuestLayout';
import { dark, light } from './../themes';
import GlobalStyles from './../themes/GlobalStyles';

const MainLayoutStyled = styled(Layout)`
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

  const [hasLoggedIn, setHasLoggedIn] = useState<boolean>(false);

  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const themeFromLocalStorage = localStorage?.getItem('theme');
    setTheme(themeFromLocalStorage || THEME.LIGHT);
  }, [setTheme]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser && currentUser.token)setHasLoggedIn(true);
    else setHasLoggedIn(false);
  }, []);

  // Config for antd
  ConfigProvider.config(
    theme === THEME.LIGHT
      ? { theme: light }
      : { theme: dark }
  );

  const { mutate: updateToken } = useUpdateToken({
    onSuccess: (response: AxiosResponse<UpdateTokenResponse>) => { setTimeout(() => { updateToken({ token: response.data.token }) }, REFRESH_TOKEN.EXPIRY_TIME) },
  });

  const LayoutDispatcher = hasLoggedIn ? LoggedInLayout : GuestLayout;

  return (

    // Use theme in ThemeProvider to reuse variable when customize the styled-component
    <ThemeProvider theme={theme === THEME.LIGHT ? light : dark}>
      <GlobalStyles />
      <MainLayoutStyled style={ghost && { display: 'none' }}>
        <LayoutDispatcher>{children}</LayoutDispatcher>
      </MainLayoutStyled>
    </ThemeProvider>
  );
}

export default AppLayout;
