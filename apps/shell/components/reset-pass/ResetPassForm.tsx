import { getCountryInfo, PasswordField } from '@difx/core-ui';
import t from '@difx/locale';
import { currentUserAtom, ResetPassRequest, ResetPassResponse, useGetCountry, useResetPass } from '@difx/shared';
import { Button, Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form';
import { AxiosError, AxiosResponse } from 'axios';
import { useUpdateAtom } from 'jotai/utils';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { showNotification } from '../../utils/pageUtils';

/* eslint-disable-next-line */
export interface ResetPassFormProps {
    email: string;
    code: string
}

export function ResetPassForm({email, code}: ResetPassFormProps) {

    const [hasFieldError, setHasFieldError] = useState(true);
    const formRef = useRef<FormInstance>(null);

    const router = useRouter();

    const onChangePass = (isValidate: boolean, value: string) => {
        formRef.current?.setFieldsValue({ password: value });
        setHasFieldError(!isValidate || isRequiredFieldsEmpty())
    }

    const onSuccess = useCallback(
        (
            response: AxiosResponse<ResetPassResponse>
        ) => {
            const { data } = response;

            const { statusText  } = data;
            showNotification('success', 'Success', statusText);
            router.push('/login');
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

            showNotification('error', 'Error', statusText);
        }, []
    );

    const { mutate: resetPass, isLoading } = useResetPass({ onSuccess, onError });

    const onSubmit = async (formData: ResetPassRequest) => {

        formData.email = email;
        formData.activationcode = code;
        resetPass(formData);
    }

    return (
        <Form ref={formRef} onFinish={onSubmit} onFieldsChange={onFormChange} autoComplete="off">
            <div className='content'>
                <Form.Item name="password">
                    <PasswordField onChange={onChangePass} placeholder={t('forgot.enter_new_pass')} />
                </Form.Item>
                <Form.Item className='email' name='rpassword'
                    rules={
                        [
                            {
                                required: true,
                                message: t('error.re_input_pass'),
                            }
                        ]
                    }>
                    <Input.Password placeholder={t('forgot.confirm_pass')} />
                </Form.Item>
                <Button style={{ marginTop: 10 }} disabled={isLoading || hasFieldError} htmlType='submit' className='sign-in-btn' type='primary'>{t('signin.login')}</Button>
            </div>
        </Form>
    );
}

export default ResetPassForm;
