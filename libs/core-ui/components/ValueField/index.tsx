import { Typography } from './..';
import { ComponentStyled } from './styled';

/* eslint-disable-next-line */
export interface ValueFieldProps {
    title: string;
    value: string;
}
function ValueField({ title, value }: ValueFieldProps) {
    return (
        <ComponentStyled>
            <div className="mtitle">
                <Typography level="B2">{title}</Typography>
            </div>
            <div className="mvalue">
                <Typography lineHeight={22} level="B1">{value}</Typography>
            </div>
        </ComponentStyled>
    )
}

export { ValueField }