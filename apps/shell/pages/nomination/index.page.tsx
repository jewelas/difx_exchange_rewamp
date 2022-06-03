import React, { useState } from "react";
import { Tabs, Modal } from "antd";
import AppLayout from "../index.page";
import { PageStyled } from "./styled";
import RemoveModal from "../../components/nomination/removeModal";
import AddModal from "../../components/nomination/addModal";

export default function NominationPate() {
    const [tab, setTab] = useState("nominess");
    const [removeModal, setRemoveModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [relationship, setRelationship] = useState("");
    const [email, setEmail] = useState("");
    const [percentage, setPercentage] = useState(0);

    const { TabPane } = Tabs;

    const addNominee = () => {
        console.log(firstName, lastName, relationship, email, percentage);
    }

    return (
        <AppLayout>
            <PageStyled>
                <div className="head">
                    <div className="titleContainer">
                        <div className="title">
                            Safeguard your Assets,<br />Secure your fortune for your future
                        </div>
                    </div>
                    <div className="descriptionContainer">
                        <div className="description">
                            With crypto assets growing in size and popularity every year, there is an increased need for security and assurance of these digital assets.
                        </div>
                    </div>
                    <div className="btnContainer">
                        <div className="addButton" onClick={() => setAddModal(true)}>
                            Add Nominess
                        </div>
                    </div>
                    <div className="actionsContainer">
                        <div className="actions">
                            <div>
                                <img src="/imgs/nomination/add.svg" alt="" />
                                Add Nominees
                            </div>
                            <div className="dashed">
                                <div />
                                <div />
                                <div />
                            </div>
                            <div>
                                <img src="/imgs/nomination/auth.svg" alt="" />
                                Signup/Login
                            </div>
                            <div className="dashed">
                                <div />
                                <div />
                                <div />
                            </div>
                            <div>
                                <img src="/imgs/nomination/accept.svg" alt="" />
                                Accept Inviation
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boardContainer">
                    <div className="board">
                        <Tabs onChange={(e) => { setTab(e) }}>
                            <TabPane tab="Nominess" key="nominess" />
                            <TabPane tab="Nominee Request" key="nomineeRequest" />
                        </Tabs>
                        <div style={{ padding: "30px 0px" }}>
                            {tab === "nominess" &&
                                <div className="nominess">
                                    <div className="header">
                                        <div>Name</div>
                                        <div>Email</div>
                                        <div>Allocated Percantage</div>
                                        <div>Status</div>
                                        <div>Action</div>
                                    </div>
                                    <div className="rowsContainer">
                                        <div className="rows">
                                            <div>Jhona K</div>
                                            <div>Jhona23@gmail.com</div>
                                            <div>25%</div>
                                            <div className="pending">Signup Pending</div>
                                            <div className="remove" onClick={() => setRemoveModal(true)}>Remove</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {tab === "nomineeRequest" &&
                                <div className="nomineeRequest">
                                    <div className="header">
                                        <div>Name</div>
                                        <div>Email</div>
                                        <div>Allocated Percantage</div>
                                        <div>Action</div>
                                    </div>
                                    <div className="rowsContainer">
                                        <div className="rows">
                                            <div>Jhona K</div>
                                            <div>Jhona23@gmail.com</div>
                                            <div>25%</div>
                                            <div className="ifAccept">
                                                <div className="accept">Accept</div>
                                                <div className="decline">Decline</div>
                                            </div>
                                        </div>
                                        <div className="rows">
                                            <div>Jhona K</div>
                                            <div>Jhona23@gmail.com</div>
                                            <div>25%</div>
                                            <div>
                                                <div className="claim">
                                                    Claim
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="adContainer">
                    <div className="adBoxes">
                        <div>
                            <img src="/imgs/nomination/bitcoin.svg" alt="" />
                            <div className="title">Nominess</div>
                            <div className="content">We store the vast majority of the digital assets in secure offline storage</div>
                        </div>
                        <div>
                            <img src="/imgs/nomination/bitcoin.svg" alt="" />
                            <div className="title">Nominess</div>
                            <div className="content">We store the vast majority of the digital assets in secure offline storage</div>
                        </div>
                        <div>
                            <img src="/imgs/nomination/bitcoin.svg" alt="" />
                            <div className="title">Nominess</div>
                            <div className="content">We store the vast majority of the digital assets in secure offline storage</div>
                        </div>
                        <div>
                            <img src="/imgs/nomination/bitcoin.svg" alt="" />
                            <div className="title">Nominess</div>
                            <div className="content">We store the vast majority of the digital assets in secure offline storage</div>
                        </div>
                    </div>
                </div>
                <Modal className="removeModal" visible={removeModal} footer={null} onCancel={() => setRemoveModal(false)}>
                    <RemoveModal onCancel={() => setRemoveModal(false)}/>
                </Modal>
                <Modal className="addModal" visible={addModal} footer={null} onCancel={() => setAddModal(false)}>
                    <AddModal onCancel={() => setAddModal(false)}
                        firstName={firstName}
                        lastName={lastName}
                        relationship={relationship}
                        email={email}
                        percentage={percentage}
                        setFirstName={setFirstName}
                        setLastName={setLastName}
                        setRelationship={setRelationship}
                        setEmail={setEmail}
                        setPercentage={setPercentage}
                        addNominee={addNominee}
                    />
                </Modal>
            </PageStyled>
        </AppLayout>
    )
}