import React from "react";
import { Col, Row, Table, Typography } from "antd";
import t from "@difx/locale";
import { obscureEmail, obscurePhone } from './rewardsCommon'
import { LeaderboardTableStyle } from "./styled";

export function LeaderBoard() {
  const { Title } = Typography;
  
  const leaderboardData = [
    {
      rank: "1",
      name: obscurePhone("+919988774421"),
      email: obscureEmail("difx12346457@gmail.com"),
      points: "$80",
    },
    {
      rank: "2",
      name: obscurePhone("+919988774421"),
      email: obscureEmail("difx12346457@gmail.com"),
      points: "$80",
    },
    {
      rank: "3",
      name: obscurePhone("+919988774421"),
      email: obscureEmail("difx12346457@gmail.com"),
      points: "$80",
    },
    {
      rank: "4",
      name: obscurePhone("+919988774421"),
      email: obscureEmail("difx12346457@gmail.com"),
      points: "$80",
    },
  ];

  const leaderboardTableColumns = [
    {
      title: "Rank",
      key: "rank",
      dataIndex: "rank",
      width: "25%",
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      width: "25%",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      width: "25%",
    },
    {
      title: "Points",
      key: "points",
      dataIndex: "points",
      width: "25%",
      align: "right" as const,
      render: (text) => <a style={{ color: "#52c41a" }}>{text}</a>,
    },
  ];

  return (
    <LeaderboardTableStyle>
      <div>
        <Row align="middle" justify="space-between">
          <Col>
            <Title level={3} className="leaderboard-title">
              {t("rewards.leaderboard")}
            </Title>
          </Col>
        </Row>
      </div>
      <Table
        columns={leaderboardTableColumns}
        dataSource={leaderboardData}
        pagination={false}
        className="common-table"
      />
    </LeaderboardTableStyle>
  );
}

export default LeaderBoard;
