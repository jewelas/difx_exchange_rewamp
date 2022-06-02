import React from "react";
import { PageStyledRemoveModal } from "./styled";

export default function RemoveModal ({onCancel}) {
    return (
        <PageStyledRemoveModal>
            <div className="container">
                <img src="/imgs/nomination/trash.svg" alt=""/>
                <div className="isSure">
                    Are you sure?
                </div>
                <div className="isConfirm">
                    Are you sure you want to delete your nominee?
                </div>
                <div className="btnContainer">
                    <div className="cancel" onClick={onCancel}>Cancel</div>
                    <div className="delete">Delete</div>
                </div>
            </div>
        </PageStyledRemoveModal>
    )
}