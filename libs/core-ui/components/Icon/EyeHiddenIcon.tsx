import { IconProps } from ".";

function Icon({ width = 20.2, height = 20.2, fill = "#9AA5B4" }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 20.2 20.201">
      <g transform="translate(-0.439 -0.439)">
        <path
          style={{
            fill: "none",
            stroke: "#a0a0a0",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5px",
          }}
          d="M15.421,17.456a8.275,8.275,0,0,1-4.881,1.693c-5.752,0-9.04-6.574-9.04-6.574A15.162,15.162,0,0,1,5.658,7.693M8.814,6.2A7.5,7.5,0,0,1,10.54,6c5.752,0,9.04,6.574,9.04,6.574A15.2,15.2,0,0,1,17.8,15.2m-5.522-.879A2.465,2.465,0,1,1,8.8,10.832"
          transform="translate(0 -2.035)"
        />
        <path
          style={{
            fill: "none",
            stroke: "#a0a0a0",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5px",
          }}
          d="M1.5,1.5,19.579,19.579"
          transform="translate(0 0)"
        />
      </g>
    </svg>
  );
}

export default Icon;
