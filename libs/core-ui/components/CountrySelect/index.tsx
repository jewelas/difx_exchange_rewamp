/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "antd";
import { Flag } from "../Flag";
import countries from "./countries.json";
import { OptionGroupStyled, SelectStyled } from "./styled";

const { Option } = Select;
export interface CountrySelectProps {
  placeHolder?: string;
  defaultValue?: string;
  value?: string;
  width?: number;
  size?: "medium" | "large";
  type?: "name" | "dial_code";
  onChange: (value: { key: string; value: string }) => void;
  onSearch?: (value: string) => void;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function getCountryInfo(key: string): {} | undefined {
  return countries.find((e) => e.code === key);
}

const CountrySelect = (props: CountrySelectProps) => {
  const onChange = (value: any, item: any) => {
    props.onChange({ key: item.key, value });
  };

  const onSearch = (val: string) => {
    if (props.onSearch) props.onSearch(val);
  };

  const renderOptions = () => {
    const result: any[] = [];

    for (const country of countries) {
      result.push(
        <Option
          key={country.code}
          value={
            !props.type || props.type === "name"
              ? country.name
              : country.dial_code
          }
        >
          <OptionGroupStyled className={props.size || "medium"}>
            <div className="flag-custom">
              <Flag countryCode={country.code} />
            </div>
            <div className="val">
              {!props.type || props.type === "name"
                ? country.name
                : country.dial_code}
            </div>
          </OptionGroupStyled>
        </Option>
      );
    }
    return result;
  };

  return (
    <SelectStyled
      value={props.value}
      defaultValue={props.defaultValue}
      className={props.size || "medium"}
      style={{ height: 48, width: props.width ? props.width : 300 }}
      showSearch
      placeholder={props.placeHolder || "Select..."}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option: any) => {
        const keys = [];
        for (const country of countries) {
          if (!props.type || props.type === "name") {
            if (
              country.name
                .toLocaleLowerCase()
                .includes(input.toLocaleLowerCase())
            ) {
              keys.push(country.code);
            }
          } else {
            if (
              country.dial_code
                .toLocaleLowerCase()
                .includes(input.toLocaleLowerCase())
            ) {
              keys.push(country.code);
            }
          }
        }
        return keys.includes(option.key);
      }}
    >
      {renderOptions()}
    </SelectStyled>
  );
};

export { CountrySelect };
