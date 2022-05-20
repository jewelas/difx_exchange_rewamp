// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Avatar, Select } from "antd";
// import { useEffect, useState } from "react";
// import { API_ENDPOINT, ASSETS_URL, Currency, QUERY_KEY, useHttpGet } from "../../../shared";
// import { Flag } from "../Flag";
// import { OptionGroupStyled, SelectStyled } from "./styled";

// const { Option } = Select;
// export interface CoinSelectProps {
//   placeHolder?: string;
//   defaultValue?: string;
//   value?: string;
//   width?: number;
//   size?: "medium" | "large";
//   onChange: (value: { key: string; value: string }) => void;
//   // onSearch?: (value: string) => void;
// }

// // eslint-disable-next-line @typescript-eslint/ban-types
// // export function getCoinInfo(key: string): {} | undefined {
// //   return coins.find((e) => e.code === key);
// // }

// const CoinSelect = (props: CoinSelectProps) => {
//   const { data: currencyData } = useHttpGet<null, any>(QUERY_KEY.CURRENCY_PAIRS, API_ENDPOINT.GET_CURRENCY_PAIRS, {});
  
// //   const onChange = (value: any, item: any) => {
// //     props.onChange({ key: item.key, value });
// //   };

//     const [coinName, setCoinName] = useState([])

//   useEffect(() => {
//     if(currencyData){
//         setCoinName(currencyData)
//         console.log(currencyData)
//     }
//   }, [currencyData]);

// //   const renderOptions = () => {
// //     const result: any[] = [];

// //     for (const coin of coins) {
// //       result.push(
// //         <Option
// //           key={coin.code}
// //           value={
// //             coin.name
// //           }
// //         >
// //           <OptionGroupStyled className={props.size || "medium"}>
// //             <div className="flag-custom">
// //                 <Avatar shape="square" size={30} src={`${ASSETS_URL}${coin.currency1.toLowerCase()}.png`}/>
// //             </div>
// //             <div className="val">
// //               {coin.name}
// //             </div>
// //           </OptionGroupStyled>
// //         </Option>
// //       );
// //     }
// //     return result;
// //   };

//   return (
//       <>Hi nitin
//       <div currency={coinName}>nitin singh</div>
//       </>
      
//     // <SelectStyled
//     //   value={props.value}
//     //   defaultValue={props.defaultValue}
//     //   className={props.size || "medium"}
//     //   // style={{ height: 48, width: props.width ? props.width : 300 }}
//     //   // showSearch
//     //   placeholder={props.placeHolder || "Select..."}
//     //   optionFilterProp="children"
//     // //   onChange={onChange}
//     //   // onSearch={onSearch}
//     // >
//     //   {renderOptions()}
//     // </SelectStyled>
//   );
// };

// export { CoinSelect };
