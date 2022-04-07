import { Header } from '@difx/core-ui';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';


const LayoutStyled = styled(Layout)`
  background: #F7F7F8 !important;
`

const ContentStyled = styled.div`
  margin-top: 74px;
`
export interface AppLayoutProps {
  children: React.ReactChild
}

export function AppLayout({children}:AppLayoutProps) {

  const { Footer } = Layout;
  const router = useRouter();

  useEffect(()=>{
    const {pathname} = router;
    if(pathname === '/') router.push('/home');
}, [router]);

  return (
    <LayoutStyled>
      <Header onNavigation={(page:string)=> router.push(page)} />
      
      <ContentStyled>{children}</ContentStyled>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </LayoutStyled>

  );
}

export default AppLayout;
