"use client";

import { Card, Col, Row, Typography, Badge, Space } from "antd";
import { CalendarOutlined, FlagOutlined } from "@ant-design/icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScreenWidthSize } from "./hooks/useScreenWidthSize";

const { Title, Text } = Typography;

const educationItems = [
  {
    institution: "Lincoln County High School",
    icon: "/assets/lchs.png",
    degree: "Exchange Student",
    period: "August 2019 - March 2020",
    gpa: "",
    location: "Nevada, USA",
    description: `• Participated in an exchange program, during which I completed a coding class that provided a foundational understanding of programming.\n• GPA: 3.97/4.00`,
    website: "https://lcsdnv.com/lincoln-county-h-s/",
  },
  {
    institution: "Kasetsart University",
    icon: "/assets/KU_Logo.png",
    degree: "Undergraduate Student",
    period: "June 2022 - Present",
    gpa: "3.42/4.00",
    location: "Bangkok, Thailand",
    description: `• Currently a third-year student studying Bachelor of Engineering in Computer Engineering.\n• Expected graduation in June 2026.\n• GPA: 3.42/4.00`,
    website: "https://www.ku.ac.th/th",
  },
];

export default function Education() {
  const screenWidth = useScreenWidthSize();
  const amount = screenWidth < 768 ? "some" : "all";
  return (
    <section className="px-6 py-10" id="education">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: amount }}
      >
        <Title level={2} className="mb-6 text-center">
          Education
        </Title>
      </motion.div>

      <Row gutter={16} className="flex flex-wrap">
        {educationItems.map((item, index) => (
          <Col key={index} xs={24} sm={12} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: amount }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                title={
                  <Space direction="vertical" className="w-full">
                    <a
                      href={item.website}
                      className="flex items-center gap-2"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        src={item.icon}
                        width="24"
                        height="24"
                        alt={`${item.institution} Icon`}
                      />
                      {item.institution}
                    </a>
                  </Space>
                }
                bordered={false}
                extra={
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <Badge
                      count={
                        item.degree === "Undergraduate Student"
                          ? "Undergraduate Student"
                          : "Exchange Student"
                      }
                      style={{
                        backgroundColor:
                          item.degree === "Undergraduate Student" ? "#52c41a" : "#1890ff",
                      }}
                    />
                  </div>
                }
                className="flex h-full flex-col"
              >
                <Text>
                  {item.description.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </Text>
                <div className="mt-2">
                  <Text type="secondary">
                    <FlagOutlined /> {item.location}
                  </Text>
                </div>
                <div>
                  <Text type="secondary">
                    <CalendarOutlined /> {item.period}
                  </Text>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
