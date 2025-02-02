"use client";
import React from "react";
import TitleSection from "../sub/TitleSection";
import { skill_fullstack } from "@/constants";
import SkillCard from "../sub/SkillCard";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="skills"
      className="container max-w-4xl mx-auto flex flex-col items-center justify-center h-[100vh]"
    >
      <TitleSection> Skills</TitleSection>

      <div
        className="absolute inset-0 h-full w-full object-cover"
        style={{
         zIndex: -1,
         position: "fixed",
         width: "100"
        }}
      >
        <Image 
          src="/bg-grid-hero-m.svg" 
          alt="grid-bg"
          layout="fill"
          objectFit="cover"
        />
      </div> 

      <div className="justify-center grid grid-cols-2 gap-6  md:gap-8 md:grid-cols-3 lg:grid-cols-4 z-[20]">
        {skill_fullstack.map((skill, i) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <SkillCard id={skill.id!} name={skill.name!} title={skill.title!} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
