"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import TitleSection from "../sub/TitleSection";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto flex flex-col items-center justify-center py-20 z-20"
    >
      <TitleSection>My Projects</TitleSection>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-5 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        <ProjectCard
          src="/fsw-store.png"
          title="FSW Store app"
          href1="https://fsw-store-beta.vercel.app/"
          href2="https://github.com/TiagoCoder2022/fsw-store"
          description="This is the computer peripherals e-commerce build in Next.js, Shadcn/ui, Tailwind, Prisma, Postgres"
        />

        <ProjectCard
          src="/fsw-trips.png"
          title="FSW Trips"
          href1="https://fsw-trips-one.vercel.app/"
          href2="https://github.com/TiagoCoder2022/fsw-trips"
          description="Fullstack project for a travel and accommodation, build in Next.js, Typescript, Tailwind, Prisma, Next Auth"
        />

        <ProjectCard
          src="/fsw-foods.png"
          title="FSW Foods"
          href1="https://fsw-foods-chi.vercel.app/"
          href2="https://github.com/TiagoCoder2022/FSW-Foods"
          description="This is an iFood clone app, developed Next.js, Shadcn/ui, Tailwind, Prisma, Postgres"
        />
      </motion.div>
    </section>
  );
};

export default Projects;
