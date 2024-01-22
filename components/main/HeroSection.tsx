"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col h-[100vh] mx-auto md:container max-w-[1920px] z-20"
    >
      <div
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          backgroundImage: "url('/contact-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030014]/100" />

      <div className="w-full relative py-[45%] md:py-[20%] lg:py-[15%]">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full"
        >
          <div className="h-full w-full  flex flex-col">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col font-bold text-white w-auto lg:h-auto"
            >
              <span className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl">
                HELLO,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  I&apos;m TIAGO{" "}
                </span>
                <br></br>
                <span className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      // wait 1s before replacing "Mice" with "Hamsters"
                      "FULL-STACK",
                      1000,
                      "FRONT-END",
                      1000,
                      "BACK-END",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </span>
            </motion.div>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="lg:text-sm xl:text-xl text-center md:text-start mt-10 max-w-xs  lg:max-w-md xl:max-w-xl text-[#ADB7BE] text-sm"
            >
              {" "}
              I&apos;m a Full Stack Software Developer with experience in
              website, Check out my projects and skills.
            </motion.p>

            <div className="flex justify-start gap-4 md:gap-6 text-xs md:text-sm py-4">
              <motion.a
                variants={slideInFromRight(1)}
                className="py-3 px-6 rounded-sm w-fit button-primary text-center text-white cursor-pointer button-scyfi"
              >
                <p>Download CV</p>
              </motion.a>
              <motion.a
                href="#contact"
                variants={slideInFromRight(1)}
                className="py-3 px-6 w-fit button-primary rounded-sm text-center text-white cursor-pointer button-scyfi"
              >
                <p>Contact Me</p>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
