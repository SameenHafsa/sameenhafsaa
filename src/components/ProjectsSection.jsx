import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Stock Portfolio Web Application",
    company: "ASU, Tempe",
    duration: "Aug 2024 - Present",
    techStack: [
      "JavaScript",
      "React.js",
      "Chart.js",
      "API Integration",
      "HTML5",
      "CSS3",
      
    ],
    description: [
      "Developed a web application for real-time stock monitoring, visualizing stock performance and financial metrics via APIs and Chart.js, processing data across 3 time ranges.",
      "Constructed a modular front-end in React.js, optimizing data flow and responsiveness, enabling access to summaries and metrics for 10+ stocks.",
    ],
  },
  {
    id: 2,
    title: "Fullstack Tiktok Clone",
    company: "ASU, Tempe",
    duration: "July 2024 – Present",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "AppWrite",
      "Vercel",
    ],
    description: [
      "Built a full-stack TikTok clone with video upload, streaming, and user authentication, ensuring full responsiveness with sub-1.5 second load times using Tailwind CSS.",
      "Optimized backend processes and data management for profiles, posts, likes, and comments, improving API response times by 50% and enabling support for over 10,000 concurrent users with Node.js and AppWrite.",
    ],
  },
  {
    id: 3,
    title: "WBGT Prediction System for Occupational Safety",
    company: "ASU, Tempe",
    duration: "June 2024 - Present",
    techStack: ["Python", "Scikit-learn", "Pandas", "Geopandas", "Pvlib"],
    description: [
      "Created agent-based models in Python to forecast workday disruptions due to heat stress throughout the 21st century, optimizing work hours across various occupations, and improving occupational health and safety.",
      "Applied advanced data parsing and cluster analysis techniques to handle large NetCDF datasets, leveraging Pvlib and GeoPandas for precise geospatial analysis, and accurately predicting work hours for over 500 zip codes.",
    ],
  },
  {
    id: 4,
    title: "CancerSim2",
    company: "Bio-design Institute, ASU, Tempe",
    duration: "February 2024 – Present",
    techStack: [
      "Agent-Based Modeling",
      "C++",
      "Parallel Computing",
      "ParaView",
    ],
    description: [
      "Upgraded the CancerSim model with parallel computing capabilities in C++, enabling simulations of up to 3 billion cells and boosting tissue simulation speeds by 30% with ParaView for visualization.",
      "Introduced an API for automated, metrics-driven drug delivery, applying custom rules to determine the appropriate drug and dosage, effectively eliminating the need for manual intervention.",
    ],
  },
  {
    id: 5,
    title: "KG-Infused LLM for Virtual Health Assistant",
    company: "ASU, Tempe",
    duration: "March 2024 – July 2024",
    techStack: ["Python", "Neo4j", "NER", "Scikit-learn"],
    description: [
      "Integrated the UMLS database with LLMs using Neo4j Knowledge Graphs, enhancing the reliability and relevance of a AI Healthcare Assistant by reducing inference times by 80% and increasing ROUGE-L scores by 18%.",
      "Optimized LLM responses using prompt engineering and named entity recognition (NER), achieving an 8-10% BERTScore increase and improving patient query accuracy.",
    ],
  },
  {
    id: 6,
    title: "Optimization and Simulation in ABM",
    company: "ASU, Tempe",
    duration: "Jan 2024 - May 2024",
    techStack: ["Python", "Genetic Algorithms", "Numpy", "Pandas"],
    description: [
      "Engineered agent-based models simulating ant colony foraging using Python and differential equations, enhancing decision-making efficiency by 30%.",
      "Implemented privacy-conscious STD prevalence estimation using Pandas and NumPy, reducing data processing time by 40% through API-driven data collection and statistical analysis.",
      "Created a genetic algorithm in Python for finding covering arrays, significantly reducing the number of required test configurations for software testing.",
    ],
  },
  {
    id: 7,
    title: "Personal Loan Classifier",
    company: "ASU, Tempe",
    duration: "Jan 2024 - May 2024",
    techStack: [
      "Feature Engineering",
      "XGBoost",
      "SMOTE",
      "Cost-Sensitive Learning",
    ],
    description: [
      "Improved XGBoost model's F1-score from 94.12 to 95.35 by applying cost-sensitive learning, enhancing predictive performance on imbalanced financial data by 1.23%.",
      "Refined data preprocessing, including noise reduction and outlier detection, boosting feature engineering accuracy by 30% and effectively addressing class imbalance with SMOTE.",
    ],
  },
  {
    id: 8,
    title: "CX Collections",
    company: "Finance and Technology",
    duration: "July 2021 – December 2023",
    techStack: [
      "Java",
      "REST APIs",
      "Spring Boot",
      "Cassandra",
      "Azure",
      "Drools",
      "React",
      "TypeScript",
      "JavaScript",
      "Whimsical",
      "Figma",
      "Redux",
    ],
    description: [
      "Developed collections software to optimize credit card bill recovery from delinquent customers, improving efficiency for issuers.",
      "Cut UI project costs by 20% and improved usability by migrating to an in-house solution using React, JavaScript, and TypeScript.",
      "Engineered REST APIs and microservices using Java and Spring Boot, achieving sub-200 ms response times and optimizing communication between backend systems and frontend applications.",
      "Automated account processing with Azure-hosted queues reducing bad debt by 15%.",
      "Designed a Splunk and PowerBI dashboard to monitor team targets and performance indicators, facilitating strategic decisions.",
    ],
  },
  {
    id: 9,
    title: "Legume Isoflavonoids - Structure and Function",
    company: "BITS Pilani, Pilani",
    duration: "January 2021 - May 2021",
    techStack: [
      "Pylogenetics",
      "Scikit-Bio",
      "Scapy",
      "BLAST",
      "Python",
      "Matplotlib",
      "R",
    ],
    description: [
      "Investigated interactions of isoflavonoids with diverse compounds for biopesticide, antibiotic, and anticancer applications, utilizing BLAST and Bioconductor to process over 1,000 gene sequences.",
      "Applied phylogenetic analysis to infer evolutionary relationships among isoflavonoid biosynthesis genes across legumes, using Python for advanced data mining and visualization of biological patterns.",
    ],
  },
  {
    id: 10,
    title: "Multi-Object Identification: An Autonomous Car",
    company: "BOSCH India",
    duration: "August 2020 - December 2020",
    techStack: ["MOT", "Computer Vision", "OpenCV", "TensorFlow", "Python"],
    description: [
      "Led the development of an advanced algorithm for Level-2 autonomy in self-driving vehicles, focusing on Multi-Object Identification (MOT) and optimizing vehicle perception through rigorous testing, reducing identity switches by 45%.",
      "Implemented TensorFlow's U-net for accurate object classification and integrated OpenCV's SORT to enhance tracking, significantly improving decision-making in autonomous driving systems.",
    ],
  },
  {
    id: 11,
    title: "Diabetic Retinopathy Detection",
    company: "BITS Pilani, Pilani",
    duration: "January 2020 - July 2020",
    techStack: ["Python", "Django", "Scikit-Learn", "Deep Learning"],
    description: [
      "Engineered a retinopathy detection CNN algorithm with 95% accuracy, integrating data filtering, neural network-based diagnostic keyword generation, and stage determination.",
      "Developed the project as a web application using Django to ensure accessibility for healthcare providers.",
    ],
  },
  {
    id: 12,
    title: "The Study of Some Select Issues in Indian Philosophy",
    company: "BITS Pilani, Pilani",
    duration: "August 2019 - December 2019",
    techStack: ["Excel", "Research Paper Study"],
    description: [
      "Conducted a comprehensive study of metaphysical foundations of Indian philosophical systems, exploring society and state relations.",
      "Provided comparative analysis of key concepts like God, Self, and the World across various Indian philosophical traditions.",
    ],
  },
  {
    id: 13,
    title: "Livelihoods",
    company: "Helpage India, Hyderabad",
    duration: "May 2019 - July 2019",
    techStack: [
      "Excel",
      "R",
      "Mathematical Modeling",
      "Predictive Analysis",
      "Python",
      "Visualization",
    ],
    description: [
      "Analyzed health and demographic data using R and Excel across five cities, applying statistical and probability models to forecast a 40% increase in welfare uptake, leading to the creation of new policies to improve elderly care and financial strategies.",
    ],
  },
  {
    id: 14,
    title: "Smart Overhead Tank",
    company: "BITS Pilani, Pilani",
    duration: "April 2019",
    techStack: ["NASM"],
    description: [
      "Developed an algorithm optimizing water utilization in overhead tanks using microprocessors and interfacing technologies.",
      "Implemented a self-adjusting system refining water usage, promoting efficient conservation without manual intervention.",
    ],
  },
  {
    id: 15,
    title: "Compiler Construction",
    company: "BITS Pilani, Pilani",
    duration: "August 2018 - December 2018",
    techStack: ["NASM", "C++"],
    description: [
      "Developed a complete Compiler from scratch, covering all essential components like lexical analyzer, syntactic analyzer, and semantic analyzer.",
      "Successfully generated final code compatible with NASM, demonstrating expertise in low-level programming and compiler design.",
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