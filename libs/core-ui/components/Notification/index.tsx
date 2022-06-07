import { notification, Modal } from "antd";
import { Icon } from "..";

export const showSuccess = (message: string, description?: string) => {
  notification.open({
    message: message,
    description: description,
    icon: <Icon.SuccessIcon width={34} height={34} />,
    closeIcon: <Icon.CloseIcon fill='#9AA5B4' width={18} height={18} />
  })
}

export const showError = (message: string, description?: string) => {
  notification.open({
    message: message,
    description: description,
    icon: <Icon.ErrorIcon width={34} height={34} />,
    closeIcon: <Icon.CloseIcon fill='#9AA5B4' width={18} height={18} />
  })
}

export const showWarning = (message: string, description?: string) => {
  notification.open({
    message: message,
    description: description,
    icon: <Icon.WarningIcon width={34} height={34} />,
    closeIcon: <Icon.CloseIcon fill='#9AA5B4' width={18} height={18} />
  })
}

export const showInfo = (message: string, description?: string) => {
  notification.open({
    message: message,
    description: description,
    icon: <Icon.InfoIcon width={34} height={34} />,
    closeIcon: <Icon.CloseIcon fill='#9AA5B4' width={18} height={18} />
  })
}

const { confirm } = Modal;
export const showConfirm = (title: string, content: string, onOk: () => void, onCancel?: () => void, icon?: React.ReactElement) => {
  confirm({
    title,
    content,
    icon,
    onOk,
    onCancel:()=>{onCancel && onCancel()}
  })
}