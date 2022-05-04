import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 16,
  height = 1,
  useDarkMode,
  useDarkModeFor = 'svg',
  fill = "#262626",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} useDarkModeFor={useDarkModeFor}>
      <svg viewBox="0 0 24 24"><rect x="4" y="6" width={width} height={height} rx="0.5"></rect><rect x="4" y="9" width="16" height="1" rx="0.5"></rect><rect x="4" y="15" width="16" height="1" rx="0.5"></rect><rect x="4" y="18" width="16" height="1" rx="0.5"></rect><rect x="4" y="12" width="16" height="1" rx="0.5"></rect><ellipse cx="12" cy="18.5" rx="1.5" ry="1.5"></ellipse><ellipse cx="16" cy="6.5" rx="1.5" ry="1.5"></ellipse><ellipse cx="8" cy="6.5" rx="1.5" ry="1.5"></ellipse></svg>
    </Layout>
  );
}

export default Icon;
