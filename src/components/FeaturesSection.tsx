import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import shotCover from "@/assets/images/shot-cover.jpg";
import shotDiscover from "@/assets/images/shot-discover.jpg";
import shotLibrary from "@/assets/images/shot-library.jpg";
import { Mic, Radio } from "lucide-react";

const FeaturesSection = ({ ...props }: { id: string }) => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-primary" />,
      title: "AI Song Creation",
      description: "A complete song from one sentence, in the style you choose",
      items: [
        "Full songs with vocals",
        "AI-written lyrics and titles",
        "Or bring your own lyrics",
        "Pop, rock, hip-hop, R&B and more",
        "Male or female vocal, or instrumental",
        "Cover art for every song",
      ],
    },
    {
      icon: <Radio className="w-8 h-8 text-secondary" />,
      title: "Listen & Discover",
      description: "Your songs, live radio and fresh tracks in one player",
      items: [
        "Your library, always with you",
        "Live radio stations",
        "Discover tracks by mood and genre",
        "Background playback",
        "Download and share your songs",
        "A notification when your song is ready",
      ],
    },
  ];

  const shots = [
    { src: shotDiscover, alt: "Flow discover screen with featured music and moods" },
    { src: shotLibrary, alt: "Flow library with the songs you created" },
    { src: shotCover, alt: "Flow: imagine it, make it music" },
  ];

  return (
    <section className="py-20 scroll-mt-32" id={props.id} data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-brand bg-clip-text text-transparent pb-1">
                Key Features
              </h2>
              <p className="text-ink-body mt-4 text-lg leading-relaxed">
                Everything you need to turn an idea into a song, and a place to listen when you are not creating.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-white border-line shadow-md hover:shadow-xl hover:border-edge transition-all transform hover:translate-x-2 duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-wash">{feature.icon}</div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-ink">{feature.title}</CardTitle>
                        <p className="text-ink-muted mt-1">{feature.description}</p>
                      </div>
                    </div>
                    <CardDescription className="text-ink-body">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {feature.items.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-brand" />
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

          <div className="grid grid-cols-3 gap-3 md:gap-5">
            {shots.map((shot) => (
              <img
                key={shot.alt}
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="w-full rounded-2xl border border-line shadow-[0_12px_40px_rgba(30,34,53,0.14)] hover:-translate-y-2 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
