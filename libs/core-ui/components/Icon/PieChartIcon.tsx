import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 15,
  height = 15,
  fill = "#08c",
  useDarkMode,
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} pathIndex={1}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.45">
            <path d="M14.5876 8.10156H9.38896C9.16176 8.10156 8.97656 8.28676 8.97656 8.51392C8.97656 8.62962 9.02573 8.73384 9.10241 8.80904L12.763 12.4697C12.8382 12.5507 12.9468 12.6014 13.0655 12.6014C13.2087 12.6014 13.3346 12.529 13.4084 12.419C14.3084 11.3744 14.8871 10.0476 14.9913 8.58767C14.9971 8.56309 15 8.5385 15 8.51387C15 8.28676 14.8162 8.10156 14.5876 8.10156Z" fill="#1865E1"/>
        </g>
        <g opacity="0.45">
            <path d="M7.81912 0.628906C7.59192 0.630295 7.4082 0.814109 7.4082 1.04126V6.81869C7.4082 7.04733 7.59192 7.23253 7.81912 7.23253H13.598C13.8252 7.23253 14.0104 7.04733 14.0104 6.81869C13.8063 3.4938 11.1455 0.832953 7.81912 0.628906Z" fill="#1865E1"/>
        </g>
            <path d="M10.995 12.1343L6.73243 7.87176C6.66011 7.79796 6.61672 7.69522 6.61672 7.58382L6.6152 1.56326C6.6152 1.33611 6.43147 1.15234 6.20428 1.15234C2.74187 1.36361 0 4.23999 0 7.75458C0 11.408 2.96185 14.3712 6.6152 14.3712C8.28202 14.3712 9.80415 13.7549 10.9674 12.7376C11.0572 12.6623 11.1136 12.5496 11.1136 12.4237C11.1136 12.3122 11.0687 12.2095 10.995 12.1343Z" fill="#1865E1"/>
        </svg>
    </Layout>
  );
}
export default Icon;
