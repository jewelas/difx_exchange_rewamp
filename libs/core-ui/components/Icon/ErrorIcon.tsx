import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 20,
  height = 22,
  useDarkMode,
  fill = "",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 22"
        fill="#DB5354"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="url(#paint0_linear_3410_5965)"/>
      <path d="M5.66165 11C5.4923 11 5.32299 10.9352 5.19398 10.8062C4.93534 10.5475 4.93534 10.1295 5.19398 9.87081L9.87068 5.19399C10.1293 4.93534 10.5474 4.93534 10.806 5.19399C11.0647 5.45264 11.0647 5.8707 10.806 6.12935L6.12932 10.8062C5.99965 10.9352 5.83097 11 5.66165 11Z" fill="white"/>
      <path d="M10.3383 11C10.169 11 9.99968 10.9352 9.87068 10.8062L5.19398 6.12935C4.93534 5.8707 4.93534 5.45264 5.19398 5.19399C5.45262 4.93534 5.87068 4.93534 6.12932 5.19399L10.806 9.87081C11.0647 10.1295 11.0647 10.5475 10.806 10.8062C10.677 10.9352 10.5077 11 10.3383 11Z" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear_3410_5965" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
      <stop stopColor="#DB5354"/>
      <stop offset="1" stopColor="#EE6A6B"/>
      </linearGradient>
      </defs>
    </svg>
    </Layout>
  );
}

export default Icon;