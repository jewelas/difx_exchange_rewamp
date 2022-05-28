/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import clsx from 'clsx';
import isEmpty from 'lodash/isEmpty';
import { Typography, Timeline, showSuccess } from '@difx/core-ui';
import { AxiosResponse } from "axios";
import { Button, Input, Checkbox, Form } from 'antd';
import { ModalStyled } from './styled';
import { Staking, Balance, StakingRequest, StakingResponse, useHttpPost } from "@difx/shared";
import { API_ENDPOINT } from "@difx/constants";
import { getCurrentDateTimeByDateString, getPriceFormatted } from "@difx/utils";

/* eslint-disable-next-line */
export interface ModalStackingProps {
  title: string;
  visible: boolean;
  data?: Staking;
  configIndex: number;
  setConfigIndex: (configIndex:number)=>void;
  balance: Balance;
  onCancel: () => void;
  onSubmit:()=>void;
}

export function ModalStacking({ onCancel, onSubmit : onSubmitParam, title, visible, data, configIndex, setConfigIndex, balance }: ModalStackingProps) {

  const [isAgreeTerm, setIsAgreeTerm] = useState(false);
  const [hasErrorsField, setHasErrorField] = useState(true);

  const [form] = Form.useForm();

  const placeOrderSuccess = (response: AxiosResponse<StakingResponse>) => {
    const { data } = response;
    form.setFieldsValue({'amount':''});
    setHasErrorField(true);
    onCancel();
    showSuccess('Success', `Order created successfully`);

  }
  const { mutate: placeOrder, isLoading } = useHttpPost<StakingRequest, StakingResponse>({ onSuccess: placeOrderSuccess, endpoint: API_ENDPOINT.CREATE_STAKING });

  const onSubmit = (formData: StakingRequest) => {
    const detail = data.st_conf_detail[configIndex];
    const request = {
      "st_conf_id": detail.st_config_id,
      "st_conf_detail_id": detail.id,
      "amount": formData.amount,
      "duration": detail.period,
      "type": "locked",
      "apy": detail.apy
    }
    placeOrder(request);
    onSubmitParam();
  };

  const onFormChange = (changeField: any) => {
    const fieldsValue = form.getFieldsValue();
    for (const [, value] of Object.entries(fieldsValue)) {
      if (!value) {
        setHasErrorField(true);
        return
      }
    }
    setHasErrorField(false);
  };

  if (!data || isEmpty(data.st_conf_detail)) return null;

  const onReplaceComma = (e: any) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
  }

  const SuffixAmountInput = (
    <div className="suffix-amount">
      <div style={{ opacity: 0.75 }}>{data.coin}</div>
      <div className="line" />
      <Button onClick={() => { form.setFieldsValue({ 'amount': Math.floor(balance.amount * 100) / 100 }) }} ghost>MAX</Button>
    </div>
  )

  return (
    <ModalStyled
      visible={visible}
      title={title}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={form}
        onFinish={onSubmit}
        onFieldsChange={onFormChange}
        autoComplete="off"
      >
        <div className='estimated'>
          <div className='es-title'>
            <Typography fontSize={12} fontWeight={400} lineHeight={14.4} color="secondary">Estimated Interested Earned</Typography>
          </div>
          <div className='es-content'>
            <Typography fontSize={41} fontWeight={400} lineHeight={49.2}>{data.st_conf_detail[configIndex].apy}%</Typography>
          </div>

          <Timeline values={
            [
              <span key={`locking-start-time_${data.id}`}>Locking start time</span>,
              <div key={`start-time_${data.id}`}>{getCurrentDateTimeByDateString(data.st_conf_detail[configIndex].start_date)}</div>,
              <div key={`end-time_${data.st_conf_detail[configIndex].id}`}>
                {getCurrentDateTimeByDateString(data.st_conf_detail[configIndex].end_date)}
              </div>
            ]
          } />

        </div>
        <div className='amount'>
          <div className="am-title">
            <div className="am-left">Lock amount</div>
            <div className="am-right">Avaible amount {balance ? getPriceFormatted(balance.amount, 2) : "0.00"} {balance && balance.currency}</div>
          </div>
          <Form.Item
            name='amount'>
            <Input placeholder="Please enter the amount" type="text" onInput={onReplaceComma} onWheel={(e: any) => { e.target.blur() }} suffix={SuffixAmountInput} />
          </Form.Item>
        </div>
        <div className='durations'>
          <div className='du-title'>
            Duration (Days)
          </div>
          <div className='du-arr'>
            {
              data.st_conf_detail.map((e, i) => <Button onClick={() => { setConfigIndex(i) }} className={clsx(i === configIndex && 'active')} key={`_period_${e.id}`} ghost>{e.period}</Button>)
            }
          </div>
        </div>
        <div className='locked-amount'>
          <div className='locked-amount-title'>
            Locked amount limitation
          </div>
          <div className='locked-amount-content'>
            <div className="locked-left">
              <div className="locked-title">
                Minimum
              </div>
              <div className="locked-value">
                {data.st_conf_detail[configIndex].min_amount} {data.coin}
              </div>
            </div>
            <div className="locked-right">
              <div className="locked-title">
                Maximum
              </div>
              <div className="locked-value">
                {data.st_conf_detail[configIndex].max_amount} {data.coin}
              </div>
            </div>
          </div>
        </div>

        <div className='conditions'>
          <Checkbox checked={isAgreeTerm} onChange={() => { setIsAgreeTerm(!isAgreeTerm) }}>
            <Typography level="text">
              I have read and I agree to
              <a style={{ marginLeft: 5 }} target="_blank" href="/term">
                DIFX STACKING CONDITIONS
              </a>
            </Typography>
          </Checkbox>
        </div>

        <div className="staking-now">
          <Button htmlType="submit" disabled={!balance || !isAgreeTerm || hasErrorsField || isLoading} type="primary">Stake Now</Button>
        </div>
      </Form>

    </ModalStyled>
  );
}

export default ModalStacking;
