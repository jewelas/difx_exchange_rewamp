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
      <svg viewBox="0 0 24 24"><rect x="5.989593505859375" y="17.303298950195312" width={width} height={height} rx="0.5" transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-10.480968421384205,9.30330124707234)"></rect><rect x="5.031974792480469" y="13.607009887695312" width="12" height="1" rx="0.5" transform="matrix(0.7071067690849304,-0.7071067690849304,-0.7071067690849304,-0.7071067690849304,11.095440153447726,26.786762123917924)"></rect><rect x="11.40380859375" y="19.303298950195312" width="12" height="1" rx="0.5" transform="matrix(0.7071067690849304,-0.7071067690849304,-0.7071067690849304,-0.7071067690849304,16.98959169711361,41.016502553537975)"></rect><ellipse cx="14" cy="10" rx="1.5" ry="1.5"></ellipse><ellipse cx="10" cy="14" rx="1.5" ry="1.5"></ellipse><ellipse cx="15" cy="15" rx="1.5" ry="1.5"></ellipse></svg>
    </Layout>
  );
}

export default Icon;
