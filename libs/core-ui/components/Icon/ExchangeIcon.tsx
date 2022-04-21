import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 20,
  height = 20,
  useDarkMode,
  fill = "#262626",
}: IconProps) {
  return (
    <Layout fill={fill} useDarkMode={useDarkMode}>
      <svg width={width} height={height} viewBox="0 0 20 18" fill="none">
        <path d="M5.5 2.25012H3.95312V0.937622C3.95312 0.834497 3.86875 0.750122 3.76562 0.750122H2.54688C2.44375 0.750122 2.35938 0.834497 2.35938 0.937622V2.25012H0.8125C0.709375 2.25012 0.625 2.3345 0.625 2.43762V15.5626C0.625 15.6657 0.709375 15.7501 0.8125 15.7501H2.35938V17.0626C2.35938 17.1657 2.44375 17.2501 2.54688 17.2501H3.76562C3.86875 17.2501 3.95312 17.1657 3.95312 17.0626V15.7501H5.5C5.60313 15.7501 5.6875 15.6657 5.6875 15.5626V2.43762C5.6875 2.3345 5.60313 2.25012 5.5 2.25012ZM4.09375 14.1564H2.21875V3.84387H4.09375V14.1564ZM19.1875 3.93762H17.6406V1.68762C17.6406 1.5845 17.5562 1.50012 17.4531 1.50012H16.2344C16.1313 1.50012 16.0469 1.5845 16.0469 1.68762V3.93762H14.5C14.3969 3.93762 14.3125 4.022 14.3125 4.12512V13.8751C14.3125 13.9782 14.3969 14.0626 14.5 14.0626H16.0469V16.3126C16.0469 16.4157 16.1313 16.5001 16.2344 16.5001H17.4531C17.5562 16.5001 17.6406 16.4157 17.6406 16.3126V14.0626H19.1875C19.2906 14.0626 19.375 13.9782 19.375 13.8751V4.12512C19.375 4.022 19.2906 3.93762 19.1875 3.93762ZM17.7812 12.4689H15.9062V5.53137H17.7812V12.4689ZM12.3438 6.46887H10.7969V2.43762C10.7969 2.3345 10.7125 2.25012 10.6094 2.25012H9.39062C9.2875 2.25012 9.20312 2.3345 9.20312 2.43762V6.46887H7.65625C7.55312 6.46887 7.46875 6.55325 7.46875 6.65637V11.3439C7.46875 11.447 7.55312 11.5314 7.65625 11.5314H9.20312V15.5626C9.20312 15.6657 9.2875 15.7501 9.39062 15.7501H10.6094C10.7125 15.7501 10.7969 15.6657 10.7969 15.5626V11.5314H12.3438C12.4469 11.5314 12.5312 11.447 12.5312 11.3439V6.65637C12.5312 6.55325 12.4469 6.46887 12.3438 6.46887ZM10.9375 9.86731C10.9375 9.88596 10.9301 9.90384 10.9169 9.91703C10.9037 9.93021 10.8858 9.93762 10.8672 9.93762H9.13281C9.11416 9.93762 9.09628 9.93021 9.08309 9.91703C9.06991 9.90384 9.0625 9.88596 9.0625 9.86731V8.13293C9.0625 8.11429 9.06991 8.0964 9.08309 8.08322C9.09628 8.07003 9.11416 8.06262 9.13281 8.06262H10.8672C10.8858 8.06262 10.9037 8.07003 10.9169 8.08322C10.9301 8.0964 10.9375 8.11429 10.9375 8.13293V9.86731Z" />
      </svg>
    </Layout>
  );
}

export default Icon;
