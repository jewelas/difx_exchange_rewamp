import { useRouter } from "next/router";
import { privateRoutes } from "../utils/routes"

export interface GuestLayoutProps {
  children: React.ReactChild;
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  const router = useRouter()
  const { pathname } = router;

  if(privateRoutes.includes(pathname)){
    router.push("/home");
    return null; 
  }

  return <>{children}</>
}
