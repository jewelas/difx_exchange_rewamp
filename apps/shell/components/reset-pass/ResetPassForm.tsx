import { CountrySelect, getCountryInfo, PasswordField, Typography } from '@difx/core-ui';
import t from '@difx/locale';
import { SignInRequest, SignInResponse, useGetCountry, useSignIn, currentUserAtom } from '@difx/shared';
import { Button, Form, Input, Switch } from 'antd';
import { useUpdateAtom } from 'jotai/utils';
import { FormInstance } from 'antd/es/form';
import { AxiosError, AxiosResponse } from 'axios';
import clsx from 'clsx';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { showNotification } from '../../utils/pageUtils';

/* eslint-disable-next-line */
export interface ResetPassFormProps { }

export function ResetPassForm(props: ResetPassFormProps) {

    const { data: countryCode } = useGetCountry();

    const setCurrentUser = useUpdateAtom(currentUserAtom);

    const [type, setType] = useState<'email' | 'phone'>('email');
    const [isCorporate, setIsCorporate] = useState(false);
    const [dialCode, setDialCode] = useState(null);
    const [hasFieldError, setHasFieldError] = useState(true);
    const formRef = useRef<FormInstance>(null);

    const router = useRouter();

    useEffect(() => {
        if (countryCode) {
            const code = countryCode.split(';')[1];
            /* eslint-disable-next-line */
            const countryInfo: any = getCountryInfo(code);
            if (countryInfo) {
                setDialCode(countryInfo.dial_code);
                formRef.current?.setFieldsValue({ dial_code: countryInfo?.dial_code });
            }
        }
    }, [countryCode])

    useEffect(() => {
        onFormChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    const onChangePass = (isValidate: boolean, value: string) => {
        formRef.current?.setFieldsValue({ password: value });
        setHasFieldError(!isValidate)
    }

    const onChangeDialCode = (item: { key: string, value: string }) => {
        formRef.current?.setFieldsValue({ dial_code: item.value });

        /* eslint-disable-next-line */
        setDialCode(item.value);
    }

    const onSuccess = useCallback(
        (
            response: AxiosResponse<SignInResponse>
        ) => {
            const { data } = response;

            const { statusCode, sessionId } = data;
            if (statusCode === 'ENTER_TWOFA_CODE') {
                localStorage.setItem('twoFaToken', sessionId);

                const fieldsValue = formRef.current.getFieldsValue();
                localStorage.setItem('loginFormData', JSON.stringify(fieldsValue));

                router.push('/two-factor');
            } else {
                localStorage.setItem('currentUser', JSON.stringify(data));
                setCurrentUser(data);

                localStorage.removeItem('twoFaToken');
                localStorage.removeItem('loginFormData');

                showNotification('success', 'Signin successfully', null);
                router.push('/home');
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            const errors = fieldsError.find(e => !isEmpty(e.errors));
            if (errors && !isEmpty(errors.errors)) {
                setHasFieldError(true);
            } else {
                setHasFieldError(false)
            }
        }
    }

    const onError = useCallback(
        (
            error: AxiosError
        ) => {
            const { response } = error;
            const { statusText } = response.data;

            showNotification('error', 'Login failed', statusText);
        }, []
    );

    const { mutate: signIn, isLoading } = useSignIn({ onSuccess, onError });

    const onSubmit = async (formData: SignInRequest) => {
        formData.usertype = isCorporate ? 'BUS' : 'IND';

        if (type === 'phone') {
            formData.email = '';
            formData.phonenumber = (formData.dial_code + formData.phonenumber).replace('+', '');
        }

        signIn(formData);
    }

    const onChangeLoginType = (type: 'email' | 'phone') => {
        setType(type);
    }

    return (
        <Form ref={formRef} onFinish={onSubmit} onFieldsChange={onFormChange} autoComplete="off">
            <div className='left-right'>
                <div className='left'>
                    <div onClick={() => { onChangeLoginType('email') }} className={clsx('tab', type === 'email' && 'active')}>
                        <Typography level='B1'>{t('signin.email')}</Typography>
                    </div>
                    <div className='splitter' />
                    <div onClick={() => { onChangeLoginType('phone') }} className={clsx('tab', type === 'phone' && 'active')}>
                        <Typography level='B1'>{t('signin.phone_number')}</Typography>
                    </div>
                </div>
                <div className='right'>
                    <div className='pointer' onClick={() => { setIsCorporate(!isCorporate) }}>
                        <Typography level='B2'>{t('signin.corporate')}</Typography>
                    </div>
                    <Switch size='small' checked={isCorporate} onChange={(checked) => { setIsCorporate(checked) }} />
                </div>
            </div>
            <div className='content'>
                {
                    type === 'email'
                        ?
                        <Form.Item className='email' name='email'
                            rules={
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
                            }>
                            <Input placeholder={t('signin.email')} />
                        </Form.Item>
                        :
                        <div className='dial-group'>
                            <div className='dropdown-dial'>
                                <Form.Item name="dial_code"
                                    rules={[]}>
                                    <CountrySelect value={dialCode} width={150} type='dial_code' onChange={onChangeDialCode} size='medium' />
                                </Form.Item>
                            </div>
                            <Form.Item className='email' name='phonenumber'
                                rules={
                                    [{
                                        required: true,
                                        message: t('error.input_phone'),
                                    }]
                                }>
                                <Input type='number' placeholder={t('signin.phone_number')} />
                            </Form.Item>
                        </div>
                }


                <Form.Item name="password">
                    <PasswordField onChange={onChangePass} />
                </Form.Item>
                <Button disabled={isLoading || hasFieldError} htmlType='submit' className='sign-in-btn' type='primary'>{t('signin.login')}</Button>
            </div>
        </Form>
    );
}

export default ResetPassForm;
