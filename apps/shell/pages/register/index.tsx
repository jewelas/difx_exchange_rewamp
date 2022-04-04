import { Typography, CountrySelect } from '@difx/core-ui';
import { Row, Col, Select } from 'antd';
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
          <Col className='left-side' md={{ span: 16 }}>
            <div className='message'>
              <Typography level={'H2'}>{Lang.register.message1}</Typography>
              <Typography level={'H1'} color={'primary'}>{Lang.register.message2}</Typography>
              <Typography level={'H5'} color={'secondary'}>{Lang.register.message3}</Typography>
            </div>
            <div className='cover-group'>
              <CoverImage />
            </div>
          </Col>
          <Col className='right-side' md={{ span: 8 }}>
            <div className='group'>
              <Typography level={'H2'}>Register your Account</Typography>
              <Typography level={'H6'}>Resident Country:</Typography>
              <div className='country-select-group'>
                <CountrySelect onChange={() => { }} />
              </div>
              <div className='account-type-group'>

              </div>
            </div>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default RegisterPage;
