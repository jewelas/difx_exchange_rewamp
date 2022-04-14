import { CountrySelect, getCountryInfo, Icon, PasswordField, Typography } from '@difx/core-ui';
import t from '@difx/locale';
import { currentUserAtom, SignUpRequest, SignUpResponse, useGetCountry, useSignUp } from '@difx/shared';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { FormInstance } from 'antd/es/form';
import { AxiosError, AxiosResponse } from 'axios';
import clsx from 'clsx';
import { useUpdateAtom } from 'jotai/utils';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormStyled } from '../../pages/register/styled';

/* eslint-disable-next-line */
export interface RegisterFormComponentProps { }

export function RegisterFormComponent(props: RegisterFormComponentProps) {

  const { data: countryCode } = useGetCountry();

  const setCurrentUser = useUpdateAtom(currentUserAtom);

  const router = useRouter();

const [showReferral, setShowReferral] = useState(false);

  const formRef = useRef<FormInstance>(null);

  const [acceptTerm, setAcceptTerm] = useState(false);
  const [hasFieldError, setHasFieldError] = useState(true);
  const [dialCode, setDialCode] = useState(null);
  const [country, setCountry] = useState(null);
  const [userType, setUserType] = useState<'IND' | 'BUS'>('IND')

  useEffect(() => {
    if (countryCode) {
      const code = countryCode.split(';')[1];
     /* eslint-disable-next-line */
      const countryInfo: any = getCountryInfo(code);
      if (countryInfo) {
        setCountry(countryInfo.name);
        setDialCode(countryInfo.dial_code);
        formRef.current?.setFieldsValue({ dial_code: countryInfo?.dial_code });
      }
    }
  }, [countryCode])


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
    const values: FormData = formRef.current?.getFieldsValue();
    /* eslint-disable-next-line */
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        result = true;
        break;
      }
    }
    return result;
  }

  const onChangeCountry = (item: { key: string, value: string }) => {
    /* eslint-disable-next-line */
    const countryInfo: any = getCountryInfo(item.key);
    setDialCode(countryInfo?.dial_code);
    setCountry(item.value);
    formRef.current?.setFieldsValue({ dial_code: countryInfo?.dial_code });
  }

  /* eslint-disable-next-line */
  const onChangeTermCheckbox = (value: any) => {
    setAcceptTerm(value.target.checked);
    onFormChange();
  }

  const onFormChange = () => {
    if (isRequiredFieldsEmpty()) {
      setHasFieldError(true);
    } else {
      const fieldsError = formRef.current?.getFieldsError();
      const errors = fieldsError.find(e => !isEmpty(e.errors));
      if (errors && !isEmpty(errors.errors)) {
        setHasFieldError(true);
      }else{
        setHasFieldError(false)
      }
    }
  }


  const onSuccess = useCallback(
    (
      response: AxiosResponse<SignUpResponse>
    ) => {
      const { data } = response;
      localStorage.setItem('currentUser', JSON.stringify(data));
      setCurrentUser(data);
      
      signUpSuccessNotification();
      router.push('/home');
      /* eslint-disable-next-line */
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

    formData.phonenumber = (formData.dial_code + formData.phonenumber).replace('+', '');

    let name = formData.email.split('@')[0];
    name = name.replace(/[^a-zA-Z]/g, '');

    formData.type = 'individual';
    formData.agree = true;
    formData.usertype = userType;
    formData.firstname = name;
    formData.lastname = name;
    formData.rpassword = formData.password;
    signUp(formData);
  }

  const onChangePass = (isValidate: boolean, value: string) => {
    formRef.current?.setFieldsValue({ password: value });
    setHasFieldError(!isValidate || isRequiredFieldsEmpty())
  }

  const onChangeDialCode = (item: { key: string, value: string }) => {
    formRef.current?.setFieldsValue({ dial_code: item.value });

    /* eslint-disable-next-line */
    const countryInfo: any = getCountryInfo(item.key);
    setCountry(countryInfo?.name);
    setDialCode(item.value);
  }

  return (
    <FormStyled>
      <Form ref={formRef} onFinish={onSubmit} onFieldsChange={onFormChange} autoComplete="off">
        <Typography level={'H2'}>{t('register.register_your_account')}</Typography>
        <Typography level={'H6'}>{t('register.resident_country')}</Typography>
        <div className='country-select-group'>
          <CountrySelect value={country} onChange={onChangeCountry} size='large' />
        </div>
        <div className='account-type-group'>
          <Button onClick={() => setUserType('IND')} className={clsx('with-icon', userType === 'IND' && 'active')}>
            <Icon.UserIcon />
            <div>{t('register.individual')}</div>
          </Button>
          <Button onClick={() => setUserType('BUS')} className={clsx('with-icon', userType === 'BUS' && 'active')}>
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

          <div className='input-item dial'>
            <div className='dropdown-dial'>
              <Form.Item name="dial_code"
                rules={[]}>
                <CountrySelect value={dialCode} width={150} type='dial_code' onChange={onChangeDialCode} size='medium' />
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

          <div data-tip data-for='password-validate' className='input-item'>
            <PasswordField
              onChange={onChangePass}
            />
          </div>

          <div onClick={() => { setShowReferral(!showReferral) }} className='referral-group'>
            <Typography level='H6'>{t('register.referral_code')}</Typography>
            <div className='icon'>{showReferral ? <Icon.MenuUpIcon useDarkMode /> : <Icon.MenuDownIcon useDarkMode />}</div>
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


    </FormStyled>
  );
}

export default RegisterFormComponent;
