import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 22,
  height = 22,
  fill = "#262626",
  useDarkMode,
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} pathIndex={2}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 0H1C0.447715 0 0 0.447716 0 1V19C0 19.5523 0.447715 20 1 20H9C9.55229 20 10 19.5523 10 19V1C10 0.447715 9.55228 0 9 0Z"
          fill="#DB5354"
        />
        <path
          style={{ opacity: 0.8 }}
          d="M21 0H13C12.4477 0 12 0.447716 12 1V19C12 19.5523 12.4477 20 13 20H21C21.5523 20 22 19.5523 22 19V1C22 0.447715 21.5523 0 21 0Z"
          fill="white"
        />
      </svg>
    </Layout>
  );
}
export default Icon;
