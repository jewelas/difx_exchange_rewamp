import { Header } from "@difx/core-ui";
import {
  currentUserAtom,
  UpdateTokenRequest,
  UpdateTokenResponse,
  useUpdateToken,
} from "@difx/shared";
import { Layout } from "antd";
import "antd/dist/antd.variable.min.css";
import { AxiosResponse } from "axios";
import { useAtomValue } from "jotai/utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import { REFRESH_TOKEN, THEME } from "./../constants/index";

const LayoutStyled = styled(Layout)`
  background: ${({ theme }) => theme.background.primary} !important;
`;

const ContentStyled = styled.div`
  margin-top: 74px;
  background: ${({ theme }) => theme.background.primary};
`;
export interface LoggedInLayoutProps {
  children: React.ReactChild;
}

export function LoggedInLayout({ children }: LoggedInLayoutProps) {
  const { Footer } = Layout;
  const router = useRouter();

  const currentUser = useAtomValue(currentUserAtom);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.token) {
      const request: UpdateTokenRequest = { token: currentUser.token };
      updateToken(request);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { mutate: updateToken } = useUpdateToken({
    onSuccess: (response: AxiosResponse<UpdateTokenResponse>) => {
      setTimeout(() => {
        updateToken({ token: response.data.token });
      }, REFRESH_TOKEN.EXPIRY_TIME);
    },
  });

  const { pathname } = router;
  if (["/login", "/register", "two-factor", "/"].includes(pathname)) {
    router.push("/home");
    return null; // TODO: display the loading page
  }

  return (
    <LayoutStyled>
      <Header
        currentUser={currentUser}
        onNavigation={(page: string) => router.push(page)}
      />
      <ContentStyled>{children}</ContentStyled>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED.
      </Footer>
    </LayoutStyled>
  );
}

export default LoggedInLayout;
