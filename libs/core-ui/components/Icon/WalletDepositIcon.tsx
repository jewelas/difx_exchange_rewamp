import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 15,
  height = 15,
  fill = "#9AA5B4",
  useDarkMode,
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} pathIndex={4}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2647_7432)">
        <path d="M6.5181 10.2976C6.76709 10.298 7.0137 10.2492 7.24376 10.1541C7.47383 10.0589 7.68282 9.91916 7.85873 9.74296L9.98152 7.62017L8.83265 6.47129L7.32573 7.97821L7.31273 0H5.68773L5.70073 7.96737L4.20356 6.47129L3.05469 7.62017L5.17748 9.74296C5.35335 9.91921 5.56233 10.059 5.79241 10.1541C6.02249 10.2493 6.26911 10.2981 6.5181 10.2976Z" fill={fill}/>
        <path d="M11.375 8.66797V11.3763H1.625V8.66797H0V11.3763C0 11.8073 0.171205 12.2206 0.475952 12.5254C0.780698 12.8301 1.19402 13.0013 1.625 13.0013H11.375C11.806 13.0013 12.2193 12.8301 12.5241 12.5254C12.8288 12.2206 13 11.8073 13 11.3763V8.66797H11.375Z" fill={fill}/>
        </g>
        <defs>
        <clipPath id="clip0_2647_7432">
        <rect width="13" height="13" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    </Layout>
  );
}
export default Icon;