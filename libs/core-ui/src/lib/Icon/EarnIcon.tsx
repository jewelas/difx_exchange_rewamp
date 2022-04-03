import { IconProps } from '.';

function Icon({ width = 18, height = 22 }: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 18 22">
            <path d="M16.5 0.500122H1.5C1.08516 0.500122 0.75 0.835278 0.75 1.25012V20.7501C0.75 21.165 1.08516 21.5001 1.5 21.5001H16.5C16.9148 21.5001 17.25 21.165 17.25 20.7501V1.25012C17.25 0.835278 16.9148 0.500122 16.5 0.500122ZM2.4375 2.18762H15.5625V7.06262H2.4375V2.18762ZM15.5625 13.4376H2.4375V8.56262H15.5625V13.4376ZM15.5625 19.8126H2.4375V14.9376H15.5625V19.8126ZM4.125 4.62512C4.125 4.87376 4.22377 5.11222 4.39959 5.28803C4.5754 5.46385 4.81386 5.56262 5.0625 5.56262C5.31114 5.56262 5.5496 5.46385 5.72541 5.28803C5.90123 5.11222 6 4.87376 6 4.62512C6 4.37648 5.90123 4.13802 5.72541 3.96221C5.5496 3.78639 5.31114 3.68762 5.0625 3.68762C4.81386 3.68762 4.5754 3.78639 4.39959 3.96221C4.22377 4.13802 4.125 4.37648 4.125 4.62512ZM4.125 11.0001C4.125 11.2488 4.22377 11.4872 4.39959 11.663C4.5754 11.8389 4.81386 11.9376 5.0625 11.9376C5.31114 11.9376 5.5496 11.8389 5.72541 11.663C5.90123 11.4872 6 11.2488 6 11.0001C6 10.7515 5.90123 10.513 5.72541 10.3372C5.5496 10.1614 5.31114 10.0626 5.0625 10.0626C4.81386 10.0626 4.5754 10.1614 4.39959 10.3372C4.22377 10.513 4.125 10.7515 4.125 11.0001ZM4.125 17.3751C4.125 17.6238 4.22377 17.8622 4.39959 18.038C4.5754 18.2139 4.81386 18.3126 5.0625 18.3126C5.31114 18.3126 5.5496 18.2139 5.72541 18.038C5.90123 17.8622 6 17.6238 6 17.3751C6 17.1265 5.90123 16.888 5.72541 16.7122C5.5496 16.5364 5.31114 16.4376 5.0625 16.4376C4.81386 16.4376 4.5754 16.5364 4.39959 16.7122C4.22377 16.888 4.125 17.1265 4.125 17.3751Z" fill="#262626" />
        </svg>
    );
}

export default Icon;