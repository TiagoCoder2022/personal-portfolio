"use client";
import React, { useState } from "react";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import localFont from "next/font/local";
import Link from "next/link";

const nebula = localFont({ src: "../../fonts/Nebula-Regular.otf" });

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <nav className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-lg z-50 px-10">
      <div className="w-full flex flex-row items-center justify-between m-auto h-20">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold text-xl ml-[10px] text-gray-300">
            TIAGO
          </span>
        </a>

        <div className=" hidden w-[500px] h-full md:flex md:flex-row items-center justify-between">
          <div className="flex items-center w-full h-auto justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer text-cyan-500 hover:text-white"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer text-cyan-500 hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer text-cyan-500 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="cursor-pointer text-cyan-500 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="md:flex flex-row gap-5 hidden ">
          <a href="#">
            <LinkedInLogoIcon className="text-[#fff] h-6 w-6" />
          </a>
          <a href="#">
            <GitHubLogoIcon className="text-[#fff] h-6 w-6" />
          </a>
          <a href="#">
            <InstagramLogoIcon className="text-[#fff] h-6 w-6" />
          </a>
        </div>

        <div className="md:hidden  flex items-center">
          <button
            onClick={toggleNavbar}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-500 focus:outline-none"
          >
            {isClick ? (
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
          </button>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-4 sm:px-3 w-full">
            <div className="flex flex-row gap-5 mb-2">
              <a href="#">
                <LinkedInLogoIcon className="text-[#fff] h-6 w-6" />
              </a>
              <a href="#">
                <GitHubLogoIcon className="text-[#fff] h-6 w-6" />
              </a>
              <a href="#">
                <InstagramLogoIcon className="text-[#fff] h-6 w-6" />
              </a>
            </div>
            <a
              href="#about-me"
              className="cursor-pointer block text-cyan-500 hover:text-white"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer block text-cyan-500 hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer block text-cyan-500 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="cursor-pointer block text-cyan-500 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
