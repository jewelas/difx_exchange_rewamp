import { Form, Input, Slider, Button } from "antd";
import clsx from "clsx";
import t from "./../../../locale";
import {
  ComponentStyled
} from "./styled";

export type OrderSideType = 'bid' | 'ask';
export type OrderType = 'limit' | 'market' | 'stop-limit';
export interface OrderFormProps {
  side?: OrderSideType,
  type?: OrderType
}

export function OrderForm({ side = 'bid', type = 'limit' }: OrderFormProps) {

  const marks = {
    0: '0',
    25: '25',
    50: '50',
    75: '75',
    100: '100',
  };

  const [form] = Form.useForm();
  const onSubmit = async () => {
    //TODO
  };

  const onFormChange = () => {
    // const fieldsError = form.getFieldsError();
    //   const errors = fieldsError.find((e) => !isEmpty(e.errors));
    //   if (errors && !isEmpty(errors.errors)) {
    //     setHasFieldError(true);
    //   } else {
    //     setHasFieldError(false);
    //   }
  };

  return (
    <ComponentStyled>
      <Form
        form={form}
        onFinish={onSubmit}
        onFieldsChange={onFormChange}
        autoComplete="off"
      >
        <div className="head">

        </div>
        <div className="content">
          <Form.Item
            name="price"
            rules={[
              {
                required: true,
                message: t("error.input_email"),
              }
            ]}
          >
            <Input placeholder="Price" />
          </Form.Item>
          <Form.Item
            name="price"
            rules={[
              {
                required: true,
                message: t("error.input_email"),
              }
            ]}
          >
            <Input placeholder="Amount" />
          </Form.Item>
          <Form.Item
            name="price"
            rules={[
              {
                required: true,
                message: t("error.input_email"),
              }
            ]}
          >
            <Input placeholder="Total" />
          </Form.Item>
          <div className={clsx("slider-group", side)}>
            <Slider marks={marks} step={null} defaultValue={0} />
          </div>
          <Button className={clsx(side==='bid' && "success")} type='primary' danger={side==="ask"}>{side==="ask"?"Sell" : "Buy"}</Button>
        </div>

      </Form>
    </ComponentStyled>
  );
}

export default OrderForm;
