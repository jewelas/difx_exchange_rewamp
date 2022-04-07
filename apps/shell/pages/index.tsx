import { useEffect } from 'react';
import { Layout } from 'antd';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { Header } from '@difx/core-ui';
import { themeAtom } from '@difx/shared';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const LayoutStyled = styled(Layout)`
  background: #F7F7F8 !important;
`

const ContentStyled = styled.div`
  margin-top: 74px;
`
export interface AppLayoutProps {
  children: React.ReactChild
}

export function AppLayout({ children }: AppLayoutProps) {

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

  useEffect(() => {
    const elements = document.getElementsByTagName('body');
    if (elements && elements[0]) {
      elements[0].classList.remove('light');
      elements[0].classList.remove('dark');
      elements[0].classList.add(theme);
    }
  }, [theme]);

  const LIGHT = 'light';
  const DARK = 'dark';

  const changeTheme = () => {
    const themeChanged = theme === LIGHT ? DARK : LIGHT
    localStorage.setItem('theme', themeChanged);
    setTheme(themeChanged);
  }

  return (
    <LayoutStyled>
      <Header onChangeTheme={changeTheme} onNavigation={(page: string) => router.push(page)} />

      <ContentStyled className='layout-content'>{children}</ContentStyled>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </LayoutStyled>

  );
}

export default AppLayout;
