import styled from 'styled-components';
import { useState } from 'react';
import { Row, Col, Input, Button, Form, Switch } from 'antd';
import Link from 'next/link'
import AppLayout from '..';
import { Typography, Icon, Color } from '@difx/core-ui';
import clsx from 'clsx';

/* eslint-disable-next-line */
export interface LoginPageProps { }

const PageStyled = styled.div`
  .ant-row.row-group{
    background: ${({ theme }) => theme.backgroundColor};
    .ant-col.col-group{
      padding: 50px;
      margin: 0 auto;
      margin-top: 70px;
      margin-bottom: 70px;
      background: ${({ theme }) => theme.backgroundColor2};
      border-radius: 15px;
      .H4, .B2{
        display: flex;
        justify-content: center;
      }
      .B2{
        color: ${Color.grey.linkSecondary};
      }
      .B1{
        color: ${Color.grey.linkSecondary};
      }
      .link{
        cursor: pointer;
        background: ${({ theme }) => theme.backgroundColor2};
        color: ${({ theme }) => theme.textColor};
        border: 0.5px solid ${({ theme }) => theme.currentTheme === 'light' ? '#E1DDDD' : theme.backgroundColor};
        box-sizing: border-box;
        border-radius: 13.5px;
        padding: 2px 0px;
        width: 112px;
        margin: 0 auto;
        margin-top: 13px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        svg{
          margin-right:5px;
        }
      }
      .left-right{
        display: flex;
        justify-content: space-between;
        margin-top:10px;
        margin-bottom:10px;
        .left{
          display:flex;
          .tab{
            cursor: pointer;
            &.active{
              .ant-typography{
                color: ${Color.blue.primary}
              }
            }
          }
          .splitter{
            border-left: solid 1px #C7CDD5;
            height: 14px;
            margin-top: 4px;
            margin-left: 21px;
            margin-right: 21px;
          }
        }
        .pointer{
          cursor: pointer;
        }
        .right{
          .ant-switch{
            margin-top: 1px;
            margin-left: 6px;
          }
          &:not(.forgot-pass){
            display: flex;
            margin-top: 4px;
          }
          .B2{
            font-weight: 500 !important;
            line-height: 17px !important;
          }
        }
      }
      .ant-btn{
        width: 100%;
      }
      .or{
        border-bottom: solid 1px #9AA5B4;
        margin-top: 40px;
        margin-bottom: 40px;
        color: #9AA5B4;
        div{
          background: ${({ theme }) => theme.backgroundColor2};
          width: 36px;
          text-align: center;
          position: absolute;
          margin-top: -12px;
          left: 46%;
        }
      }
      .sign-in-qrcode{
        display:flex;
        justify-content: center;
        padding-top: 10px;
        svg{
          margin-top: 3px;
          margin-right: 8px;
        }
      }
    }
  }
`;

export function LoginPage(props: LoginPageProps) {

  const [type, setType] = useState<'email' | 'phone'>('email');
  const [isCorporate, setIsCorporate] = useState(false);

  return (
    <AppLayout>
      <PageStyled>
        <Row className='row-group'>
          <Col className='col-group' xs={24} sm={20} md={16} lg={14} xl={10}>
            <Typography level='H4'>Login in DIFX</Typography>
            <Typography level='B2'>Please check that you are visiting the correct URL</Typography>
            <div className='link'>
              <Icon.LockIcon />
              <div><span style={{ color: Color.green.success }}>https://</span>difx.io</div>
            </div>

            <Form /*ref={formRef} onFinish={onSubmit} onFieldsChange={onFormChange}*/ autoComplete="off">
              <div className='left-right'>
                <div className='left'>
                  <div onClick={() => { setType('email') }} className={clsx('tab', type === 'email' && 'active')}>
                    <Typography level='B1'>Email</Typography>
                  </div>
                  <div className='splitter' />
                  <div onClick={() => { setType('phone') }} className={clsx('tab', type === 'phone' && 'active')}>
                    <Typography level='B1'>Phone Number</Typography>
                  </div>
                </div>
                <div className='right'>
                  <div className='pointer' onClick={()=>{setIsCorporate(!isCorporate)}}>
                    <Typography level='B2'>Corporate</Typography>
                  </div>
                  <Switch size='small' checked={isCorporate} onChange={(checked) => {setIsCorporate(checked)}} />
                </div>
              </div>
              <div className='content'>
                <Form.Item name="email">
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="password">
                  <Input placeholder="Passwords" />
                </Form.Item>
                <Button htmlType='submit' className='sign-in-btn' type='primary'>Login</Button>
              </div>
            </Form>
            <div className='left-right'>
              <div className='left'>
                <Typography level='B1'>New account? <Link href='/register'>Register</Link></Typography>
              </div>
              <div className='right.forgot-pass'>
                <Typography level='B1'><Link href='/forgot'>Forgot password?</Link></Typography>
              </div>
            </div>
            <div className='or'>
              <div>Or</div>
            </div>
            <Button htmlType='submit' className='sign-in-qrcode' ghost type='primary'>
              <Icon.QRCodeIcon />
              <span>Login with QR Code</span>
            </Button>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default LoginPage;
