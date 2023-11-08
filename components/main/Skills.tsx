"use client";

import React from "react";
import { Frontend_skill } from "@/constants";
import SkillsCard from "../sub/SkillsCard";
import TitleSection from "./TitleSection";
import { slideInFromRight } from "@/utils/motion";

const Skills = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center">
      <TitleSection variants={slideInFromRight(0.5)}>My Stack</TitleSection>
      <div className="mt-20 justify-center flex flex-wrap gap-10">
        {Frontend_skill.map((image, index) => (
          <SkillsCard
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            title={image.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
