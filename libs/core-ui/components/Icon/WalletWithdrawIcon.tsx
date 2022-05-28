import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 15,
  height = 15,
  fill = "#9AA5B4",
  useDarkMode,
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode} pathIndex={4}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.51803 -0.000748937C6.26905 -0.00116285 6.02244 0.0476252 5.79237 0.142812C5.5623 0.238 5.35331 0.377712 5.1774 0.553917L3.05461 2.67671L4.20349 3.82558L5.7104 2.31867L5.7234 10.2969L7.3484 10.2969L7.3354 2.3295L8.83257 3.82558L9.98145 2.67671L7.85865 0.553918C7.68278 0.377663 7.4738 0.237921 7.24372 0.14273C7.01365 0.0475385 6.76702 -0.00122194 6.51803 -0.000748937Z" fill={fill}/>
        <path d="M11.375 8.66406V11.3724H1.625V8.66406H0V11.3724C0 11.8034 0.171205 12.2167 0.475952 12.5214C0.780698 12.8262 1.19402 12.9974 1.625 12.9974H11.375C11.806 12.9974 12.2193 12.8262 12.5241 12.5214C12.8288 12.2167 13 11.8034 13 11.3724V8.66406H11.375Z" fill={fill}/>
        </svg>
    </Layout>
  );
}
export default Icon;
