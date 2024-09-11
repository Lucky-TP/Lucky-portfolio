"use client";
import { Timeline, Typography } from "antd";
import { useState } from "react";
import { useScreenWidthSize } from "./hooks/useScreenWidthSize";

const { Title } = Typography;

export default function Projects() {
  const screenWidth = useScreenWidthSize();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Kasetsart Alumni Mentorship Program",
      description:
        "Developed a website that announces program details, facilitates registration, and displays individuals who have passed the qualification criteria, with data managed through AWS S3. Implemented API routes to query qualification information from S3. Used NextJS, TypeScript, Tailwind CSS, ESLint, Prettier, and Framer Motion for development and animations. Deployed the application using Docker on a Kasetsart University virtual machine with a university domain.",
      technologies: ["NextJS", "TypeScript", "Tailwind CSS", "AWS S3", "Docker", "Framer Motion"],
      period: "September 2024 - Present",
    },
    {
      title: "Sunday Insurance Internship",
      description:
        "As a Software Engineer Intern, developed a new design for the product card and built core user profile features, including sign-up, login, and order list pages, using NextJS for the front-end and ExpressJS, MongoDB, and PostgreSQL for the back-end. Created the foundation for a new service using NestJS. Gained experience with Gitflow, AWS, CI/CD deployment, teamwork, and startup work culture, including Agile and Scrum methodologies.",
      technologies: ["NextJS", "ExpressJS", "MongoDB", "PostgreSQL", "NestJS", "AWS"],
      period: "April 2024 - June 2024",
    },
    {
      title: "Crowdfunding Platform",
      description:
        "Developed a reward-based crowdfunding platform using NextJS, TypeScript, and Tailwind CSS for the front-end. Implemented Firebase for authentication and a NoSQL database for data storage. Integrated Stripe for payment processing, and set up ESLint and Prettier for code quality. Utilized Git for version control and team collaboration.",
      technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Firebase", "Stripe", "Git"],
      period: "July 2024 - Present",
    },
    {
      title: "Kasetsart University Document Submission for Club Budget",
      description:
        "Developed responsive design features for a website at Kasetsart University, facilitating the shift from paper-based to online document submission for club budget withdrawals. Utilized NextJS along with front-end libraries such as Ant Design, Mantine, and Chakra UI to ensure a seamless user experience.",
      technologies: ["NextJS", "Ant Design", "Mantine", "Chakra UI"],
      period: "July 2024 - September 2024",
    },
    {
      title: "Teacher Assistant at Kasetsart University",
      description:
        "Taught Python programming to a class of 100 students, providing guidance and support during lab sessions and coursework assignments.",
      technologies: ["Python"],
      period: "November 2023 - Present",
    },
    {
      title: "Discord Crypto Trading Simulator",
      description:
        "Developed a Discord bot for crypto trading using Python, showcasing skills in coding and integration with the Discord API. The simulator allows users to trade virtual cryptocurrencies.",
      technologies: ["Python", "Discord API"],
      period: "October 2023 - November 2023",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-10" id="projects">
      <Title level={2} className="mb-6 text-center">Technical Projects / Experience</Title>
      <Timeline mode="alternate">
        {projects.map((project, index) => (
          <Timeline.Item key={index}>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <div
              className={`mt-2 text-gray-700 ${screenWidth < 768 && (expandedIndex === index ? "" : "hidden")}`}
            >
              {project.description}
            </div>
            {screenWidth < 768 && (
              <button
                className="mt-2 text-blue-500"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                {expandedIndex === index ? "Show Less" : "Show More"}
              </button>
            )}
            <p className="mt-2 text-sm font-medium text-gray-500">
              Technologies: {project.technologies.join(", ")}
            </p>
            <p className="mt-2 text-sm font-medium text-gray-500">Period: {project.period}</p>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
}
