import { IconProps } from ".";

function Icon({
  width = 94,
  height = 46,
}: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 94 46" fill="none">
      <rect x="92.9863" y="46" width="92.9899" height="45.1665" transform="rotate(-179.485 92.9863 46)" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_2120_9172" transform="translate(0 -0.00585344) scale(0.002457 0.00505853)" />
        </pattern>
        <image id="image0_2120_9172" width="407" height="200" xlinkHref="data:image/png;base64,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" />
      </defs>
    </svg>
  );
}

export default Icon;
