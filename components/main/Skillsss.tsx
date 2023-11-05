"use client";

import React from "react";
import { Frontend_skill } from "@/constants";
import SkillsCard from "../sub/SkillsCard";

const Skillsss = () => {
  return (
    <section className="container mx-auto p-5">
      <div className="mt-20 flex flex-wrap gap-10">
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

export default Skillsss;
