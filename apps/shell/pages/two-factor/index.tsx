import { Color, Typography } from '@difx/core-ui';
import { Col, Row } from 'antd';
import t from '@difx/locale';
import styled from 'styled-components';
import AppLayout from '..';
import TwoFactorForm from './../../components/two-factor/TwoFactorForm';

/* eslint-disable-next-line */
export interface TwoFactorProps { }

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
      .form{
        margin-top: 25px;
      }
      .H4, .B2{
        display: flex;
        justify-content: center;
      }
      .B2{
        margin-top: 10px;
        color: ${Color.grey.linkSecondary};
      }
      .B1{
        color: ${Color.grey.linkSecondary};
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
        .email{
          margin-bottom: 15px;
        }
      }
      .ant-btn{
        width: 100%;
      }
    }
  }
`;

export function TwoFactorPage(props: TwoFactorProps) {

  return (
    <AppLayout>
      <PageStyled>
        <Row className='row-group'>
          <Col className='col-group' xs={24} sm={20} md={16} lg={14} xl={10}>
            <Typography level='H4'>{t('2fa.2fa')}</Typography>
            <Typography level='B2'>Enter the security code  sent to +971 5000000</Typography>
            <div className='form'>
              <TwoFactorForm />
            </div>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default TwoFactorPage;
