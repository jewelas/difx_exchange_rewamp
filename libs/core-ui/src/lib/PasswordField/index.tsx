import { Typography as AntdTypography } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import CheckCircleIcon from './../Icon/CheckCircleIcon';
import CloseCircleIcon from './../Icon/CloseCircleIcon';
import EyeHiddenIcon from './../Icon/EyeHiddenIcon';
import EyeVisibleIcon from './../Icon/EyeVisibleIcon';
import { Form, Button, Checkbox, Input } from 'antd';
import { Color } from '../Color';

const { Text } = AntdTypography;

export interface PasswordFieldProps {
  rules?: [any]
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
        }
      }
    }
}
`
const PasswordField = (props: PasswordFieldProps) => {

  const [showPass, setShowPass] = useState(false);

  return (
    <FieldStyled data-tip data-for={'password-validate-field'} data-event='click focus'>
      <Form.Item name="password"
        rules={props.rules || []}>
        <Input type={showPass ? 'text' : 'password'} autoComplete='new-password' placeholder="Password" data-event='click focus' />
        <div className='view-pass' onClick={()=>{setShowPass(!showPass)}}>
          {showPass ? <EyeHiddenIcon /> : <EyeVisibleIcon/> }
        </div>
      </Form.Item>

      <ReactTooltip className='tooltip-custom' id={'password-validate-field'} globalEventOff='mousedown' effect='solid' place="left" type="light">
        <div className='check-list-group'>
          <div className='check-item'>
            <div className='icon'><CloseCircleIcon /></div>
            <div className='content'>Minimum 10 character</div>
          </div>
          <div className='check-item'>
            <div className='icon'><CloseCircleIcon /></div>
            <div className='content'>Should contain uppercase</div>
          </div>
          <div className='check-item'>
            <div className='icon'><CloseCircleIcon /></div>
            <div className='content'>Should contain lowercase</div>
          </div>
          <div className='check-item'>
            <div className='icon'><CloseCircleIcon /></div>
            <div className='content'>Should contain special character</div>
          </div>
          <div className='check-item'>
            <div className='icon'><CloseCircleIcon /></div>
            <div className='content'>Should contain number</div>
          </div>
          <div className='check-item'>
            <div className='icon'><CloseCircleIcon /></div>
            <div className='content'>Should contain space</div>
          </div>
        </div>
      </ReactTooltip>
    </FieldStyled>
  )
}

export { PasswordField }