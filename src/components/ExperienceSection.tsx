import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Building2, Calendar, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Apmosys Technologies",
      duration: "Apr 2026 - Present",
      location: "On-site",
      description:
        "Contributing to software development projects, collaborating with cross-functional teams, and building scalable solutions using modern technologies.",
      highlights: [
        "Full-stack development with modern frameworks",
        "Agile methodology & collaborative development",
        "Code reviews and quality assurance",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding overflow-hidden relative">
      <div className="section-container">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-text">Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isOpen = openIndex === index;
              return (
                <Card
                  key={index}
                  className="cursor-target p-8 bg-transparent hover:bg-card hover:shadow-2xl transition-all duration-500 ease-in-out group relative overflow-hidden cursor-pointer border border-foreground/20 hover:border-foreground/50 rounded-2xl"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left - Role */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <h3
                          className="text-lg font-extrabold bg-clip-text text-transparent bg-[length:300%_100%] group-hover:animate-[shine_2.5s_ease-in-out_forwards]"
                          style={{
                            backgroundImage:
                              "linear-gradient(105deg, hsl(var(--foreground)) 30%, hsl(var(--muted-foreground)) 40%, white 50%, hsl(var(--muted-foreground)) 60%, hsl(var(--foreground)) 70%)",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <ChevronRight
                          className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                        />
                      </div>
                    </div>

                    {/* Right - Company & Duration */}
                    <div className="md:text-right flex-shrink-0 ml-14 md:ml-0">
                      <span className="text-lg font-semibold block">
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-2 md:justify-end text-muted-foreground text-sm mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 ml-14 space-y-4">

                          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                            {exp.description}
                          </p>

                          <ul className="space-y-2">
                            {exp.highlights.map((item, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
