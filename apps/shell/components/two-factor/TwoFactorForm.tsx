import t from '@difx/locale';
import { SignInRequest, SignInResponse, useSignIn } from '@difx/shared';
import { Button, Form, Input, notification } from 'antd';
import { FormInstance } from 'antd/es/form';
import { AxiosError, AxiosResponse } from 'axios';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';
import { useCallback, useRef, useState } from 'react';

export function TwoFactorForm() {

    const [type, setType] = useState<'email' | 'phone'>('email');
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
                <Button htmlType='submit' className='sign-in-btn' type='primary'>Verify</Button>
            </div>
        </Form>
    );
}

export default TwoFactorForm;
