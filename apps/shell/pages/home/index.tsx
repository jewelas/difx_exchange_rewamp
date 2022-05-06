import { PairType, useHttpGet } from "@difx/shared";
import AppLayout from "..";
import HomeComponent from './../../components/home/HomeComponent';
import { API_ENDPOINT, QUERY_KEY } from "@difx/constants";

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {

  return (
    <AppLayout>
      <HomeComponent />
    </AppLayout>
  );
}

export default HomePage;
