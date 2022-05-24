import { ReactElement } from "react";
import { IconProps } from ".";

interface CoinIconProps extends IconProps {
  coin?: string
}

const getIcon = (coinName: string, width: number, height: number): ReactElement => {
  const coins: { [key: string]: ReactElement } = {
    USDT: <svg width={width} height={height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 0C26.3884 0 34 7.61158 34 17C34 26.3884 26.3881 34 17 34C7.61192 34 0 26.3905 0 17C0 7.60954 7.61056 0 17 0Z" fill="#53AE94" />
      <path d="M19.0951 14.7337V12.2048H24.8782V8.35156H9.13075V12.2048H14.9145V14.7317C10.214 14.9476 6.67969 15.8785 6.67969 16.9937C6.67969 18.1089 10.2157 19.0398 14.9145 19.2571V27.3576H19.0965V19.2564C23.7885 19.0398 27.3157 18.1096 27.3157 16.9954C27.3157 15.8812 23.7885 14.951 19.0965 14.7344L19.0951 14.7337ZM19.0965 18.5703V18.5682C18.9785 18.5757 18.3723 18.6121 17.0225 18.6121C15.9433 18.6121 15.1841 18.5815 14.9165 18.5675V18.5709C10.7638 18.387 7.66399 17.6638 7.66399 16.7985C7.66399 15.9332 10.7641 15.2111 14.9165 15.0268V17.8505C15.1885 17.8692 15.9664 17.9151 17.0402 17.9151C18.3298 17.9151 18.9782 17.8614 19.0972 17.8505V15.0268C23.2418 15.2114 26.3344 15.9353 26.3344 16.7975C26.3344 17.6597 23.2404 18.3839 19.0972 18.5686" fill="white" />
    </svg>,

    ETH: <svg width="32" height="32" viewBox="0 0 784.37 1277.39">
      <g>
        <metadata />
        <g>
          <g>
            <polygon fill="#343434" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 " />
            <polygon fill="#8C8C8C" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 " />
            <polygon fill="#3C3C3B" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 " />
            <polygon fill="#8C8C8C" points="392.07,1277.38 392.07,956.52 -0,724.89 " />
            <polygon fill="#141414" points="392.07,882.29 784.13,650.54 392.07,472.33 " />
            <polygon fill="#393939" points="0,650.54 392.07,882.29 392.07,472.33 " />
          </g>
        </g>
      </g>
    </svg>,

    ADA: <svg width="32" height="32" x="0px" y="0px" viewBox="0 0 375 346.5">
      <g>
        <g>
          <path style={{ fill: "#0033AD" }} d="M102.8,172c-0.8,13.9,9.9,25.8,23.8,26.6c0.5,0,1,0,1.5,0c14,0,25.3-11.3,25.2-25.3c0-14-11.3-25.3-25.3-25.2    C114.6,148.1,103.5,158.6,102.8,172z" />
          <path style={{ fill: "#0033AD" }} d="M8.6,165.5c-4.5-0.3-8.4,3.2-8.6,7.7s3.2,8.4,7.7,8.6c4.5,0.3,8.3-3.2,8.6-7.7    C16.6,169.6,13.1,165.8,8.6,165.5C8.6,165.5,8.6,165.5,8.6,165.5z" />
          <path style={{ fill: "#0033AD" }} d="M101.2,25.4c4-2,5.6-7,3.6-11c-2-4-7-5.6-11-3.6c-4,2-5.6,6.9-3.6,10.9C92.2,25.8,97.1,27.5,101.2,25.4    C101.1,25.4,101.2,25.4,101.2,25.4z" />
          <path style={{ fill: "#0033AD" }} d="M126.8,70.1c6.2-3.1,8.7-10.7,5.6-16.9s-10.7-8.7-16.9-5.6c-6.2,3.1-8.7,10.7-5.6,16.9    C113,70.7,120.6,73.2,126.8,70.1z" />
          <path style={{ fill: "#0033AD" }} d="M40.6,100.8c4.8,3.1,11.2,1.8,14.4-3c3.1-4.8,1.8-11.2-3-14.4c-4.8-3.1-11.2-1.8-14.4,3c0,0,0,0,0,0    C34.4,91.2,35.8,97.7,40.6,100.8z" />
          <path style={{ fill: "#0033AD" }} d="M55.9,161c-7-0.4-12.9,4.9-13.3,11.9s4.9,12.9,11.9,13.3c7,0.4,12.9-4.9,13.3-11.9c0,0,0,0,0,0    C68.2,167.4,62.9,161.4,55.9,161z" />
          <path style={{ fill: "#0033AD" }} d="M42,245.7c-5.1,2.6-7.2,8.8-4.6,14c2.6,5.1,8.8,7.2,14,4.6c5.1-2.6,7.2-8.8,4.6-14c0,0,0,0,0,0    C53.4,245.2,47.1,243.1,42,245.7C42,245.7,42,245.7,42,245.7z" />
          <path style={{ fill: "#0033AD" }} d="M91,134.9c6.9,4.5,16.1,2.6,20.5-4.3c4.5-6.9,2.6-16.1-4.3-20.5c-6.9-4.5-16.1-2.6-20.5,4.3    C82.2,121.2,84.1,130.4,91,134.9C91,134.9,91,134.9,91,134.9z" />
          <path style={{ fill: "#0033AD" }} d="M246.5,69.1c5.8,3.8,13.7,2.2,17.5-3.6s2.2-13.7-3.6-17.5c-5.8-3.8-13.7-2.2-17.5,3.6c0,0,0,0,0,0    C239,57.5,240.6,65.3,246.5,69.1C246.5,69.1,246.5,69.1,246.5,69.1z" />
          <path style={{ fill: "#0033AD" }} d="M272.3,24.6c3.8,2.5,8.8,1.4,11.3-2.4s1.4-8.8-2.4-11.3c-3.8-2.5-8.8-1.4-11.3,2.3    C267.5,17,268.6,22.1,272.3,24.6C272.3,24.6,272.3,24.6,272.3,24.6z" />
          <path style={{ fill: "#0033AD" }} d="M248.4,147.9c-13.9-0.8-25.9,9.9-26.6,23.8c-0.8,13.9,9.9,25.9,23.8,26.6c0.5,0,1,0,1.4,0    c13.9,0,25.2-11.3,25.2-25.3C272.3,159.7,261.8,148.6,248.4,147.9L248.4,147.9z" />
          <path style={{ fill: "#0033AD" }} d="M135.1,133.1c4.3,8.5,13,13.9,22.6,13.9c13.9,0,25.2-11.3,25.2-25.3c0-3.9-0.9-7.8-2.7-11.4    c-6.3-12.5-21.5-17.5-33.9-11.2C133.8,105.5,128.8,120.7,135.1,133.1L135.1,133.1z" />
          <path style={{ fill: "#0033AD" }} d="M333,100.8c5.1-2.6,7.1-8.9,4.5-14c-2.6-5.1-8.9-7.1-14-4.5c-5.1,2.6-7.1,8.8-4.6,13.9    C321.6,101.3,327.8,103.4,333,100.8C333,100.8,333,100.8,333,100.8z" />
          <path style={{ fill: "#0033AD" }} d="M269,108.8c-7.3,3.7-10.3,12.6-6.6,19.9c3.7,7.3,12.6,10.3,19.9,6.6c7.3-3.7,10.3-12.6,6.6-19.9    C285.2,108.1,276.3,105.2,269,108.8z" />
          <path style={{ fill: "#0033AD" }} d="M186.5,20.8c5.7,0.3,10.6-4.1,11-9.8s-4.1-10.6-9.8-11c-5.7-0.3-10.6,4-11,9.7    C176.4,15.5,180.8,20.4,186.5,20.8C186.5,20.8,186.5,20.8,186.5,20.8z" />
          <path style={{ fill: "#0033AD" }} d="M186.4,86.1c8.2,0.5,15.2-5.8,15.6-14c0.5-8.2-5.8-15.2-14-15.6c-8.2-0.5-15.2,5.8-15.6,14    C172,78.7,178.2,85.7,186.4,86.1C186.4,86.1,186.4,86.1,186.4,86.1z" />
          <path style={{ fill: "#0033AD" }} d="M106,237.7c7.3-3.7,10.3-12.6,6.6-19.9c-3.7-7.3-12.6-10.3-19.9-6.6c-7.3,3.7-10.3,12.6-6.6,19.9    C89.8,238.4,98.7,241.4,106,237.7z" />
          <path style={{ fill: "#0033AD" }} d="M196,107.8c-7.6,11.7-4.4,27.3,7.3,34.9c11.7,7.6,27.3,4.4,34.9-7.3c7.6-11.7,4.4-27.3-7.3-34.9    c-4.1-2.7-8.9-4.1-13.8-4.1C208.6,96.4,200.7,100.7,196,107.8z" />
          <path style={{ fill: "#0033AD" }} d="M239.9,213.4c-6.3-12.5-21.5-17.5-33.9-11.2c-12.5,6.3-17.5,21.5-11.2,33.9c6.3,12.5,21.5,17.5,33.9,11.2    c0,0,0,0,0,0c12.4-6.2,17.5-21.2,11.3-33.7C240,213.5,240,213.5,239.9,213.4z" />
          <path style={{ fill: "#0033AD" }} d="M284,211.6c-6.9-4.5-16.1-2.6-20.5,4.3c-4.5,6.9-2.6,16.1,4.3,20.5c6.9,4.5,16.1,2.6,20.5-4.3    C292.8,225.3,290.9,216.1,284,211.6C284,211.6,284,211.6,284,211.6z" />
          <path style={{ fill: "#0033AD" }} d="M332.4,173.7c0.4-7-4.9-12.9-11.9-13.3c-7-0.4-12.9,4.9-13.3,11.9c-0.4,7,4.9,12.9,11.9,13.3c0,0,0,0,0,0    C326,186,332,180.6,332.4,173.7z" />
          <path style={{ fill: "#0033AD" }} d="M367.3,164.7c-4.5-0.3-8.4,3.2-8.6,7.7s3.2,8.4,7.7,8.6c4.5,0.3,8.3-3.2,8.6-7.7    C375.2,168.8,371.8,165,367.3,164.7z" />
          <path style={{ fill: "#0033AD" }} d="M334.4,245.7c-4.8-3.1-11.2-1.8-14.4,3c-3.1,4.8-1.8,11.2,3,14.4c4.8,3.1,11.2,1.8,14.4-3    C340.6,255.3,339.2,248.8,334.4,245.7C334.4,245.7,334.4,245.7,334.4,245.7z" />
          <path style={{ fill: "#0033AD" }} d="M102.6,321.9c-3.8-2.5-8.8-1.4-11.3,2.3c-2.5,3.8-1.4,8.8,2.3,11.3c3.8,2.5,8.8,1.4,11.3-2.3c0,0,0,0,0,0    C107.5,329.5,106.4,324.4,102.6,321.9z" />
          <path style={{ fill: "#0033AD" }} d="M273.8,321.1c-4,2-5.6,7-3.6,11c2,4,7,5.6,11,3.6c4-2,5.6-6.9,3.6-10.9C282.8,320.7,277.9,319,273.8,321.1    C273.9,321.1,273.8,321.1,273.8,321.1z" />
          <path style={{ fill: "#0033AD" }} d="M179,238.7c7.6-11.7,4.4-27.3-7.3-35c-11.7-7.6-27.3-4.4-35,7.3s-4.4,27.3,7.3,35c4.1,2.7,8.9,4.1,13.8,4.1    C166.4,250.2,174.3,245.9,179,238.7z" />
          <path style={{ fill: "#0033AD" }} d="M128.5,277.4c-5.8-3.8-13.7-2.2-17.5,3.6c-3.8,5.8-2.2,13.7,3.6,17.5s13.7,2.2,17.5-3.6c0,0,0,0,0,0    C136,289.1,134.4,281.2,128.5,277.4z" />
          <path style={{ fill: "#0033AD" }} d="M187.4,325.7c-5.7-0.3-10.6,4.1-11,9.8s4.1,10.6,9.8,11c5.7,0.3,10.6-4,11-9.7    C197.5,331,193.1,326.1,187.4,325.7C187.4,325.7,187.4,325.7,187.4,325.7z" />
          <path style={{ fill: "#0033AD" }} d="M187.5,260.4c-8.2-0.5-15.2,5.8-15.6,14c-0.5,8.2,5.8,15.2,14,15.6c8.2,0.4,15.2-5.8,15.6-14    C202,267.9,195.7,260.8,187.5,260.4C187.5,260.4,187.5,260.4,187.5,260.4z" />
          <path style={{ fill: "#0033AD" }} d="M248.2,276.4c-6.2,3.2-8.7,10.8-5.5,17c3.2,6.2,10.8,8.7,17,5.5c6.2-3.1,8.7-10.7,5.6-16.9    C262.1,275.8,254.5,273.2,248.2,276.4C248.2,276.4,248.2,276.4,248.2,276.4z" />
        </g>
      </g>
    </svg>,

    AAVE: <svg width="32" height="32" x="0px" y="0px" viewBox="0 0 800 800">
      <g>
        <defs>
          <rect width="800" height="800" />
        </defs>
        <clipPath>
          <use style={{ overflow: "visible" }} />
        </clipPath>
        <g>

          <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-597.3553" y1="900.6861" x2="-598.0993" y2="900.0601" gradientTransform="matrix(776 0 0 -776 464237 699089)">
            <stop offset="0" style={{ stopColor: "#B6509E" }} />
            <stop offset="1" style={{ stopColor: "#2EBAC6" }} />
          </linearGradient>
          <circle cx="400" cy="400" r="388" />
          <path style={{ fill: "#FFFFFF" }} d="M569.8,554.6L438.6,237.4c-7.4-16.4-18.4-24.4-32.9-24.4h-11.6c-14.5,0-25.5,8-32.9,24.4l-57.1,138.2h-43.2    c-12.9,0.1-23.4,10.5-23.5,23.5v0.3c0.1,12.9,10.6,23.4,23.5,23.5h23.2l-54.5,131.7c-1,2.9-1.6,5.9-1.6,9c0,7.4,2.3,13.2,6.4,17.7    s10,6.7,17.4,6.7c4.9-0.1,9.6-1.6,13.5-4.5c4.2-2.9,7.1-7.1,9.4-11.9l60-148.8h41.6c12.9-0.1,23.4-10.5,23.5-23.5v-0.6    c-0.1-12.9-10.6-23.4-23.5-23.5h-22.2l45.8-114.1l124.8,310.4c2.3,4.8,5.2,9,9.4,11.9c3.9,2.9,8.7,4.4,13.5,4.5    c7.4,0,13.2-2.2,17.4-6.7c4.2-4.5,6.4-10.3,6.4-17.7C571.5,560.5,571,557.4,569.8,554.6z" />
        </g>
      </g>
    </svg>,

    LINK: <svg width="32" height="32" viewBox="0 0 37.8 43.6"><g><g><path style={{ fill: "#2a5ada" }} d="M18.9,0l-4,2.3L4,8.6,0,10.9V32.7L4,35l11,6.3,4,2.3,4-2.3L33.8,35l4-2.3V10.9l-4-2.3L22.9,2.3ZM8,28.1V15.5L18.9,9.2l10.9,6.3V28.1L18.9,34.4Z" /></g></g></svg>,

    LTC: <svg width="32" height="32" viewBox="0 0 82.6 82.6"><circle cx="41.3" cy="41.3" r="36.83" style={{ fill: "#fff" }} /><path d="M41.3,0A41.3,41.3,0,1,0,82.6,41.3h0A41.18,41.18,0,0,0,41.54,0ZM42,42.7,37.7,57.2h23a1.16,1.16,0,0,1,1.2,1.12v.38l-2,6.9a1.49,1.49,0,0,1-1.5,1.1H23.2l5.9-20.1-6.6,2L24,44l6.6-2,8.3-28.2a1.51,1.51,0,0,1,1.5-1.1h8.9a1.16,1.16,0,0,1,1.2,1.12v.38L43.5,38l6.6-2-1.4,4.8Z" style={{ fill: "#345d9d" }} /></svg>,

    DIFX: <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <g clipPath="url(#clip0_331_150)">
        <path d="M32 15.9971C32.001 14.7425 31.8544 13.4916 31.563 12.267C31.5085 12.0203 31.4486 11.7797 31.3818 11.5487L31.3756 11.5371C31.3667 11.5051 31.3499 11.4535 31.3263 11.3872C30.9153 10.015 30.3157 8.69845 29.5426 7.47058C29.418 7.23811 29.2808 7.01174 29.1316 6.79234C27.9098 5.03933 26.3119 3.54293 24.4393 2.39803C21.9928 0.877836 19.1075 0 16.0171 0V0.00416491C15.8921 0.00160189 15.7675 0 15.6418 0H1.08198C0.79325 0 0.694951 0.356581 0.940868 0.488897L17.0909 9.16954L0.411017 18.1856C0.285453 18.2527 0.181222 18.3499 0.109002 18.4671C0.0367816 18.5843 -0.000832059 18.7174 1.3963e-05 18.8526V32L0.0106315 31.9942H15.7709C15.8531 31.9942 15.9352 31.993 16.0171 31.9904V31.9942C19.8343 31.9942 23.3388 30.6547 26.0867 28.4198C26.5228 28.0701 26.9384 27.6987 27.3317 27.3071C28.4628 26.1763 29.4079 24.8946 30.1361 23.5039C31.3249 21.2654 32 18.7101 32 15.9971ZM17.3371 22.3111V16.0871L23.1484 12.9711V19.1951L17.3371 22.3111ZM17.1529 9.55175L17.5361 9.75968L22.9662 12.6751L17.1532 15.7914L12.3479 13.2169L11.3307 12.6722L17.1529 9.55175ZM11.1522 19.1996V12.9628L12.1931 13.52L16.9696 16.083V22.3201L11.1522 19.1996Z" fill="#3D7EFF" />
        <path d="M3.12327 9.28272C3.18176 9.28206 3.23767 9.26005 3.27906 9.22139C3.32046 9.18273 3.34407 9.13047 3.34487 9.07576V7.69525C3.34496 7.66802 3.33929 7.64104 3.32818 7.61587C3.31707 7.5907 3.30075 7.56784 3.28015 7.5486C3.25955 7.52936 3.23508 7.51412 3.20816 7.50377C3.18123 7.49342 3.15238 7.48816 3.12327 7.48828H1.64777C1.61868 7.48816 1.58985 7.49342 1.56294 7.50378C1.53604 7.51413 1.51159 7.52937 1.49102 7.54862C1.47044 7.56786 1.45415 7.59073 1.44308 7.6159C1.43201 7.64106 1.42638 7.66803 1.42652 7.69525V9.07576C1.42638 9.10297 1.43201 9.12994 1.44308 9.15511C1.45415 9.18028 1.47044 9.20315 1.49102 9.22239C1.51159 9.24163 1.53604 9.25687 1.56294 9.26723C1.58985 9.27758 1.61868 9.28285 1.64777 9.28272H3.12327Z" fill="#3D7EFF" />
        <path d="M4.75293 8.79946V10.864C4.75293 10.9235 4.77819 10.9805 4.82315 11.0226C4.86811 11.0646 4.9291 11.0882 4.99268 11.0882H7.19977C7.26297 11.0871 7.32324 11.0631 7.36794 11.0213C7.41264 10.9795 7.43829 10.9231 7.43952 10.864V8.79946C7.43952 8.73998 7.41426 8.68294 7.3693 8.64088C7.32433 8.59882 7.26335 8.5752 7.19977 8.5752H4.99268C4.9291 8.5752 4.86811 8.59882 4.82315 8.64088C4.77819 8.68294 4.75293 8.73998 4.75293 8.79946Z" fill="#3D7EFF" />
        <path d="M5.61353 6.05078H4.6052C4.52027 6.05078 4.45142 6.11518 4.45142 6.19463V7.13782C4.45142 7.21727 4.52027 7.28167 4.6052 7.28167H5.61353C5.69846 7.28167 5.76731 7.21727 5.76731 7.13782V6.19463C5.76731 6.11518 5.69846 6.05078 5.61353 6.05078Z" fill="#3D7EFF" />
      </g>
      <defs>
        <clipPath id="clip0_331_150">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>,

    USDC: <svg width="30" height="30" viewBox="0 0 2000 2000">
      <path d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z" fill="#2775ca" />
      <path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z" fill="#fff" />
      <path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z" fill="#fff" />
    </svg>

  }
  return coins[coinName] || null;
}

function Icon({
  width = 34,
  height = 34,
  coin = 'USDT',
}: CoinIconProps) {
  return getIcon(coin, width, height)
}

export default Icon;
