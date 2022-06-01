/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, FormInstance, Input, Popover, Slider } from "antd";
import clsx from "clsx";
import LoginSignUpButton from "./../LoginSignUpButton";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import t from "./../../../locale";
import { PairType, PlaceOrderRequest, previousPathAtom, useCurrency } from "./../../../shared";
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

export function OrderForm({ form, balance = 0, layout = 'default', canDeposit = true, isLoading = true, onPlaceOrder, priceSelected, side = 'bid', type = 'limit', baseCurrency, quoteCurrency, isLoggedIn = false, pairInfo }: OrderFormProps) {

  const marks = {
    0: ' ',
    25: ' ',
    50: ' ',
    75: ' ',
    100: ' ',
  };

  const [, setPrevousPath] = useAtom(previousPathAtom)

  const router = useRouter();
  const { asPath } = router;

  const { currentCurrency: fiatCurrency } = useCurrency();

  const [isDisabled, setIsDisabled] = useState(isLoggedIn);
  const [sliderValue, setSliderValue] = useState(0);

  // const [numberRound, setNumberRound] = useState<number>(100);
  const [groupPrecision, setGroupPrecision] = useState<number>(0);
  const [bAmount, setBAmmount] = useState<number>(0);
  const [showAmountPopover, setShowAmountPopover] = useState(false);

  useEffect(() => {
    if (priceSelected) {
      form.setFieldsValue({ [`${side}.price`]: priceSelected });
      form.setFieldsValue({ [`${side}.total`]: priceSelected });
      const amount = form.getFieldValue(`${side}.amount`);
      const total = amount * priceSelected;
      form.setFieldsValue({
        [`${side}.total`]: Math.floor(total * Math.pow(10, groupPrecision)) / Math.pow(10, groupPrecision),
      });
    }
  }, [priceSelected]);

  useEffect(() => {
    if (pairInfo && !priceSelected) form.setFieldsValue({ [`${side}.price`]: pairInfo.last })
    // const group_precision = pairInfo ? pairInfo.group_precision : 2;
    // setNumberRound(Math.pow(10, group_precision));

    if (pairInfo) {
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

  const onFocusAmountField = () => {
    let visible = false;
    if (balance) {
      const amount = form.getFieldValue(`${side}.amount`);
      if (amount && amount > balance) visible = true;
    }
    setShowAmountPopover(visible);
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
          [`${side}.amount`]: Math.floor(amount * Math.pow(10, bAmount)) / Math.pow(10, bAmount),
        });
      } else if (fieldName === `${side}.amount`) {
        const currentPrice = form.getFieldValue(`${side}.price`);
        const newTotal: number = currentPrice * fieldValue;
        form.setFieldsValue({
          [`${side}.total`]: Math.floor(newTotal * Math.pow(10, groupPrecision)) / Math.pow(10, groupPrecision),
        });

        if (side === "bid") {
          const currentPrice = form.getFieldValue(`${side}.price`);
          const maxAmount = balance / currentPrice;
          if (maxAmount < Number(fieldValue)) {
            setShowAmountPopover(true);
          } else {
            setShowAmountPopover(false);
          }
        } else if (side === "ask") {
          if (balance && fieldValue > balance) {
            setShowAmountPopover(true);
          } else {
            setShowAmountPopover(false);
          }
        }


      } else if (fieldName === `${side}.price`) {
        const amount = form.getFieldValue(`${side}.amount`);
        const currentPrice = form.getFieldValue(`${side}.price`);
        const newTotal: number = amount * currentPrice;
        form.setFieldsValue({
          [`${side}.total`]: Math.floor(newTotal * Math.pow(10, groupPrecision)) / Math.pow(10, groupPrecision),
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
    // Remove comma operator
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');

    // Handle to prevent input wrong number format
    let afterDot = 0;
    if (e.target.value.includes(".")) {
      const split: string[] = e.target.value.split(".");
      afterDot = split[1].length;
      if (totalDigit && afterDot >= totalDigit) {
        e.target.value = `${Number(split[0]) || '0'}.${split[1].slice(0, totalDigit)}`
      } else if (!split[0]) {
        e.target.value = `0.${split[1].slice(0, totalDigit)}`
      }
    } else {
      // Handle to remove leading zeros
      e.target.value = Number(e.target.value)
    }
  }

  const getAmountErrorMsg = () => {
    if (side === "bid") {
      const currentPrice = form.getFieldValue(`${side}.price`);
      return t("common.maxAmount") + getPriceFormatted(balance / currentPrice, groupPrecision);
    } else if (side === "ask") {
      return t("common.maxAmount") + getPriceFormatted(balance, bAmount);
    }
    return null;
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
            {`Balance: ${getPriceFormatted(balance || 0, bAmount)} ${side === 'bid' ? quoteCurrency : baseCurrency}`}
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
              <Input onInput={(e: any) => { onReplaceComma(e, groupPrecision) }} type="text" onWheel={preventScroll} placeholder="Trigger Price"
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

          <Popover visible={showAmountPopover} placement="top" content={getAmountErrorMsg()} trigger="focus">
            <Form.Item
              name={`${side}.amount`}>
              <Input
                className={clsx(showAmountPopover && 'error')}
                onFocus={() => { onFocusAmountField() }}
                onBlur={() => { setShowAmountPopover(false) }}
                onInput={(e: any) => { onReplaceComma(e, bAmount) }}
                type="text"
                onWheel={preventScroll}
                placeholder="Amount"
                prefix={<Typography className="prefix">Amount</Typography>}
                suffix={baseCurrency} />
            </Form.Item>
          </Popover>

          <div className={clsx("slider-group", side, layout)}>
            <Slider onChange={onSliderChange} marks={marks} step={5} value={sliderValue} />
          </div>

          <Popover placement="top" content={fiatCurrency && `≈ ${fiatCurrency?.symbol}${form.getFieldValue(`${side}.total`) * fiatCurrency?.usd_rate}`} trigger="focus">
            <Form.Item
              name={`${side}.total`}>
              <Input onInput={(e: any) => { onReplaceComma(e, groupPrecision) }} type="text" onWheel={preventScroll} placeholder="Total"
                prefix={<Typography className="prefix">Total</Typography>}
                suffix={quoteCurrency} />
            </Form.Item>
          </Popover>
          {
            isLoggedIn
              ?
              <Button
                disabled={isDisabled || isLoading}
                htmlType="submit"
                className={clsx(side === 'bid' && "success", side === 'ask' && "danger")} type='primary'>{side === "bid" ? "Buy" : "Ask"}
              </Button>
              :
              <LoginSignUpButton className={clsx(side === 'bid' && "success", side === 'ask' && "danger")} />
          }

        </div>
      </Form>
    </ComponentStyled>
  );
}

export default OrderForm;
