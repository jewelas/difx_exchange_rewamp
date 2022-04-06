import { Color, getCountryInfo, CountrySelect, Icon, Typography, PasswordField } from '@difx/core-ui';
import md5 from 'md5';
import { SignUpRequest, SignUpResponse, useSignUp } from '@difx/shared'

import axios, { AxiosResponse, AxiosError } from 'axios';


import clsx from 'clsx';
import { isEmpty } from 'lodash';
import t from '@difx/locale';
import ReactTooltip from 'react-tooltip';
import { Form, Button, Checkbox, Input, notification } from 'antd';
import { FormInstance } from 'antd/es/form';
import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { stringify } from 'querystring';

/* eslint-disable-next-line */
export interface RegisterFormComponentProps { }

const PageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 40px;
    .H6{
        margin-top: 20px;
        display:block;
    }
    
    .country-select-group{
      margin-top:10px;
    }
    .referral-group{
      display:flex;
      cursor:pointer;
      width: 147px;
      .icon{
        margin-top: 23px;
        margin-left: 10px;
      }
    }
    .term-group{
      margin-top: 20px;
    }
    .sign-up-btn{
      margin-top:20px;
      height: 48px !important;
      width: 100%;
    }
    .input-group{
      margin-top:30px;
      .ant-input{
        height: 48px;
        font-size: 14px;
        font-weight: 400;
        line-height:22px;
      }
      .input-item{
        margin-bottom:30px;
        display:flex;
        .ant-row.ant-form-item{
          margin-bottom: unset;
          width: 100%;
        }
        &.dial{
          .dropdown-dial{
            margin-right:20px;
          }
        }
      }
    }
    .account-type-group{
      margin-top:30px;
      button:nth-child(2){
        margin-left:30px;
      }
      button{
        padding:unset;
        height: 74px;
        width: 87px;
        border-radius: 2px;
        color: ${Color.grey.buttonSecondary};
        border-color: ${Color.grey.buttonSecondary} !important;
        svg path{
          fill: ${Color.grey.buttonSecondary};
        }
        &.active{
          color: ${Color.blue.primary};
          border-color: ${Color.blue.primary} !important;
          svg path{
            fill: ${Color.blue.primary} !important;
          }
        }
        &:hover{
          transition: unset !important;
          color: ${Color.blue.primary} !important;
          border-color: ${Color.blue.primary} !important;
          svg path{
            fill: ${Color.blue.primary} !important;
          }
        }
      }
    }
  
