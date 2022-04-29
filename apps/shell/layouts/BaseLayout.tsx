import { Header } from "@difx/core-ui";
import { currentUserAtom } from "@difx/shared";
import { Layout } from "antd";
import { useAtomValue } from "jotai/utils";
import { useRouter } from "next/router";
import styled from "styled-components";

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

  const currentUser = useAtomValue(currentUserAtom);

  return (
    <LayoutStyled>
      <Header onNavigation={(page: string) => router.push(page)} />
      <ContentStyled>{children}</ContentStyled>
    </LayoutStyled>
  );
}
