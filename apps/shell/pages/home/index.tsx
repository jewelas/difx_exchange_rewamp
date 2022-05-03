import AppLayout from "..";
import HomeComponent from './../../components/home/HomeComponent';

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
