import { Marquee } from "@/components/ui/marquee";
import googleCloud from "@/assets/google-cloud-white.png.asset.json";

const logos = [
  { src: "/logos/vercel.svg", alt: "Vercel logo" },
  { src: "/logos/framer.svg", alt: "Framer logo" },
  { src: "/logos/discord.svg", alt: "Discord logo" },
  { src: googleCloud.url, alt: "Google Cloud logo", wide: true },
  { src: "/logos/openai.svg", alt: "OpenAI logo" },
  { src: "/logos/linear.svg", alt: "Linear logo" },
  { src: "/logos/cursor.svg", alt: "Cursor logo" },
];

const LogoMarquee = () => {
  return (
    <section className="py-2 my-1">
      <div className="section-container px-6 md:px-12 lg:px-16">
        <Marquee className="flex py-4" duration={28}>
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <img
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className={`mx-10 object-contain opacity-70 dark:invert-0 invert pointer-events-none select-none self-center ${
                logo.wide ? "h-7 w-auto" : "h-24 w-24"
              }`}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoMarquee;
