import React, { useEffect } from "react";
import AppLayout from "../index.page";
import { Layout } from 'antd';
import { PageStyled, ProfileContentStyled } from "./styled";
import { useRouter } from "next/router";
import ProfileSidebar from "../../components/profile/sidebar";

export interface ProfileLayoutProps {
  children: React.ReactChild;
}

export function ProfileLayout({ children }: ProfileLayoutProps) {
  const router = useRouter();
  useEffect(() => {
    if(router.pathname === "/profile"){
    router.push(`/profile/`);
    }
  }, []);

  return (
    <AppLayout>
      <PageStyled>
        <ProfileContentStyled>
          <Layout>
            <ProfileSidebar />
            {children}
          </Layout>
        </ProfileContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default ProfileLayout;
