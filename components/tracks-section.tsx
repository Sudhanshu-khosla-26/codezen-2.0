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
  const tracks = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      className="container mx-auto px-4 py-12 md:py-16 relative"
      style={{
        backgroundImage: "radial-gradient(ellipse at center, rgba(229, 62, 114, 0.1) 0%, transparent 60%)"
      }}
    >
      <motion.div
        className="text-center mb-10 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2
          className="text-3xl sm:text-4xl flex flex-row gap-3 justify-center md:text-5xl font-bold mb-3 "
          style={{ fontFamily: "Benguiat, sans-serif" }}
        >
          HACKATHON 
       
		<h2
          className="text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-3 "
          style={{ fontFamily: "Benguiat, sans-serif" }}
        >
          TRACKS
        </h2>
		</h2>
        <p className="text-sm text-muted-foreground">
          Explore the domains of innovation.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
      {tracks.map((track, index) => (
            <div
              key={index}
              className="track-card  group relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Sponsored badge */}
              {track.sponsored && (
                <Badge className="absolute animate-bounce -top-2 -right-2 bg-accent text-accent-foreground text-[10px] px-2 py-0.5 z-10">
                  Sponsored
                </Badge>
              )}
              
              {/* Card content */}
              <div className="glass-card shine-effect rounded-xl p-4 sm:p-6 text-center h-full hover-lift border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="icon-glow w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <track.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {track.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {track.desc}
                </p>
              </div>
            </div>
          ))}
      </motion.div>
    </section>
  );
}


// "use client";

// import { Card } from "@/components/ui/card";
// import {
// 	Code2,
// 	Zap,
// 	Shield,
// 	Boxes,
// 	Gamepad2,
// 	Leaf,
// 	Brain,
// 	Lightbulb,
// 	Cpu,
// 	DollarSign,
// } from "lucide-react";
// import { motion } from "motion/react";

// const containerVariants = {
// 	hidden: { opacity: 0 },
// 	visible: {
// 		opacity: 1,
// 		transition: { staggerChildren: 0.1 },
// 	},
// };

// const itemVariants = {
// 	hidden: { y: 20, opacity: 0 },
// 	visible: { y: 0, opacity: 1 },
// };

// export default function TracksSection() {
// 	const sponsoredTracks = [
// 		{
// 			icon: <Zap className="w-8 h-8 text-white group-hover:text-red-700" />,
// 			title: "Duality AI Space",
// 			description: "AI/ML Innovation",
// 		},
// 		{
// 			icon: <Code2 className="w-8 h-8 text-white group-hover:text-red-700" />,
// 			title: "Pathways",
// 			description: "Web Development",
// 		},
// 	];

// 	const tracks = [
// 		{
// 			icon: <Shield className="w-8 h-8 text-white group-hover:text-red-700" />,
// 			title: "CYBER SECURITY",
// 			description:
// 				"Build innovative solutions to protect digital assets, enhance privacy, and secure the future of technology.",
// 		},
// 		{
// 			icon: <Boxes className="w-8 h-8 text-white group-hover:text-red-700" />,
// 			title: "BLOCKCHAIN & WEB3",
// 			description:
// 				"Create decentralized applications and explore the potential of blockchain technology to revolutionize industries.",
// 		},
// 		{
// 			icon: (
// 				<Gamepad2 className="w-8 h-8 text-white group-hover:text-red-700" />
// 			),
// 			title: "GAME DEVELOPMENT",
// 			description:
// 				"Create immersive gaming experiences and push the boundaries of interactive entertainment through innovative game design.",
// 		},
// 		{
// 			icon: <Leaf className="w-8 h-8 text-white group-hover:text-red-700" />,
// 			title: "SUSTAINABILITY",
// 			description:
// 				"Develop solutions that address environmental challenges and promote sustainable practices through technology.",
// 		},
// 		{
// 			icon: <Brain className="w-8 h-8 text-white group-hover:text-red-700" />,
// 			title: "ARTIFICIAL INTELLIGENCE",
// 			description:
// 				"Harness the power of AI and machine learning to solve complex problems and create intelligent solutions.",
// 		},
// 		{
// 			icon: (
// 				<Lightbulb className="w-8 h-8 text-white group-hover:text-red-700" />
// 			),
// 			title: "OPEN INNOVATION",
// 			description:
// 				"Think outside the box and create groundbreaking solutions that push the boundaries of technology.",
// 		},
// 		{
// 			icon: <Cpu className="w-8 h-8 text-white group-hover:text-red-700" />,
// 			title: "INTERNET OF THINGS",
// 			description:
// 				"Connect the physical and digital worlds through innovative IoT solutions and smart devices.",
// 		},
// 		{
// 			icon: (
// 				<DollarSign className="w-8 h-8 text-white group-hover:text-red-700" />
// 			),
// 			title: "FINTECH",
// 			description:
// 				"Revolutionize financial services through technology and create the future of digital finance.",
// 		},
// 	];

