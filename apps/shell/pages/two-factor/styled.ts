import styled from "styled-components";

const PageStyled = styled.div`
  height: calc(100vh - 50px);
  background: ${({ theme }) => theme.background.secondary};
  .ant-row.row-group {
    background: ${({ theme }) => theme.background.secondary};
    .ant-col.col-group {
      max-width: 550px;
      padding: 50px;
      margin: 0 auto;
      margin-top: 70px;
      margin-bottom: 70px;
      background: ${({ theme }) => theme.background.primary};
      border-radius: 15px;
      .form {
        margin-top: 25px;
      }
      .H4,
      .B2 {
        display: flex;
        justify-content: center;
      }
      .B2 {
        margin-top: 10px;
        color: ${({ theme }) => theme.fontColor.muted};
      }
      .B1 {
        color: ${({ theme }) => theme.fontColor.muted};
      }
      .left-right {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
        .left {
          display: flex;
          .tab {
            cursor: pointer;
            &.active {
              .ant-typography {
                color: ${({ theme }) => theme.color.primary};
              }
            }
          }
          .splitter {
            border-left: solid 1px #c7cdd5;
            height: 14px;
            margin-top: 4px;
            margin-left: 21px;
            margin-right: 21px;
          }
        }
        .pointer {
          cursor: pointer;
        }
        .right {
          .ant-switch {
            margin-top: 1px;
            margin-left: 6px;
          }
          &:not(.forgot-pass) {
            display: flex;
            margin-top: 4px;
          }
          .B2 {
            font-weight: 500 !important;
            line-height: 17px !important;
          }
        }
      }
      .content {
        .email {
          margin-bottom: 15px;
        }
      }
      .ant-btn {
        width: 100%;
      }
    }
  }
  .botton-box{
    margin: 10px 0px;
    display: flex;
    justify-content: flex-end;
  }
  .resend-box{
    color: ${({ theme }) => theme.fontColor.muted};
    span{
      margin-left: 5px;
      cursor: pointer;
      &.active{
        color: ${({ theme }) => theme.fontColor.link}
      }
    }
  }
  .paste-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 5px;
    color: ${({ theme }) => theme.fontColor.link};
    cursor: pointer;
  }
  .otpbox{
    background: ${({ theme }) => theme.background.secondary} !important;
  }

  .sign-in-btn{
    &:disabled{
      border: ${({ theme }: { theme }) => theme.border.secondary} !important;
      background: ${({ theme }: { theme }) => theme.color.disabled} !important;
    }
  }
`;

export default PageStyled;
