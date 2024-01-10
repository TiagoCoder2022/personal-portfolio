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
      className="container flex flex-col items-center justify-center mx-auto lg:mx-16 max-w-[1920px] z-20"
    >
      <div className="w-full relative">
        <div
          className=" absolute inset-0 h-full w-full object-cover"
          style={{
            backgroundImage: "url('/lost-in-space.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#030014]/100" />

        <motion.div
          initial="hidden"
          animate="visible"
          className="flex py-[40%] md:py-[20%] lg:py-[12%] flex-col px-10 md:px-14 min-h-screen w-full"
        >
          <div className="absolute h-full w-full  flex flex-col">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col font-bold text-white w-auto lg:h-auto"
            >
              <span className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
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
              className="lg:text-sm xl:text-lg text-center md:text-start mt-10 max-w-xs  lg:max-w-md xl:max-w-lg text-[#ADB7BE] text-xs"
            >
              {" "}
              I&apos;m a Full Stack Software Developer with experience in
              website, Check out my projects and skills.
            </motion.p>

            <div className="flex justify-start gap-3 md:gap-4 text-xs md:text-sm py-4">
              <motion.a
                variants={slideInFromRight(1)}
                className="py-3 px-6 rounded-sm w-fit button-primary text-center text-white cursor-pointer button-scyfi"
              >
                <p>Download CV</p>
              </motion.a>
              <motion.a
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
