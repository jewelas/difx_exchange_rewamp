import { ChartContainerStyled } from "./styled"

export interface ChartContainerInterface {
  pair: string
}

export default function ChartContainer({pair}: ChartContainerInterface) {
  return (
    <ChartContainerStyled>
      <div className="chart-head">

      </div>
      <div className="chart body">
        
      </div>
    </ChartContainerStyled>
  )
}
