import clsx from "clsx";
import { Color } from "../Color";
import { TextStyled } from "./styled";

export interface TypographyProps {
  level?: "H1" | "H2" | "H5" | "H4" | "H6" | "B1" | "B2" | "B3" | "text";
  color?: "primary" | "danger" | "secondary" | "success";
  className?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

const Typography = ({ color, fontSize, fontWeight, lineHeight, level, className, children }: TypographyProps) => {
  let _color;
  switch (color) {
    case "danger":
      _color = Color.red?.failure;
      break;
    case "primary":
      _color = Color.blue?.primary;
      break;
    case "success":
      _color = Color.green?.success;
      break;
    case "secondary":
      _color = Color.grey.textSecondary;
      break;
  }
  return (
    <TextStyled
      className={clsx(level, className)}
      style={{ color: _color, fontSize: `${fontSize}px`, fontWeight: `${fontWeight}px`, lineHeight: `${lineHeight}px` }}
    >
      {children}
    </TextStyled>
  );
};

export { Typography };
