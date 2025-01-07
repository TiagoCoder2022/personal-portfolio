import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  href1: string;
  href2: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  href1,
  href2,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden mx-w-[500px] rounded-lg border border-[#2A0E61] bg-tertiary shadow-card">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="h-auto max-h-[70%] w-auto transform object-fit duration-300 ease-in-out motion-safe:hover:scale-110"
      />

      <div className="relative p-4">
        <h1 className="text-lg md:text-xl font-semibold text-white flex justify-center antialiased">
          {title}
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-300 antialiased">{description}</p>
      </div>
      <ul className="project-btn pb-4 text-sm md:text-lg">
        <li>
          <a href={href1} target="_blank">
            live
          </a>
        </li>
        <li>
          <a href={href2} target="_blank">
            Project
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectCard;
