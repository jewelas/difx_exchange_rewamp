import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 10,
  height = 6,
  fill = "#000",
  useDarkMode,
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.35952 0H8.48062C8.42085 0 8.3646 0.0292969 8.32945 0.0773438L5.00015 4.66641L1.67085 0.0773438C1.6357 0.0292969 1.57945 0 1.51968 0H0.640773C0.564602 0 0.52007 0.0867189 0.564602 0.148828L4.69663 5.84531C4.84663 6.05156 5.15366 6.05156 5.30249 5.84531L9.43452 0.148828C9.48023 0.0867189 9.4357 0 9.35952 0Z"
          fill={fill}
        />
      </svg>
    </Layout>
  );
}

export default Icon;
