export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      desc: "Proficient in multiple languages for full-stack and backend development.",
      skills: ["Java","Python", "JavaScript", "TypeScript", "C#", "HTML", "CSS"],
      gradient: "from-pink-500/40 via-purple-500/20 to-blue-500/10",
    },
    {
      title: "Backend Development",
      desc: "Specialized in creating efficient, secure, and maintainable backend services.",
      skills: [
        "JDBC", "JPA", "JSON", "SOAP", "Node.js"
      ],
      gradient: "from-blue-500/40 via-cyan-400/20 to-green-400/20",
    },
    {
      title: "Frontend Development",
      desc: "Experienced in creating responsive and user-friendly interfaces using modern frontend technologies",
      skills: [
        "React.js", "Angular.js", "Tailwind.css", "BootStrap", "Vite"
      ],
      gradient: "from-blue-500/40 via-cyan-400/20 to-green-400/20",
    },
    {
      title: "Database",
      desc: "Designing, managing, and optimizing databases for high-performance applications.",
      skills: ["SQL", "PostgreSQL", "MongoDB", "DynamoDB", "ETL"],
      gradient: "from-green-400/40 via-emerald-400/20 to-teal-400/20",
    },
    {
      title: "Tools and Platforms",
      desc: "Proficient in development, testing, and collaboration tools for efficient project delivery.",
      skills: [
        "GitHub", "GitLab", "Visual Studio", "NetBeans", "JIRA", "Jenkins", "Postman", "JUnit", "Mockito", "Android Studio", "Linux", "UNIX"
      ],
      gradient: "from-pink-400/40 via-red-400/20 to-orange-400/20",
    },
  ];

  return (
    <section id="skills" className="py-16 bg-transparent dark:bg-transparent">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-center backdrop-blur-md shadow-lg border border-white/10 bg-gradient-to-br ${category.gradient} hover:scale-105 transition-transform duration-300`}
          >
            <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {category.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-white/10 dark:bg-gray-800/30 rounded-full text-gray-800 dark:text-gray-200 backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
