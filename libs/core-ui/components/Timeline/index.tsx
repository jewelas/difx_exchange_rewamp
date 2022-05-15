import clsx from "clsx";
import { MainStyled } from './styled';

/* eslint-disable-next-line */
export interface TimelineProps {
  values: any[];
  color?: string;
}

function Timeline({ values, color }: TimelineProps) {
  return (
    <MainStyled color={color}>
      {
        values.map((e, i) =>
          <div key={`${e}_${i}`} className={clsx("at", i === 0 ? "first" : i === values.length - 1 ? "last" : "")}>
            <div className="dot" />
            <div className="value">{e}</div>
          </div>
        )
      }
      <div className="line" />
    </MainStyled>
  );
}

export { Timeline };
