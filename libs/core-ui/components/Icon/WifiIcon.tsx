import { IconProps } from '.';

function Icon({ width = 18, height = 22, fill = '#21C198', variant = 'max' }: IconProps) {

    if(variant === 'off'){
        return (
            <svg style={{ opacity: '0.3' }} width={width} height={height} viewBox="0 0 494.45 494.45" fill={fill}>
            <g>
                <g>
                    <g>
                        <path d="M395.225,277.325c-6.8,0-13.5-2.6-18.7-7.8c-71.4-71.3-187.4-71.3-258.8,0c-10.3,10.3-27.1,10.3-37.4,0
                        s-10.3-27.1,0-37.4c92-92,241.6-92,333.6,0c10.3,10.3,10.3,27.1,0,37.4C408.725,274.725,401.925,277.325,395.225,277.325z"/>
                    </g>
                    <g>
                        <path d="M323.625,348.825c-6.8,0-13.5-2.6-18.7-7.8c-15.4-15.4-36-23.9-57.8-23.9s-42.4,8.5-57.8,23.9
                        c-10.3,10.3-27.1,10.3-37.4,0c-10.3-10.3-10.3-27.1,0-37.4c25.4-25.4,59.2-39.4,95.2-39.4s69.8,14,95.2,39.5
                        c10.3,10.3,10.3,27.1,0,37.4C337.225,346.225,330.425,348.825,323.625,348.825z"/>
                    </g>
                    <g>
                        <circle cx="247.125" cy="398.925" r="35.3" />
                    </g>
                    <g>
                        <path d="M467.925,204.625c-6.8,0-13.5-2.6-18.7-7.8c-111.5-111.4-292.7-111.4-404.1,0c-10.3,10.3-27.1,10.3-37.4,0
                        s-10.3-27.1,0-37.4c64-64,149-99.2,239.5-99.2s175.5,35.2,239.5,99.2c10.3,10.3,10.3,27.1,0,37.4
                        C481.425,202.025,474.625,204.625,467.925,204.625z"/>
                    </g>
                </g>
            </g>
        </svg>
        )
    }

    return (
        <svg width={width} height={height} viewBox="0 0 494.45 494.45" fill={fill}>
            <g>
                <g>
                    <g style={['2g'].includes(variant) ? { opacity: '0.4' } : {}}>
                        <path d="M395.225,277.325c-6.8,0-13.5-2.6-18.7-7.8c-71.4-71.3-187.4-71.3-258.8,0c-10.3,10.3-27.1,10.3-37.4,0
                        s-10.3-27.1,0-37.4c92-92,241.6-92,333.6,0c10.3,10.3,10.3,27.1,0,37.4C408.725,274.725,401.925,277.325,395.225,277.325z"/>
                    </g>
                    <g>
                        <path d="M323.625,348.825c-6.8,0-13.5-2.6-18.7-7.8c-15.4-15.4-36-23.9-57.8-23.9s-42.4,8.5-57.8,23.9
                        c-10.3,10.3-27.1,10.3-37.4,0c-10.3-10.3-10.3-27.1,0-37.4c25.4-25.4,59.2-39.4,95.2-39.4s69.8,14,95.2,39.5
                        c10.3,10.3,10.3,27.1,0,37.4C337.225,346.225,330.425,348.825,323.625,348.825z"/>
                    </g>
                    <g>
                        <circle cx="247.125" cy="398.925" r="35.3" />
                    </g>
                    <g style={['2g','3g'].includes(variant) ? { opacity: '0.4' } : {}}>
                        <path d="M467.925,204.625c-6.8,0-13.5-2.6-18.7-7.8c-111.5-111.4-292.7-111.4-404.1,0c-10.3,10.3-27.1,10.3-37.4,0
                        s-10.3-27.1,0-37.4c64-64,149-99.2,239.5-99.2s175.5,35.2,239.5,99.2c10.3,10.3,10.3,27.1,0,37.4
                        C481.425,202.025,474.625,204.625,467.925,204.625z"/>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Icon;