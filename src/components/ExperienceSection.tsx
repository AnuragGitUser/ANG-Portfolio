import { Card } from "@/components/ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
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
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="cursor-target p-8 hover:shadow-xl smooth-transition group relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left - Role */}
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <h3
                        className="text-2xl font-extrabold bg-clip-text text-transparent bg-[length:300%_100%] group-hover:animate-[shine_2.5s_ease-in-out_forwards]"
                        style={{
                          backgroundImage:
                            "linear-gradient(105deg, hsl(var(--foreground)) 30%, hsl(var(--muted-foreground)) 40%, white 50%, hsl(var(--muted-foreground)) 60%, hsl(var(--foreground)) 70%)",
                        }}
                      >
                        {exp.role}
                      </h3>
                    </div>

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

                  {/* Right - Company & Duration */}
                  <div className="md:text-right space-y-3 flex-shrink-0">
                    <div className="inline-flex items-center gap-2 md:flex-row-reverse">
                      <span className="text-lg font-semibold">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 md:justify-end text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>

                    <div className="flex items-center gap-2 md:justify-end text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
