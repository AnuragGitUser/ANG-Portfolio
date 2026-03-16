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
                <div key={index} className="relative md:mx-16 lg:mx-24">
                  <Card
                    className="cursor-target p-8 bg-transparent hover:bg-card hover:shadow-2xl transition-all duration-500 ease-in-out group relative overflow-hidden cursor-pointer border border-foreground/20 hover:border-foreground/50 rounded-2xl"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      {/* Left - Role & Duration */}
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div>
                            <h3
                              className="text-lg font-extrabold bg-clip-text text-transparent bg-[length:300%_100%] group-hover:animate-[shine_2.5s_ease-in-out_forwards] inline"
                              style={{
                                backgroundImage:
                                  "linear-gradient(105deg, hsl(var(--foreground)) 30%, hsl(var(--muted-foreground)) 40%, white 50%, hsl(var(--muted-foreground)) 60%, hsl(var(--foreground)) 70%)",
                              }}
                            >
                              {exp.role}
                            </h3>
                            <ChevronRight
                              className={`w-4 h-4 text-primary inline-block align-middle ml-1 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                            />
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right - Company & Location */}
                      <div className="md:text-right flex-shrink-0 ml-14 md:ml-0">
                        <span className="text-lg font-semibold block">
                          {exp.company}
                        </span>
                        <div className="flex items-center gap-1.5 md:justify-end text-muted-foreground text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>Mumbai, India</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Expandable content - overlays below without pushing footer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute left-0 right-0 top-full z-20 mt-1"
                      >
                        <div className="p-6 ml-14 bg-card border border-border rounded-xl shadow-lg">
                          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                            {exp.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
