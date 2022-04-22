import BaseLayout from "./BaseLayout";

export interface GuestLayoutProps {
  children: React.ReactChild;
}

export function GuestLayout({ children }: GuestLayoutProps) {

  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  );
}

export default GuestLayout;
