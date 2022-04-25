// import {
//   UpdateTokenResponse,
//   useUpdateToken,
//   currentUserAtom,
// } from "@difx/shared";
// import { AxiosResponse } from "axios";
// import { useUpdateAtom } from "jotai/utils";
import { ThemeProvider } from "styled-components";
// import LoggedInLayout from "../layouts/LoggedInLayout";
// import { REFRESH_TOKEN } from "./../constants/index";
import BaseLayout from "../layouts/BaseLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import GuestLayout from "./../layouts/GuestLayout";
import { dark, light, GlobalStyles } from "@difx/core-ui/themes";
import { useTheme, useAuth } from "@difx/shared";

export interface AppLayoutProps {
  children: React.ReactChild;
}

export function AppLayout({ children}: AppLayoutProps) {
  // const [hasLoggedIn, setHasLoggedIn] = useState<boolean>(false);
  const { isLoggedIn } = useAuth();
  const { theme } = useTheme();

  // const setCurrentUser = useUpdateAtom(currentUserAtom);

  // useEffect(() => {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //   if (currentUser && currentUser.token) {
  //     setHasLoggedIn(true);
  //     setCurrentUser(currentUser);
  //   } else setHasLoggedIn(false);
  // }, [currentUserAtom]);

  // const { mutate: updateToken } = useUpdateToken({
  //   onSuccess: (response: AxiosResponse<UpdateTokenResponse>) => {
  //     setTimeout(() => {
  //       updateToken({ token: response.data.token });
  //     }, REFRESH_TOKEN.EXPIRY_TIME);
  //   },
  // });

  const LayoutDispatcher = isLoggedIn ? PrivateLayout : GuestLayout

  return (
    // Use theme in ThemeProvider to reuse variable when customize the styled-component
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <BaseLayout>
        <LayoutDispatcher>{children}</LayoutDispatcher>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default AppLayout;
