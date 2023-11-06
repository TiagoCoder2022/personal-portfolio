import React from "react";
import { RxLinkedinLogo, RxInstagramLogo, RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
