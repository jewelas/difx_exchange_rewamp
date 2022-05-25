import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 15,
  height = 15,
  fill = "#9AA5B4",
  useDarkMode,
  useDarkModeFor
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} pathIndex={5} useDarkModeFor={useDarkModeFor}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.49999 0H4.37499C5.75569 0 6.87498 1.11929 6.87498 2.49999V4.37499C6.87498 5.75569 5.75569 6.87498 4.37499 6.87498H2.49999C1.11929 6.87501 0 5.75572 0 4.37499V2.49999C0 1.11929 1.11929 0 2.49999 0Z"/>
        <path d="M10.625 0H12.5C13.8807 0 15 1.11929 15 2.49999V4.37499C15 5.75569 13.8807 6.87498 12.5 6.87498H10.625C9.24429 6.87498 8.125 5.75569 8.125 4.37499V2.49999C8.12497 1.11929 9.24426 0 10.625 0Z"/>
        <path d="M2.49999 8.125H4.37499C5.75569 8.125 6.87498 9.24429 6.87498 10.625V12.5C6.87498 13.8807 5.75569 15 4.37499 15H2.49999C1.11929 15 0 13.8807 0 12.5V10.625C0 9.24429 1.11929 8.125 2.49999 8.125Z"/>
        <path d="M10.625 8.125H12.5C13.8807 8.125 15 9.24429 15 10.625V12.5C15 13.8807 13.8807 15 12.5 15H10.625C9.24429 15 8.125 13.8807 8.125 12.5V10.625C8.12497 9.24429 9.24426 8.125 10.625 8.125Z"/>
      </svg>
    </Layout>
  );
}
export default Icon;
