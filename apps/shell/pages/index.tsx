import { ThemeProvider } from "styled-components";
import BaseLayout from "../layouts/BaseLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import GuestLayout from "./../layouts/GuestLayout";
import { dark, light, GlobalStyles } from "@difx/core-ui/themes";
import { useTheme, useAuth } from "@difx/shared";

export interface AppLayoutProps {
  children: React.ReactChild;
}

export function AppLayout({ children}: AppLayoutProps) {
  const { isLoggedIn } = useAuth();
  const { theme } = useTheme();

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
