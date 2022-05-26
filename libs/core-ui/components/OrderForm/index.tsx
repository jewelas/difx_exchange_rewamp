/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Slider } from "antd";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import { Typography } from "./../Typography";
import { useAtomValue } from "jotai/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { PairType, PlaceOrderRequest, userBalanceAtom } from "./../../../shared";
import { getPriceFormatted } from "./../../../shared/utils/priceUtils";
import DepositIcon from "./../Icon/DepositIcon";
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
}

export function OrderForm({balance, layout = 'default', canDeposit = true, isLoading = true, onPlaceOrder, priceSelected, side = 'bid', type = 'limit', baseCurrency, quoteCurrency, isLoggedIn = false, pairInfo }: OrderFormProps) {

  const marks = {
    0: ' ',
    25: ' ',
    50: ' ',
    75: ' ',
    100: ' ',
  };

  const router = useRouter();

  const [isDisabled, setIsDisabled] = useState(isLoggedIn);
  const [sliderValue, setSliderValue] = useState(0);

  const [numberRound, setNumberRound] = useState<number>(100);

  const [form] = Form.useForm();

  useEffect(() => {
    if (priceSelected) form.setFieldsValue({ [`${side}.price`]: priceSelected })
  }, [priceSelected]);

  useEffect(() => {
    if (pairInfo && !priceSelected) form.setFieldsValue({ [`${side}.price`]: pairInfo.last })
    const group_precision = pairInfo ? pairInfo.group_precision : 2;
    setNumberRound(Math.pow(10, group_precision));
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

    setSliderValue(0);

    // Update input
    if (changeField && changeField[0]) {
      const fieldName = changeField[0].name[0];
      const fieldValue = changeField[0].value;
      if (fieldName === `${side}.total`) {
        const currentPrice = form.getFieldValue(`${side}.price`);
        const amount: number = currentPrice ? fieldValue / currentPrice : 0;
        form.setFieldsValue({
          [`${side}.amount`]: Math.floor(amount * numberRound) / numberRound,
        });
      } else if (fieldName === `${side}.amount`) {
        const currentPrice = form.getFieldValue(`${side}.price`);
        const newTotal: number = currentPrice * fieldValue;
        form.setFieldsValue({
          [`${side}.total`]: Math.floor(newTotal * numberRound) / numberRound,
        });
      } else if (fieldName === `${side}.price`) {
        const amount = form.getFieldValue(`${side}.amount`);
        const currentPrice = form.getFieldValue(`${side}.price`);
        const newTotal: number = amount * currentPrice;
        form.setFieldsValue({
          [`${side}.total`]: Math.floor(newTotal * numberRound) / numberRound,
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
      const percentOfBalanceRound: number = Math.floor(percentOfBalance * numberRound) / numberRound;

      if (side === 'bid') {
        const amount: number = currentPrice ? percentOfBalanceRound / currentPrice : 0;
        const amountRound: number = Math.floor(amount * numberRound) / numberRound;
        form.setFieldsValue({
          [`${side}.total`]: percentOfBalanceRound,
          [`${side}.amount`]: amountRound,
        });
      } else if (side === 'ask') {
        const total: number = currentPrice ? percentOfBalanceRound * currentPrice : 0;
        const totalRound: number = Math.floor(total * numberRound) / numberRound;
        form.setFieldsValue({
          [`${side}.total`]: totalRound,
          [`${side}.amount`]: percentOfBalanceRound,
        });
      }


    }
    setSliderValue(value);
    validateForm();
  }

  const onReplaceComma = (e: any) => {
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
              <Input onInput={onReplaceComma} type="text" onWheel={preventScroll} placeholder="Trigger Price"
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
                <Input onInput={onReplaceComma} type="text" onWheel={preventScroll} placeholder={"Price"}
                  prefix={<Typography className="prefix">Price</Typography>}
                  suffix={quoteCurrency} />
              </Form.Item>
          }

          <Form.Item
            name={`${side}.amount`}>
            <Input
              onInput={onReplaceComma}
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
            <Input onInput={onReplaceComma} type="text" onWheel={preventScroll} placeholder="Total"
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
