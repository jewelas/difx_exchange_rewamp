import { PasswordField, Typography } from '@difx/core-ui';
import t from '@difx/locale';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';
import { SignInRequest, SignInResponse, useSignIn } from '@difx/shared';
import { Button, Form, Input, Switch, notification } from 'antd';
import { FormInstance } from 'antd/es/form';
import { AxiosError, AxiosResponse } from 'axios';
import clsx from 'clsx';
import { useRef, useState, useCallback } from 'react';

/* eslint-disable-next-line */
export interface LoginFormProps { }

export function LoginForm(props: LoginFormProps) {

    const [type, setType] = useState<'email' | 'phone'>('email');
    const [isCorporate, setIsCorporate] = useState(false);
    const [hasFieldError, setHasFieldError] = useState(true);
    const formRef = useRef<FormInstance>(null);

    const router = useRouter();

    const onChangePass = (isValidate: boolean, value: string) => {
        formRef.current?.setFieldsValue({ password: value });
        setHasFieldError(!isValidate)
    }

    const signInSuccessNotification = () => {
        notification['success']({
            message: 'Sign In successfully'
        });
    };

    const signInFailNotification = (description: string) => {
        notification['error']({
            message: 'Sign In failed',
            description
        });
    };

    const onSuccess = useCallback(
        (
            response: AxiosResponse<SignInResponse>
        ) => {
            const { data } = response;

            const { statusCode, sessionId} = data;
            if(statusCode === 'ENTER_TWOFA_CODE'){
                localStorage.setItem('twoFaToken', sessionId)
            }else{
                // localStorage.setItem('currentUser', JSON.stringify(data));
                // signInSuccessNotification();
                // router.push('/home');
            }
        }, []
    );

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

    const onFormChange = () => {
        if (isRequiredFieldsEmpty()) {
          setHasFieldError(true);
        } else {
          const fieldsError = formRef.current?.getFieldsError();
          const errors = fieldsError.find(e => e.errors);
          if (errors && !isEmpty(errors.errors)) {
            setHasFieldError(true);
          }else{
            setHasFieldError(false)
          }
        }
      }

    const onError = useCallback(
        (
            error: AxiosError
        ) => {
            const { response } = error;
            const { statusCode, statusText } = response.data;

            console.log('response.data', response.data)
            if(statusCode === 'ENTER_TWOFA_CODE'){
                localStorage.setItem('twoFaToken', response.data.sessionId)
            }else{
                // Todo
            }

            signInFailNotification(statusText);
        }, []
    );

    const { mutate: signIn, isLoading } = useSignIn({ onSuccess, onError });

    const onSubmit = async (formData: SignInRequest) => {
        signIn(formData);
    }

    return (
        <Form ref={formRef} onFinish={onSubmit} onFieldsChange={onFormChange} autoComplete="off">
            <div className='left-right'>
                <div className='left'>
                    <div onClick={() => { setType('email') }} className={clsx('tab', type === 'email' && 'active')}>
                        <Typography level='B1'>Email</Typography>
                    </div>
                    <div className='splitter' />
                    <div onClick={() => { setType('phone') }} className={clsx('tab', type === 'phone' && 'active')}>
                        <Typography level='B1'>Phone Number</Typography>
                    </div>
                </div>
                <div className='right'>
                    <div className='pointer' onClick={() => { setIsCorporate(!isCorporate) }}>
                        <Typography level='B2'>Corporate</Typography>
                    </div>
                    <Switch size='small' checked={isCorporate} onChange={(checked) => { setIsCorporate(checked) }} />
                </div>
            </div>
            <div className='content'>
                <Form.Item className='email' name={type === 'email' ? 'email' : 'phonenumber'}
                    rules={

                        type === 'email'
                            ?
                            [
                                {
                                    required: true,
                                    message: t('error.input_email'),
                                },
                                {
                                    type: 'email',
                                    message: t('error.email_not_valid'),
                                }
                            ]
                            :
                            [{
                                required: true,
                                message: t('error.input_phone'),
                            }]
                    }>
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="password">
                    <PasswordField onChange={onChangePass} />
                </Form.Item>
                <Button htmlType='submit' className='sign-in-btn' type='primary'>Login</Button>
            </div>
        </Form>
    );
}

export default LoginForm;
