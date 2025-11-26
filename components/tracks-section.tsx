"use client";

import { Card } from "@/components/ui/card";
import {
  Code,
  Zap,
  Code2,
  Lightbulb,
  Leaf,
  Heart,
  Eye,
  Network,
} from "lucide-react";

export default function TracksSection() {
  const sponsoredTracks = [
    { icon: Zap, title: "Duality AI Space", desc: "AI/ML Innovation" },
    { icon: Code2, title: "Pathways", desc: "Web Development" },
  ];

  const regularTracks = [
    { icon: Zap, title: "AI", desc: "Artificial Intelligence" },
    { icon: Code, title: "Blockchain/Web3", desc: "Decentralized Tech" },
    { icon: Network, title: "IoT", desc: "Internet of Things" },
    { icon: Lightbulb, title: "Open Innovation", desc: "Any Idea Welcomed" },
    { icon: Leaf, title: "Heritage Tech", desc: "Cultural Technology" },
    { icon: Leaf, title: "Climate Tech", desc: "Environmental Solutions" },
    { icon: Heart, title: "Health Tech", desc: "Healthcare Innovation" },
    { icon: Eye, title: "AR/VR", desc: "Extended Reality" },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-10 md:mb-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-glow text-balance"
          style={{ fontFamily: "Stranger Things, sans-serif" }}
        >
          TRACKS
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
          Choose your path through the darkness
        </p>
      </div>

      {/* Sponsored Tracks */}
      <div className="mb-12 md:mb-16">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-primary text-center">
          Sponsored Tracks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {sponsoredTracks.map((track, i) => (
            <Card
              key={i}
              className="glass-effect p-6 md:p-8 space-y-3 md:space-y-4 border-primary/30 hover-lift hover-scale-bright cursor-pointer text-center blood-glow transition-all animate-slide-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <track.icon className="h-12 md:h-16 w-12 md:w-16 text-primary mx-auto" />
              <h3 className="font-bold text-lg md:text-2xl text-card-foreground text-balance">
                {track.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground text-balance">
                {track.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Regular Tracks */}
      <div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-primary text-center">
          Regular Tracks
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
          {regularTracks.map((track, i) => (
            <Card
              key={i}
              className="glass-effect p-4 md:p-6 space-y-2 md:space-y-4 border-primary/30 hover-lift hover-scale-bright cursor-pointer text-center transition-all animate-scale-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <track.icon className="h-8 md:h-12 w-8 md:w-12 text-primary mx-auto" />
              <h3 className="font-bold text-sm md:text-lg text-card-foreground text-balance">
                {track.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground text-balance">
                {track.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
