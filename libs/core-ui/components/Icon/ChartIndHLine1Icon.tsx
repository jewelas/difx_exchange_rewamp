import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 14,
  height = 1,
  useDarkMode,
  fill = "#262626",
  useDarkModeFor='svg'
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} useDarkModeFor={useDarkModeFor}>
      <svg viewBox="0 0 24 24"><rect x="5" y="11.5" width={width} height={height} rx="0.5"></rect><ellipse cx="12" cy="12" rx="1.5" ry="1.5"></ellipse></svg>
    </Layout>
  );
}

export default Icon;
