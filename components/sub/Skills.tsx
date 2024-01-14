import React from "react";
import SkillsCardTest from "./SkillCard";
import TitleSection from "../main/TitleSection";
import { slideInFromRight } from "@/utils/motion";
import { skill_frontend } from "@/constants";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="container max-w-4xl mx-auto flex flex-col items-center justify-center"
    >
      <TitleSection variants={slideInFromRight(0.5)}> Skills</TitleSection>
      <div className="justify-center flex flex-wrap gap-10">
        {skill_frontend.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
