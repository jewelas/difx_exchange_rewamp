import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 15,
  height = 1,
  useDarkMode,
  useDarkModeFor = 'svg',
  fill = "#262626",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} useDarkModeFor={useDarkModeFor}>
      <svg viewBox="0 0 24 24"><rect x="6.989593505859375" y="16.303314208984375" width={width} height={height} rx="0.5" transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-9.480979210977239,9.71751925443823)"></rect><ellipse cx="13" cy="11" rx="1.5" ry="1.5"></ellipse><ellipse cx="8" cy="16" rx="1.5" ry="1.5"></ellipse></svg>
    </Layout>
  );
}

export default Icon;
