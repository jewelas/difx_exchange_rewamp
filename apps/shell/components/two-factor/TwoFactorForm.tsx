import t from '@difx/locale';
import { TwoFactorRequest, TwoFactorResponse, useTwoFactor } from '@difx/shared';
import { Button, Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form';
import { AxiosError, AxiosResponse } from 'axios';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { showNotification } from './../../pages';

export function TwoFactorForm() {

    const [hasFieldError, setHasFieldError] = useState(true);
    const formRef = useRef<FormInstance>(null);

    const router = useRouter();

    const onSuccess = (response: AxiosResponse<TwoFactorResponse>) => {
        const { data } = response;
        console.log(data, 'success')

        localStorage.removeItem('twoFaToken');

        localStorage.setItem('currentUser', JSON.stringify(data));

        showNotification('success', 'Two Factor Verification', 'Verification successfully!');
        // TODO: update refresh token

        router.push('/home')
    }

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

    const onError = (error: AxiosError) => {
        const { response } = error;
        const { statusText } = response.data;
        showNotification('error', 'Two Factor Verification', statusText);
    }

    const { mutate: twoFactor, isLoading } = useTwoFactor({ onSuccess, onError });

    const onSubmit = async (formData: TwoFactorRequest) => {
        const twoFaToken = localStorage.getItem('twoFaToken');
        if (twoFaToken) {
            formData.sessionId = twoFaToken;
        }
        formData.rememberMe = true;
        twoFactor(formData);
    }

    return (
        <Form ref={formRef} onFinish={onSubmit} onFieldsChange={onFormChange} autoComplete="off">
            <div className='content'>
                <Form.Item className='email' name='code'
                    rules={
                        [{
                            required: true,
                            message: t('error.input_2factor_code'),
                        }]
                    }>
                    <Input placeholder="Enter two factor authentication code!" />
                </Form.Item>
                <Button htmlType='submit' disabled={isLoading || hasFieldError} className='sign-in-btn' type='primary'>Verify</Button>
            </div>
        </Form>
    );
}

export default TwoFactorForm;
