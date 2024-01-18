"use client";
import React from "react";
import { motion } from "framer-motion";

interface TitleSectionProps {
  children: any;
}

const TitleSection = ({ children }: TitleSectionProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-20"
    >
      {children}
    </motion.h1>
  );
};

export default TitleSection;
