/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, FormInstance, Input, Slider } from "antd";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { PairType, PlaceOrderRequest } from "./../../../shared";
import { getPriceFormatted } from "./../../../shared/utils/priceUtils";
import DepositIcon from "./../Icon/DepositIcon";
import { Typography } from "./../Typography";
import {
  ComponentStyled
} from "./styled";

export type OrderSideType = 'bid' | 'ask';
export type OrderType = 'limit' | 'market' | 'stop-limit';
export interface OrderFormProps {
  layout?: string;
  side?: OrderSideType,
  type?: OrderType,
  baseCurrency?: string,
  quoteCurrency?: string,
  isLoggedIn?: boolean,
  priceSelected?: number,
  pairInfo?: PairType,
  onPlaceOrder: (formData: PlaceOrderRequest, type: OrderType, side: OrderSideType) => void,
  isLoading?: boolean,
  canDeposit?: boolean,
  balance?: number;
  form: FormInstance
}

export function OrderForm({ form, balance, layout = 'default', canDeposit = true, isLoading = true, onPlaceOrder, priceSelected, side = 'bid', type = 'limit', baseCurrency, quoteCurrency, isLoggedIn = false, pairInfo }: OrderFormProps) {

  const marks = {
    0: ' ',
    25: ' ',
    50: ' ',
    75: ' ',
    100: ' ',
  };

  const router = useRouter();

  console.log(pairInfo,'xxxx')

  const [isDisabled, setIsDisabled] = useState(isLoggedIn);
  const [sliderValue, setSliderValue] = useState(0);

  // const [numberRound, setNumberRound] = useState<number>(100);
  const [groupPrecision, setGroupPrecision] = useState<number>(0);
  const [bAmount, setBAmmount] = useState<number>(0);

  useEffect(() => {
    if (priceSelected) form.setFieldsValue({ [`${side}.price`]: priceSelected })
  }, [priceSelected]);

  useEffect(() => {
    if (pairInfo && !priceSelected) form.setFieldsValue({ [`${side}.price`]: pairInfo.last })
    // const group_precision = pairInfo ? pairInfo.group_precision : 2;
    // setNumberRound(Math.pow(10, group_precision));

    if(pairInfo){
      setGroupPrecision(pairInfo.group_precision);
      setBAmmount(pairInfo.bamount);
    }
  }, [pairInfo]);

  const onSubmit = (formData: PlaceOrderRequest) => {
    onPlaceOrder(formData, type, side);
  };

  const isValidPriceNumber = (value: number): boolean => {
    return value > 0;
  }

  const onFormChange = (changeField: any) => {

    setSliderValue(0);

    // Update input
    if (changeField && changeField[0]) {
      const fieldName = changeField[0].name[0];
      const fieldValue = changeField[0].value;
      if (fieldName === `${side}.total`) {
        const currentPrice = form.getFieldValue(`${side}.price`);
        const amount: number = currentPrice ? fieldValue / currentPrice : 0;
        form.setFieldsValue({
          [`${side}.amount`]: Math.floor(amount * Math.pow(10,bAmount)) / Math.pow(10,bAmount),
        });
      } else if (fieldName === `${side}.amount`) {
        const currentPrice = form.getFieldValue(`${side}.price`);
        const newTotal: number = currentPrice * fieldValue;
        form.setFieldsValue({
          [`${side}.total`]: Math.floor(newTotal * Math.pow(10,groupPrecision)) /  Math.pow(10,groupPrecision),
        });
      } else if (fieldName === `${side}.price`) {
        const amount = form.getFieldValue(`${side}.amount`);
        const currentPrice = form.getFieldValue(`${side}.price`);
        const newTotal: number = amount * currentPrice;
        form.setFieldsValue({
          [`${side}.total`]: Math.floor(newTotal *  Math.pow(10,groupPrecision)) /  Math.pow(10,groupPrecision),
        });
      }
      if (balance) {
        const total = form.getFieldValue(`${side}.total`);
        setSliderValue((100 * total) / balance);
      }
    }

    validateForm();
  };

  const validateForm = () => {
    const fieldsValue = form.getFieldsValue();

    if (side === 'bid') {
      if (balance && fieldsValue[`${side}.total`] > balance) {
        setIsDisabled(true);
        return;
      }
    } else if (side === 'ask') {
      if (balance && fieldsValue[`${side}.amount`] > balance) {
        setIsDisabled(true);
        return;
      }
    }

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

  // eslint-disable-next-line
  // @ts-ignore
  const getButtonSubmitLabel = () => {
    if (!isLoggedIn) return 'Log in or Sign up';
    if (side === 'ask') return 'Sell';
    if (side === 'bid') return 'Buy'
  }

  const preventScroll = (e: any) => { e.target.blur() };

  const onSliderChange = (value: number) => {
    if (!isLoggedIn) return;
    if (balance) {
      const currentPrice = pairInfo?.last || priceSelected;

      const percentOfBalance: number = (balance * value) / 100;
      const percentOfBalanceRound: number = Math.floor(percentOfBalance * Math.pow(10, groupPrecision)) / Math.pow(10, groupPrecision);

      if (side === 'bid') {
        const amount: number = currentPrice ? percentOfBalanceRound / currentPrice : 0;
        const amountRound: number = Math.floor(amount * Math.pow(10, bAmount)) / Math.pow(10, bAmount);
        form.setFieldsValue({
          [`${side}.total`]: percentOfBalanceRound,
          [`${side}.amount`]: amountRound,
        });
      } else if (side === 'ask') {
        const total: number = currentPrice ? percentOfBalanceRound * currentPrice : 0;
        const totalRound: number = Math.floor(total * Math.pow(10, groupPrecision)) / Math.pow(10, groupPrecision);
        form.setFieldsValue({
          [`${side}.total`]: totalRound,
          [`${side}.amount`]: percentOfBalanceRound,
        });
      }


    }
    setSliderValue(value);
    validateForm();
  }

  const onReplaceComma = (e: any, totalDigit?: number) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    let afterDot = 0;
    if (e.target.value.includes(".")) {
      const split:string[] = e.target.value.split(".");
      afterDot = split[1].length;
      if (totalDigit && afterDot >= totalDigit){
        e.target.value = `${split[0] || '0'}.${split[1].slice(0,totalDigit)}`
      }else if(!split[0]){
        e.target.value = `0.${split[1].slice(0,totalDigit)}`
      }
    }
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
            {`Balance: ${getPriceFormatted(balance || 0, 2)} ${side === 'bid' ? quoteCurrency : baseCurrency}`}
          </div>
          {
            canDeposit &&
            <Button ghost className={clsx("deposit", `_${side}`)}>
              <DepositIcon useDarkMode />
            </Button>
          }
        </div>
        <div className="content">

          {
            type === 'stop-limit'
            &&
            <Form.Item
              name={`${side}.stop`}>
              <Input onInput={(e: any) => { onReplaceComma(e,groupPrecision) }} type="text" onWheel={preventScroll} placeholder="Trigger Price"
                prefix={<Typography className="prefix">Trigger Price</Typography>}
                suffix={quoteCurrency} />
            </Form.Item>
          }

          {
            type === 'market'
              ?
              <Form.Item
                name={`${side}.marketPrice`}>
                <Input disabled type="text"
                  prefix={<Typography className="prefix">Market Price</Typography>}
                  suffix={quoteCurrency} />
              </Form.Item>
              :
              <Form.Item
                name={`${side}.price`}>
                <Input onInput={(e: any) => { onReplaceComma(e, groupPrecision) }} type="text" onWheel={preventScroll} placeholder={"Price"}
                  prefix={<Typography className="prefix">Price</Typography>}
                  suffix={quoteCurrency} />
              </Form.Item>
          }

          <Form.Item
            name={`${side}.amount`}>
            <Input
              onInput={(e: any) => { onReplaceComma(e, bAmount) }}
              type="text"
              onWheel={preventScroll}
              placeholder="Amount"
              prefix={<Typography className="prefix">Amount</Typography>}
              suffix={baseCurrency} />
          </Form.Item>

          <div className={clsx("slider-group", side, layout)}>
            <Slider onChange={onSliderChange} marks={marks} step={5} value={sliderValue} />
          </div>

          <Form.Item
            name={`${side}.total`}>
            <Input onInput={(e: any) => { onReplaceComma(e, groupPrecision) }} type="text" onWheel={preventScroll} placeholder="Total"
              prefix={<Typography className="prefix">Total</Typography>}
              suffix={quoteCurrency} />
          </Form.Item>
          <Button
            onClick={() => { !isLoggedIn && router.push('/login') }}
            disabled={isDisabled || isLoading}
            htmlType={isLoggedIn ? "submit" : "button"}
            className={clsx(side === 'bid' && "success", side === 'ask' && "danger")} type='primary'>{getButtonSubmitLabel()}</Button>
        </div>
      </Form>
    </ComponentStyled>
  );
}

export default OrderForm;
