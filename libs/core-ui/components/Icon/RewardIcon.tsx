import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 24,
  height = 20,
  useDarkMode,
  fill = "#262626",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode}>
      <svg width={width} height={height} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8 16.8535H4.2C3.87 16.8535 3.6 17.1112 3.6 17.4261V18.5711C3.6 18.886 3.87 19.1437 4.2 19.1437H19.8C20.13 19.1437 20.4 18.886 20.4 18.5711V17.4261C20.4 17.1112 20.13 16.8535 19.8 16.8535ZM22.2 5.40262C21.2063 5.40262 20.4 6.17198 20.4 7.12026C20.4 7.37432 20.46 7.6105 20.565 7.82878L17.85 9.38181C17.2725 9.71102 16.5263 9.52494 16.1925 8.96671L13.1363 3.86391C13.5375 3.54901 13.8 3.07666 13.8 2.5399C13.8 1.59162 12.9938 0.822266 12 0.822266C11.0063 0.822266 10.2 1.59162 10.2 2.5399C10.2 3.07666 10.4625 3.54901 10.8638 3.86391L7.8075 8.96671C7.47375 9.52494 6.72375 9.71102 6.15 9.38181L3.43875 7.82878C3.54 7.61408 3.60375 7.37432 3.60375 7.12026C3.60375 6.17198 2.7975 5.40262 1.80375 5.40262C0.81 5.40262 0 6.17198 0 7.12026C0 8.06853 0.80625 8.83789 1.8 8.83789C1.8975 8.83789 1.995 8.82358 2.08875 8.80926L4.8 15.7084H19.2L21.9113 8.80926C22.005 8.82358 22.1025 8.83789 22.2 8.83789C23.1938 8.83789 24 8.06853 24 7.12026C24 6.17198 23.1938 5.40262 22.2 5.40262Z" />
      </svg>
    </Layout>
  );
}

export default Icon;
