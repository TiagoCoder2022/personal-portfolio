import React from "react";
import ProjectCard from "../sub/ProjectCard";
import TitleSection from "../main/TitleSection";
import { slideInFromRight } from "@/utils/motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 z-20"
    >
      <TitleSection>My Projects</TitleSection>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lore ipsum sit amet, conssecter adicispcnrf elitrs, sed de eiasons"
        />

        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website cards"
          description="Lore ipsum sit amet, conssecter adicispcnrf elitrs, sed de eiasons"
        />

        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space themed website"
          description="Lore ipsum sit amet, conssecter adicispcnrf elitrs, sed de eiasons"
        />
      </div>
    </section>
  );
};

export default Projects;
