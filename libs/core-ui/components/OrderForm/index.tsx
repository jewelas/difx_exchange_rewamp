/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, FormInstance, Input, Popover, Slider } from "antd";
import clsx from "clsx";
import { useEffect, useState } from 'react';
import t from "./../../../locale";
import { PairType, PlaceOrderRequest, useCurrency } from "./../../../shared";
import { getPriceFormatted } from "./../../../shared/utils/priceUtils";
import { toRoundDown } from "./../../../shared/utils/numberFormatter";
import DownloadIcon from "./../Icon/DownloadIcon";
import LoginSignUpButton from "./../LoginSignUpButton";
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
  amountSelected?: number,
  pairInfo?: PairType,
  onPlaceOrder: (formData: PlaceOrderRequest, type: OrderType, side: OrderSideType) => void,
  isLoading?: boolean,
  canDeposit?: boolean,
  balance?: number;
  form: FormInstance
}

export function OrderForm({ form, balance = 0, layout = 'default', canDeposit = true, isLoading = true, onPlaceOrder, priceSelected, amountSelected, side = 'bid', type = 'limit', baseCurrency, quoteCurrency, isLoggedIn = false, pairInfo }: OrderFormProps) {

  const marks = {
    0: ' ',
    25: ' ',
    50: ' ',
    75: ' ',
    100: ' ',
  };

  const { currentCurrency: fiatCurrency } = useCurrency();

  const [isDisabled, setIsDisabled] = useState(isLoggedIn);
  const [sliderValue, setSliderValue] = useState(0);

  // const [numberRound, setNumberRound] = useState<number>(100);
  const [groupPrecision, setGroupPrecision] = useState<number>(0);
  const [bAmount, setBAmmount] = useState<number>(0);
  const [showAmountPopover, setShowAmountPopover] = useState(false);
  const [showTotalPopover, setShowTotalPopover] = useState(false);
  const [isErrorTotal, setIsErrorTotal] = useState(false);
  const [errorMsgTotal, setErrorMsgTotal] = useState<string | null>(null);

  useEffect(()=>{
    if(isDisabled) validateForm();
  },[]);

  useEffect(() => {
    if (amountSelected) {
      form.setFieldsValue({ [`${side}.amount`]: amountSelected });
    }
    if (priceSelected) {
      form.setFieldsValue({ [`${side}.price`]: priceSelected });
      form.setFieldsValue({ [`${side}.total`]: priceSelected });
      const amount = form.getFieldValue(`${side}.amount`);
      const total = amount * priceSelected;
      form.setFieldsValue({
        [`${side}.total`]: toRoundDown(total, groupPrecision),
      });
    }
  }, [priceSelected, amountSelected]);

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
          [`${side}.amount`]: toRoundDown(amount, bAmount),
        });
      } else if (fieldName === `${side}.amount`) {
        const currentPrice = form.getFieldValue(`${side}.price`);
        const newTotal: number = currentPrice * fieldValue;
        form.setFieldsValue({
          [`${side}.total`]: toRoundDown(newTotal, groupPrecision),
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
          [`${side}.total`]: toRoundDown(newTotal, groupPrecision),
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
        setIsErrorTotal(true);
        setErrorMsgTotal(`${t("error.insufficient_bal")} ${balance}${quoteCurrency}`);
        return;
      }
    } else if (side === 'ask') {
      if (balance && fieldsValue[`${side}.amount`] > balance) {
        setIsDisabled(true);
        setIsErrorTotal(true);
        setErrorMsgTotal(`${t("error.insufficient_bal")} ${fieldsValue[`${side}.price`] * fieldsValue[`${side}.amount`]}${quoteCurrency}`);
        return;
      }
    }

    setIsErrorTotal(false);

    if (type === 'limit') {
      setIsDisabled(
        !isValidPriceNumber(fieldsValue[`${side}.price`]) ||
        !isValidPriceNumber(fieldsValue[`${side}.amount`]) ||
        !isValidPriceNumber(fieldsValue[`${side}.total`])
      );
    } else if (type === 'market') {
      if (side === "bid") {
        setIsDisabled(
          !isValidPriceNumber(fieldsValue[`${side}.total`])
        );
      } else if (side === "ask") {
        setIsDisabled(
          !isValidPriceNumber(fieldsValue[`${side}.amount`])
        );
      }

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
      const percentOfBalanceRound: number = toRoundDown(percentOfBalance, groupPrecision);

      if (side === 'bid') {
        const amount: number = currentPrice ? percentOfBalanceRound / currentPrice : 0;
        const amountRound: number = toRoundDown(amount, bAmount);
        form.setFieldsValue({
          [`${side}.total`]: percentOfBalanceRound,
          [`${side}.amount`]: amountRound,
        });
      } else if (side === 'ask') {
        const total: number = currentPrice ? percentOfBalanceRound * currentPrice : 0;
        const totalRound: number = toRoundDown(total, groupPrecision);
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
      return t("common.maxAmount") + " " + getPriceFormatted(balance / currentPrice, groupPrecision);
    } else if (side === "ask") {
      return t("common.maxAmount") + " " + getPriceFormatted(balance, bAmount);
    }
    return null;
  }

  const TotalInputField = (
    <Popover visible={showTotalPopover} placement="topRight" content={fiatCurrency && `≈ ${fiatCurrency?.symbol}${form.getFieldValue(`${side}.total`) * fiatCurrency?.usd_rate}`} trigger="focus">
      <Form.Item
        name={`${side}.total`}>
        <Input
          onFocus={() => { setShowTotalPopover(true) }}
          onBlur={() => { setShowTotalPopover(false) }}
          className={clsx(isErrorTotal && 'error')} onInput={(e: any) => { onReplaceComma(e, groupPrecision) }} type="text" onWheel={preventScroll} placeholder="Total"
          prefix={<Typography className="prefix">Total</Typography>}
          suffix={quoteCurrency} />
      </Form.Item>
    </Popover>
  )

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
              <DownloadIcon useDarkMode />
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
              <>
                <Form.Item
                  name={`${side}.marketPrice`}>
                  <Input disabled type="text"
                    prefix={<Typography className="prefix">Market Price</Typography>}
                    suffix={quoteCurrency} />
                </Form.Item>
                {side === 'bid' && TotalInputField}
              </>
              :
              <Form.Item
                name={`${side}.price`}>
                <Input onInput={(e: any) => { onReplaceComma(e, groupPrecision) }} type="text" onWheel={preventScroll} placeholder={"Price"}
                  prefix={<Typography className="prefix">Price</Typography>}
                  suffix={quoteCurrency} />
              </Form.Item>
          }

          {side === 'bid' && type === 'market'
            ?
            null
            :
            <Popover visible={showAmountPopover} placement="topRight" content={getAmountErrorMsg()} trigger="focus">
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
          }

          <div className={clsx("slider-group", side, layout)}>
            <Slider onChange={onSliderChange} marks={marks} step={5} value={sliderValue} />
          </div>

          {
            type === "market"
              ?
              null
              :
              TotalInputField
          }

          {
            isErrorTotal &&
            <div style={{ marginBottom: 10, marginTop: -5 }}>
              <Typography color="danger">{errorMsgTotal}</Typography>
            </div>
          }

          {
            isLoggedIn
              ?
              <Button
                disabled={isDisabled || isLoading}
                htmlType="submit"
                className={clsx(side === 'bid' && "success", side === 'ask' && "danger")} type='primary'>{side === "bid" ? t("order.buy") : t("order.sell")}
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
