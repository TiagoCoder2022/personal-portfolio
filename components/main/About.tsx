"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import TitleSection from "./TitleSection";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

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
      <TitleSection variants={slideInFromLeft(0.5)}>About Me</TitleSection>

      <div className="md:grid md:grid-cols-2 bg-tertiary  gap-8 items-center py-8 px-4 xl:gap-14 sm:py-16 xl:px-16 about-scyfi">
        <Image
          src="/tiago-profile.jpg"
          width={400}
          height={400}
          unoptimized
          alt="Profile picture"
          className="object-contain rounded-lg shadow-card"
        />
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
      </div>
    </section>
  );
};

export default About;
