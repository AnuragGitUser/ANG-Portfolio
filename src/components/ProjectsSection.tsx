import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Exploring the dimensions of Full Stack Web Development with modern responsive design and interactive features.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      codeUrl: "https://github.com/AnuragGitUser",
      demoUrl: "#"
    },
    {
      title: "Cloud-Based Document Collaboration (DuoCollab)",
      description: "Built DuoCollab, a web-app for collaboration of documents over cloud with real-time editing and sharing capabilities.",
      technologies: ["Cloud Computing", "Web Development", "JavaScript"],
      codeUrl: "https://github.com/AnuragGitUser",
      demoUrl: "#"
    },
    {
      title: "Glass-Morphism Calculator",
      description: "Experimenting with various JavaScript effects combined with HTML and CSS to create a modern glass-morphism calculator interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/AnuragGitUser",
      demoUrl: "#"
    },
    {
      title: "AgriMarket - Cloud-based Market Analyzer",
      description: "Built AgriMarket for agriculture support for farmers with price & weather prediction using AI and cloud technologies.",
      technologies: ["AI", "Cloud Computing", "Data Analysis"],
      codeUrl: "https://github.com/AnuragGitUser",
      demoUrl: "#"
    },
    {
      title: "Basic Text Editor",
      description: "Terminal based project in C programming language with essential text editing functionalities and file operations.",
      technologies: ["C Programming", "Terminal"],
      codeUrl: "https://github.com/AnuragGitUser",
      demoUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="section-container">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-text">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-xl smooth-transition hover:scale-105">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-balance">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="bg-black text-white border-black hover:bg-gray-800 hover:text-white dark:bg-white dark:text-black dark:border-white dark:hover:bg-gray-200 dark:hover:text-black" asChild>
              <a href="https://github.com/AnuragGitUser" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;