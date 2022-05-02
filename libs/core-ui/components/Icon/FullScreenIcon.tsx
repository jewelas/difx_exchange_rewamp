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
      <svg viewBox="0 0 28 28" width={width} height={height}>
        <g><path d="M21 7v4h1V6h-5v1z"></path>
          <path d="M16.854 11.854l5-5-.708-.708-5 5zM7 7v4H6V6h5v1z"></path>
          <path d="M11.146 11.854l-5-5 .708-.708 5 5zM21 21v-4h1v5h-5v-1z"></path>
          <path d="M16.854 16.146l5 5-.708.708-5-5z"></path><g>
            <path d="M7 21v-4H6v5h5v-1z"></path>
            <path d="M11.146 16.146l-5 5 .708.708 5-5z"></path>
          </g></g></svg>
    </Layout>
  );
}

export default Icon;
