import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 24,
  height = 24,
  useDarkMode,
  fill = "#262626",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode}>
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <path d="M20.5 8H18.5V4H16.5V8H14.5V15H16.5V20H18.5V15H20.5V8Z" />
        <path d="M9 4H7V6H5V18H7V20H9V18H11V6H9V4ZM9 16H7V8H9V16Z" />
      </svg>
    </Layout>
  );
}

export default Icon;
