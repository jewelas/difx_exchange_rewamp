import { dark, GlobalStyles, light } from "@difx/core-ui/themes";
import { useAuth, useGuestAuth, useTheme, useLanguage, useCurrency } from "@difx/shared";
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from "styled-components";
import BaseLayout from "../layouts/BaseLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import HomeComponent from '../components/home/HomeComponent';
import GuestLayout from "../layouts/GuestLayout";
import 'antd/dist/antd.variable.min.css';

export interface AppLayoutProps {
  children: React.ReactChild;
}

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

export function AppLayout({ children = <HomeComponent /> }: AppLayoutProps) {
  const { isLoggedIn } = useAuth();
  const { theme } = useTheme();

  useGuestAuth()
  useLanguage()
  useCurrency()

  const LayoutDispatcher = isLoggedIn ? PrivateLayout : GuestLayout

  return (
    // Use theme in ThemeProvider to reuse variable when customize the styled-component
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <GlobalStyles />
        <BaseLayout>
          <LayoutDispatcher>{children}</LayoutDispatcher>
        </BaseLayout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default AppLayout;
