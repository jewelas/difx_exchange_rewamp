import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Row, Col, Layout, Menu, Breadcrumb } from 'antd';
import { Button } from 'antd';
import { LogoIcon, ArrowDownIcon, EarthIcon, MoonIcon } from '../Icon'

/* eslint-disable-next-line */
export interface HeaderProps {
  onNavigation: (page:string)=> void
}

const StyledIconButton = styled(Button)`
  background: unset;
  border: unset !important;
  box-shadow: unset !important;
  svg{
    margin: 0 auto
  }
`
const StyledLine = styled.div`
  height: 21px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 2px;
  width: 1px;
  opacity: 0.32;
  border-right: solid 1px #707070;
`

const StyledHeader = styled(Layout.Header)`
    padding: unset !important;
    height: 70px !important;
    line-height: 70px !important;
    .group{
      display:flex;
      background: #fff;
      .logo{
        display: flex;
        width:122px;
        svg{
          height: 30px;
          margin-top: 20px;
          margin-left: 18px;
          margin-right: 5px;
        }
        .title{
          color: #3d7eff;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 2px;
        }
      }
      .ant-menu{
        height: 70px;
        flex-grow:1;
        border-bottom: unset !important;
        .ant-menu-item::after{
          border-bottom: unset !important;
        }
      }
      .right-nav{
        width: auto;
        display: flex;
        .register{
          margin-left: 16px;
          font-weight:400;
        }
        .icon-group{
          display: flex;
          padding-top: 23px;
          height: 70px;
          margin-left: 70px;
          margin-right: 70px;
        }
      }
    }

`;

export function Header(props: HeaderProps) {
  const {onNavigation} = props;
  return (
    <StyledHeader>
      <Row>
        <Col span={24}>
          <div className='group'>
            <div className='logo'>
              <LogoIcon />
              <div className='title'>DIFX</div>
            </div>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="2">Home</Menu.Item>
              <Menu.Item onClick={()=>onNavigation('/market')} key="3">Markets</Menu.Item>
              <Menu.Item key="4">Trade</Menu.Item>
              <Menu.Item key="5">Earn</Menu.Item>
              <Menu.Item key="6">Wallet</Menu.Item>
              <Menu.Item key="7">Orders</Menu.Item>
            </Menu>
            <div className='right-nav'>
              <div className='login'>
                Log in
              </div>
              <div className='register'>
                <Button type="primary">Register</Button>
              </div>
              <div className='icon-group'>
                <StyledIconButton icon={<ArrowDownIcon />} size={'small'} />
                <StyledLine/>
                <StyledIconButton icon={<EarthIcon />} size={'small'} />
                <StyledLine/>
                <StyledIconButton icon={<MoonIcon />} size={'small'} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </StyledHeader>
  );
}

export default Header;
