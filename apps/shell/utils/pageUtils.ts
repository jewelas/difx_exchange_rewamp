import { notification } from "antd";

export function showNotification(
  type: "error" | "success",
  title: string,
  description
) {
  notification[type]({
    message: title,
    description,
  });
}
