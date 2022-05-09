import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 14,
  height = 1,
  useDarkMode,
  useDarkModeFor = 'svg',
  fill = "#262626",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} useDarkModeFor={useDarkModeFor}>
      <svg viewBox="0 0 24 24"><rect x="5.989593505859375" y="17.303298950195312" width={width} height={height} rx="0.5" transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-10.480968421384205,9.30330124707234)"></rect><ellipse cx="16" cy="8" rx="1.5" ry="1.5"></ellipse><ellipse cx="7" cy="17" rx="1.5" ry="1.5"></ellipse></svg>
    </Layout>
  );
}

export default Icon;
