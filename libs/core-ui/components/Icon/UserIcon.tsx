import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 18,
  height = 20,
  fill = "#000",
  useDarkMode,
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode}>
      <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.34861 9.3437C10.8534 9.3437 12.8835 7.31316 12.8835 4.80857C12.8835 2.30397 10.8534 0.273438 8.34861 0.273438C5.84381 0.273438 3.81375 2.30397 3.81375 4.80857C3.81375 7.31316 5.84381 9.3437 8.34861 9.3437ZM10.1448 11.0444H6.55238C3.16221 11.0444 0.412598 13.7938 0.412598 17.1845C0.412598 17.8627 0.96245 18.4129 1.64055 18.4129H15.0574C15.7355 18.414 16.2846 17.8648 16.2846 17.1845C16.2846 13.7938 13.5354 11.0444 10.1448 11.0444Z" fill="white"/>
      </svg>
    </Layout>
  );
}

export default Icon;
