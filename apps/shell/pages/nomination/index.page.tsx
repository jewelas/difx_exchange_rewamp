import React, { useState, useEffect } from "react";
import { Tabs, Modal } from "antd";
import { useRouter } from "next/router";
import { useAuth, useNominationData } from "@difx/shared";
import AppLayout from "../index.page";
import { PageStyled } from "./styled";
import RemoveModal from "../../components/nomination/removeModal";
import AddModal from "../../components/nomination/addModal";


export default function NominationPate() {
    const [tab, setTab] = useState("nominess");
    const [removeModal, setRemoveModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [nominationList, setNominationList] = useState([]);
    const [nominationRequest, setNominationRequest] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [relationship, setRelationship] = useState("");
    const [email, setEmail] = useState("");
    const [removeId, setRemoveId] = useState(-1);
    const [percentage, setPercentage] = useState(1);
    const {user, isLoggedIn, permissions} = useAuth();
    const {
        createNomination, 
        getNominationList, 
        removeNomination, 
        getNominationRequest,
        updateStatus,
        claimNomination
    } = useNominationData();
    
    

    const router = useRouter();
    const { TabPane } = Tabs;

    const getList = async () => {
        const list = await getNominationList();
        setNominationList(list.data.data);
    }

    const getRequest = async () => {
        const request = await getNominationRequest();
        setNominationRequest(request.data.data);
    }


    const addNominee = async () => {
        const name = firstName + lastName;
        await createNomination(name, email, relationship, percentage);
        getList();
        setAddModal(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setRelationship("");
        setPercentage(1);
    }

    const onAuthBtn = () => {
        router.push('/login');
    }

    const onAddNominess = () => {
        if(isLoggedIn) setAddModal(true);
        else router.push('/login');
    }

    const onRemove = (id:number) => {
        setRemoveId(id);
        setRemoveModal(true);
    }

    const removeNominationWithId = async () => {
        const res = await removeNomination(removeId);
        getList();
        setRemoveModal(false);
    }

    const onAccept = async (requestId:number) => {
        await updateStatus(requestId, "accept");
        getRequest();
    }

    const onDecline = async (requestId:number) => {
        await updateStatus(requestId, "reject");
        getRequest();
    }

    const onClaim = async (id:number) => {
        const res = await claimNomination(id);
        getRequest();
    }

    useEffect(() => {
        getList();
        getRequest();
    },[user]);

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
                        <div className="addButton" onClick={() => onAddNominess()}>
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
                        {isLoggedIn && <>
                            <Tabs onChange={(e) => { setTab(e) }}>
                                <TabPane tab="Nominess" key="nominess" />
                                <TabPane tab="Nominee Request" key="nomineeRequest" />
                            </Tabs>
                            <div style={{ padding: "30px 0px" }}>
                                {tab === "nominess" &&
                                    <div className="nominess">
                                        <div className="header">
                                            <div className="long">Name</div>
                                            <div className="long">Email</div>
                                            <div>Allocated Percantage</div>
                                            <div>Status</div>
                                            <div>Action</div>
                                        </div>
                                        <div className="rowsContainer">
                                            {nominationList.map((item, index) => (
                                                <div className="rows" key={index}>
                                                    <div className="long">{item.name}</div>
                                                    <div className="long">{item.email}</div>
                                                    <div>{item.percentage}</div>
                                                    <div className="pending">{item.request_status}</div>
                                                    <div className="remove" onClick={() => onRemove(item.id)}>Remove</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                }
                                {tab === "nomineeRequest" &&
                                    <div className="nomineeRequest">
                                        <div className="header">
                                            <div className="long">Name</div>
                                            <div className="long">Email</div>
                                            <div>Allocated Percantage</div>
                                            <div>Action</div>
                                        </div>
                                        <div className="rowsContainer">
                                            {nominationRequest.map((item,index) => (
                                                <div className="rows" key={index}>
                                                    <div className="long">{item.firstname + " " + item.lastname}</div>
                                                    <div className="long">{item.email}</div>
                                                    <div>{item.percentage + "%"}</div>
                                                    {item.request_status == "init" && 
                                                        <div className="ifAccept">
                                                            <div className="accept" onClick={() => onAccept(item.id)}>Accept</div>
                                                            <div className="decline" onClick={() => onDecline(item.id)}>Decline</div>
                                                        </div>
                                                    }
                                                    {item.request_status == "accept" && 
                                                        <div className="claimBox">
                                                            <div className="claim" onClick={() => onClaim(item.id)}>
                                                                Claim
                                                            </div>
                                                        </div>
                                                    }
                                                    {item.request_status != "init" && item.request_status != "accept" &&
                                                        <div></div>
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                }
                            </div>
                        </>}
                        {!isLoggedIn && 
                            <div className="authBoard">
                                <img src="/imgs/nomination/user.svg" alt=""/>
                                <div className="description">Lörem ipsum krokant matsvinnsbutik ir förutom minavis och pon. Presion intranärar, dår sugåde. </div>
                                <div className="authBtn" onClick={() => {onAuthBtn()}}>Login or Register</div>
                            </div>
                        }
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
                    <RemoveModal 
                        onCancel={() => setRemoveModal(false)}
                        removeNomination = {() => removeNominationWithId()}
                    />
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