// 	return (
// 		<section className="container mx-auto px-4 py-16 md:py-20">
// 			<div className="text-center mb-10 md:mb-12">
// 				<h2
// 					className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-glow text-balance"
// 					style={{ fontFamily: "Stranger Things, sans-serif" }}
// 				>
// 					HACKATHON
// 					<span className="text-primary"> TRACKS</span>
// 				</h2>
// 				<p className="text-xs md:text-sm lg:text-base text-muted-foreground">
// 					Choose your path through the darkness
// 				</p>
// 			</div>

// 			{/* Sponsored Tracks */}
// 			<div className="mb-12 md:mb-16">
// 				<h3
// 					className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center"
// 					style={{ fontFamily: "Benguiat, sans-serif" }}
// 				>
// 					Sponsored Tracks
// 				</h3>
// 				<motion.div
// 					variants={containerVariants}
// 					initial="hidden"
// 					animate="visible"
// 					className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto items-center justify-center"
// 				>
// 					{sponsoredTracks.map((track, index) => (
// 						<motion.div
// 							key={index}
// 							variants={itemVariants}
// 							whileHover={{
// 								scale: 1.05,
// 								boxShadow: "0 0 25px #9f0712",
// 							}}
// 							transition={{ duration: 0.3 }}
// 							className="group"
// 						>
// 							<div
// 								className="p-6 md:p-8 border-2 border-[#ff005c]/40 relative glass-effect rounded-3xl cursor-pointer transition-all duration-500 h-full"
// 								style={{
// 									boxShadow: "0 0 20px rgba(255, 0, 92, 0.2)",
// 								}}
// 							>
// 								{/* Icon Container */}
// 								<motion.div
// 									initial={{ border: "4px solid transparent" }}
// 									whileHover={{
// 										border: "4px solid #9f0712",
// 										rotate: 360,
// 									}}
// 									transition={{
// 										duration: 1,
// 										delay: 0.5,
//                     ease: "circIn"
// 									}}
// 									className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-transparent group-hover:bg-red-800/20 duration-200"
// 								>
// 									{track.icon}
// 								</motion.div>

// 								{/* Title */}
// 								<h3
// 									className="text-lg md:text-xl font-bold text-white mb-4 tracking-wider group-hover:text-red-700"
// 									style={{
// 										fontFamily: "Benguiat, monospace",
// 										letterSpacing: "0.05em",
// 									}}
// 								>
// 									{track.title}
// 								</h3>

// 								{/* Description */}
// 								<p className="text-gray-400 text-sm md:text-base leading-relaxed">
// 									{track.description}
// 								</p>

// 								{/* Corner decorations */}
// 								<div
// 									className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-800"
// 									style={{
// 										boxShadow: "0 0 10px #ff005c",
// 									}}
// 								/>
// 								<div
// 									className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-800"
// 									style={{
// 										boxShadow: "0 0 10px #ff005c",
// 									}}
// 								/>
// 							</div>
// 						</motion.div>
// 					))}
// 				</motion.div>
// 			</div>

// 			{/* Regular Tracks */}
// 			<div>
// 				<h3
// 					className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center"
// 					style={{ fontFamily: "Benguiat, sans-serif" }}
// 				>
// 					Regular Tracks
// 				</h3>
// 				<motion.div
// 					variants={containerVariants}
// 					initial="hidden"
// 					animate="visible"
// 					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
// 				>
// 					{tracks.map((track, index) => (
// 						<motion.div
// 							key={index}
// 							variants={itemVariants}
// 							whileHover={{
// 								scale: 1.05,
// 								boxShadow: "0 0 25px #9f0712",
// 							}}
// 							transition={{ duration: 0.3 }}
// 							className="group"
// 						>
// 							<div
// 								className="p-6 md:p-8 border-2 border-red-800/40 relative glass-effect rounded-3xl cursor-pointer transition-all duration-500 h-full"
// 								style={{
// 									boxShadow: "0 0 20px rgba(255, 0, 92, 0.2)",
// 								}}
// 							>
// 								{/* Icon Container */}
// 								<motion.div
// 									initial={{ border: "4px solid transparent" }}
// 									whileHover={{
// 										border: "4px solid #9f0712",
// 										rotate: 360,
// 									}}
// 									transition={{
// 										duration: 1,
// 										delay: 0.5,
// 										ease: "circIn",
// 									}}
// 									className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-transparent group-hover:bg-red-800/20 duration-200"
// 								>
// 									{track.icon}
// 								</motion.div>

// 								{/* Title */}
// 								<h3
// 									className="text-lg md:text-xl font-bold text-white mb-4 tracking-wider group-hover:text-red-700"
// 									style={{
// 										fontFamily: "Benguiat, monospace",
// 										letterSpacing: "0.05em",
// 									}}
// 								>
// 									{track.title}
// 								</h3>

// 								{/* Description */}
// 								<p className="text-gray-400 text-sm md:text-base leading-relaxed">
// 									{track.description}
// 								</p>

// 								{/* Corner decorations */}
// 								<div
// 									className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-800"
// 									style={{
// 										boxShadow: "0 0 10px #ff005c",
// 									}}
// 								/>
// 								<div
// 									className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-800"
// 									style={{
// 										boxShadow: "0 0 10px #ff005c",
// 									}}
// 								/>
// 							</div>
// 						</motion.div>
// 					))}
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// }
