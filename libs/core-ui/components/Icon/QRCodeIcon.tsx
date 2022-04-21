import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 18,
  height = 18,
  useDarkMode,
  fill = "#004DFE",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.749481 0.5H7.6506V7.65625H0.5V0.75C0.5 0.610972 0.611393 0.5 0.749481 0.5ZM4.65164 7.15625C6.03235 7.15625 7.15164 6.03696 7.15164 4.65625V3.5C7.15164 2.11929 6.03235 1 4.65164 1H3.49896C2.11825 1 0.998961 2.11929 0.998961 3.5V4.65625C0.998961 6.03696 2.11825 7.15625 3.49896 7.15625H4.65164ZM4.41847 4.42188H3.73214V3.73438H4.41847V4.42188ZM0.5 17.25V10.3438H7.6506V17.5H0.749481C0.611393 17.5 0.5 17.389 0.5 17.25ZM4.65164 17C6.03235 17 7.15164 15.8807 7.15164 14.5V13.3438C7.15164 11.963 6.03235 10.8438 4.65164 10.8438H3.49896C2.11825 10.8438 0.998961 11.963 0.998961 13.3438V14.5C0.998961 15.8807 2.11825 17 3.49896 17H4.65164ZM4.41847 14.2656H3.73214V13.5781H4.41847V14.2656ZM10.3369 7.65625V0.5H17.2381C17.3761 0.5 17.4875 0.610971 17.4875 0.75V7.65625H10.3369ZM14.4886 7.15625C15.8693 7.15625 16.9886 6.03696 16.9886 4.65625V3.5C16.9886 2.11929 15.8693 1 14.4886 1H13.3359C11.9552 1 10.8359 2.11929 10.8359 3.5V4.65625C10.8359 6.03696 11.9552 7.15625 13.3359 7.15625H14.4886ZM14.2554 4.42188H13.5691V3.73438H14.2554V4.42188ZM16.9886 12.2584V10.3438H17.4875V14.1719H13.6628V13.0072C13.6628 12.2266 13.0299 11.5938 12.2493 11.5938C11.4687 11.5938 10.8359 12.2266 10.8359 13.0072V17.5H10.3369V10.3438H14.1617V12.2584C14.1617 13.0391 14.7945 13.6719 15.5751 13.6719C16.3558 13.6719 16.9886 13.0391 16.9886 12.2584ZM13.6628 17.5V17H14.1617V17.5H13.6628ZM16.9886 17.5V17H17.4875V17.5H16.9886Z"
          stroke="#3D7EFF"
        />
      </svg>
    </Layout>
  );
}

export default Icon;
