import { Mic } from "lucide-react"; // Changed from Zap to Mic icon
import appstorelogo from "@/assets/images/app-store.png";
import playstorelogo from "@/assets/images/play-store.png";
// import playstoremarket1 from "@/assets/images/appstoremarket1.jpeg";
import appstoremarket1 from "@/assets/images/playstoremarket1.jpeg";
import appInside from "@/assets/images/app-inside-3.jpeg";
import { appStore, playStore } from "@/constants/url";

const HeroSection = () => {
  return (
    <section className="pt-8 md:pt-12 lg:pt-16 pb-10 overflow-x-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 -mt-0 lg:-mt-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-md"
              style={{ backgroundColor: "#FFE8C5" }}
            >
              <Mic size={16} className="text-orange-600" />
              <span className="text-sm font-semibold text-gray-800">Create Rap Music with AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Generate Your Own
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent block mt-2">
                Rap Music
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
              Transform your ideas into professionally crafted rap songs using AI technology. Create unique beats, write
              lyrics, and produce studio-quality tracks with Flow AI's innovative music generation platform.
            </p>

            <div className="flex flex-row gap-4 pt-4">
              <a href={appStore} target="_blank" className="w-32 md:w-36 lg:w-40 hover:opacity-90 transition-opacity">
                <img src={appstorelogo} alt="App Store" className="w-full h-auto" />
              </a>
              <a href={playStore} target="_blank" className="w-32 md:w-36 lg:w-40 hover:opacity-90 transition-opacity">
                <img src={playstorelogo} alt="Play Store" className="w-full h-auto" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 pt-6 md:pt-8">
              <a
                href="#features"
                className="bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:from-orange-600 hover:to-pink-700 py-3 px-6 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Learn More
              </a>
              <div>
                <div className="text-xl md:text-2xl font-bold text-orange-600 font-mono">CREATE</div>
                <div className="text-sm md:text-base text-gray-600">Lyrics</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-orange-600 font-mono">GENERATE</div>
                <div className="text-sm md:text-base text-gray-600">Beats</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-orange-600 font-mono">SHARE</div>
                <div className="text-sm md:text-base text-gray-600">Music</div>
              </div>
            </div>
          </div>

          {/* Right side mobile mockups - keeping the same structure but you should update the images */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative max-w-[340px] mx-auto">
              <div className="relative h-[800px] md:h-[900px] lg:h-[600px] perspective-1000">
                <div
                  className="
                  absolute 
                  left-1/2 lg:left-0
                  -translate-x-1/2 lg:-translate-x-5
                  bottom-0 lg:top-1/2 
                  lg:-translate-y-1/2
                  w-[240px] h-[480px] md:w-[280px] md:h-[560px] lg:w-[300px] lg:h-[600px]
                  rounded-[45px] overflow-hidden
                  border-[14px] border-white
                  shadow-[0_0_50px_rgba(249,115,22,0.3)]
                  hover:scale-105 transition-all duration-300
                  backdrop-blur-xl
                  transform lg:-rotate-6
                  z-30
                "
                >
                  <img src={appInside} alt="Flow AI Rap Generation" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
                </div>
                <div
                  className="
                  absolute 
                  left-1/2 lg:right-0 
                  -translate-x-1/2 lg:translate-x-5
                  top-0 lg:top-1/2 
                  lg:-translate-y-1/2
                  w-[240px] h-[480px] md:w-[280px] md:h-[560px] lg:w-[300px] lg:h-[600px]
                  rounded-[45px] overflow-hidden
                  border-[14px] border-white
                  shadow-[0_0_50px_rgba(236,72,153,0.3)]
                  hover:scale-105 transition-all duration-300
                  backdrop-blur-xl
                  transform lg:rotate-6
                  z-20
                "
                >
                  <img src={appstoremarket1} alt="Flow AI Music Studio" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
                </div>

                {/* Decorative effects */}
                <div className="absolute inset-x-4 lg:inset-x-0 inset-y-0 bg-gradient-to-r from-orange-400/10 to-pink-500/10 rounded-[60px] blur-3xl -z-10" />

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1/2">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl -z-20" />
                  <div className="absolute inset-0 bg-pink-500/15 rounded-full blur-3xl -z-10 transform scale-95" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
