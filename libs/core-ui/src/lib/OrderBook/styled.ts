
import styled from 'styled-components';
import { Color } from './../Color';

interface BarStyledProps {
  width?: string;
}
export const BarStyled = styled.div<BarStyledProps>`
    z-index: 1;
    position: absolute;
    right:0;
    height:30px;
    &.bid{
      background: rgba(219, 83, 84, 0.2);
    }
    &.ask{
      background: rgba(33, 193, 152,0.2);
    }
    width: ${p=>`${p.width}%` || 0};
    margin-top:-5px;
`

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
    .loading{
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
    .table-body{
      margin-top: 10px;
      overflow: hidden;
      .table-row{
        display: flex;
        justify-content: space-between;
        margin-bottom:1px;
        margin-left: -20px;
        margin-right: -15px;
        padding:5px;
        padding-left: 20px;
        padding-right: 15px;
        .ant-typography{
          z-index: 2;
          &.price{
            width: 70px;
            max-width: 70px;
            overflow: hidden;
            overflow: hidden;
            white-space: nowrap;
            display:flex;
            justify-content: flex-start;
          }
          &.amount{
            width: 70px;
            max-width: 70px;
            overflow: hidden;
            overflow: hidden;
            white-space: nowrap;
            display:flex;
            justify-content: flex-end;
          }
          &.total{
            overflow: hidden;
            overflow: hidden;
            flex-grow: 1;
            max-width: 70px;
            white-space: nowrap;
            display:flex;
            justify-content: flex-end;
          }
        }
      }
      .center-group{
        display: flex;
        justify-content: space-between;
        margin:10px 0;
        .left{
          .B1{
            font-weight: 600;
            &.bid{
              color: ${Color.green.success}
            }
            &.ask{
              color: ${Color.red.failure}
            }
          }
        }
        .right{

        }
      }
      .ask{
        overflow: hidden;
        .price{
          color: ${Color.red.failure}
        }
      }
      .bid{
        overflow: hidden;
        .price{
          color: ${Color.green.success}
        }
      }
    }
  }
`