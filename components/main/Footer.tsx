import { HeartIcon } from "@radix-ui/react-icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-14 flex items-center justify-center bg-transparent text-cyan-500">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm text-cyan-500">
        Made with
        <HeartIcon className="text-cyan-500 fill-cyan-500" />
        by
        <strong className="font-medium">Tiago Alves</strong>
      </span>
    </footer>
  );
};

export default Footer;
