import { IconProps } from '.';
import Layout from './Layout';

function Icon({ width = 21, height = 21, fill = '#000', useDarkMode }: IconProps) {
    return (
        <Layout fill={fill} useDarkMode={useDarkMode}>
            <svg width={width} height={height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.125 9.625H16.555C16.4868 9.14291 16.3608 8.6708 16.1796 8.21887L19.2657 6.43038C19.3689 6.37487 19.4598 6.29922 19.5332 6.20792C19.6066 6.11661 19.6609 6.0115 19.6928 5.89883C19.7248 5.78615 19.7339 5.6682 19.7194 5.55197C19.705 5.43573 19.6674 5.32358 19.6088 5.22216C19.5502 5.12074 19.4718 5.03212 19.3783 4.96154C19.2849 4.89096 19.1782 4.83987 19.0646 4.8113C18.951 4.78272 18.8328 4.77725 18.7171 4.79519C18.6013 4.81313 18.4904 4.85413 18.3907 4.91575L15.302 6.70687C15.0067 6.33388 14.6694 5.99622 14.2966 5.70062L16.0869 2.611C16.1947 2.41067 16.2202 2.17623 16.1581 1.95739C16.096 1.73854 15.951 1.55249 15.7541 1.4387C15.5571 1.3249 15.3235 1.29229 15.1029 1.34779C14.8823 1.40329 14.6919 1.54254 14.5722 1.736L12.7811 4.82037C12.3293 4.63901 11.8571 4.51297 11.375 4.445V0.875C11.375 0.642936 11.2828 0.420376 11.1187 0.256282C10.9546 0.0921873 10.7321 0 10.5 0C10.2679 0 10.0454 0.0921873 9.88128 0.256282C9.71719 0.420376 9.625 0.642936 9.625 0.875V4.445C9.14287 4.51297 8.67073 4.63901 8.21887 4.82037L6.43038 1.73425C6.31069 1.54079 6.12036 1.40154 5.89973 1.34604C5.67911 1.29054 5.44555 1.32315 5.24857 1.43695C5.05158 1.55074 4.90666 1.73679 4.84453 1.95564C4.7824 2.17448 4.80794 2.40892 4.91575 2.60925L6.706 5.70062C6.33326 5.99622 5.9959 6.33388 5.70062 6.70687L2.61187 4.91575C2.51227 4.85413 2.4013 4.81313 2.28556 4.79519C2.16981 4.77725 2.05164 4.78272 1.93805 4.8113C1.82446 4.83987 1.71777 4.89096 1.62429 4.96154C1.53081 5.03212 1.45246 5.12074 1.39387 5.22216C1.33527 5.32358 1.29764 5.43573 1.2832 5.55197C1.26876 5.6682 1.2778 5.78615 1.30979 5.89883C1.34177 6.0115 1.39606 6.11661 1.46942 6.20792C1.54279 6.29922 1.63373 6.37487 1.73688 6.43038L4.82037 8.21887C4.6392 8.6708 4.51317 9.14291 4.445 9.625H0.875C0.642936 9.625 0.420376 9.71719 0.256282 9.88128C0.0921873 10.0454 0 10.2679 0 10.5C0 10.7321 0.0921873 10.9546 0.256282 11.1187C0.420376 11.2828 0.642936 11.375 0.875 11.375H4.445C4.51317 11.8571 4.6392 12.3292 4.82037 12.7811L1.73425 14.5696C1.63111 14.6251 1.54016 14.7008 1.4668 14.7921C1.39343 14.8834 1.33915 14.9885 1.30716 15.1012C1.27517 15.2138 1.26613 15.3318 1.28057 15.448C1.29502 15.5643 1.33265 15.6764 1.39124 15.7778C1.44983 15.8793 1.52819 15.9679 1.62167 16.0385C1.71514 16.109 1.82184 16.1601 1.93543 16.1887C2.04902 16.2173 2.16719 16.2228 2.28293 16.2048C2.39868 16.1869 2.50964 16.1459 2.60925 16.0842L5.698 14.2931C5.99327 14.6661 6.33063 15.0038 6.70337 15.2994L4.91575 18.389C4.80794 18.5893 4.7824 18.8238 4.84453 19.0426C4.90666 19.2615 5.05158 19.4475 5.24857 19.5613C5.44555 19.6751 5.67911 19.7077 5.89973 19.6522C6.12036 19.5967 6.31069 19.4575 6.43038 19.264L8.21887 16.1779C8.67078 16.3595 9.14288 16.4861 9.625 16.555V20.125C9.625 20.3571 9.71719 20.5796 9.88128 20.7437C10.0454 20.9078 10.2679 21 10.5 21C10.7321 21 10.9546 20.9078 11.1187 20.7437C11.2828 20.5796 11.375 20.3571 11.375 20.125V16.555C11.857 16.4866 12.3291 16.3606 12.7811 16.1796L14.5696 19.2657C14.6893 19.4592 14.8796 19.5985 15.1003 19.654C15.3209 19.7095 15.5544 19.6769 15.7514 19.5631C15.9484 19.4493 16.0933 19.2632 16.1555 19.0444C16.2176 18.8255 16.1921 18.5911 16.0842 18.3907L14.294 15.3011C14.6667 15.0055 15.0041 14.6679 15.2994 14.2949L18.3881 16.086C18.4877 16.1476 18.5987 16.1886 18.7144 16.2066C18.8302 16.2245 18.9484 16.219 19.0619 16.1905C19.1755 16.1619 19.2822 16.1108 19.3757 16.0402C19.4692 15.9696 19.5475 15.881 19.6061 15.7796C19.6647 15.6782 19.7024 15.566 19.7168 15.4498C19.7312 15.3335 19.7222 15.2156 19.6902 15.1029C19.6582 14.9902 19.6039 14.8851 19.5306 14.7938C19.4572 14.7025 19.3663 14.6269 19.2631 14.5714L16.177 12.7829C16.3592 12.3305 16.4861 11.8578 16.555 11.375H20.125C20.3571 11.375 20.5796 11.2828 20.7437 11.1187C20.9078 10.9546 21 10.7321 21 10.5C21 10.2679 20.9078 10.0454 20.7437 9.88128C20.5796 9.71719 20.3571 9.625 20.125 9.625ZM10.5 14.875C4.718 14.6912 4.71975 6.30788 10.5 6.125C16.282 6.30875 16.2803 14.6921 10.5 14.875Z" />
            </svg>
        </Layout>

    );
}

export default Icon;
