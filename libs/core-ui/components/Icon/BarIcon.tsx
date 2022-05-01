import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 24,
  height = 24,
  useDarkMode,
  fill = "#262626",
  stroke = '',
  displayStroke
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} displayStroke={displayStroke} stroke={stroke}>
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <line x1="16" y1="4" x2="16" y2="18" stroke={stroke} strokeWidth="2" />
        <line x1="8" y1="5" x2="8" y2="20" stroke={stroke} strokeWidth="2" />
        <path d="M7 10H13" stroke={stroke} strokeWidth="2" />
        <path d="M3 16H9" stroke={stroke} strokeWidth="2" />
        <path d="M15 14H21" stroke={stroke} strokeWidth="2" />
        <path d="M11 7H17" stroke={stroke} strokeWidth="2" />
      </svg>
    </Layout>
  );
}

export default Icon;
