import React from "react";
import { Project } from "@/data/data";
//import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
//import { PiArrowSquareUpRightFill } from "react-icons/pi";
import Image from "next/image";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* link button at the top  */}
        <div
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white border-2 border-amber-800 rounded-full
	 text-amber-800 flex items-center justify-center flex-col ">
          <FaArrowUpRightFromSquare className="w-5 h-5 font-semibold drop-shadow-sm" />
        </div>
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10"> </div>
        {/* images */}
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
          className="overflow-hidden 
		h-full w-full transition-all duration-300 object-cover group-hover:scale-110"
        />
      </div>
      {/* content  */}
      <div>
        <h1
          className="mt-4 text-lg font-semibold text-blue-950
		 hover:text-black cursor-pointer transition-all duration-200">
          {project.title}
        </h1>
        <p className="text-sm text-gray-600 mt-3 fort-medium mb-6">
          {project.description}
        </p>
        <h4>{project.tech}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
