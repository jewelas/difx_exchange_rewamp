import { IconProps } from ".";
import Layout from "./Layout";

function Icon({
  width = 30,
  height = 30,
  useDarkMode,
  useDarkModeFor,
  fill = "",
}: IconProps) {
  return (
    <Layout
      fill={fill}
      useDarkMode={useDarkMode}
      useDarkModeFor={useDarkModeFor}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#3D7EFF" />
        <g clipPath="url(#clip0_0_1)">
          <rect
            x="11.6406"
            y="11.9707"
            width="8.00342"
            height="10.3984"
            fill="#3D7EFF"
          />
          <path
            d="M23.5593 17.0209C23.5593 21.3127 20.1322 24.7919 15.9046 24.7919C11.6771 24.7919 8.25 21.3127 8.25 17.0209C8.25 12.7292 11.6771 9.25 15.9046 9.25C20.1322 9.25 23.5593 12.7292 23.5593 17.0209ZM19.1871 15.9139C19.3395 14.8799 18.5639 14.324 17.5034 13.9532L17.8475 12.5525L17.0075 12.34L16.6726 13.7038C16.4518 13.6479 16.225 13.5953 15.9996 13.5431L16.337 12.1703L15.4975 11.9578L15.1532 13.358C14.9705 13.3158 14.791 13.274 14.6169 13.2301L14.6178 13.2257L13.4595 12.9321L13.236 13.8427C13.236 13.8427 13.8592 13.9877 13.8461 13.9967C14.1863 14.0829 14.2478 14.3114 14.2375 14.4925L13.8456 16.0882C13.8691 16.0943 13.8994 16.1031 13.9329 16.1167C13.9049 16.1096 13.875 16.1018 13.8441 16.0943L13.2949 18.3297C13.2532 18.4346 13.1477 18.5919 12.9099 18.5322C12.9183 18.5446 12.2994 18.3775 12.2994 18.3775L11.8824 19.3535L12.9755 19.6301C13.1788 19.6818 13.3781 19.736 13.5743 19.7869L13.2267 21.2037L14.0657 21.4161L14.4099 20.0145C14.6324 20.0757 14.8555 20.1344 15.0793 20.1908L14.7362 21.5859L15.5762 21.7984L15.9238 20.3843C17.356 20.6594 18.4331 20.5485 18.8864 19.2335C19.2517 18.1747 18.8682 17.5639 18.1147 17.1657C18.6634 17.0373 19.0769 16.6708 19.1871 15.9139ZM17.268 18.6456C17.0084 19.7044 15.2523 19.132 14.6829 18.9885L15.1441 17.1116C15.7135 17.2558 17.5393 17.5414 17.268 18.6456ZM17.5278 15.8986C17.291 16.8617 15.8293 16.3724 15.3551 16.2524L15.7733 14.5501C16.2474 14.6701 17.7745 14.894 17.5278 15.8986Z"
            fill="#F8FAFD"
          />
        </g>
        <g filter="url(#filter0_bi_0_1)">
          <rect
            x="18.3359"
            y="13.2832"
            width="15.6674"
            height="16.5151"
            rx="7.8337"
            fill="#BCE4F1"
            fillOpacity="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_bi_0_1"
            x="14.3359"
            y="9.2832"
            width="23.6641"
            height="24.5156"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.2" dy="0.1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_0_1"
            />
          </filter>
          <clipPath id="clip0_0_1">
            <rect
              width="15.8031"
              height="16.0432"
              fill="white"
              transform="translate(8 9)"
            />
          </clipPath>
        </defs>
      </svg>
    </Layout>
  );
}

export default Icon;
