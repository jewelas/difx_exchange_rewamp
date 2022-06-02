import React, { useState } from "react";
import { Tabs } from "antd";
import AppLayout from "../index.page";
import { PageStyled } from "./styled";

export default function NominationPate() {
    const [tab, setTab] = useState("nominess");
    const { TabPane } = Tabs;

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
                        <div className="addButton">
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
                    </div>
                </div>
            </PageStyled>
        </AppLayout>
    )
}