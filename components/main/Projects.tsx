import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center py-20 z-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
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
