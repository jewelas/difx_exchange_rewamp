import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 20,
  height = 22,
  useDarkMode,
  fill = "#14DAA7",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0C3.58897 0 0 3.58897 0 8C0 12.411 3.58897 16 8 16C12.411 16 16 12.411 16 8C16 3.58897 12.411 0 8 0ZM12.4712 5.89474L7.3584 10.9674C7.05764 11.2682 6.57644 11.2882 6.25564 10.9875L3.54887 8.5213C3.22807 8.22055 3.20802 7.7193 3.48872 7.3985C3.78947 7.07769 4.29073 7.05764 4.61153 7.3584L6.75689 9.32331L11.3283 4.75188C11.6491 4.43108 12.1504 4.43108 12.4712 4.75188C12.792 5.07268 12.792 5.57393 12.4712 5.89474Z" fill="url(#paint0_linear_3392_1743)"/>
        <defs>
        <linearGradient id="paint0_linear_3392_1743" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#14DAA7"/>
        <stop offset="1" stopColor="#12DEAA"/>
        </linearGradient>
        </defs>
      </svg>
    </Layout>
  );
}

export default Icon;