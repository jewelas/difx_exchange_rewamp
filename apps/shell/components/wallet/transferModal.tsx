import t from "@difx/locale";
import { useTransferModal } from "@difx/shared";
import { Avatar, Button, Col, Divider, Form, Input, Modal, Row, Select } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
import { TransferModalWrapper } from "./styled";
import { ASSETS_URL } from '@difx/constants';
import { OptionGroupStyled } from "../market/styled";
import { ConvertButton, Icon } from "@difx/core-ui";
import Text from "antd/lib/typography/Text";


export function TransferModal() {
    const { transferModalVisible, setTransferModalVisible } = useTransferModal()

    const closeModal = () => {
        setTransferModalVisible(false);
    };
    const [form] = Form.useForm();

    const SuffixAmountInput = (
        <div className="suffix-amount">
          <div style={{ opacity: 0.75 }}>BTC</div>
          <div className="line" />
          <Button ghost>MAX</Button>
        </div>
    )

  return (
        <Modal title={t("wallet.transfer")} footer={null} visible={transferModalVisible} onCancel={closeModal}>
            <TransferModalWrapper>
                <div>
                    <Form
                            form={form}
                            layout="vertical"
                            >
                                <Form.Item
                                    label="Coin"
                                >
                                    <Select className="coinselect">
                                        <Select.Option>
                                            <OptionGroupStyled>
                                                <div className="coinflag">
                                                    <Avatar shape="square" size={26} src={`${ASSETS_URL}difx.png`}/>
                                                </div>
                                                <div className="coinvalue">
                                                    BTC <span>Bitcoin</span>
                                                </div>
                                            </OptionGroupStyled>
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                                <div className="transfer_input_wrapper">
                                    <div className="transfer_dots">
                                        <div className="transfer_input_circle"></div>
                                        <svg width="300px" height="200px" viewBox="0 0 300 200">
                                            <line x1="40" x2="210" y1="100" y2="100" strokeWidth="20" strokeLinecap="round" strokeDasharray="1, 30"/>
                                        </svg>
                                        <div className="transfer_input_square"></div>
                                    </div>
                                    <div className="transfer_inputs">
                                        <Form.Item name="spot" label="From">
                                            <Select defaultValue="spot" bordered={false}>
                                                <Select.Option value="spot">Spot Wallet</Select.Option>
                                                <Select.Option value="future">future Wallet</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item name="future" label="To">
                                            <label>Future Wallet</label>
                                        </Form.Item>
                                    </div>
                                    <div className="transfer_img">
                                        <div>
                                            <ConvertButton isSell/>
                                        </div>
                                    </div>
                                </div>
                                <div className='amount'>
                                    <Form.Item
                                        label='Transfer Amount'>
                                        <Input placeholder="Please enter the amount" type="text" onWheel={(e: any) => { e.target.blur() }} suffix={SuffixAmountInput} />
                                        <Row align="middle" justify="space-between" style={{marginTop: 4}}>
                                            <Col>
                                                <Text type="secondary">Avaible amount</Text> 0.0000 BTC
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                </div>
                                <Button type="primary" block>Confirm</Button>
                            </Form>
                </div>
            </TransferModalWrapper>
        </Modal>
  );
}

export default TransferModal;
