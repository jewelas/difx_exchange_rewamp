import React from "react";
import { Col, Row, Typography } from "antd";
import t from "@difx/locale";
import { FAQStyle } from "./styled";

export function FAQ() {
  const { Title, Text } = Typography;

  const faqData = [
    {
      title: "How to deposit ?",
      link: "/rewards",
    },
    {
      title: "Why has my deposits not been credited yet ?",
      link: "/rewards",
    },
    {
      title: "How to retrieve crypto deposit with wrong or missing ?",
    },
    {
      title: "Why has my deposits not been credited yet ?",
    },
    {
      title: "How to deposit ?",
    },
    {
      title: "Why has my deposits not been credited yet ?",
    },
  ];

  return (
    <FAQStyle>
      <div>
        <Row align="middle" justify="space-between">
          <Col>
            <Title level={3} className="faq-title">
              {t("rewards.faq")}
            </Title>
          </Col>
        </Row>
      </div>
      <ul className="faq-list">
        {faqData.map((item, index) => {
          return (
            <li key={index} className="faq-list">
              <a href={item.link}>
                <Text strong>{item.title}</Text>
              </a>
            </li>
          );
        })}
      </ul>
    </FAQStyle>
  );
}

export default FAQ;
