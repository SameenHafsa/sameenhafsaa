import { Briefcase, User, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with 5+ years of experience in building scalable, secure, and high-performance web applications. 
              My expertise spans Java backend development (Spring Boot, Spring Security, Hibernate, RESTful APIs), databases (SQL & NoSQL), and frontend technologies (React.js, Angular.js, Tailwind CSS, JavaScript).
            </p>
            <p className="text-muted-foreground">
              I have hands-on experience with cloud platforms (AWS, Azure, GCP), containerization (Docker, Kubernetes), DevOps practices, and agile workflows. 
              I thrive on solving complex problems, optimizing performance, and delivering robust solutions that enhance user experiences.
            </p>
            <p className="text-muted-foreground">
              I continuously explore emerging technologies to stay ahead and contribute effectively to every project I undertake.
            </p>
          </div>

          {/* Skill Highlights */}
      {/*    <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">   
                <Code className="h-6 w-6 text-primary"/>  
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Backend Development</h4>
                <p className="text-muted-foreground">
                  Building secure, efficient, and scalable backend services with Java, Spring Boot, Node.js, and databases.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">   
                <User className="h-6 w-6 text-primary"/>  
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Frontend Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive, interactive, and modern UIs using React.js, Angular, Tailwind CSS, and JavaScript.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">   
                <Briefcase className="h-6 w-6 text-primary"/>  
              </div> 
              <div className="text-left">
                <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
                <p className="text-muted-foreground">
                  Deploying and managing applications on AWS, Azure, GCP with CI/CD pipelines, Docker, and Kubernetes.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
