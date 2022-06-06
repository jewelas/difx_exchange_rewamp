import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import moment from "moment";
import { Typography, List } from "antd";
import t from "@difx/locale";
import { Icon } from "@difx/core-ui";
import {
  API_ENDPOINT,
  useHttpGetByEvent,
  useHttpPut,
  NotificationResponse,
  BaseResponse,
} from "@difx/shared";
import { NotificationWrapper, PageStyled } from "../styled";

const { Text } = Typography;

export function Notification() {
  const [notificationData, setNotificationData] = useState<
    NotificationResponse[]
  >([]);
  const [notificationTotalItems, setNotificationTotalItems] =
    useState<number>();
  const [notificationTotalPages, setNotificationTotalPages] =
    useState<number>();
  const [notificationCurrentPage, setNotificationCurrentPages] =
    useState<number>(1);

  const onSuccess = (
    response: AxiosResponse<{
      result: NotificationResponse[];
      currentPage: number;
      totalItems: number;
      totalPages: number;
    }>
  ) => {
    const { data } = response;
    setNotificationData(data.result);
    setNotificationTotalItems(data.totalItems);
    setNotificationTotalPages(data.totalPages);
    setNotificationCurrentPages(data.currentPage);
  };

  const markAsReadSuccess = (response: AxiosResponse<any>) => {
    const { data } = response;
    if (data) {
      getNotificationHistory(null);
    }
  };

  const dateFormat = "YYYY-MM-DD/HH:MM";
  const limit = 10;
  let type;

  const { mutate: getNotificationHistory, isLoading: isDataLoading } =
    useHttpGetByEvent<any, { result: Array<NotificationResponse> }>({
      onSuccess,
      endpoint: API_ENDPOINT.GET_NOTIFICATIONS(
        notificationCurrentPage,
        limit,
        type
      ),
    });

  const { mutate: markAsRead, isLoading } = useHttpPut<
    BaseResponse,
    NotificationResponse[]
  >({
    onSuccess: markAsReadSuccess,
    endpoint: API_ENDPOINT.MARK_AS_READ_NOTIFICATIONS,
  });

  useEffect(() => {
    getNotificationHistory(null);
  }, [notificationCurrentPage, limit, type]);

  return (
    <PageStyled>
      <NotificationWrapper>
        <Typography.Title level={3}>{t("notification.all")}</Typography.Title>
      </NotificationWrapper>
      <div className="toggle-card-wrapper notification-wrapper">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              setNotificationCurrentPages(page);
            },
            pageSize: limit,
            total: notificationTotalItems,
            current: notificationCurrentPage,
          }}
          dataSource={notificationData}
          renderItem={(item, index) => (
            <List.Item
              key={index}
              className="notification-content"
              onClick={() => {
                !item.read && markAsRead({ notification_id: item.id });
              }}
            >
              <List.Item.Meta
                avatar={
                  <div className="notification-icon">
                    <Icon.MessageIcon />
                    {!item.read && <span className="notification-dote"></span>}
                  </div>
                }
                title={<Text className="notification-title">{item.title}</Text>}
                description={<Text>{item.body}</Text>}
              />
              <Text>{moment(item.timestamp).format(dateFormat)}</Text>
            </List.Item>
          )}
        />
      </div>
    </PageStyled>
  );
}

export default Notification;
