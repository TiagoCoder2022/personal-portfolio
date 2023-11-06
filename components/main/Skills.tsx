"use client";

import React from "react";
import { Frontend_skill } from "@/constants";
import SkillsCard from "../sub/SkillsCard";

const Skills = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        My Skills
      </h1>
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
