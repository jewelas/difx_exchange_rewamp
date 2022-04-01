import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Header, PairTable } from '@difx/core-ui';
import { useRouter } from 'next/router'
import { useGetPairs } from '@difx/shared';
import { Layout, Menu, Breadcrumb } from 'antd';

const MarketContentStyled = styled(Layout.Content)`
  .title{
    font-weight: 600;
    font-size: 30px;
    color: #090E16;
  }
  .summary{
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #090E16;
  }
  .widgets{

  }
`

const ListPairsContentStyled = styled(Layout.Content)`
  background: #fff;
  margin-top:20px;
  .title{
    font-size: 16px;
    font-weight: 600;
    color: #3D7EFF;
    text-transform: uppercase;
    height: 32px;
    border-bottom: solid 2px;
    display: inline-block
  }
  .pairs{
    margin-top: 20px;
  }
`

const LayoutStyled = styled(Layout)`
  background: #F7F7F8 !important;
`

export function Index() {

  const { data: pairs } = useGetPairs();
  console.log(pairs, 'pairs')

  const { SubMenu } = Menu;
  const { Content, Footer, Sider } = Layout;
  const router = useRouter();

  return (
    <LayoutStyled>
      <Header onNavigation={(page:string)=> router.push(page)} />
      <MarketContentStyled style={{ padding: '0 50px' }}>
        <div className='title'>
          Market
        </div>
        <div className='summary'>
          In the pass 24 hours Market is down <span style={{ color: '#DB5354' }}>3.08%</span>
        </div>
      </MarketContentStyled>
      <ListPairsContentStyled style={{ padding: '10px 50px' }}>
        <div className='title'>All</div>
        <div className='pairs'>
          <PairTable pairs={pairs}/>
        </div>
      </ListPairsContentStyled >
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </LayoutStyled>

  );
}

export default Index;
