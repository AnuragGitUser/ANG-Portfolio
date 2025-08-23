import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Secure REST API – User Authentication System",
      description: "Built with Spring Boot, Spring Security, JWT, OAuth2. Features stateless authentication, role-based access control, and Google social login integration.",
      technologies: ["Spring Boot", "Spring Security", "JWT", "OAuth2", "MySQL"],
      codeUrl: "https://github.com/Kunal-1610",
      demoUrl: "#"
    },
    {
      title: "Somras – Online Alcohol Ordering App",
      description: "Android application with MySQL backend, Volley API integration, and secure authentication system for seamless alcohol ordering experience.",
      technologies: ["Android", "MySQL", "Volley API", "Java"],
      codeUrl: "https://github.com/Kunal-1610",
      demoUrl: "#"
    },
    {
      title: "Dream Home – Online Real Estate Marketplace",
      description: "J2EE web application using JSP/Servlets with MySQL database. Features property search filters, user registration/login, and property management.",
      technologies: ["J2EE", "JSP/Servlets", "MySQL", "Bootstrap"],
      codeUrl: "https://github.com/Kunal-1610",
      demoUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="section-container">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-text">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in backend development, security implementation, and full-stack solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
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
            <Button variant="outline" className="bg-white text-black border-black hover:bg-black hover:text-white" asChild>
              <a href="https://github.com/Kunal-1610" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
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