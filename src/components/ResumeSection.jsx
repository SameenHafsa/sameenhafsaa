import { useState } from "react";

export const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="py-20" id="resume">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center text-white">
          My Resume
        </h3>
        <p className="mt-4 text-lg leading-8 text-center text-white">
          Below is a summary of my educational background and professional
          experience.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mt-10 space-x-8">
          <button
            className={`text-xl font-semibold ${
              activeTab === "education" ? "text-yellow-500" : "text-white"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={`text-xl font-semibold ${
              activeTab === "experience" ? "text-yellow-500" : "text-white"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-10">
          {activeTab === "education" && (
            <div>
              <div className="flex justify-center">
                <div className="flex items-center space-x-4">
                  <span className="text-green-500 font-semibold">
                    2022 - 2023
                  </span>
                  <div className="border-l-2 border-emerald-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-white">
                    Master of Science in Computer Science
                  </h4>
                  <p className="text-white">
                    Elmhurst University, Elmhurst, IL
                  </p>
                  <p className="mt-2 text-white">
                    <span className="font-bold">Coursework:</span>{" "}
                    Database Management Systems, Mobile Application Development, 
                    Computer Networks, Virtualization, Web Application Development
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-4">
                  <span className="text-green-500 font-semibold">
                    2016 - 2020
                  </span>
                  <div className="border-l-2 border-emerald-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-white">
                    Bachelor of Science in Electronics and Communications Engineering
                  </h4>
                  <p className="text-white">JNTUH, India</p>
                  <p className="mt-2 text-white">
                    <span className="font-bold">Coursework:</span> Data
                    Structures and Algorithms,  Object-Oriented
                    Programming, COmputer Security, Operating Sytems
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div>
              <div className="flex justify-center">
                <div className="flex items-center space-x-4">
                  <span className="text-green-500 font-semibold">
                    2024 - Present
                  </span>
                  <div className="border-l-2 border-emerald-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-white">
                    Software Engineer
                  </h4>
                  <p className="text-white">
                    Concord Systems, Chicago, IL
                  </p>
                  <p className="mt-2 text-white">
                    Developed and deployed scalable web applications using React, 
                    Node.js, and Java Spring Boot, while optimizing CI/CD pipelines and collaborating with cross-functional teams.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-4">
                  <span className="text-green-500 font-semibold">
                    2022 - 2023
                  </span>
                  <div className="border-l-2 border-emerald-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-white">
                    Software Engineer Assistant
                  </h4>
                  <p className="text-white">
                    Elmhurst University, Elmhurst, IL
                  </p>
                  <p className="mt-2 text-white">
                    Resolved TDNext system tickets
                     and contributed to feature design and implementation, improving software reliability and reducing bug reports.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-4">
                  <span className="text-green-500 font-semibold">
                    2019 - 2021
                  </span>
                  <div className="border-l-2 border-emerald-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-white">
                    Software Engineer
                  </h4>
                  <p className="text-white">Vertilink Technologies, India</p>
                  <p className="mt-2 text-white">
                    Built and deployed full-stack web applications using React, Node.js, TypeScript, Spring Boot,
                     and MongoDB, automating workflows with Python to improve efficiency and accuracy by 40%.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
