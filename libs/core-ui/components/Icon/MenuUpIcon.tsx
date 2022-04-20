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
        <path d="M9.43537 5.85117L5.30334 0.154688C5.15334 -0.0515625 4.8463 -0.0515625 4.69748 0.154688L0.564272 5.85117C0.554101 5.86518 0.548008 5.88173 0.546668 5.899C0.545328 5.91626 0.548794 5.93355 0.556682 5.94896C0.56457 5.96438 0.576571 5.9773 0.591356 5.98631C0.606141 5.99532 0.623131 6.00006 0.640444 6H1.51935C1.57912 6 1.63537 5.9707 1.67052 5.92266L4.99982 1.33359L8.32912 5.92266C8.36427 5.9707 8.42052 6 8.48029 6H9.35919C9.43537 6 9.4799 5.91328 9.43537 5.85117Z" />
      </svg>
    </Layout>
  );
}

export default Icon;
