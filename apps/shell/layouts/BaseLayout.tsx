import { Header } from "@difx/core-ui";
import { Layout } from "antd";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useRTL } from "@difx/shared";

const LayoutStyled = styled(Layout)`
  background: ${({ theme }) => theme.background.body} !important;
`;

const ContentStyled = styled.div`
  margin-top: 45px;
`;

export interface BaseLayoutProps {
  children: React.ReactChild;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const router = useRouter();
  const { RTLDirection } = useRTL() 

  return (
      <LayoutStyled >
        <Header onNavigation={(page: string) => router.push(page)} />
        <ContentStyled dir={RTLDirection}>{children}</ContentStyled>
      </LayoutStyled>
  );
}
