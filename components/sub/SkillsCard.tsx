"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Tilt from "react-parallax-tilt";

interface SkillsContentProps {
  index: number;
  title: string;
  src: string;
  width: number;
  height: number;
}

const SkillsCard = ({ index, title, src }: SkillsContentProps) => {
  return (
    <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      transitionSpeed={1500}
      scale={1.02}
      gyroscope={true}
      className="w-50 green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <motion.div
        whileHover={{
          position: "relative",
          zIndex: 1,
          scale: [1, 1.4, 1.2],
          rotate: [0, 10, -10, 0],
          transition: {
            duration: 0.2,
          },
        }}
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 w-[280px] min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={src}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SkillsCard;
