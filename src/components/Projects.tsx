import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects">

      <SectionHeading>
      <div className="text-center">My Projects
      </div></SectionHeading> 
      

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
