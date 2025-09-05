import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C/C++"]
    },
    {
      title: "Frameworks/Libraries",
      skills: ["Spring Boot", "Spring Data JPA", "Pandas", "NumPy"]
    },
    {
      title: "Security",
      skills: ["Spring Security", "JWT", "OAuth2", "BCrypt"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "REST APIs"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JSP"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-text">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building secure, scalable, and modern applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="subheading-text text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground smooth-transition cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;