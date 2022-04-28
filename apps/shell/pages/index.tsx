import { dark, GlobalStyles, light } from "@difx/core-ui/themes";
import { useAuth, useTheme } from "@difx/shared";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import BaseLayout from "../layouts/BaseLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import HomeComponent from './../components/home/HomeComponent';
import GuestLayout from "./../layouts/GuestLayout";

export interface AppLayoutProps {
  children: React.ReactChild;
}

export function AppLayout({ children = <HomeComponent/>}: AppLayoutProps) {
  const { isLoggedIn } = useAuth();
  const { theme } = useTheme();

  useEffect(()=>{
    // console.log(localStorage?.getItem("currentUser"))
  },[])

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
