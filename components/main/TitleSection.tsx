"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideInFromRight, slideInFromTop } from "@/utils/motion";

interface TitleSectionProps {
  children: string;
  variants: any;
}

const TitleSection = ({ children, variants }: TitleSectionProps) => {
  return (
    <motion.h1
      variants={variants}
      className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
    >
      {children}
    </motion.h1>
  );
};

export default TitleSection;
