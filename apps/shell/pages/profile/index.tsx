import React from "react";
import { Layout } from "antd";
import AppLayout from "..";
import styled from "styled-components";

const PageStyled = styled.div``;

const ProfileContentStyled = styled(Layout.Content)`
  .title {
    font-weight: 600;
    font-size: 30px;
    color: #090e16;
  }
  .summary {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #090e16;
  }
  .widgets {
  }
`;

export function Profile() {
  return (
    <AppLayout>
      <PageStyled>
        <ProfileContentStyled style={{ padding: "0 50px" }}>
          <div className="title">staking</div>
        </ProfileContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default Profile;
