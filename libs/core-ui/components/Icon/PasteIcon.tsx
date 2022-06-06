import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 12,
  height = 12,
  useDarkMode,
  useDarkModeFor,
  fill = "#262626",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} useDarkModeFor={useDarkModeFor}>
      <svg width={width} height={height} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.68618 1.4167L8.5281 0.302049C8.32717 0.108652 8.05465 1.43016e-06 7.77049 0L3.92857 0C3.33683 0 2.85714 0.461699 2.85714 1.03125V2.0625H1.07143C0.479688 2.0625 0 2.5242 0 3.09375V9.96875C0 10.5383 0.479688 11 1.07143 11H6.07143C6.66317 11 7.14286 10.5383 7.14286 9.96875V8.9375H8.92857C9.52031 8.9375 10 8.4758 10 7.90625V2.1459C10 1.8724 9.88712 1.6101 9.68618 1.4167ZM5.9375 9.96875H1.20536C1.16984 9.96875 1.13577 9.95517 1.11066 9.93099C1.08554 9.90682 1.07143 9.87403 1.07143 9.83984V3.22266C1.07143 3.18847 1.08554 3.15568 1.11066 3.13151C1.13577 3.10733 1.16984 3.09375 1.20536 3.09375H2.85714V7.90625C2.85714 8.4758 3.33683 8.9375 3.92857 8.9375H6.07143V9.83984C6.07143 9.87403 6.05732 9.90682 6.0322 9.93099C6.00709 9.95517 5.97302 9.96875 5.9375 9.96875ZM8.79464 7.90625H4.0625C4.02698 7.90625 3.99291 7.89267 3.9678 7.86849C3.94268 7.84432 3.92857 7.81153 3.92857 7.77734V1.16016C3.92857 1.12597 3.94268 1.09318 3.9678 1.06901C3.99291 1.04483 4.02698 1.03125 4.0625 1.03125H6.42857V2.92188C6.42857 3.20665 6.66842 3.4375 6.96429 3.4375H8.92857V7.77734C8.92857 7.81153 8.91446 7.84432 8.88935 7.86849C8.86423 7.89267 8.83016 7.90625 8.79464 7.90625ZM8.92857 2.40625H7.5V1.03125H7.715C7.75051 1.03125 7.78458 1.04483 7.80971 1.069L8.88935 2.10815C8.90179 2.12013 8.91165 2.13434 8.91838 2.14998C8.92511 2.16562 8.92857 2.18238 8.92857 2.19931V2.40625Z" fill="#3D7EFF"/>
      </svg>
    </Layout>
  );
}

export default Icon;