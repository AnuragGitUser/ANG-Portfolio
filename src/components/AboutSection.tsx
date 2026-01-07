import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Code, Cloud } from "lucide-react";
const AboutSection = () => {
  const features = [{
    title: "Frontend Development",
    description: "Building end-to-end web applications with modern technologies and cloud integration.",
    icon: Code
  }, {
    title: "AI & Cloud Technologies",
    description: "Exploring AI applications and cloud-based solutions for scalable software development.",
    icon: Cloud
  }];
  const education = [{
    degree: "Bachelor of Technology (B.Tech) - Computer Engineering",
    school: "A. G. Patil Institute of Technology, Solapur",
    period: "Nov 2022 - Present",
    cgpa: "Ongoing"
  }, {
    degree: "XII (State Board)",
    school: "Shri Sangameshwar Autonomous College, Solapur",
    period: "Aug 2020 - Mar 2022",
    cgpa: "68.33%"
  }];
  return <section id="about" className="py-20 lg:py-28 overflow-hidden relative">
      <div className="section-container px-6 md:px-12 lg:px-16">
        <div className="space-y-12">
          {/* About Me */}
          <div className="space-y-6">
            <h2 className="heading-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed text-justify">Computer Engineering undergrad with expertise in Java, Python, and C/C++. Passionate about full-stack web development, AI technologies, and cloud computing. Experienced in building collaborative web applications & data analysis tools with a strong foundation in OOP and DSA. I explore concepts in entrepreneurship, AI & Software Engineering.</p>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="cta" className="cursor-target mt-4 rounded-2xl">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => <Card key={index} className="cursor-target p-5 lg:p-6 hover:shadow-lg smooth-transition">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 lg:w-12 lg:h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="subheading-text">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;