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
      <svg viewBox="0 0 24 24"><rect x="5.989593505859375" y="17.303306579589844" width={width} height={height} rx="0.5" transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-10.480973816180722,9.303303481670355)"></rect><ellipse cx="14" cy="10" rx="1.5" ry="1.5"></ellipse><ellipse cx="10" cy="14" rx="1.5" ry="1.5"></ellipse></svg>
    </Layout>
  );
}

export default Icon;
