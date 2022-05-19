import { Header } from "@difx/core-ui";
import { anonymousTokenAtom, useRTL } from "@difx/shared";
import { Layout } from "antd";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import styled from "styled-components";

const LayoutStyled = styled(Layout)`
  background: ${({ theme }) => theme.background.body} !important;
`;

const ContentStyled = styled.div`
  /* margin-top: 74px; */
  background: ${({ theme }) => theme.background.primary};
`;

export interface BaseLayoutProps {
  children: React.ReactChild;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const router = useRouter();
  const { RTLDirection } = useRTL();
  const [anonymousToken] = useAtom(anonymousTokenAtom);

  if(!anonymousToken) return null;

  return (
      <LayoutStyled >
        <Header onNavigation={(page: string) => router.push(page)} />
        <ContentStyled dir={RTLDirection}>{children}</ContentStyled>
      </LayoutStyled>
  );
}
