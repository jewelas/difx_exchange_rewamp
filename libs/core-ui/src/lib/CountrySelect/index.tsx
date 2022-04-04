import { Select } from 'antd';
import styled from 'styled-components';
import { Flag } from './../Flag';
import countries from './countries.json';

const { Option } = Select;

export interface CountrySelectProps {
  placeHolder?: string;
  width?: number;
  type?: 'name' | 'dial_code';
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
}

const SelectStyled = styled(Select)`

`

const OptionGroupStyled = styled.div`
  display:flex;
  .flag-custom{
    padding-top: 3px;
    margin-right: 9px;
    svg{
      width: 25px;
    }
}
`


const CountrySelect = (props: CountrySelectProps) => {

  const onChange = (value: any) => {
    props.onChange(value);
  }

  const onSearch = (val: string) => {
    if(props.onSearch) props.onSearch(val)
  }

  const renderOptions = () => {
    const result: any[] = [];

    for (const country of countries) {
      result.push(
        <Option key={country.code} value={country.code}>
          <OptionGroupStyled>
            <div className='flag-custom'><Flag countryCode={country.code} /></div>
            {(!props.type || props.type === 'name') ? country.name : country.dial_code}
          </OptionGroupStyled>
        </Option>
      )
    }
    return result;
  }

  return (
    <SelectStyled
      style={{ width: props.width ? props.width : 300 }}
      showSearch
      placeholder={props.placeHolder || 'Select...'}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option: any) => {
        const keys = [];
        for (const country of countries) {
          if(!props.type || props.type === 'name'){
            if (country.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
              keys.push(country.code)
            }
          }else{
            if (country.dial_code.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
              keys.push(country.code)
            }
          }
          
        }
        return keys.includes(option.value)
      }
      }
    >

      {
        renderOptions()
      }
    </SelectStyled>
  )
}

export { CountrySelect }