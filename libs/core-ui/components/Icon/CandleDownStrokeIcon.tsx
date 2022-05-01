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
        <path d="M9 4H7V6H5V18H7V20H9V18H11V6H9V4Z" />
        <path d="M20 8H18V4H16V8H14V15H16V20H18V15H20V8ZM18 13H16V10H18V13Z" />
      </svg>

    </Layout>
  );
}

export default Icon;
