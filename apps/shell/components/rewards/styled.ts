import { Layout } from "antd";
import styled from "styled-components";
import { ThemeInterface } from "@difx/core-ui/themes";

export const PageStyled = styled.div`
  background-color: ${({ theme }: { theme: ThemeInterface }) =>
    theme.background.secondary} !important;
`;

export const RewardsContentStyled = styled(Layout.Content)`
  .bg-image {
    background-image: linear-gradient(84.56deg, #3d7eff 37.23%, #0b5cd6 94.22%);
  }
  .reward-card {
    background-image: url("./imgs/reward-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 450px;
  }
  .reward-main-title {
    font-weight: 600;
    font-size: 30px;
    color: #fff;
  }
  .reward-description-top {
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    line-height: 16px;
    padding-top: 24px;
    line-height: 24px;
  }
  .point-description {
    color: #ffffff;
  }
  .reward-title {
    align-items: center;
    height: 100%;
  }
  .main-card {
    border-radius: 10px;
    background-image: url("./imgs/reward-card-tracking-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
    background-color: inherit;
  }
  .card-grid {
    display: flex;
    justify-content: flex-end;
    .ant-steps-item-title {
      font-weight: 700;
      font-size: 12px;
      top: -10px;
    }
    .ant-steps-item-description {
      line-height: 0;
      color: #090e16 !important;
      font-weight: 700;
    }
    .step-desc {
      font-weight: 800;
      font-size: 20px;
    }
    .ant-steps-item-custom {
      padding-bottom: 30px;
      &:last-child {
        padding-bottom: 0px;
      }
    }
  }
  .main-container {
    border-radius: 10px;
    padding: 10px;
    background: #fff;
    .sub-container{
      background: linear-gradient(222.65deg, #E4E7F8 3.6%, #FAFCFF 101.35%);
      border-radius: 10px;
    }
  }
  .timeline-header {
    font-size: 12px;
  }
  .rewards-campaigns-card {
    display: flex;
    widtyh: 100%;
  }
  .campaigns-card {
    width: 25%;
    padding: 20px;
    background: #e6ebf7;
    border: 1px dashed #c4d2f3;
    position: relative;
    color: #3d7eff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 22px;
    align-items: center;
    &:after {
      content: "";
      position: absolute;
      height: 15px;
      width: 15px;
      background: ${({ theme }: { theme: ThemeInterface }) =>
        theme.background.secondary} !important;
      right: -7px;
      top: -7px;
      border-radius: 50%;
    }
    &:before {
      content: "";
      position: absolute;
      height: 15px;
      width: 15px;
      background: ${({ theme }: { theme: ThemeInterface }) =>
        theme.background.secondary} !important;
      right: -7px;
      bottom: -7px;
      border-radius: 50%;
    }
  }
  .rewards-campaigns-card-point-desc {
    width: 75%;
    padding: 20px;
    background-image: linear-gradient(
      91.84deg,
      #fcf0eb 48.44%,
      rgba(255, 223, 209, 0.82) 100.49%
    );
    font-weight: 700;
    border: 1px dashed rgba(255, 223, 209, 0.82);
    border-left: none;
    font-size: 22px;
  }
  .rewards-campaigns-card-point {
    font-weight: 700;
    font-size: 24px;
  }
  .rewards-campaigns-card-point-us {
    font-weight: 800;
    font-size: 10px;
  }
  .spin-and-win {
    font-weight: 800;
    font-size: 22px;
  }
  .rewards-campaigns-main {
    padding: 50px 0px;
  }
  .data-title {
    font-weight: 800;
    margin-bottom: 30px;
  }
  .ant-steps-item-finish {
    .ant-steps-item-tail {
      &: after {
        background: linear-gradient(180deg, #14DAA7 0%, #12DEAA 100%);
      }
    }
  }
  .ant-steps-item-tail {
    &: after {
      width: 3px !important;
    }
`;

export const LeaderboardTableStyle = styled.div`
  margin-top: 2px;
  background: ${({ theme }) => theme.background.secondary};
  }
  .anchor-link {
    color: ${({ theme }) => theme.fontColor.muted} !important;
  }
  .recent-transactions-table {
    padding: 0px 50px !important;
  }
  .ant-btn {
    border: none !important;
  }
  .deposit-link {
    color: ${({ theme }) => theme.color.success} !important;
  }
  .leaderboard-title {
    margin: 20px 0px 5px 0px;
    font-weight: 800;
  }
`;

export const FAQStyle = styled.div`
  margin-top: 100px;
  .faq-list {
    line-height: 2;
    color: #808080;
    .ant-typography {
      color: #808080 !important;
    }
  }
  .faq-title {
    margin-top: 60px;
  }
`;
