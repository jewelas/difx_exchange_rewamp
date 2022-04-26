import { useRouter } from "next/router";

import { authRoutes } from "../utils/routes"

export interface PrivateLayoutProps {
  children: React.ReactChild;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const router = useRouter()
  const { pathname } = router;

  if(authRoutes.includes(pathname)){
    router.push("/home");
    return null; 
  }

  return <>{children}</>
}
