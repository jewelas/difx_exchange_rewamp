import { Header } from '@difx/core-ui';
import { themeAtom, UpdateTokenRequest, UpdateTokenResponse, useUpdateToken } from '@difx/shared';
import { ConfigProvider, Layout } from 'antd';
import 'antd/dist/antd.variable.min.css';
import { AxiosResponse } from 'axios';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import { REFRESH_TOKEN, THEME } from './../constants/index';
import { dark, light } from './../themes';

const LayoutStyled = styled(Layout)`
  background: ${({ theme }) => theme.backgroundColor} !important;
`

const ContentStyled = styled.div`
  margin-top: 74px;
  background: ${({ theme }) => theme.backgroundColor}
`
export interface LoggedInLayoutProps {
  children: React.ReactChild;
}

export function LoggedInLayout({ children }: LoggedInLayoutProps) {

  const { Footer } = Layout;
  const router = useRouter();

  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const request: UpdateTokenRequest = { token: currentUser.token }
      updateToken(request);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheme = () => {
    const themeChanged = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    localStorage.setItem('theme', themeChanged);
    setTheme(themeChanged);
  }

  // Config for antd
  ConfigProvider.config(
    theme === THEME.LIGHT
      ? { theme: light }
      : { theme: dark }
  );

  const { mutate: updateToken } = useUpdateToken({
    onSuccess: (response: AxiosResponse<UpdateTokenResponse>) => { setTimeout(() => { updateToken({ token: response.data.token }) }, REFRESH_TOKEN.EXPIRY_TIME) },
  });

  return (
      <LayoutStyled>
        <Header onChangeTheme={changeTheme} onNavigation={(page: string) => router.push(page)} />
        <ContentStyled>{children}</ContentStyled>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UEDxxxx</Footer>
      </LayoutStyled>
  );
}

export default LoggedInLayout;
