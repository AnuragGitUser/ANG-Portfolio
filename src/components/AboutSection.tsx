import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      title: "Full-Stack Development",
      description: "From backend APIs to frontend interfaces, I build complete solutions.",
      icon: "💻"
    },
    {
      title: "Security First",
      description: "Implementing JWT, OAuth2, and role-based authentication systems.",
      icon: "🔒"
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Dharmsinh Desai University, Nadiad",
      period: "Expected March 2026",
      cgpa: "8.0"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Dr. V.R. Godhaniya IT College (BKNMU), Porbandar",
      period: "April 2024",
      cgpa: "8.86"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="space-y-16">
          {/* About Me */}
          <div className="space-y-8">
            <h2 className="heading-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-4xl">
              Backend developer with hands-on experience in Java, Spring Boot, and developing secure, scalable RESTful APIs using Spring Security. Skilled in multiple programming languages and frameworks, with a strong focus on delivering robust, maintainable, and performance-driven solutions.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg smooth-transition">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div className="space-y-2">
                    <h3 className="subheading-text">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="subheading-text">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 space-y-2">
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;