import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  useScrollAnimation();
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
  return <section id="hero" className="min-h-screen flex items-center justify-center pt-20 grid-background overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground font-medium tracking-wide uppercase">SOFTWARE ENGINEER</p>
              <h1 className="hero-text text-balance">Hello</h1>
              <p className="text-xl text-muted-foreground max-w-lg">— I'm Anurag Gurubhetti, fueled by passion, I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-balance">Software Engineer | Frontend Developer</h2>
              <p className="text-muted-foreground max-w-lg">
                Crafting robust Python APIs with Java & Spring Boot, focused on security and scalability.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-left">
                <div className="text-4xl font-bold text-primary">+{projectCount}</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-primary">+{techCount}</div>
                <p className="text-sm text-muted-foreground">Technologies Mastered</p>
              </div>
            </div>
          </div>

          {/* Right content - Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[400px] h-[400px]">
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
              
              <div className="absolute inset-0 animate-spin-slow pointer-events-none select-none">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 200, 200 m -182, 0 a 182,182 0 1,1 364,0 a 182,182 0 1,1 -364,0"
                    />
                  </defs>
                  <text className="fill-primary text-[15px] font-semibold tracking-[0.3em] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      FRONTEND DEVELOPER•SOFTWARE ENGINEER•ARTIFICIAL INTELLIGENCE ENTHUSIAST•
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Profile photo */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                  <img src="/lovable-uploads/43db5a98-2bdf-4b70-8fbb-ffac93ceb6e5.png" alt="Anurag Gurubhetti - Frontend Developer" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        
      </div>
    </section>;
};
export default HeroSection;