import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 30,
  height = 30,
  useDarkMode,
  useDarkModeFor,
  fill = "",
}: IconProps) {
  return (
    <Layout
      fill={fill}
      useDarkMode={useDarkMode}
      useDarkModeFor={useDarkModeFor}
    >
      <svg
        width={width}
        fill={fill}
        height={height}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_0_1)" />
        <g clipPath="url(#clip0_0_1)">
          <path
            d="M30.4888 12.595C29.8081 11.9134 28.7028 11.9139 28.0212 12.595L16.9153 23.7013L11.9792 18.7653C11.2976 18.0837 10.1928 18.0837 9.51119 18.7653C8.8296 19.4469 8.8296 20.5517 9.51119 21.2333L15.681 27.4032C16.0216 27.7438 16.4682 27.9145 16.9148 27.9145C17.3615 27.9145 17.8085 27.7442 18.1491 27.4032L30.4888 15.063C31.1704 14.3819 31.1704 13.2766 30.4888 12.595Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_0_1"
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14DAA7" />
            <stop offset="1" stopColor="#12DEAA" />
          </linearGradient>
          <clipPath id="clip0_0_1">
            <rect
              width="22"
              height="22"
              fill="white"
              transform="translate(9 9)"
            />
          </clipPath>
        </defs>
      </svg>
    </Layout>
  );
}

export default Icon;
