import { Marquee } from "@/components/ui/marquee";

const items = [
  "Java", "Python", "C++", "React", "TypeScript", "Git",
  "Supabase", "Framer Motion", "Google Cloud", "VS Code",
  "OOP", "DSA", "HTML", "CSS",
];

const MarqueeSection = () => {
  return (
    <section className="py-6 overflow-hidden border-y border-border/50">
      <Marquee className="flex py-4" duration={30} pauseOnHover>
        {items.map((item) => (
          <span
            key={item}
            className="mx-8 text-xl font-semibold text-muted-foreground/70 whitespace-nowrap select-none pointer-events-none"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
