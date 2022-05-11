import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export function Loading() {
  return (
    <Spin
      style={{ display: "flex", marginTop: 20, justifyContent: "center", position:"absolute", width: "100%" }}
      indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
    />
  );
}

export default Loading;
