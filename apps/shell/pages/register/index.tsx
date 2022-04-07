import { Typography } from '@difx/core-ui';
import t from '@difx/locale';
import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import AppLayout from '..';
import RegisterFormComponent from './../../components/register/RegisterForm';
import CoverImage from './svg/CoverImage';

/* eslint-disable-next-line */
export interface RegisterPageProps { }

const PageStyled = styled.div`
  .left-side{
    margin-top:-5px;
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
              <Typography level={'H2'}>{t('register.message1')}</Typography>
              <Typography level={'H1'} color={'primary'}>{t('register.message2')}</Typography>
              <Typography level={'H5'} color={'secondary'}>{t('register.message3')}</Typography>
            </div>
            <div className='cover-group'>
              <CoverImage />
            </div>
          </Col>
          <Col className='right-side' md={{ span: 9 }}>
            <RegisterFormComponent />
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default RegisterPage;
