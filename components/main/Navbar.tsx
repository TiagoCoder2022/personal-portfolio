"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  let Links = [
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50  z-50 px-10 transition-all duration-500 ease-in ${
        open ? "bg-[#030014]" : "bg-[#03001417] backdrop-blur-lg"
      }`}
    >
      <div className="md:flex items-center py-6 justify-between md:px-10">
        <a
          href="#home"
          className="font-bold text-2xl cursor-pointer flex items-center"
        >
          <span className="font-bold text-xl text-gray-300">TIAGO</span>
        </a>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white hover:text-cyan-500 focus:outline-none transition-all duration-500 ease-in-out"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-12 bg-[#030014] shadow-lg shadow-[#2A0E61]/50"
              : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-16 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="relative text-cyan-500 text-lg hover:text-white duration-500 nav-btn"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
