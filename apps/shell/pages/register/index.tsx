import { Typography } from '@difx/core-ui';
import { Row, Col } from 'antd';
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
            <div>
              TODO
            </div>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default RegisterPage;
