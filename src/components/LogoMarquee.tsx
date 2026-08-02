import { Marquee } from "@/components/ui/marquee";

type Logo = {
  src: string;
  alt: string;
  /** wordmark-style logo: wider, shorter */
  wide?: boolean;
  /** alternate source used in dark mode */
  srcDark?: string;
  /** skip the default invert filter (asset already has correct colors) */
  noInvert?: boolean;
};

const logos: Logo[] = [
  { src: "/logos/vercel.svg", alt: "Vercel logo" },
  { src: "/logos/framer.svg", alt: "Framer logo" },
  { src: "/logos/discord.svg", alt: "Discord logo" },
  {
    src: "/logos/gcloud-light.png",
    srcDark: "/logos/gcloud-dark.png",
    alt: "Google Cloud logo",
    wide: true,
    noInvert: true,
  },
  { src: "/logos/openai.svg", alt: "OpenAI logo" },
  { src: "/logos/jira.png", alt: "Jira logo", wide: true },
  { src: "/logos/linear.svg", alt: "Linear logo" },
  { src: "/logos/cursor.svg", alt: "Cursor logo" },
];

const LogoMarquee = () => {
  const base =
    "mx-10 object-contain opacity-70 pointer-events-none select-none self-center";
  const size = (logo: Logo) =>
    logo.wide ? "h-6 md:h-8 w-auto max-w-[140px] md:max-w-[180px]" : "h-24 w-24";

  return (
    <section className="py-2 my-1">
      <div className="section-container px-6 md:px-12 lg:px-16">
        <Marquee className="flex py-4" duration={28}>
          {[...logos, ...logos, ...logos].map((logo, i) => {
            if (logo.srcDark) {
              return (
                <span key={`${logo.src}-${i}`} className="contents">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className={`${base} ${size(logo)} block dark:hidden`}
                  />
                  <img
                    src={logo.srcDark}
                    alt={logo.alt}
                    loading="lazy"
                    className={`${base} ${size(logo)} hidden dark:block`}
                  />
                </span>
              );
            }

            return (
              <img
                key={`${logo.src}-${i}`}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className={`${base} ${size(logo)} ${
                  logo.noInvert
                    ? ""
                    : logo.src.endsWith(".png")
                      ? "dark:invert"
                      : "invert dark:invert-0"
                }`}
              />
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoMarquee;
