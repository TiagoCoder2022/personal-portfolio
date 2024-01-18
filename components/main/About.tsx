"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import TitleSection from "./TitleSection";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Gestao Tecnologia da Informaçao</li>
        <li>Universidade Paulista - UNIP</li>
      </ul>
    ),
  },
  {
    title: "Courses",
    id: "courses",
    content: (
      <ul>
        <li>Full Stack Javascript - OneBitCode</li>
        <li>Front-end Developer - Origamid</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section
      id="about-me"
      className="container mx-auto flex flex-col items-center justify-center z-[20]"
    >
      <TitleSection>About Me</TitleSection>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="md:grid md:grid-cols-2 bg-tertiary  gap-8 items-center py-8 px-4 xl:gap-14 sm:py-16 xl:px-16 about-scyfi"
      >
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src="/tiago-profile.jpg"
            width={400}
            height={400}
            unoptimized
            alt="Profile picture"
            className="object-contain rounded-lg shadow-card"
          />
        </motion.div>
        <div className="text-white py-10 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            I am a Full Stack web developer with a passion for creating
            interactive and responsive web aplications. I have experience
            working with javascript, React, Redux, Node.js, Express, PostgreSQL,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>

          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("courses")}
              active={tab === "courses"}
            >
              Courses
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
