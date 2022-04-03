import { IconProps } from '.';

function Icon({ width = 16, height = 16 }: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16">
            <path d="M9.21376 8.00012L15.3661 0.666528C15.4692 0.544653 15.3825 0.359497 15.2231 0.359497H13.3528C13.2427 0.359497 13.1372 0.408716 13.0645 0.493091L7.99032 6.54231L2.91611 0.493091C2.84579 0.408716 2.74032 0.359497 2.62782 0.359497H0.757512C0.598137 0.359497 0.511418 0.544653 0.614543 0.666528L6.76689 8.00012L0.614543 15.3337C0.591442 15.3609 0.576622 15.3941 0.571842 15.4294C0.567061 15.4648 0.572521 15.5007 0.587574 15.5331C0.602627 15.5654 0.626641 15.5927 0.656764 15.6118C0.686886 15.6309 0.721853 15.6409 0.757512 15.6407H2.62782C2.73798 15.6407 2.84345 15.5915 2.91611 15.5072L7.99032 9.45794L13.0645 15.5072C13.1349 15.5915 13.2403 15.6407 13.3528 15.6407H15.2231C15.3825 15.6407 15.4692 15.4556 15.3661 15.3337L9.21376 8.00012Z" fill="#262626" />
        </svg>

    );
}

export default Icon;
