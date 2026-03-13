import { Marquee } from "@/components/ui/marquee";

const logos = [
  { src: "/logos/java.svg", alt: "Java logo" },
  { src: "/logos/python.svg", alt: "Python logo" },
  { src: "/logos/react.svg", alt: "React logo" },
  { src: "/logos/typescript.svg", alt: "TypeScript logo" },
  { src: "/logos/cplusplus.svg", alt: "C++ logo" },
  { src: "/logos/git.svg", alt: "Git logo" },
  { src: "/logos/googlecloud.svg", alt: "Google Cloud logo" },
];

const MarqueeSection = () => {
  return (
    <section className="py-6 overflow-hidden border-y border-border/50">
      <Marquee className="flex py-4" duration={40}>
        {logos.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={96}
            height={96}
            className="mx-8 h-24 w-24 object-contain opacity-70 dark:invert-0 pointer-events-none select-none"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
