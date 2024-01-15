import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: any;
  children: string;
}

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active
    ? "text-white border-b  border-purple-500 shadow-lg shadow-[#2A0E61]/50"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
