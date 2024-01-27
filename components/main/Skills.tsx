"use client";
import React from "react";
import TitleSection from "../sub/TitleSection";
import { skill_fullstack } from "@/constants";
import SkillCard from "../sub/SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="container max-w-4xl mx-auto flex flex-col items-center justify-center"
    >
      <TitleSection> Skills</TitleSection>
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
