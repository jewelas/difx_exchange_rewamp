import { Select } from 'antd';
import styled from 'styled-components';
import { Flag } from './../Flag';
import countries from './countries.json';

const { Option } = Select;

export interface CountrySelectProps {
  placeHolder?: string;
  width?: number;
  size?: 'medium' | 'large';
  type?: 'name' | 'dial_code';
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
}

const SelectStyled = styled(Select)`
  &.large{
    .ant-select-selection-placeholder{
      padding-top: 8px !important;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px !important;
    }
    .ant-select-selector{
      height: 48px !important;
      .ant-select-selection-search{
        input{
          height: 48px !important;
        }
      }
    }
  }
  &.medium{
    .ant-select-selection-placeholder{
      padding-top: 8px !important;
      font-size: 14px;
      font-weight: 400;
      line-height: 28px !important;
    }
    .ant-select-selector{
      height: 48px !important;
      .ant-select-selection-search{
        input{
          height: 48px !important;
        }
      }
    }
  }
`

const OptionGroupStyled = styled.div`
  display:flex;
  &.large{
    .flag-custom{
      padding-top: 11px;
      margin-right: 9px;
      svg{
        width: 38px;
      }
    }
    .val{
      font-size: 20px;
      font-weight: 500;
      line-height:28px;
      padding-top: 9px;
    }
  }
  &.medium{
    .flag-custom{
      padding-top: 11px;
      margin-right: 9px;
      svg{
        width: 38px;
      }
    }
    .val{
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      padding-top: 9px;
    }
  }
`


const CountrySelect = (props: CountrySelectProps) => {

  const onChange = (value: any) => {
    props.onChange(value);
  }

  const onSearch = (val: string) => {
    if (props.onSearch) props.onSearch(val)
  }

  const renderOptions = () => {
    const result: any[] = [];

    for (const country of countries) {
      result.push(
        <Option key={country.code} value={country.code}>
          <OptionGroupStyled className={props.size || 'medium'}>
            <div className='flag-custom'><Flag countryCode={country.code} /></div>
            <div className='val'>
              {(!props.type || props.type === 'name') ? country.name : country.dial_code}
            </div>
          </OptionGroupStyled>
        </Option>
      )
    }
    return result;
  }

  return (
    <SelectStyled
      className={props.size || 'medium'}
      style={{ height: 48, width: props.width ? props.width : 300 }}
      showSearch
      placeholder={props.placeHolder || 'Select...'}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option: any) => {
        const keys = [];
        for (const country of countries) {
          if (!props.type || props.type === 'name') {
            if (country.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
              keys.push(country.code)
            }
          } else {
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