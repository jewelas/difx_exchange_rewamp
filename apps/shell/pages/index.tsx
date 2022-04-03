import { useEffect } from 'react';
import { Header } from '@difx/core-ui';
import { useGetPairs } from '@difx/shared';
import { Layout, Menu } from 'antd';
import HomePage from './home';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router';
import styled from 'styled-components';


const LayoutStyled = styled(Layout)`
  background: #F7F7F8 !important;
`

const ContentStyled = styled.div`
  margin-top: 74px;
`
export interface AppLayoutProps {
  children: any
}

export function AppLayout({children}:AppLayoutProps) {

  const { data: pairs } = useGetPairs();
  console.log(pairs, 'pairs')

  const { SubMenu } = Menu;
  const { Footer } = Layout;
  const router = useRouter();

  useEffect(()=>{
    const {pathname} = router;
    if(pathname === '/') router.push('/home');
}, []);

  return (
    <LayoutStyled>
      <Header onNavigation={(page:string)=> router.push(page)} />
      
      <ContentStyled>{children}</ContentStyled>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </LayoutStyled>

  );
}

export default AppLayout;
