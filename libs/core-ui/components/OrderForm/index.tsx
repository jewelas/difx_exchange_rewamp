/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Slider } from "antd";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { PairType, PlaceOrderRequest } from "./../../../shared";
import { Balance } from "./../../../shared/type/Balance";
import { getPriceFormatted } from "./../../../shared/utils/priceUtils";
import DepositIcon from "./../Icon/DepositIcon";
import {
  ComponentStyled
} from "./styled";


export type OrderSideType = 'bid' | 'ask';
export type OrderType = 'limit' | 'market' | 'stop-limit';
export interface OrderFormProps {
  side?: OrderSideType,
  type?: OrderType,
  baseCurrency?: string,
  quoteCurrency?: string,
  isLoggedIn?: boolean,
  balance?: Balance,
  priceSelected?: number,
  pairInfo?: PairType,
  onPlaceOrder: (formData: PlaceOrderRequest, type: OrderType, side: OrderSideType) => void,
  isLoading?: boolean
}

export function OrderForm({ isLoading = true, onPlaceOrder, priceSelected, side = 'bid', type = 'limit', baseCurrency, quoteCurrency, isLoggedIn = false, balance, pairInfo }: OrderFormProps) {

  const marks = {
    0: '0%',
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%',
  };

  const router = useRouter();

  const [isDisabled, setIsDisabled] = useState(isLoggedIn);
  const [sliderValue, setSliderValue] = useState(0);

  const [form] = Form.useForm();

  useEffect(() => {
    if (priceSelected) form.setFieldsValue({ [`${side}.price`]: priceSelected })
  }, [priceSelected]);

  useEffect(() => {
    if (pairInfo) form.setFieldsValue({ [`${side}.price`]: pairInfo.last })
  }, [pairInfo]);

  useEffect(() => {
    form.setFieldsValue({ [`${side}.stop`]: 0 });
    form.setFieldsValue({ [`${side}.amount`]: 0 });
    form.setFieldsValue({ [`${side}.total`]: 0 });
  }, []);

  const onSubmit = (formData: PlaceOrderRequest) => {
    onPlaceOrder(formData, type, side);
  };

  const isValidPriceNumber = (value: number): boolean => {
    return value > 0;
  }

  const onFormChange = (changeField: any) => {

    // Update input
    if (changeField && changeField[0]) {
      const fieldName = changeField[0].name[0];
      const fieldValue = changeField[0].value;
      if (fieldName === `${side}.total`) {
        const currentPrice = form.getFieldValue(`${side}.price`);
        const amount: number = currentPrice ? fieldValue / currentPrice : 0;
        form.setFieldsValue({
          [`${side}.amount`]: Math.round(amount * 100) / 100,
        });
      } else if (fieldName === `${side}.amount`) {
        const currentPrice = form.getFieldValue(`${side}.price`);
        const newTotal: number = currentPrice * fieldValue;
        form.setFieldsValue({
          [`${side}.total`]: Math.round(newTotal * 100) / 100,
        });
      } else if (fieldName === `${side}.price`) {
        const amount = form.getFieldValue(`${side}.amount`);
        const currentPrice = form.getFieldValue(`${side}.price`);
        const newTotal: number = amount * currentPrice;
        form.setFieldsValue({
          [`${side}.total`]: Math.round(newTotal * 100) / 100,
        });
      }
      setSliderValue(0);
    }

    validateForm();
  };

  const validateForm = ()=>{
    const fieldsValue = form.getFieldsValue();

    if (type === 'limit') {
      setIsDisabled(
        !isValidPriceNumber(fieldsValue[`${side}.price`]) ||
        !isValidPriceNumber(fieldsValue[`${side}.amount`]) ||
        !isValidPriceNumber(fieldsValue[`${side}.total`])
      );
    } else if (type === 'market') {
      setIsDisabled(
        !isValidPriceNumber(fieldsValue[`${side}.total`])
      );
    } else if (type === 'stop-limit') {
      setIsDisabled(
        !isValidPriceNumber(fieldsValue[`${side}.stop`]) ||
        !isValidPriceNumber(fieldsValue[`${side}.price`]) || !isValidPriceNumber(fieldsValue[`${side}.amount`]) ||
        !isValidPriceNumber(fieldsValue[`${side}.total`]));
    } else {
      setIsDisabled(false);
    }
  }

  const getButtonSubmitLabel = () => {
    if (!isLoggedIn) return 'Log in or Sign up';
    if (side === 'ask') return 'Sell';
    if (side === 'bid') return 'Buy'
  }

  const preventScroll = (e:any)=> {e.target.blur()};

  const onSliderChange = (value: number) => {
    if(!isLoggedIn) return;
    if (balance) {
      const currentPrice = pairInfo?.last || priceSelected;
      const total: number = (balance.amount * value) / 100;
      const amount: number = currentPrice ? total / currentPrice : 0;
      form.setFieldsValue({
        [`${side}.total`]: Math.round(total * 100) / 100,
        [`${side}.amount`]: Math.round(amount * 100) / 100,
      });
    }
    setSliderValue(value);
    validateForm();
  }

  const onReplaceComma = (e:any) =>{
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
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
              name={`${side}.stop`}>
              <Input onInput={onReplaceComma} type="text" onWheel={preventScroll} placeholder="Trigger Price" suffix={quoteCurrency} />
            </Form.Item>
          }

          {
            type === 'market'
              ?
              <Form.Item
                name={`${side}.marketPrice`}>
                <Input disabled={type === 'market'} onInput={onReplaceComma} type="text" onWheel={preventScroll} placeholder={"Market Price"} suffix={quoteCurrency} />
              </Form.Item>
              :
              <Form.Item
                name={`${side}.price`}>
                <Input onInput={onReplaceComma} type="text" onWheel={preventScroll} placeholder={"Price"} suffix={quoteCurrency} />
              </Form.Item>
          }

          {
            ['limit', 'stop-limit'].includes(type)
            &&
            <Form.Item
              name={`${side}.amount`}>
              <Input onInput={onReplaceComma} type="text" onWheel={preventScroll} placeholder="Amount" suffix={baseCurrency} />
            </Form.Item>
          }

          <Form.Item
            name={`${side}.total`}>
            <Input onInput={onReplaceComma} type="text" onWheel={preventScroll} placeholder="Total" suffix={quoteCurrency} />
          </Form.Item>
          <div className={clsx("slider-group", side)}>
            <Slider onChange={onSliderChange} marks={marks} step={null} value={sliderValue} />
          </div>
          <Button 
          onClick={()=>{!isLoggedIn && router.push('/login')}}
          disabled={isDisabled || isLoading} 
          htmlType={isLoggedIn ? "submit": "button"} 
          className={clsx(side === 'bid' && "success", side === 'ask' && "danger")} type='primary'>{getButtonSubmitLabel()}</Button>
        </div>

      </Form>
    </ComponentStyled>
  );
}

export default OrderForm;
