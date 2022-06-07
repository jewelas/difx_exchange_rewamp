import clsx from "clsx";
import { TextStyled } from "./styled";

export interface TypographyProps {
  level?: "H1" | "H2" | "H5" | "H4" | "H6" | "B1" | "B2" | "B3" | "text";
  color?: "primary" | "danger" | "secondary" | "success" | "warning";
  className?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

const Typography = ({ color, fontSize, fontWeight, lineHeight, level, className, children }: TypographyProps) => {
  return (
    <TextStyled
      className={clsx(level, className, color)}
      style={{fontSize: `${fontSize}px`, fontWeight: `${fontWeight}px`, lineHeight: `${lineHeight}px` }}
    >
      {children}
    </TextStyled>
  );
};

export { Typography };
