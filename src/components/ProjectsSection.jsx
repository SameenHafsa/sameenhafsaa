import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Stock Portfolio Web Application",
    company: "ASU, Tempe",
    duration: "Aug 2024 - Present",
    techStack: [
      "C#",
      "HTML5",
      "CSS3",
      
    ],
    description: [
      "Developed a web application for real-time stock monitoring, visualizing stock performance and financial metrics via APIs and Chart.js, processing data across 3 time ranges.",
      "Constructed a modular front-end in React.js, optimizing data flow and responsiveness, enabling access to summaries and metrics for 10+ stocks.",
    ],
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="pt-10 dark:bg-gray-900">
      <div className="text-center">
        <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mt-8 mb-8 relative">
          Projects
        </h3>
      </div>
      <div className="px-6 sm:px-12 lg:px-24">
        <div className="split-screen-container bg-teal-700 dark:bg-teal-800 rounded-lg shadow-lg p-2">
          {/* Left Side - Project Titles */}
          <div className="project-titles dark:bg-gray-900">
            {projects.map((project) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className={`project-title ${
                  selectedProject.id === project.id ? "active" : ""
                } text-xs md:text-sm lg:text-base mb-4 cursor-pointer text-gray-900 dark:text-gray-100`}
                onClick={() => setSelectedProject(project)}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  borderBottom:
                    selectedProject.id === project.id
                      ? "2px solid #FFD700"
                      : "none", // Underline for selected project
                }} >
                {project.title}
              </div>
            ))}
          </div>

          {/* Right Side - Project Details */}
          <div className="project-details relative bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            {/* Full-cover overlay */}
            <div className="absolute inset-0 bg-yellow-500 dark:bg-yellow-600 opacity-75 z-10"></div>

            <div className="relative z-20 p-8 h-full flex flex-col justify-center">
              <div
                className="card-design bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
                style={{ minWidth: "600px" }}
                >
                <div className="card-header flex justify-between">
                  <h2 className="project-title text-2xl font-bold text-gray-900 dark:text-gray-300">
                    {selectedProject.title}
                  </h2>
                  <div
                    className="project-meta text-right text-gray-600 dark:text-gray-400"
                    style={{ whiteSpace: "nowrap" }}>
                    <p className="project-location">
                      {selectedProject.location}
                    </p>
                    <p className="project-duration">
                      {selectedProject.duration}
                    </p>
                  </div>
                </div>
                <div className="tech-stack mt-4">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="tech-badge bg-gray-200 dark:bg-gray-600 dark:text-gray-300 text-sm px-2 py-1 rounded mr-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="project-description mt-4 text-gray-700 dark:text-gray-400">
                  {selectedProject.description.map((desc, index) => (
                    <li key={index} className="mb-2">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}