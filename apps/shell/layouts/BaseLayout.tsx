import { Header } from "@difx/core-ui";
import Head from "next/head";
import { anonymousTokenAtom, useRTL, useTitle } from "@difx/shared";
import { Layout } from "antd";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import styled from "styled-components";

const LayoutStyled = styled(Layout)`
  background: ${({ theme }) => theme.background.body} !important;
`;

const ContentStyled = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export interface BaseLayoutProps {
  children: React.ReactChild;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const router = useRouter();
  const { RTLDirection } = useRTL();
  const [anonymousToken] = useAtom(anonymousTokenAtom);
  const { title: pageTitle } = useTitle();

  if (!anonymousToken) return null;

  return (
    <LayoutStyled>
      <Head>
        {
          pageTitle &&
          <title>
            {pageTitle}
          </title>
        }
      </Head>

      <Header onNavigation={(page: string) => router.push(page)} />
      <ContentStyled dir={RTLDirection}>{children}</ContentStyled>
    </LayoutStyled>
  );
}
