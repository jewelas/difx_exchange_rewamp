import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 20,
  height = 22,
  useDarkMode,
  fill = "#FFC400",
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
        <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0.00478125 12.4163 3.58369 15.9952 8 16ZM7.33334 4C7.33334 3.63181 7.63181 3.33334 8 3.33334C8.36819 3.33334 8.66666 3.63181 8.66666 4V9.33334C8.66666 9.70153 8.36819 10 8 10C7.63181 10 7.33334 9.70153 7.33334 9.33334V4ZM8 12C8.36819 12 8.66666 12.2985 8.66666 12.6667C8.66666 13.0348 8.36819 13.3333 8 13.3333C7.63181 13.3333 7.33334 13.0348 7.33334 12.6667C7.33334 12.2985 7.63181 12 8 12Z" fill="url(#paint0_linear_3397_3133)"/>
        <defs>
        <linearGradient id="paint0_linear_3397_3133" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFC400"/>
        <stop offset="1" stop-color="#FAC821"/>
        </linearGradient>
        </defs>
      </svg>
    </Layout>
  );
}

export default Icon;