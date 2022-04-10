import { Form, Input, Typography as AntdTypography } from 'antd';
import clsx from 'clsx';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import t from '../../../../locale';
import { Color } from '../Color';
import CheckCircleIcon from './../Icon/CheckCircleIcon';
import CloseCircleIcon from './../Icon/CloseCircleIcon';
import EyeHiddenIcon from './../Icon/EyeHiddenIcon';
import EyeVisibleIcon from './../Icon/EyeVisibleIcon';

const { Text } = AntdTypography;

export interface PasswordFieldProps {
  rules?: [any];
  onChange: (isValidate: boolean, value: string) => void
}

const FieldStyled = styled.div`
width: 100%;
border: 1px solid ${({ theme }) => theme.inputBorderColor || Color.grey.buttonSecondary};
border-radius:2px;
height: 50px;
&.fail{
  border-color: ${Color.red.failure}
}
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

    background:  ${({ theme }) => theme.backgroundColor};
    &::after{
      border-top-color:  ${({ theme }) => theme.backgroundColor} !important;
      border-left-color:  ${({ theme }) => theme.backgroundColor} !important;
    }

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
  const [notContainsSpace, setNotContainsSpace] = useState(false);

  const [isValidate, setIsValidate] = useState(true);

  const onChangePass = (e: any) => {
    const value = e.target.value;

    const _notContainSpace = !value.includes(' ');
    const _min10Chars = value.length >= 10;
    const _containsLowerCase = /[a-z]/.test(value);
    const _containsUpperCase = /[A-Z]/.test(value);
    const _containsNumberCase = /[0-9]/.test(value);
    const _containsSpecialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);

    setNotContainsSpace(_notContainSpace);
    setMin10Chars(_min10Chars);
    setContainsLowerCase(_containsLowerCase);
    setContainsUpperCase(_containsUpperCase);
    setContainsNumber(_containsNumberCase);
    setContainsSpecialChars(_containsSpecialChar);

    if (_notContainSpace && _min10Chars && _containsLowerCase && _containsUpperCase && _containsNumberCase && _containsSpecialChar) {
      props.onChange(true, value);
      setIsValidate(true);
    } else {
      props.onChange(false, value);
      setIsValidate(false);
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
    <FieldStyled className={clsx(isValidate ? '' : 'fail')} data-tip data-for={'password-validate-field'} data-event='click focus'>
      <Form.Item name="password"
        rules={props.rules || []}>
        <Input bordered={false} onChange={onChangePass} type={showPass ? 'text' : 'password'} autoComplete='new-password' placeholder="Password" data-event='click focus' />
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
          {renderCheckItem(t('error.should_not_contain_space'), notContainsSpace)}
        </div>
      </ReactTooltip>
    </FieldStyled>
  )
}

export { PasswordField };
