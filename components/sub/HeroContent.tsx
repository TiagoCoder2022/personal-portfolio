"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col min-h-screen items-center  mt-40 justify-center px-10 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col justify-center lg:mx-auto text-center py-10">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 h-[140px] font-bold text-white w-auto lg:mt-6 lg:h-auto"
        >
          <span className="text-4xl md:text-5xl lg:text-6xl">
            Hello,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              I'm Tiago{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Front-end Developer",
                1000,
                "Back-end Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="lg:text-lg md:text-lg text-center text-gray-400 my-8 lg:mx-auto text-sm"
        >
          {" "}
          I&apos;m a Full Stack Software Developer with experience in website,
          Check out my projects and skills.
        </motion.p>

        <div className="flex justify-center gap-6 mx-auto py-3">
          <motion.a
            variants={slideInFromRight(1)}
            className="py-3 px-6 w-fit button-primary text-center text-white cursor-pointer rounded-lg"
          >
            <p>Download CV</p>
          </motion.a>
          <motion.a
            variants={slideInFromRight(1)}
            className="py-3 px-6 w-fit button-primary text-center text-white cursor-pointer rounded-lg"
          >
            <p>Contact Me</p>
          </motion.a>
        </div>
      </div>

      {/***<motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex  justify-center items-center "
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>***/}
    </motion.div>
  );
};

export default HeroContent;
