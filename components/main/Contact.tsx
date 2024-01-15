"use client";
import React from "react";
import { motion } from "framer-motion";
import TitleSection from "../main/TitleSection";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center max-w-[1920px]"
    >
      <TitleSection>Contact</TitleSection>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex flex-row gap-2"
            >
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h4 className="text-xl uppercase text-cyan-500 font-medium mb-b tracking-wide">
                Get in touch
              </h4>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-[45px] uppercase lg:text-[70px] leading-none mb-12 text-white "
            >
              LET&apos;S WORK <br /> TOGETHER!
            </motion.h3>
          </div>
          <motion.form
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex-1 border flex flex-col rounded-md gap-y-6 pb-24 p-6 w-full items-start max-w-xl"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full text-white placeholder:text-cyan-400 focus:border-purple-500 transition-al"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full text-white placeholder:text-cyan-400 focus:border-purple-500 transition-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full text-white placeholder:text-cyan-400 resize-none mb-12 focus:border-purple-500 transition-all"
              placeholder="Your message"
            ></textarea>
            <a className="py-3 px-6 w-fit button-primary rounded-sm text-center text-white cursor-pointer button-scyfi">
              Send message
            </a>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
