import { Marquee } from "@/components/ui/marquee";

const logos = [
  { src: "/logos/vercel.svg", alt: "Vercel logo" },
  { src: "/logos/googlecloud.svg", alt: "Google Cloud logo" },
  { src: "/logos/framer.svg", alt: "Framer logo" },
  { src: "/logos/discord.svg", alt: "Discord logo" },
  { src: "/logos/openai.svg", alt: "OpenAI logo" },
  { src: "/logos/linear.svg", alt: "Linear logo" },
  { src: "/logos/cursor.svg", alt: "Cursor logo" },
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
            className="mx-8 h-24 w-24 object-contain opacity-70 dark:invert pointer-events-none select-none"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
