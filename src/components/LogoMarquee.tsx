import { Marquee } from "@/components/ui/marquee";

const logos = [
  { src: "/logos/vercel.svg", alt: "Vercel logo" },
  { src: "/logos/google.svg", alt: "Google logo" },
  { src: "/logos/framer.svg", alt: "Framer logo" },
  { src: "/logos/discord.svg", alt: "Discord logo" },
  { src: "/logos/openai.svg", alt: "OpenAI logo" },
  { src: "/logos/linear.svg", alt: "Linear logo" },
  
  { src: "/logos/cursor.svg", alt: "Cursor logo" },
];

const LogoMarquee = () => {
  return (
    <section className="py-8">
      <div className="section-container px-6 md:px-12 lg:px-16">
        <Marquee className="flex py-4" duration={14}>
          {logos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              className="mx-10 h-20 w-20 object-contain opacity-70 dark:invert-0 invert pointer-events-none select-none"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoMarquee;
