import { Typography as AntdTypography } from 'antd';
import styled from 'styled-components';
import { Color } from '../Color';

const { Text } = AntdTypography;

export interface TypographyProps {
    level?: 'H1' | 'H2' | 'H5' | 'H6' | 'text';
    color?: 'primary' | 'danger' | 'secondary';
    children?: any;
}

const TextStyled = styled(Text)`
  &.H1{
    font-weight: 600;
    font-size: 56px;
    line-height: 64px;
    color: ${({theme})=> theme.textColor};
  }
  &.H2{
    font-weight: 600;
    font-size: 38px;
    line-height: 46px;
    color: ${({theme})=> theme.textColor};
  }
  &.H5{
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: ${({theme})=> theme.textColor};
  }
  &.H6{
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: ${({theme})=> theme.textColor};
  }
  &.text{
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: ${({theme})=> theme.textColor};
  }
`


const Typography = (props: TypographyProps) => {
    let color;
    switch (props.color) {
        case 'danger': color = Color.red.failure;
            break;
        case 'primary': color = Color.blue.primary;
            break;
        case 'secondary': color = Color.grey.textSecondary;
            break;
    }
    return (
        <TextStyled className={props.level} style={{ color }}>{props.children}</TextStyled>
    )
}

export { Typography }