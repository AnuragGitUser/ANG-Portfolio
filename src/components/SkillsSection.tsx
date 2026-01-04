import { Badge } from "@/components/ui/badge";
import { Coffee, Settings, Code, GitBranch, Monitor } from "lucide-react";
const SkillsSection = () => {
  const skillCategories = [{
    title: "Languages",
    skills: ["Java", "Python", "C", "C++", "HTML", "CSS"],
    icon: Coffee
  }, {
    title: "Technologies",
    skills: ["Linux", "MS Office"],
    icon: Settings
  }, {
    title: "Version Control",
    skills: ["Git", "GitHub", "Vercel"],
    icon: GitBranch
  }, {
    title: "IDEs",
    skills: ["VS Code", "IntelliJ IDEA", "PyCharm"],
    icon: Monitor
  }, {
    title: "Concepts",
    skills: ["OOP", "DSA", "Functional Programming"],
    icon: Code
  }];
  return <section id="skills" className="pt-8 pb-24 overflow-hidden relative">
      <div className="section-container">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-text">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building secure, scalable, & modern applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {skillCategories.map((category, index) => <div key={index} className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="subheading-text text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="cursor-target text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground smooth-transition cursor-default">
                      {skill}
                    </Badge>)}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;