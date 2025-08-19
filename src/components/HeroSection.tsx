import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
const HeroSection = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [techCount, setTechCount] = useState(0);
  useEffect(() => {
    // Animate counters
    const projectTimer = setInterval(() => {
      setProjectCount(prev => prev < 10 ? prev + 1 : 10);
    }, 100);
    const techTimer = setInterval(() => {
      setTechCount(prev => prev < 5 ? prev + 1 : 5);
    }, 150);
    return () => {
      clearInterval(projectTimer);
      clearInterval(techTimer);
    };
  }, []);
  return <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground font-medium tracking-wide uppercase">
                Backend Developer
              </p>
              <h1 className="hero-text text-balance">Hello</h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                — I'm Kunal Katira, Fueled by passion, I craft secure and scalable backends that power modern apps.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-balance">
                Backend Developer | Full Stack Creator | API Security Specialist
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Crafting robust RESTful APIs with Java & Spring Boot, focused on security and scalability.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">+{projectCount}</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">+{techCount}</div>
                <p className="text-sm text-muted-foreground">Technologies Mastered</p>
              </div>
            </div>
          </div>

          {/* Right content - Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img src={profilePhoto} alt="Kunal Katira - Backend Developer" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        
      </div>
    </section>;
};
export default HeroSection;