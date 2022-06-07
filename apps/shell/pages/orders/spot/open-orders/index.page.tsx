import { Icon, showConfirm, showSuccess } from "@difx/core-ui";
import { getCurrentDateByDateString } from "@difx/utils";
import { useHttpPut, BaseResponse } from "@difx/shared";
import { API_ENDPOINT } from "@difx/constants";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment, { Moment } from "moment";
import { AxiosResponse } from "axios";
import { Button, Col, DatePicker, Layout, Row, Select, Space, Typography } from 'antd';
import { t } from "i18next";
import isEmpty from "lodash/isEmpty";
import { useState } from "react";
import SpotOpenOrderTransaction from "../../../../components/orders/spot/openOrders";
import { WalletWrapper } from "../../../wallet/styled";
import OrderLayout from "../../index.page";

const { Content } = Layout;

export function SpotOpenOrdersPage() {

    const dateFormat2Digits = 'YY-MM-DD';

    const [pairs, setPairs] = useState([]);
    const [selectedPair, setSelectedPair] = useState(null);
    const [canCancelAll, setCanCancelAll] = useState(false);

    const _startDate = new Date();
    _startDate.setDate(_startDate.getDate() - 30);
    const [startDate, setStartDate] = useState<Date | null>(_startDate);
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    const onSuccess = (response: AxiosResponse<BaseResponse>) => {
        const { message } = response.data;
        showSuccess('Cancel Order', message);
    }
    const { mutate: cancelAllOrders, isLoading } = useHttpPut<null, BaseResponse>({ onSuccess, endpoint: API_ENDPOINT.CANCEL_ALL_ORDERS });

    const onPickerChange = (dates: Moment[]) => {
        if (!isEmpty(dates)) {
            setStartDate(dates[0].toDate());
            setEndDate(dates[1].toDate());
        }
    }

    return (
        <OrderLayout>
            <Layout style={{ padding: '24px' }}>
                <Content>
                    <WalletWrapper>
                        <Typography.Title level={3}>{t("order.open_orders")}</Typography.Title>
                        <Row align="middle" justify="space-between">
                            <Col>
                                <Space>
                                    <div>
                                        <DatePicker.RangePicker
                                            onChange={onPickerChange}
                                            defaultValue={[moment(getCurrentDateByDateString(startDate.toString()), dateFormat2Digits), moment(getCurrentDateByDateString(endDate.toString()), dateFormat2Digits)]}
                                        />
                                    </div>
                                    <div>
                                        <Select defaultValue="" style={{ width: 150 }} size="small" onChange={(e: string) => { setSelectedPair(e) }} className="input-small">
                                            {
                                                pairs.map(e =>
                                                    <Select.Option on key={`select_${e}`} value={e}>{e}</Select.Option>
                                                )
                                            }
                                            <Select.Option key={`select_all`} value={''}>{t("common.all")}</Select.Option>
                                        </Select>
                                    </div>
                                </Space>
                            </Col>
                            <Col>
                                <Button
                                    onClick={() => {
                                        showConfirm(
                                            t("order.cancel_all_order"),
                                            t("order.cancel_all_order_confirm"),
                                            () => {
                                                if (!isLoading) {
                                                    cancelAllOrders(null);
                                                    setCanCancelAll(false);
                                                }
                                            },
                                            null,
                                            <ExclamationCircleOutlined />
                                        )
                                    }}
                                    disabled={!canCancelAll}
                                    type="ghost" size="small"
                                    className="btn-icon"><Icon.CancelOrderIcon useDarkMode /> {t("order.cancelAll")}</Button>
                            </Col>
                        </Row>
                    </WalletWrapper>
                    {/* Transaction here */}
                    <SpotOpenOrderTransaction canCancelAll={setCanCancelAll} startDate={startDate.getTime()} endDate={endDate.getTime()} pair={selectedPair} setPairs={isEmpty(pairs) ? setPairs : null} />
                </Content>
            </Layout>
        </OrderLayout>
    );
}

export default SpotOpenOrdersPage;
