import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export function Loading() {
  return (
    <Spin
      style={{ display: "flex", marginTop: 20, justifyContent: "center" }}
      indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
    />
  );
}

export default Loading;
