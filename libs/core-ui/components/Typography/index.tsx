import clsx from "clsx";
import { Color } from "../Color";
import { TextStyled } from "./styled";

export interface TypographyProps {
  level?: "H1" | "H2" | "H5" | "H4" | "H6" | "B1" | "B2" | "B3" | "text";
  color?: "primary" | "danger" | "secondary" | "success";
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

const Typography = (props: TypographyProps) => {
  let color;
  switch (props.color) {
    case "danger":
      color = Color.red.failure;
      break;
    case "primary":
      color = Color.blue.primary;
      break;
    case "success":
      color = Color.green.success;
      break;
    case "secondary":
      color = Color.grey.textSecondary;
      break;
  }
  return (
    <TextStyled
      className={clsx(props.level, props.className)}
      style={{ color }}
    >
      {props.children}
    </TextStyled>
  );
};

export { Typography };
