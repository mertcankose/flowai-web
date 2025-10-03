import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import appInside1 from "@/assets/images/app-inside-1.jpeg";
import appInside2 from "@/assets/images/app-inside-2.jpeg";
import appInside3 from "@/assets/images/app-inside-3.jpeg";
import { Mic, Music } from "lucide-react";

const FeaturesSection = ({ ...props }: { id: string }) => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-orange-600" />,
      title: "AI Rap Generation",
      description:
        "Create professional-quality rap lyrics and beats with AI technology",
      items: [
        "Advanced AI lyrics generation",
        "Multiple rap styles & flows",
        "Custom beat generation",
        "Voice style customization",
        "Real-time generation",
        "Export in high quality",
      ],
    },
    {
      icon: <Music className="w-8 h-8 text-pink-600" />,
      title: "Music Studio",
      description: "Professional tools to perfect your AI-generated rap music",
      items: [
        "Beat mixing capabilities",
        "Voice effect controls",
        "Tempo adjustment",
        "Multiple export formats",
        "Mix saving & sharing",
        "Collaborative features",
      ],
    },
  ];

  return (
    <section className="py-20 scroll-mt-32" id={props.id} data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                Key Features
              </h2>
              <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                Experience the future of rap music creation with Flow AI's
                innovative features
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="
                   bg-white/60 backdrop-blur-sm border-orange-200/40 shadow-lg
                   hover:bg-white/80 hover:shadow-xl transition-all
                   transform hover:translate-x-2 duration-300
                 "
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      {feature.icon}
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          {feature.title}
                        </CardTitle>
                        <p className="text-gray-600 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <CardDescription className="text-gray-700">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {feature.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-20 space-y-6">
              <div className="relative h-[350px] rounded-3xl overflow-hidden group shadow-2xl border-4 border-white/50">
                <img
                  src={appInside2}
                  alt="Flow AI Rap Generation Interface"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-[250px] rounded-2xl overflow-hidden group shadow-xl border-4 border-white/50">
                  <img
                    src={appInside1}
                    alt="Flow AI Music Studio Interface"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent" />
                </div>

                <div className="relative h-[250px] rounded-2xl overflow-hidden group shadow-xl border-4 border-white/50">
                  <img
                    src={appInside3}
                    alt="Flow AI Beat Mixing Interface"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-400/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
