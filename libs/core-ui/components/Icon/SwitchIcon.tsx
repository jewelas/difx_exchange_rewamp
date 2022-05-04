import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 12,
  height = 11,
  useDarkMode,
  fill = "#9AA5B4",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode}>
      <svg width={width} height={height} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9986 6.75H0.125171C0.0564207 6.75 0.000170742 6.80625 0.000170742 6.875V7.8125C0.000170742 7.88125 0.0564207 7.9375 0.125171 7.9375H9.58142L7.32673 10.7969C7.26267 10.8781 7.32048 11 7.42517 11H8.55798C8.63455 11 8.70642 10.9656 8.75486 10.9047L11.3924 7.55937C11.6502 7.23125 11.4174 6.75 10.9986 6.75ZM11.3752 3.0625H1.91892L4.17361 0.203125C4.23767 0.121875 4.17986 0 4.07517 0H2.94236C2.8658 0 2.79392 0.0343751 2.74548 0.0953126L0.107983 3.44063C-0.149829 3.76875 0.0829832 4.25 0.500171 4.25H11.3752C11.4439 4.25 11.5002 4.19375 11.5002 4.125V3.1875C11.5002 3.11875 11.4439 3.0625 11.3752 3.0625Z" />
      </svg>

    </Layout>
  );
}

export default Icon;
