import React, { useState } from 'react';
import { Typography, CountrySelect, Icon, Color } from '@difx/core-ui';
import { Row, Col, Input, Button, Checkbox } from 'antd';
import Link from 'next/link'
import CoverImage from './svg/CoverImage';
import t from '@difx/locale';
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
    .referral-group{
      display:flex;
      cursor:pointer;
      width: 147px;
      .icon{
        margin-top: 23px;
        margin-left: 10px;
      }
    }
    .term-group{
      margin-top: 20px;
    }
    .sign-up-btn{
      margin-top:20px;
      height: 48px !important;
    }
    .input-group{
      margin-top:30px;
      .ant-input{
        height: 48px;
        font-size: 14px;
        font-weight: 400;
        line-height:22px;
      }
      .input-item{
        margin-bottom:30px;
        display:flex;
        &.dial{
          .dropdown-dial{
            margin-right:20px;
          }
        }
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
          transition: unset !important;
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

  const [showReferral, setShowReferral] = useState(false);

  return (
    <AppLayout>
      <PageStyled>
        <Row>
          <Col className='left-side' md={{ span: 15 }}>
            <div className='message'>
              <Typography level={'H2'}>{t('register.message1')}</Typography>
              <Typography level={'H1'} color={'primary'}>{t('register.message2')}</Typography>
              <Typography level={'H5'} color={'secondary'}>{t('register.message3')}</Typography>
            </div>
            <div className='cover-group'>
              <CoverImage />
            </div>
          </Col>
          <Col className='right-side' md={{ span: 9 }}>
            <div className='group'>
              <Typography level={'H2'}>{t('register.register_your_account')}</Typography>
              <Typography level={'H6'}>{t('register.resident_country')}</Typography>
              <div className='country-select-group'>
                <CountrySelect onChange={() => { }} size='large' />
              </div>
              <div className='account-type-group'>
                <Button className='active'>
                  <Icon.UserIcon />
                  <div>{t('register.individual')}</div>
                </Button>
                <Button>
                  <Icon.BankIcon />
                  <div>{t('register.corporate')}</div>
                </Button>
              </div>
              <div className='input-group'>
                <div className='input-item'>
                  <Input placeholder="Email" />
                </div>
                <div className='input-item dial'>
                  <div className='dropdown-dial'>
                    <CountrySelect width={150} type='dial_code' onChange={() => { }} size='medium' />
                  </div>
                  <Input placeholder="Phone Number" />
                </div>
                <div className='input-item'>
                  <Input placeholder="Password" />
                </div>

                <div onClick={() => { setShowReferral(!showReferral) }} className='referral-group'>
                  <Typography level='H6'>{t('register.referral_code')}</Typography>
                  <div className='icon'>{showReferral ? <Icon.MenuDownIcon /> : <Icon.MenuUpIcon />}</div>
                </div>
                {
                  showReferral
                  &&
                  <div className='input-item' style={{ marginTop: 10, marginBottom:0 }}>
                    <Input placeholder="Referral" />
                  </div>
                }

              </div>

              <div className='term-group'>
                <Checkbox
                // checked={this.state.checked}
                // disabled={this.state.disabled}
                // onChange={this.onChange}
                >
                  <Typography level='text'>{t('register.term1')} <a target='_blank' href='/term'>{t('register.term2')}</a></Typography>
                </Checkbox>
              </div>

                <Button className='sign-up-btn' type='primary'>Sign Up</Button>

            </div>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default RegisterPage;
