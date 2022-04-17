
import { Button, Layout } from 'antd';
import styled from 'styled-components';
import { Color } from './../Color';

export const ComponentStyled = styled.div`
  background: ${({ theme }) => theme.backgroundColor2};
  height: 100%;
  .com-title{
    padding-top: 10px;
    padding-left: 20px;
    border-bottom: solid 1px ${({ theme }) => theme.borderColorLighter};
    padding-bottom: 10px;
  }
  .com-head{
    display: flex;
    justify-content: space-between;
    padding:15px 15px 12px 10px;
    border-bottom: solid 1px ${({ theme }) => theme.borderColorLighter};
    
    .left{
      display: flex;
      width: 120px;
      justify-content: space-around;
      svg{
        cursor: pointer;
        opacity: 0.4;
      }
      .active{
        svg{
          opacity:1
        }
      }
    }

    .right{
      .ant-select{
        margin-top: -6px;
      }
    }
  }

  .com-table-content{
    padding: 10px 15px 10px 20px;
    color: ${({ theme }) => theme.textColor};
    .table-head{
      display:flex;
      justify-content: space-between;
    }
    .table-body{
      margin-top: 10px;
      .table-row{
        display: flex;
        justify-content: space-between;
        margin-bottom:2px;
        margin-left: -20px;
        margin-right: -15px;
        padding:5px;
        padding-left: 20px;
        padding-right: 15px;
      }
      .center-group{
        display: flex;
        justify-content: space-between;
        margin:10px 0;
        .left{
          .B1{
            font-weight: 600;
            color: ${Color.green.success}
          }
        }
        .right{

        }
      }
      .sell{
        .price{
          color: ${Color.red.failure}
        }
      }
      .buy{
        .price{
          color: ${Color.green.success}
        }
      }
    }
  }
`