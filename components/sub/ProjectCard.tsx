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
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-tertiary">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover h-[280px]"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <ul className="nav pb-8">
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
