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
    <section className="py-8 -mt-44">
      <div className="section-container px-6 md:px-12 lg:px-16">
        <Marquee className="flex py-4" duration={20}>
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <img
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt={logo.alt}
              width={96}
              height={96}
              className="mx-10 h-24 w-24 object-contain opacity-70 dark:invert-0 invert pointer-events-none select-none"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoMarquee;
