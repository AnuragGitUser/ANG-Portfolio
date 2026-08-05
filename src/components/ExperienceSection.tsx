import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const experiences = [
    {
      role: "Trainee Software Engineer",
      company: "ApMoSys Technologies Pvt. Ltd.",
      duration: "Apr 2026 - Present",
      location: "On-site",
      description:
        "Contributing to software development projects, collaborating with cross-functional teams, and building scalable solutions using modern technologies. Gaining hands-on experience in designing, developing, and deploying end-to-end applications while following industry best practices. Actively learning from senior engineers and applying new skills to real-world engineering challenges.",
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

          <div className="space-y-8 h-[260px] md:h-[220px]">
            {experiences.map((exp, index) => {
              const isOpen = openIndex === index;
              return (
                <Card
                  key={index}
                  className="cursor-target p-8 bg-transparent hover:bg-card hover:shadow-2xl transition-all duration-500 ease-in-out group relative overflow-hidden cursor-pointer border border-foreground/20 hover:border-foreground/50 rounded-2xl md:mx-16 lg:mx-24"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex flex-col gap-1">
                    {/* Top - Company & Location */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <span className="text-lg font-semibold block">
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-1.5 justify-start md:justify-end text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Navi Mumbai, India</span>
                      </div>
                    </div>

                    {/* Bottom - Role & Duration */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="flex items-center gap-1">
                        <h3
                          className="text-lg font-extrabold italic bg-clip-text text-transparent bg-[length:300%_100%] group-hover:animate-[shine_2.5s_ease-in-out_forwards] inline"
                          style={{
                            backgroundImage:
                              "linear-gradient(105deg, hsl(var(--foreground)) 30%, hsl(var(--muted-foreground)) 40%, white 50%, hsl(var(--muted-foreground)) 60%, hsl(var(--foreground)) 70%)",
                            fontFamily: "'Times New Roman', Times, serif",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <ChevronRight
                          className={`w-4 h-4 text-primary inline-block align-middle ml-1 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                        />
                      </div>
                      <div className="flex items-center gap-1.5 justify-start md:justify-end text-muted-foreground text-sm">
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
                        <div className="pt-3">
                          <p className="text-muted-foreground text-sm leading-relaxed w-full">
                            {exp.description}
                          </p>
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
