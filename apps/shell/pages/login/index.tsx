import { Color, Icon, Typography } from '@difx/core-ui';
import { Button, Col, Row } from 'antd';
import t from '@difx/locale';
import Link from 'next/link';
import styled from 'styled-components';
import AppLayout from '..';
import LoginForm from './../../components/login/LoginForm';

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
      .content{
        .dial-group{
          display: flex;
          .dropdown-dial{
            margin-right : 10px;
          }
          .ant-row.ant-form-item{
            flex-grow: 1;
          }
        }
        .email{
          margin-bottom: 15px;
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

  return (
    <AppLayout>
      <PageStyled>
        <Row className='row-group'>
          <Col className='col-group' xs={24} sm={20} md={16} lg={14} xl={10}>
            <Typography level='H4'>{t('signin.login_in_difx')}</Typography>
            <Typography level='B2'>{t('signin.check_correct_url')}</Typography>
            <div className='link'>
              <Icon.LockIcon />
              <div><span style={{ color: Color.green.success }}>https://</span>difx.io</div>
            </div>

            <LoginForm />

            <div className='left-right'>
              <div className='left'>
                <Typography level='B1'>{t('signin.new_account')} <Link href='/register'>{t('common.register')}</Link></Typography>
              </div>
              <div className='right.forgot-pass'>
                <Typography level='B1'><Link href='/forgot'>{t('common.forgot_password')}</Link></Typography>
              </div>
            </div>
            <div className='or'>
              <div>Or</div>
            </div>
            <Button htmlType='submit' className='sign-in-qrcode' ghost type='primary'>
              <Icon.QRCodeIcon />
              <span>{t('signin.login_qr')}</span>
            </Button>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default LoginPage;
