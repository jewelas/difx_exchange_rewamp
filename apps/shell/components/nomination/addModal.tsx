import React from "react";
import { Select, Form } from "antd";
import t from "@difx/locale";
import { PageStyledAddModal } from "./styled";

export default function AddModal({ onCancel, firstName, setFirstName, lastName, setLastName, relationship, setRelationship, email, setEmail, percentage, setPercentage, addNominee }) {
    return (
        <PageStyledAddModal>
            <Form>
                <div className="container">
                    <div className="header">
                        Add Nominee
                        <img src="/imgs/nomination/cross.svg" alt="" onClick={onCancel} style={{ cursor: "pointer" }} />
                    </div>
                    <div className="inputContainer">
                        <div className="inputItem">
                            <div> First Name </div>
                            <Form.Item
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                        message: t("error.input_name"),
                                    }
                                ]}
                            >
                                <div className="inpuBox">
                                    <input placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                            </Form.Item>
                        </div>
                        <div className="inputItem">
                            <div> Last Name(Optional) </div>
                            <div className="inpuBox">
                                <input placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="inputItem">
                            <div> Relationship </div>
                            <Form.Item
                                name="relationship"
                                rules={[
                                    {
                                        required: true,
                                        message: t("error.input_relationship"),
                                    }
                                ]}
                            >
                                <div className="inpuBox">
                                    <Select
                                        placeholder="Select the relationship" className="selectBox" onChange={(e) => { setRelationship(e) }}>
                                        <Select.Option key="mother" value="mother">Mother</Select.Option>
                                        <Select.Option key="spouse" value="spouse">Spouse</Select.Option>
                                        <Select.Option key="father" value="father">Father</Select.Option>
                                        <Select.Option key="daughter" value="daughter">Daughter</Select.Option>
                                        <Select.Option key="son" value="son">Son</Select.Option>
                                        <Select.Option key="sister" value="sister">Sister</Select.Option>
                                        <Select.Option key="brother" value="brother">Brother</Select.Option>
                                        <Select.Option key="aunt" value="aunt">Aunt</Select.Option>
                                        <Select.Option key="uncle" value="uncle">Uncle</Select.Option>
                                        <Select.Option key="niece" value="niece">Niece</Select.Option>
                                        <Select.Option key="nephew" value="nephew">Nephew</Select.Option>
                                        <Select.Option key="cousin-female" value="cousin-female">Cousin-female</Select.Option>
                                        <Select.Option key="cousin-male" value="cousin-male">Cousin-male</Select.Option>
                                        <Select.Option key="grandmother" value="grandmother">Grandmother</Select.Option>
                                        <Select.Option key="grandfather" value="grandfather">Grandfather</Select.Option>
                                        <Select.Option key="granddaughter" value="granddaughter">Granddaughter</Select.Option>
                                        <Select.Option key="grandson" value="grandson">Grandson</Select.Option>
                                        <Select.Option key="friend" value="friend">Friend</Select.Option>
                                        <Select.Option key="other" value="other">Other</Select.Option>
                                    </Select>
                                </div>
                            </Form.Item>
                        </div>
                        <div className="inputItem">
                            <div> Email </div>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: t("error.input_email"),
                                    },
                                    {
                                        type: "email",
                                        message: t("error.email_not_valid"),
                                    },
                                ]}
                            >
                                <div className="inpuBox">
                                    <input placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </Form.Item>
                        </div>
                        <div className="inputItem">
                            <div> Nominees Percentage </div>
                            <Form.Item
                                name="percentage"
                                rules={[
                                    {
                                        required: true,
                                        message: t("error.input_percentage"),
                                    },
                                    () => ({
                                        validator(_, value) {
                                            if (!value) {
                                                return Promise.reject();
                                            }
                                            if (isNaN(value)) {
                                                return Promise.reject("Percentage has to be a number.");
                                            }
                                            if (parseFloat(value) <= 0) {
                                                return Promise.reject("Percentage must be bigger than 0.");
                                            }
                                            if (parseFloat(value) > 100) {
                                                return Promise.reject("Percentage must be smaller than 100.");
                                            }
                                            return Promise.resolve();
                                        },
                                    }),
                                ]}
                            >
                                <div className="inpuBox">
                                    <input placeholder="Enter allocate percentage" value={percentage} onChange={(e) => setPercentage(e.target.value)} />
                                </div>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="btnContainer">
                        <div className="addBtn" onClick={() => addNominee()}>Add</div>
                    </div>
                </div>
            </Form>
        </PageStyledAddModal>
    )
}