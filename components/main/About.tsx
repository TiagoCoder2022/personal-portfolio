"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "../sub/TabButton";
import TitleSection from "../sub/TitleSection";
import { motion } from "framer-motion";
import { TechBadge } from "../sub/TechBadge";
import { skill_frontend, backend_skill } from "@/constants";

const techBadgeAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

const TAB_DATA = [
  {
    title: "Front-end",
    id: "front-end",
    content: (
      <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[450px]">
        {skill_frontend.map((tech, i) => (
          <TechBadge
            name={tech.name}
            key={tech.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.2, delay: i * 0.1 }}
          />
        ))}
      </div>
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
    title: "Back-end",
    id: "back-end",
    content: (
      <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[450px]">
        {backend_skill.map((tech, i) => (
          <TechBadge
            name={tech.name}
            key={tech.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.2, delay: i * 0.1 }}
          />
        ))}
      </div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("front-end");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col items-center justify-center z-[20]"
    >
      <TitleSection>About Me</TitleSection>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="md:grid md:grid-cols-2 bg-tertiary rounded-lg  gap-8 items-center py-8 px-4 md:px-16 lg:py-8 lg:px-40 about-scyfi border-l border-b border-purple-500"
      >
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/profile2.png"
            width={0}
            height={0}
            unoptimized
            alt="Profile picture"
            className="object-contain w-auto shadow-card rounded-lg h-[400px] lg:w-auto lg:h-[500px] profile-pictire-scyfi"
          />
        </motion.div>
        <div className="text-white py-10 md:mt-0 text-left flex flex-col h-full">
          <p className="text-sm md:text-base lg:text-lg">            
            Passionate about technology, I have 2 years of experience in web development with 
            a focus on React.js, Next.js, JavaScript, and TypeScript, along with solid knowledge of Node.js and databases.
          </p>          
          <br/>
          <p className="text-sm md:text-base lg:text-lg">
            My goal is to grow as a Full Stack Developer, enhance my skills, and deliver innovative and efficient solutions. 
            I&apos;m constantly seeking to learn and ready to contribute to impactful projects.
          </p>

          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("front-end")}
              active={tab === "front-end"}
            >
              Front-end
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("back-end")}
              active={tab === "back-end"}
            >
              Back-end
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
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
