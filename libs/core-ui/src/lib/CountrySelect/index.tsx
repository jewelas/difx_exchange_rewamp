import { Select } from 'antd';
import findKey from 'lodash/findKey';
import styled from 'styled-components';
import { Flag } from './../Flag';
import countries from './countries.json';

const { Option } = Select;

export interface CountrySelectProps {
  placeHolder?: string;
  width?: number;
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

    for (const [key, value] of Object.entries(countries)) {
      result.push(
        <Option key={key} value={key}>
          <OptionGroupStyled>
            <div className='flag-custom'><Flag countryCode={key} /></div>
            {value}
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
        for (const [key, value] of Object.entries(countries)) {
          if (value.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
            keys.push(key)
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