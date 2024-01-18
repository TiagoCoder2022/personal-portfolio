"use client";
import React from "react";
import SkillsCardTest from "./SkillCard";
import TitleSection from "../main/TitleSection";
import { skill_frontend } from "@/constants";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft } from "@/utils/motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="container max-w-4xl mx-auto flex flex-col items-center justify-center"
    >
      <TitleSection> Skills</TitleSection>
      <div className="justify-center flex flex-wrap gap-10">
        {skill_frontend.map((skill, i) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
