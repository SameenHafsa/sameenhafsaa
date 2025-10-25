import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground} from "../components/StarBackground";
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ResumeSection } from "../components/ResumeSection";
import { SoftSkillsSection } from "../components/SoftSkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {

    return (
         <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/* Theme Toggle - Styles*/}
    <ThemeToggle />

    {/* Background Effect - Meteor Shower/Lights */}
    <StarBackground />

    {/* NavBar - Home and stuff link (Can b removed) */}
    <Navbar />


    {/* Main content - Hero,About, projects,skills section */}
    <main>
      <HeroSection />  
      <AboutSection />
        <ResumeSection />
      <SkillsSection />
      <ContactSection/>
     {/* <ProjectsSection /> 
      <SoftSkillsSection />   */}
    </main>


    
    
    {/* Footer -simpe logo name or anything */}



    </div>
    )
}