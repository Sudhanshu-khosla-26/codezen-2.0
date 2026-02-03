// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Rocket,
//   Trophy,
//   MessageCircle,
//   Users,
//   ChevronDown,
// } from "lucide-react";

// export default function HeroSection() {
//   const stats = [
//     { icon: Users, value: "7,000+", label: "Coders" },
//     { icon: Trophy, value: "₹10L+", label: "Prizes" },
//     { icon: MessageCircle, value: "JOIN", label: "WhatsApp" },
//   ];

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="relative h-screen w-full  bg-[#050000] overflow-hidden flex items-center">
//       {/* 1. The "Texture" Layer: Sketchfab Iframe */}
//       <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
//         <iframe
//           title="VECNA stranger things fan art"
//           className="w-full h-full border-0"
//           src="https://sketchfab.com/models/7369064f60d04514aab032abff4d0202/embed?autostart=1&preload=1&transparent=1&ui_hint=0&ui_infos=0&ui_stop=0&ui_watermark=0&ui_theme=dark"
//           allow="autoplay; fullscreen; xr-spatial-tracking"
//         ></iframe>
//       </div>

//       {/* 2. Cinematic Overlays (Creates Depth) */}
//       <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,transparent_0%,black_100%)] z-10" />

//       {/* 3. Content Layer */}
//       <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-xl space-y-6"
//         >
//           {/* Badge */}
//           <Badge className="font-['Benguiat'] bg-red-950/20 text-red-600 border-red-900/50 px-4 py-1 text-[10px] md:text-xs tracking-[0.2em] uppercase backdrop-blur-md animate-pulse">
//             The Upside Down is Calling
//           </Badge>

//           {/* Main Titles */}
//           <div className="space-y-0">
//             <h1
//               className="text-6xl md:text-8xl text-red-600 leading-none select-none"
//               style={{
//                 fontFamily: "'Stranger Things', serif",
//                 filter: "drop-shadow(0 0 15px rgba(220, 20, 60, 0.6))",
//               }}
//             >
//               CODEZEN
//             </h1>
//             <p className="font-['Benguiat'] text-4xl md:text-6xl text-white mt-[-5px] md:mt-[-10px] tracking-tighter">
//               2.0
//             </p>
//           </div>

//           <p className="font-['Benguiat'] text-gray-400 text-xs md:text-sm tracking-[0.3em] uppercase max-w-sm">
//             36-Hour Hackathon • GTB4CEC, Delhi • Feb 20-21
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap gap-4 pt-2">
//             <Button className="font-['Benguiat'] h-12 px-8 bg-red-700 hover:bg-red-600 text-white rounded-none shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all">
//               <Rocket className="mr-2 h-4 w-4" /> REGISTER NOW
//             </Button>
//             <Button
//               variant="outline"
//               className="font-['Benguiat'] h-12 px-8 border-white/20 text-white hover:bg-white/5 rounded-none backdrop-blur-sm"
//             >
//               VIEW TRACKS
//             </Button>
//           </div>

//           {/* Stats Grid - Compact */}
//           <div className="grid grid-cols-3 gap-3 pt-6 max-w-sm">
//             {stats.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white/5 border border-white/10 p-3 text-center backdrop-blur-md"
//               >
//                 <item.icon className="mx-auto text-red-600 mb-1 h-4 w-4" />
//                 <div className="font-['Benguiat'] text-sm md:text-lg text-white leading-tight">
//                   {item.value}
//                 </div>
//                 <div className="font-['Benguiat'] text-[8px] text-gray-500 uppercase tracking-tighter">
//                   {item.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* 4. Footer Decor */}
//       <div
//         className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-50 cursor-pointer hover:opacity-100 transition-opacity"
//         onClick={() => scrollToSection("about")}
//       >
//         <span className="font-['Benguiat'] text-[9px] tracking-[0.4em] uppercase text-white">
//           Enter the Void
//         </span>
//         <ChevronDown className="h-4 w-4 animate-bounce text-red-600" />
//       </div>

//       {/* Atmospheric Film Grain */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
//     </section>
//   );
// }

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Rocket,
  Calendar,
  Clock,
  MapPin,
  Trophy,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    {
      icon: Users,
      value: "7,000+ Participants",
      label: "",
      sublabel: "From across India",
    },
    { icon: Trophy, value: "10,00,000+", label: "", sublabel: "In Prizes" },
    {
      icon: MessageCircle,
      value: "JOIN WHATSAPP",
      label: "",
      sublabel: "Connect with Teams",
    },
  ];

  const eventDetails = [
    { icon: Calendar, text: "February 20 - 21, 2026" },
    { icon: Clock, text: "36 Hours" },
    { icon: MapPin, text: "GTB4CEC, Delhi" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container max-w-5xl mx-auto mt-2">
        <div className="text-center space-y-8 md:space-y-4 mb-3">
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="glass-card px-4 py-2 glass-effect blood-glow text-xs sm:text-sm font-medium tracking-wide border-primary/30 text-muted-foreground"
            >
              Welcome to the Upside Down of Coding
            </Badge>
          </motion.div>

          <motion.div className="space-y-2" variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <motion.span
                className="gradient-text flicker text-glow mt-2"
                style={{ fontFamily: "Benguiat, sans-serif" }}
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                CODEZEN
              </motion.span>
              <br className="md:hidden" />
              <span
                className="text-foreground text-8xl ml-2 sm:ml-4 text-glow"
                style={{ fontFamily: "Benguiat, sans-serif" }}
              >
                2.0
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-display tracking-[0.2em] text-muted-foreground uppercase">
              36-Hour Hackathon
            </p>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Join us for an exciting journey of coding, innovation, and
            creativity. Build something extraordinary in the Upside Down.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-4 text-sm sm:text-base"
            variants={itemVariants}
          >
            {eventDetails.map((detail, index) => (
              <motion.div
                key={index}
                className="flex p-1 px-4 rounded-full glass-card glass-effect hover-lift items-center gap-2 text-muted-foreground shine-effect"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(220, 20, 60, 0.5)",
                }}
              >
                <detail.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>{detail.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card group p-4 text-center transition-all shine-effect"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
                <div className="text-lg font-bold gradient-text leading-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
            variants={itemVariants}
          >
            <a href="https://www.namespace.world/events/AFYYA7?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnlueXbe9hiF1Tp1uY-MC62l15C19FuV9UMMLWrfH3_mjaKHaR-1IAoL0xsdI_aem_WGWwQcUVmP7K0gSJwgXHUw">
              <Button
                size="lg"
                className="blood-glow w-full pulse-glow cursor-pointer px-8 py-6 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Register Now
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="glass-card px-8  py-6 text-base cursor-pointer font-bold border-primary/40 hover:border-primary hover:bg-primary/10 transition-all"
              onClick={() => scrollToSection("tracks")}
            >
              <Users className="mr-2 h-5 w-5" />
              View Tracks
            </Button>
          </motion.div>

          <motion.div className="pt-8" variants={itemVariants}>
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs tracking-widest uppercase">
                Scroll Down
              </span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
