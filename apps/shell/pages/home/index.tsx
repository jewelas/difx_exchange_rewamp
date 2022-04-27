import { PairType, useHttpGet } from "@difx/shared";
import AppLayout from "..";
import HomeComponent from './../../components/home/HomeComponent';
import { API_ENDPOINT, QUERY_KEY } from "./../../constants";

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const { data: pairs } = useHttpGet<null,PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, { refetchInterval: 10000 });

  console.log(pairs)

  return (
    <AppLayout>
      <HomeComponent />
    </AppLayout>
  );
}

export default HomePage;
