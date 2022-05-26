import { dark, GlobalStyles, light } from "@difx/core-ui/themes";
import { useAuth, useGuestAuth, useTheme, useLanguage, useCurrency } from "@difx/shared";
import Image from 'next/image';
import t from "@difx/locale";
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
  console.log("Error:", error.message);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', position: 'absolute', width: '100%' }}>
      <div style={{ textAlign: "center" }}>
        <Image
          src="/imgs/logo.svg"
          alt="Difx Logo"
          width={30}
          height={30}
        />
      </div>
      <div style={{ fontSize: '17px', textAlign: 'center' }}>{t("common.msg_wrong")}</div>
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
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={() => {console.log('eeeeerrrrsot')}}>
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
