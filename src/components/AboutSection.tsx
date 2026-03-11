import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Code, Cloud, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import { useTheme } from "next-themes";
const AboutSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed text-left">Computer Engineering undergrad with expertise in Java, Python & C/C++. Passionate about full-stack web development, AI technologies & cloud computing. I craft exceptional digital experiences that are fast, accessible, visually appealing & responsive. Experienced in building collaborative web applications & data analysis tools with a strong foundation in OOP & DSA. I explore concepts in entrepreneurship, AI & Software Engineering. I build scalable, open-source systems empowering communities and solving real-world problems, impact-first. </p>
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <a href="/resume.html" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="cta" className="cursor-target rounded-2xl">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </a>
              <div className="cursor-target px-5 py-2.5 rounded-full border border-black dark:border-white bg-foreground/5 backdrop-blur-sm">
                <ShinyText
                  text="OPEN TO WORK"
                  speed={3}
                  className="text-base font-bold tracking-wider"
                  color={isDark ? "hsl(var(--muted-foreground))" : "#222222"}
                  shineColor={isDark ? "hsl(var(--foreground))" : "#8c8c8c"}
                  spread={120}
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="inline-block"
                >
                  <Card className="cursor-target p-5 lg:p-6 bg-card hover:shadow-2xl transition-shadow duration-500 ease-in-out group relative overflow-hidden border border-foreground/20 hover:border-foreground/50 rounded-2xl cursor-pointer w-fit"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 lg:w-12 lg:h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                      </div>
                      <div className="flex items-center">
                        <h3 className="subheading-text whitespace-nowrap">{feature.title}</h3>
                        <ChevronRight
                          className={`w-4 h-4 text-primary ml-1 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                        />
                      </div>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed pt-4 ml-[60px] lg:ml-[64px] max-w-md">{feature.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;