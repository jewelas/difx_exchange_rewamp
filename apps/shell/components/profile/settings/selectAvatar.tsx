import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { Avatar, Button, Modal, Space } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";


export function SelectAvatarModal({selectAvatarModal, setSelectAvatarModal}) {

    const closeModal = () => {
        setSelectAvatarModal(false);
    };

  return (
        <Modal title={t("profile.select_avatar")} footer={null} visible={selectAvatarModal} onCancel={closeModal} maskClosable={false}>
            <Paragraph type="secondary">{t("profile.select_avatar_para")}</Paragraph>
            <Space wrap size={[18, 16]}>
                <Avatar src="https://joeschmoe.io/api/v1/random" size={80} icon={<Icon.CoinPlaceholder width={80} height={80} />} />
                <Avatar src="https://joeschmoe.io/api/v1/female/random" size={80} icon={<Icon.CoinPlaceholder width={80} height={80} />} />
                <Avatar src="https://joeschmoe.io/api/v1/male/random" size={80} icon={<Icon.CoinPlaceholder width={80} height={80} />}/>
                <Avatar src="https://joeschmoe.io/api/v1/random" size={80} icon={<Icon.CoinPlaceholder width={80} height={80} />} />
                <Avatar src="https://joeschmoe.io/api/v1/female/random" size={80} icon={<Icon.CoinPlaceholder width={80} height={80} />} />
                <Avatar src="https://joeschmoe.io/api/v1/male/random" size={80} icon={<Icon.CoinPlaceholder width={80} height={80} />}/>
                <Avatar src="https://joeschmoe.io/api/v1/random" size={80} icon={<Icon.CoinPlaceholder width={80} height={80} />} />
            </Space>
            <div className="commonModalBtn">
                <Button type="primary">{t("common.save")}</Button>
            </div>
        </Modal>
  );
}

export default SelectAvatarModal;
