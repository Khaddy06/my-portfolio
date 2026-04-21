import { useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FEATURED_PROJECTS, MORE_PROJECTS, Project } from "../data/site";

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-[#112240] p-6 rounded-lg transform transition-transform duration-300 ease-out
          hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex justify-between mb-4">
              <CiFolderOn className="text-[#64ffda] text-4xl" />
              <div className="flex gap-5">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <FiGithub
                      size={20}
                      className="text-[#ccd6f6] hover:text-[#64ffda]"
                    />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <FiExternalLink
                      size={20}
                      className="text-[#ccd6f6] hover:text-[#64ffda]"
                    />
                  </a>
                )}
              </div>
            </div>
            <h3 className="md:text-xl text-base font-bold text-[#ccd6f6] hover:text-[#64ffda] mb-2">
              {project.title}
            </h3>
            <p className="text-[#8892b0] md:text-base text-sm mb-4 font-semibold">
              {project.description}
            </p>
          </div>
          <p className="text-[#8892b0] text-xs font-semibold">
            {project.techStack}
          </p>
        </div>
      ))}
    </div>
  );
}

function Work() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-5xl mx-auto text-center">
      <div className="flex items-center gap-3 md:gap-5">
        <h2 className="md:text-3xl text-2xl text-[#64ffda] font-title mb-6  pb-2 ">
          03. Some Things I've Built
        </h2>
        <p className="border border-b border-[#112240] flex-1 mb-6 hidden md:block"></p>
      </div>
      <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="text-[#8892b0] mb-6 text-lg md:text-lg text-sm font-medium">
          Here are a few projects I've worked on recently. Each project
          showcases my skills and expertise in web development.
        </p>
        <p className="text-[#8892b0] mb-3 text-sm md:text-base font-medium">
          I am always eager to learn and explore new technologies, so feel free
          to reach out if you have any questions or would like to collaborate.
        </p>
        <CiFolderOn className="text-[#64ffda] text-2xl" />
      </div>
      <ProjectGrid projects={FEATURED_PROJECTS} />
      {showMore && <ProjectGrid projects={MORE_PROJECTS} />}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-6 inline-block border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded hover:shadow-[0_0_10px_#64ffda] 
          transition-all duration-300"
      >
      {showMore? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default Work;
