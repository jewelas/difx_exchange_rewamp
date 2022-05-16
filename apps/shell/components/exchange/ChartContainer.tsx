import { ChartContainerStyled } from "./styled"

export interface ChartContainerInterface {
  pair: string
}

export default function ChartContainer({pair}: ChartContainerInterface) {
  return (
    <ChartContainerStyled>
      <div>ChartContainer</div>
    </ChartContainerStyled>
  )
}
