"use client";

import { motion } from "framer-motion";
import { Card, Col, Row, Typography } from "antd";
import { useScreenWidthSize } from "./hooks/useScreenWidthSize";

const { Title, Text } = Typography;

const skills = [
  {
    category: "Web Technologies",
    items: ["React", "NextJS", "NestJS", "ExpressJS"],
    color: "#1D4ED8", // Deep blue for web technologies
  },
  {
    category: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Python", "C", "C++"],
    color: "#10B981", // Teal for programming languages
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
    color: "#F59E0B", // Amber for databases
  },
  {
    category: "Development Tools",
    items: ["Firebase", "Git", "Jenkins", "AWS S3", "Docker", "Stripe", "Postman"],
    color: "#EC4899", // Pink for development tools
  },
];

export default function Skills() {
  const screenWidth = useScreenWidthSize();
  const amount = screenWidth < 768 ? "some" : "all";
  return (
    <section className="px-6 py-10" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: amount }}
        className="mb-8"
      >
        <Title level={2} className="text-center text-3xl font-bold">
          Skills & Proficiencies
        </Title>
      </motion.div>

      <Row gutter={16} className="justify-center">
        {skills.map((skill, index) => (
          <Col key={index} xs={24} sm={12} lg={6} className="mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: "some" }}
            >
              <Card
                title={
                  <Text style={{ color: skill.color }} className="text-lg font-semibold">
                    {skill.category}
                  </Text>
                }
                bordered={false}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                <ul className="list-inside list-disc">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
