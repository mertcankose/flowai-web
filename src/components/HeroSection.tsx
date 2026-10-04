import { Sparkles } from "lucide-react";
import appstorelogo from "@/assets/images/app-store.png";
import playstorelogo from "@/assets/images/play-store.png";
import shotCreate from "@/assets/images/shot-create.jpg";
import shotResult from "@/assets/images/shot-result.jpg";
import { appStore, playStore } from "@/constants/url";

const steps = [
  { label: "DESCRIBE", detail: "Your idea" },
  { label: "GENERATE", detail: "A full song" },
  { label: "LISTEN", detail: "Anywhere" },
];

const HeroSection = () => {
  return (
    <section className="pt-28 md:pt-32 pb-10 overflow-x-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wash border border-edge">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-semibold text-ink">AI Music & Song Maker</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
              Imagine it.
              <span className="bg-brand bg-clip-text text-transparent block mt-2">Make it music.</span>
            </h1>

            <p className="text-base md:text-lg text-ink-body max-w-2xl leading-relaxed">
              Describe a mood, a moment or a person and Flow turns it into a complete song with lyrics, vocals and
              cover art in about a minute. Pick any genre, write your own words or let AI write them, then keep
              every song in your library.
            </p>

            <div className="flex flex-row gap-4 pt-4">
              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-32 md:w-36 lg:w-40 hover:opacity-90 transition-opacity"
              >
                <img src={appstorelogo} alt="Download on the App Store" className="w-full h-auto" />
              </a>
              <a
                href={playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-32 md:w-36 lg:w-40 hover:opacity-90 transition-opacity"
              >
                <img src={playstorelogo} alt="Get it on Google Play" className="w-full h-auto" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 pt-6 md:pt-8">
              <a
                href="#features"
                className="bg-brand text-white py-3 px-6 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:opacity-95"
              >
                Learn More
              </a>
              {steps.map((step) => (
                <div key={step.label}>
                  <div className="text-xl md:text-2xl font-bold text-primary font-mono">{step.label}</div>
                  <div className="text-sm md:text-base text-ink-muted">{step.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* The store screenshots already carry their own phone frame and headline, so they are shown as they are. */}
          <div className="w-full lg:w-1/2">
            <div className="relative flex justify-center items-center gap-4 md:gap-6">
              <img
                src={shotCreate}
                alt="Flow create screen: write lyrics, choose a style, create a song"
                className="w-[46%] max-w-[280px] rounded-3xl border border-line shadow-[0_20px_60px_rgba(30,34,53,0.18)] lg:-rotate-3 lg:translate-y-6"
              />
              <img
                src={shotResult}
                alt="Flow player showing a finished AI-generated song"
                className="w-[46%] max-w-[280px] rounded-3xl border border-line shadow-[0_20px_60px_rgba(30,34,53,0.18)] lg:rotate-3 lg:-translate-y-6"
              />
              <div className="absolute inset-0 bg-brand opacity-10 rounded-[60px] blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