`;

export function RegisterFormComponent(props: RegisterFormComponentProps) {

  const [showReferral, setShowReferral] = useState(false);

  const formRef = useRef<FormInstance>(null);
  const tooltipRef = useRef(null);

  const [acceptTerm, setAcceptTerm] = useState(false);
  const [hasFieldError, setHasFieldError] = useState(true);
  const [dialCode, setDialCode] = useState(null);
  const [country, setCountry] = useState(null);
  const [userType, setUserType] = useState<'IND' | 'BUS'>('IND')


  const signUpSuccessNotification = () => {
    notification['success']({
      message: 'Sign Up successfully'
    });
  };

  const signUpFailNotification = (description: string) => {
    notification['error']({
      message: 'Sign Up failed',
      description
    });
  };

  const isRequiredFieldsEmpty = (): boolean => {
    let result = false;
    const values: FormData = formRef.current!.getFieldsValue();
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        result = true;
        break;
      }
    }
    return result;
  }

  const onChangeCountry = (item: { key: string, value: string }) => {
    const countryInfo: any = getCountryInfo(item.key);
    setDialCode(countryInfo?.dial_code);
    setCountry(item.value);
    formRef.current!.setFieldsValue({ dial_code: countryInfo?.dial_code });
  }

  const onChangeTermCheckbox = (value: any) => {
    setAcceptTerm(value.target.checked);
  }

  const onFormChange = () => {
    setHasFieldError(false)
    if (isRequiredFieldsEmpty()) {
      setHasFieldError(true);
    } else {
      const fieldsError = formRef.current!.getFieldsError();
      const errors = fieldsError.find(e => e.errors);
      if (isEmpty(errors)) {
        setHasFieldError(true);
      }
    }
  }


  const onSuccess = useCallback(
    (
      response: AxiosResponse<SignUpResponse>
    ) => {
      const { data } = response;
      localStorage.setItem('currentUser', JSON.stringify(data));
      signUpSuccessNotification();
    }, []
  );

  const onError = useCallback(
    (
      error: AxiosError
    ) => {
      const { response } = error;
      const { statusText } = response.data;
      signUpFailNotification(statusText);
    }, []
  );

  const { mutate: signUp, isLoading } = useSignUp({ onSuccess, onError });

  const onSubmit = async (formData: SignUpRequest) => {

    if (userType === 'IND') formData.phonenumber = (formData.dial_code + formData.phonenumber).replace('+', '');
    formData.agree = true;
    formData.usertype = userType;
    formData.firstname = formData.email.split('@')[0];
    formData.lastname = formData.email.split('@')[0];
    formData.rpassword = formData.password;
    signUp(formData);
  }

  const onChangePass = (isValidate: boolean, value: string) => {
    formRef.current!.setFieldsValue({ password: value });
    setHasFieldError(!isValidate)
  }

  const onChangeDialCode = (item: { key: string, value: string }) => {
    formRef.current!.setFieldsValue({ dial_code: item.value });

    const countryInfo: any = getCountryInfo(item.key);
    setCountry(countryInfo?.name);
    setDialCode(item.value);
  }

  return (
    <PageStyled>
      <Form ref={formRef} onFinish={onSubmit} onFieldsChange={onFormChange} autoComplete="off">
        <Typography level={'H2'}>{t('register.register_your_account')}</Typography>
        <Typography level={'H6'}>{t('register.resident_country')}</Typography>
        <div className='country-select-group'>
          <CountrySelect value={country} onChange={onChangeCountry} size='large' />
        </div>
        <div className='account-type-group'>
          <Button onClick={() => setUserType('IND')} className={clsx(userType === 'IND' && 'active')}>
            <Icon.UserIcon />
            <div>{t('register.individual')}</div>
          </Button>
          <Button onClick={() => setUserType('BUS')} className={clsx(userType === 'BUS' && 'active')}>
            <Icon.BankIcon />
            <div>{t('register.corporate')}</div>
          </Button>
        </div>
        <div className='input-group'>
          <div className='input-item'>
            <Form.Item name="email"
              rules={[
                {
                  required: true,
                  message: t('error.input_email'),
                },
                {
                  type: 'email',
                  message: t('error.email_not_valid'),
                }
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </div>

          {
            userType === 'IND'
            &&
            <div className='input-item dial'>
              <div className='dropdown-dial'>
                <Form.Item name="dial_code"
                  rules={[]}>
                  <CountrySelect defaultValue={dialCode} width={150} type='dial_code' onChange={onChangeDialCode} size='medium' />
                </Form.Item>
              </div>
              <Form.Item name="phonenumber"
                rules={[
                  {
                    required: true,
                    message: t('error.input_phone'),
                  },
                ]}>
                <Input type='number' placeholder="Phone Number" />
              </Form.Item>
            </div>
          }

          <div data-tip data-for='password-validate' className='input-item'>
            <PasswordField
              onChange={onChangePass}
            />
          </div>

          <div onClick={() => { setShowReferral(!showReferral) }} className='referral-group'>
            <Typography level='H6'>{t('register.referral_code')}</Typography>
            <div className='icon'>{showReferral ? <Icon.MenuUpIcon /> : <Icon.MenuDownIcon />}</div>
          </div>
          {
            showReferral
            &&
            <div className='input-item' style={{ marginTop: 10, marginBottom: 0 }}>
              <Form.Item
                name="code">
                <Input placeholder="Referral" />
              </Form.Item>
            </div>
          }

        </div>

        <div className='term-group'>
          <Checkbox
            checked={acceptTerm}
            onChange={onChangeTermCheckbox}
          >
            <Typography level='text'>{t('register.term1')} <a target='_blank' href='/term'>{t('register.term2')}</a></Typography>
          </Checkbox>
        </div>

        <Button disabled={isLoading || hasFieldError || !acceptTerm} htmlType='submit' className='sign-up-btn' type='primary'>Sign Up</Button>

      </Form>


      <ReactTooltip />

    </PageStyled>
  );
}

export default RegisterFormComponent;
