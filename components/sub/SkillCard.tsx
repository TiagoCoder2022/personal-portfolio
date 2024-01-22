"use client";

import Tilt from "react-parallax-tilt";
import React from "react";
import { IconType } from "react-icons/lib";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiRedux } from "react-icons/si";

interface SkillCardProps {
  id: number;
  name: string;
  title: string;
}

const getIconForSkill = (skillName: string): IconType | null => {
  switch (skillName) {
    case "html":
      return FaHtml5;
    case "css":
      return FaCss3;
    case "javascript":
      return FaJs;
    case "react":
      return FaReact;
    case "tailwind":
      return SiTailwindcss;
    case "redux":
      return SiRedux;
    case "typescript":
      return SiTypescript;
    case "node":
      return FaNodeJs;
    default:
      return null;
  }
};

const SkillCard: React.FC<SkillCardProps> = ({ id, name, title }) => {
  const IconComponent = getIconForSkill(name);

  if (!IconComponent) {
    // Handle case where the skill name doesn't match any known icon
    return null;
  }

  return (
    <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      transitionSpeed={1500}
      scale={1.02}
      gyroscope={true}
      className=" green-pink-gradient w-44 md:w-48 p-[1px] rounded-xl shadow-card z-[20]"
    >
      <div>
        <div className="bg-tertiary rounded-xl py-5 px-12 w-[176px] min-h-[176px] md:w-[192px] md:min-h-[192px] flex justify-evenly items-center flex-col">
          <IconComponent size={50} fill="#00e5e5" />

          <h3 className="text-white text-[15px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

export default SkillCard;
