import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/data/data";

const projects = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Section Heading */}
      <SectionHeading heading="My Projects" />
      <div
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      xl:grid-cols-4 gap-8 items-center mt-16">
        {/* Project card */}
        {projectData.map((data) => {
          return (
            <div key={data.id}>
              <ProjectCard project={data} />
            </div>
          );
        })}
      </div>

      {/* SectionContent */}
    </div>
  );
};

export default projects;
