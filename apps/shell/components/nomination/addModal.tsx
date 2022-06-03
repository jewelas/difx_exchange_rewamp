import React from "react";
import { Select } from "antd";
import { PageStyledAddModal } from "./styled";

export default function AddModal({ onCancel,firstName, setFirstName,lastName, setLastName,relationship, setRelationship,email, setEmail,percentage, setPercentage, addNominee }) {
    return (
        <PageStyledAddModal>
            <div className="container">
                <div className="header">
                    Add Nominee
                    <img src="/imgs/nomination/cross.svg" alt="" onClick={onCancel} style={{cursor: "pointer"}}/>
                </div>
                <div className="inputContainer">
                    <div className="inputItem">
                        <div> First Name </div>
                        <div className="inpuBox">
                            <input placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="inputItem">
                        <div> Last Name(Optional) </div>
                        <div className="inpuBox">
                            <input placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="inputItem">
                        <div> Relationship </div>
                        <div className="inpuBox">
                            <Select
                                placeholder="Select the relationship" className="selectBox" onChange={(e) => {setRelationship(e)}}>
                                <Select.Option key="parent" value="parent">Parent</Select.Option>
                                <Select.Option key="friend" value="friend">Friend</Select.Option>
                                <Select.Option key="family" value="family">Family</Select.Option>
                            </Select>
                        </div>
                    </div>
                    <div className="inputItem">
                        <div> Email </div>
                        <div className="inpuBox">
                            <input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="inputItem">
                        <div> Nominees Percentage </div>
                        <div className="inpuBox">
                            <input placeholder="Enter allocate percentage" value={percentage} onChange={(e) => setPercentage(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="btnContainer">
                    <div className="addBtn" onClick={() => addNominee()}>Add</div>
                </div>
            </div>
        </PageStyledAddModal>
    )
}