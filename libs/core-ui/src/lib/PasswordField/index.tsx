import { Typography as AntdTypography } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import t from './../../../../locale/src';
import CheckCircleIcon from './../Icon/CheckCircleIcon';
import CloseCircleIcon from './../Icon/CloseCircleIcon';
import EyeHiddenIcon from './../Icon/EyeHiddenIcon';
import EyeVisibleIcon from './../Icon/EyeVisibleIcon';
import { Form, Button, Checkbox, Input } from 'antd';
import { Color } from '../Color';
import clsx from 'clsx';

const { Text } = AntdTypography;

export interface PasswordFieldProps {
  rules?: [any];
  onChange: (isValidate: boolean, value:string) =>void
}

const FieldStyled = styled.div`
width: 100%;
.view-pass{
  display: inline-block;
  position: absolute;
  top: 16px;
  right: 10px;
  cursor:pointer;
}
input{
  height: 48px;
}
.tooltip-custom {
    box-shadow: -4px 4px 11px 0px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: -4px 4px 11px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -4px 4px 11px 0px rgba(0, 0, 0, 0.3);
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;

    .check-list-group{
      .check-item{
        margin: 5px 0;
        display:flex;
        .icon{
          padding-top: 4px;
          margin-right: 8px;
        }
        .content{
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          color: ${Color.red.failure} !important;
          &.success{
            color: ${Color.green.success} !important;
          }
        }
      }
    }
}
`
const PasswordField = (props: PasswordFieldProps) => {

  const [showPass, setShowPass] = useState(false);

  const [min10Chars, setMin10Chars] = useState(false);
  const [containsUpperCase, setContainsUpperCase] = useState(false);
  const [containsLowerCase, setContainsLowerCase] = useState(false);
  const [containsSpecialChars, setContainsSpecialChars] = useState(false);
  const [containsNumber, setContainsNumber] = useState(false);
  const [containsSpace, setContainsSpace] = useState(false);

  const onChangePass = (e: any) => {
    const value = e.target.value;
    setContainsSpace(value.includes(' '));
    setMin10Chars(value.length >= 10);
    setContainsLowerCase(/[a-z]/.test(value));
    setContainsUpperCase(/[A-Z]/.test(value));
    setContainsNumber(/[0-9]/.test(value));
    setContainsSpecialChars(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value));

    if(containsSpace && min10Chars && containsLowerCase && containsUpperCase && containsNumber && containsSpecialChars){
      props.onChange(true, value);
    }else{
      props.onChange(false, value);
    }
  }

  const renderCheckItem = (text: string, isSuccess: boolean) => {
    return (
      <div className='check-item'>
        <div className='icon'>{isSuccess ? <CheckCircleIcon /> : <CloseCircleIcon />}</div>
        <div className={clsx('content', isSuccess && 'success')}>{text}</div>
      </div>
    )
  }

  return (
    <FieldStyled data-tip data-for={'password-validate-field'} data-event='click focus'>
      <Form.Item name="password"
        rules={props.rules || []}>
        <Input onChange={onChangePass} type={showPass ? 'text' : 'password'} autoComplete='new-password' placeholder="Password" data-event='click focus' />
        <div className='view-pass' onMouseDown={() => { setShowPass(!showPass) }}>
          {showPass ? <EyeHiddenIcon /> : <EyeVisibleIcon />}
        </div>
      </Form.Item>

      <ReactTooltip className='tooltip-custom' id={'password-validate-field'} globalEventOff='mousedown' effect='solid' place="left" type="light">
        <div className='check-list-group'>
          {renderCheckItem(t('error.min_10_chars'), min10Chars)}
          {renderCheckItem(t('error.should_contain_uppercase'), containsUpperCase)}
          {renderCheckItem(t('error.should_contain_lowercase'), containsLowerCase)}
          {renderCheckItem(t('error.should_contain_special_char'), containsSpecialChars)}
          {renderCheckItem(t('error.should_contain_number'), containsNumber)}
          {renderCheckItem(t('error.should_contain_space'), containsSpace)}
        </div>
      </ReactTooltip>
    </FieldStyled>
  )
}

export { PasswordField }