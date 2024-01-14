"use client";
import React from "react";
import { motion } from "framer-motion";

interface TitleSectionProps {
  children: any;
  variants: any;
}

const TitleSection = ({ children, variants }: TitleSectionProps) => {
  return (
    <motion.div variants={variants}>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-20">
        {children}
      </h1>
    </motion.div>
  );
};

export default TitleSection;
