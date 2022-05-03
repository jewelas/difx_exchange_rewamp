import { Form, Input, Slider, Button } from "antd";
import clsx from "clsx";
import { useState } from 'react';
import DepositIcon from "./../Icon/DepositIcon";
import t from "./../../../locale";
import { Balance } from "./../../../shared/type/Balance";
import { getPriceFormatted } from "./../../../shared/utils/priceUtils";
import {
  ComponentStyled
} from "./styled";
import { PlaceOrderRequest } from "./../../../shared";

export type OrderSideType = 'bid' | 'ask';
export type OrderType = 'limit' | 'market' | 'stop-limit';
export interface OrderFormProps {
  side?: OrderSideType,
  type?: OrderType,
  baseCurrency?: string,
  quoteCurrency?: string,
  isLoggedIn?: boolean,
  balance?: Balance
}

export function OrderForm({ side = 'bid', type = 'limit', baseCurrency, quoteCurrency, isLoggedIn = false, balance }: OrderFormProps) {

  const marks = {
    0: '0',
    25: '25',
    50: '50',
    75: '75',
    100: '100',
  };

  const [isDisabled, setIsDisabled] = useState(true);

  const [form] = Form.useForm();
  const onSubmit = (formData: PlaceOrderRequest) => {
    console.log(formData, 'formData');

  };

  const onFormChange = () => {
    const fieldsValue = form.getFieldsValue();

    if (type === 'limit') {
      setIsDisabled(!fieldsValue[`${side}.price`] || !fieldsValue[`${side}.amount`] || !fieldsValue[`${side}.total`]);
    } else if (type === 'market'){
      setIsDisabled(!fieldsValue[`${side}.price`] || !fieldsValue[`${side}.total`]);
    } else if (type === 'stop-limit'){
      setIsDisabled(!fieldsValue[`${side}.trigger`] || !fieldsValue[`${side}.price`] || !fieldsValue[`${side}.amount`] || !fieldsValue[`${side}.total`]);
    }else{
      setIsDisabled(false);
    }


    // const fieldsError = form.getFieldsError();
    //   const errors = fieldsError.find((e) => !isEmpty(e.errors));
    //   if (errors && !isEmpty(errors.errors)) {
    //     setHasFieldError(true);
    //   } else {
    //     setHasFieldError(false);
    //   }
  };

  const getButtonSubmitLabel = () => {
    if (!isLoggedIn) return 'Log in or Sign up';
    if (side === 'ask') return 'Sell';
    if (side === 'bid') return 'Buy'
  }

  return (
    <ComponentStyled>
      <Form
        form={form}
        onFinish={onSubmit}
        onFieldsChange={onFormChange}
        autoComplete="off"
      >
        <div className="balance">
          <div className="value">
            {`Balance: ${getPriceFormatted(balance?.amount || 0, 2)} ${side === 'bid' ? quoteCurrency : baseCurrency}`}
          </div>
          <div className="deposit">
            <DepositIcon useDarkMode />
          </div>
        </div>
        <div className="content">

          {
            type === 'stop-limit'
            &&
            <Form.Item
              name={`${side}.trigger`}>
              <Input type="number" placeholder="Trigger Price" suffix={quoteCurrency} />
            </Form.Item>
          }

          <Form.Item
            name={`${side}.price`}>
            <Input disabled={type === 'market'} type="number" placeholder={type !== "market" ? "Price" : "Market Price"} suffix={quoteCurrency} />
          </Form.Item>
          {
            ['limit', 'stop-limit'].includes(type)
            &&
            <Form.Item
              name={`${side}.amount`}>
              <Input type="number" placeholder="Amount" suffix={baseCurrency} />
            </Form.Item>
          }

          <Form.Item
            name={`${side}.total`}>
            <Input type="number" placeholder="Total" suffix={quoteCurrency} />
          </Form.Item>
          <div className={clsx("slider-group", side)}>
            <Slider marks={marks} step={null} defaultValue={0} />
          </div>
          <Button disabled={isDisabled} htmlType="submit" className={clsx(side === 'bid' && "success")} type='primary' danger={side === "ask"}>{getButtonSubmitLabel()}</Button>
        </div>

      </Form>
    </ComponentStyled>
  );
}

export default OrderForm;
