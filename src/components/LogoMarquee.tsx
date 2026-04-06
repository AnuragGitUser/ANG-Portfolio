import { Marquee } from "@/components/ui/marquee";

const logos = [
  { src: "/logos/vercel.svg", alt: "Vercel logo" },
  { src: "/logos/google-cloud-light.png", srcDark: "/logos/google-cloud-dark.png", alt: "Google Cloud logo" },
  { src: "/logos/framer.svg", alt: "Framer logo" },
  { src: "/logos/discord.svg", alt: "Discord logo" },
  { src: "/logos/openai.svg", alt: "OpenAI logo" },
  { src: "/logos/linear.svg", alt: "Linear logo" },
  { src: "/logos/cursor.svg", alt: "Cursor logo" },
];

const LogoMarquee = () => {
  return (
    <section className="py-8 -mt-60">
      <div className="section-container px-6 md:px-12 lg:px-16">
        <Marquee className="flex py-4" duration={20}>
          {[...logos, ...logos, ...logos].map((logo, i) => (
            logo.srcDark ? (
              <span key={`${logo.src}-${i}`} className="mx-10 h-24 w-32 shrink-0 inline-flex items-center justify-center pointer-events-none select-none translate-y-2">
                <img src={logo.src} alt={logo.alt} className="h-20 object-contain opacity-70 dark:hidden" />
                <img src={logo.srcDark} alt={logo.alt} className="h-20 object-contain opacity-70 hidden dark:block" />
              </span>
            ) : (
              <img
                key={`${logo.src}-${i}`}
                src={logo.src}
                alt={logo.alt}
                width={96}
                height={96}
                className="mx-10 h-24 w-24 object-contain opacity-70 dark:invert-0 invert pointer-events-none select-none"
              />
            )
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoMarquee;
