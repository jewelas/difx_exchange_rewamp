
import { Avatar, Select } from "antd";
import { API_ENDPOINT, ASSETS_URL, QUERY_KEY, useHttpGet } from "../../../shared";
import { OptionGroupStyled } from "./styled";

const { Option } = Select;

export interface CoinSelectorInterface{
  selectedCoin: string
  handleChange: any
}

const CoinSelector = ({selectedCoin, handleChange}: CoinSelectorInterface) => {

  const { data: currencyData } = useHttpGet<null, any>(QUERY_KEY.CURRENCIES, API_ENDPOINT.GET_CURRENCIES, {});

  return (
    <Select 
        value={selectedCoin} 
        style={{ width: '100%' }} 
        className="coinselect"
        onChange={handleChange}
        placeholder="Select Coin"
    >
    {
    !currencyData
    ?
    "Loading..."
    :
    currencyData.map((item: any) =>
        <Option value={JSON.stringify(item)} key={item.coin}>
            <OptionGroupStyled>
                <div className="coinflag">
                    <Avatar shape="square" size={26} src={`${ASSETS_URL}${item.coin.toLowerCase()}.png`}/>
                </div>
                <div className="coinvalue">
                    {item.coin}
                </div>
            </OptionGroupStyled>
        </Option>
        )
    }
    </Select>
  )
}

export { CoinSelector }