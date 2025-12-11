"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { motion } from "framer-motion";

export default function TracksSection() {
  const allTracks = [
    { icon: Zap, title: "Duality AI Space", desc: "AI/ML Innovation", sponsored: true },
    { icon: Code2, title: "Pathways", desc: "Web Development", sponsored: true },
    { icon: Zap, title: "AI", desc: "Artificial Intelligence" },
    { icon: Code, title: "Blockchain/Web3", desc: "Decentralized Tech" },
    { icon: Network, title: "IoT", desc: "Internet of Things" },
    { icon: Lightbulb, title: "Open Innovation", desc: "Any Idea Welcomed" },
    { icon: Leaf, title: "Heritage Tech", desc: "Cultural Technology" },
    { icon: Leaf, title: "Climate Tech", desc: "Environmental Solutions" },
    { icon: Heart, title: "Health Tech", desc: "Healthcare Innovation" },
    { icon: Eye, title: "AR/VR", desc: "Extended Reality" },
  ];

  const sponsoredTracks = allTracks.filter(t => t.sponsored);
  const regularTracks = allTracks.filter(t => !t.sponsored);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="tracks"
      className="container mx-auto px-4 py-12 md:py-20 relative"
    >
      <div className="text-center mb-10 md:mb-16">
        <h2
          className="text-3xl sm:text-4xl flex flex-col md:flex-row gap-3 justify-center md:text-5xl font-bold mb-3 "
          style={{ fontFamily: "Benguiat, sans-serif" }}
        >
          HACKATHON 
          
          <span className="text-primary">TRACKS</span>
        </h2>
        <p className="text-sm text-muted-foreground">
          Explore the domains of innovation.
        </p>
      </div>

      {/* Sponsored Tracks */}
      <div className="mb-12 md:mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-primary" style={{ fontFamily: "Benguiat, sans-serif" }}>
          Sponsored Tracks
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sponsoredTracks.map((track, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 0 25px rgba(220, 20, 60, 0.5)" }}
              className="track-card group relative glass-card shine-effect rounded-xl p-6 text-center h-full hover-lift border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              {/* <Badge className="absolute animate-bounce -top-2 -right-2 bg-accent text-accent-foreground text-[10px] px-2 py-0.5 z-10">
                Sponsored
              </Badge> */}
              <div className="icon-glow w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <track.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {track.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {track.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Regular Tracks */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-primary" style={{ fontFamily: "Benguiat, sans-serif" }}>
          Regular Tracks
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {regularTracks.map((track, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="track-card group relative glass-card shine-effect rounded-xl p-6 text-center h-full hover-lift border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="icon-glow w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <track.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {track.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {track.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
