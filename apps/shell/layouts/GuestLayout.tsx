import { Header } from '@difx/core-ui';
import { themeAtom } from '@difx/shared';
import { Layout } from 'antd';
import 'antd/dist/antd.variable.min.css';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { THEME } from './../constants';

const LayoutStyled = styled(Layout)`
  background: ${({ theme }) => theme.backgroundColor} !important;
`

const ContentStyled = styled.div`
  margin-top: 74px;
  background: ${({ theme }) => theme.backgroundColor}
`
export interface GuestLayoutProps {
  children: React.ReactChild;
}

export function GuestLayout({ children }: GuestLayoutProps) {

  const { Footer } = Layout;
  const router = useRouter();

  const [theme, setTheme] = useAtom(themeAtom);

  const changeTheme = () => {
    const themeChanged = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    localStorage.setItem('theme', themeChanged);
    setTheme(themeChanged);
  }

  return (

      <LayoutStyled>
        <Header onChangeTheme={changeTheme} onNavigation={(page: string) => router.push(page)} />
        <ContentStyled>{children}</ContentStyled>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </LayoutStyled>
  );
}

export default GuestLayout;
