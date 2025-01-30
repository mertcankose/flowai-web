import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import appInside1 from "@/assets/images/app-inside-1.jpeg";
import appInside2 from "@/assets/images/app-inside-2.jpeg";
import appInside3 from "@/assets/images/app-inside-3.jpeg";
import { Mic, Music } from "lucide-react";

const FeaturesSection = ({ ...props }: { id: string }) => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-primary" />,
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
      icon: <Music className="w-8 h-8 text-primary" />,
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
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Key Features
              </h2>
              <p className="text-gray-500 mt-4 text-lg">
                Experience the future of rap music creation with Flow AI's
                innovative features
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="
                   bg-white border-primary/10 
                   hover:bg-primary/5 transition-all
                   transform hover:translate-x-2 duration-300
                 "
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      {feature.icon}
                      <div>
                        <CardTitle className="text-2xl text-gray-900">
                          {feature.title}
                        </CardTitle>
                        <p className="text-gray-500 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {feature.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
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
              <div className="relative h-[350px] rounded-3xl overflow-hidden group">
                <img
                  src={appInside2}
                  alt="Flow AI Rap Generation Interface"
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-[250px] rounded-2xl overflow-hidden group ">
                  <img
                    src={appInside1}
                    alt="Flow AI Music Studio Interface"
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                <div className="relative h-[250px] rounded-2xl overflow-hidden group">
                  <img
                    src={appInside3}
                    alt="Flow AI Beat Mixing Interface"
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
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
