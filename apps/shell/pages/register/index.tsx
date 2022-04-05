import { Typography, CountrySelect, Icon, Color } from '@difx/core-ui';
import { Row, Col, Input, Button } from 'antd';
import CoverImage from './svg/CoverImage';
import Lang from '@difx/locale';
import styled from 'styled-components';
import AppLayout from '..';

/* eslint-disable-next-line */
export interface RegisterPageProps { }

const PageStyled = styled.div`
  .left-side{
    .message{
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 50px;
      .H1{
        margin-top: 20px;
      }
      .H5{
        margin-top: 20px;
      }
    }
    .cover-group{
      margin-top: 30px;
      text-align:center;
    }
  }

  .right-side{
    background: #fff;
    margin-top: -4px;
    .group{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding: 40px;
      .H6{
        margin-top: 20px;
      }
    }
    .country-select-group{
      margin-top:10px;
    }
    .input-group{
      margin-top:30px;
      .ant-input{
        height: 48px;
        font-size: 20px;
        font-weight: 400;
        line-height:22px;
      }
    }
    .account-type-group{
      margin-top:30px;
      button:nth-child(2){
        margin-left:30px;
      }
      button{
        padding:unset;
        height: 74px;
        width: 87px;
        border-radius: 2px;
        color: ${Color.grey.buttonSecondary};
        border-color: ${Color.grey.buttonSecondary} !important;
        svg path{
          fill: ${Color.grey.buttonSecondary};
        }
        &.active{
          color: ${Color.blue.primary};
          border-color: ${Color.blue.primary} !important;
          svg path{
            fill: ${Color.blue.primary} !important;
          }
        }
        &:hover{
          transition: unset;
          color: ${Color.blue.primary} !important;
          border-color: ${Color.blue.primary} !important;
          svg path{
            fill: ${Color.blue.primary} !important;
          }
        }
      }
    }
  }

  @media (max-width: 1026px) {
    .left-side{
      display: none !important;
    }
    .right-side{
      width: 100%;
      max-width: unset !important;
      flex: unset;
    }
  }
`;

export function RegisterPage(props: RegisterPageProps) {

  return (
    <AppLayout>
      <PageStyled>
        <Row>
          <Col className='left-side' md={{ span: 15 }}>
            <div className='message'>
              <Typography level={'H2'}>{Lang.register.message1}</Typography>
              <Typography level={'H1'} color={'primary'}>{Lang.register.message2}</Typography>
              <Typography level={'H5'} color={'secondary'}>{Lang.register.message3}</Typography>
            </div>
            <div className='cover-group'>
              <CoverImage />
            </div>
          </Col>
          <Col className='right-side' md={{ span: 9 }}>
            <div className='group'>
              <Typography level={'H2'}>{Lang.register.register_your_account}</Typography>
              <Typography level={'H6'}>{Lang.register.resident_country}</Typography>
              <div className='country-select-group'>
                <CountrySelect onChange={() => { }} />
              </div>
              <div className='account-type-group'>
                <Button className='active'>
                  <Icon.UserIcon />
                  <div>{Lang.register.individual}</div>
                </Button>
                <Button>
                  <Icon.BankIcon />
                  <div>{Lang.register.corporate}</div>
                </Button>
              </div>
              <div className='input-group'>
                <Input placeholder="Email" />
              </div>
            </div>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default RegisterPage;
