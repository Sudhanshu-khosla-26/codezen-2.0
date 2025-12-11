import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
	Calendar,
	Clock,
	Trophy,
	Users,
	Zap,
	Coffee,
	Award,
} from "lucide-react";

export default function TimelineSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [show, setShow] = useState(false);

	const timelineEvents = [
		{
			day: "Day 1",
			time: "07:00 AM",
			title: "REGISTRATION STARTS",
			icon: <Users className="w-6 h-6" />,
		},
		{
			day: "Day 2",
			time: "09:00 AM",
			title: "INAUGURATION CEREMONY [SIDE-QUEST & MEME-CONTEST]",
			icon: <Trophy className="w-6 h-6" />,
		},
		{
			day: "Day 1",
			time: "12:00 PM",
			title: "HACKING BEGINS",
			icon: <Zap className="w-6 h-6" />,
		},
		{
			day: "Day 2",
			time: "01:00 PM",
			title: "LUNCH BREAK",
			icon: <Coffee className="w-6 h-6" />,
		},
		{
			day: "Day 1",
			time: "06:00 PM",
			title: "MENTOR SESSIONS",
			icon: <Users className="w-6 h-6" />,
		},
		{
			day: "Day 2",
			time: "12:00 AM",
			title: "MIDNIGHT SNACKS",
			icon: <Coffee className="w-6 h-6" />,
		},
		{
			day: "Day 1",
			time: "08:00 AM",
			title: "BREAKFAST & CHECK-IN",
			icon: <Coffee className="w-6 h-6" />,
		},
		{
			day: "Day 2",
			time: "06:00 PM",
			title: "PROJECT SUBMISSION",
			icon: <Clock className="w-6 h-6" />,
		},
		{
			day: "Day 1",
			time: "10:00 AM",
			title: "PROJECT PRESENTATIONS",
			icon: <Trophy className="w-6 h-6" />,
		},
		{
			day: "Day 2",
			time: "04:00 PM",
			title: "CLOSING CEREMONY",
			icon: <Award className="w-6 h-6" />,
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const itemVariantsRight = {
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return !show ? (
		<motion.div
			className="text-center mb-12 md:mb-16"
			initial={{ opacity: 0, y: -40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<h1
				className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  flicker tracking-wider animate-scale-in text-balance"
				style={{
					fontFamily: "Benguiat, sans-serif",
				}}
			>
				EVENT 
			<span className="text-primary pl-2">
				TIMELINE
				</span> 
			</h1>
			<p className="mt-3 text-muted-foreground text-lg md:text-2xl">
				to be revealed soon! 
			</p>
		</motion.div>
	) : (
		<section
			ref={ref}
			className="relative overflow-hidden bg-black text-white py-20 px-6 md:px-12"
		>
			<style>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
            text-shadow: 0 0 10px #ff1515, 0 0 20px #ff1515, 0 0 30px #ff1515, 0 0 40px #ff1515;
          }
          20%, 24%, 55% {
            opacity: 0.8;
            text-shadow: 0 0 5px #ff1515, 0 0 10px ##ff1515;
          }
        }
        
        .text-glow {
          animation: flicker 5s infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.6);
        }
      `}</style>

			{/* Background Effects */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,92,0.12)_0%,transparent_70%)]" />

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header */}
				<motion.div
					className="text-center mb-12 md:mb-16"
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1
						className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-glow flicker tracking-wider animate-scale-in text-balance"
						style={{
							fontFamily: "Benguiat, sans-serif",
						}}
					>
						EVENT TIMELINE
					</h1>
					<p className="mt-3 text-muted-foreground text-base md:text-lg font-light">
						Mark your calendar for these important dates ✨
					</p>
				</motion.div>

				{/* Day Tabs */}
				<motion.div
					className="flex justify-center gap-6 md:gap-8 mb-12 md:mb-16"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					<div
						className="px-6 md:px-8 py-3 border-2 border-[##ff1515] text-white font-bold tracking-wider bg-black rounded-lg"
						style={{
							boxShadow: "0 0 20px rgba(255, 0, 92, 0.5)",
						}}
					>
						Day 1
					</div>
					<div className="px-6 md:px-8 py-3 border-2 border-[#ff005c]/40 text-gray-500 font-bold tracking-wider bg-black/40 rounded-lg">
						Day 2
					</div>
				</motion.div>

				{/* Timeline */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="relative"
				>
					{/* Center vertical line */}
					<div
						className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#b00000]"
						style={{
							boxShadow: "0 0 10px #ff005c",
						}}
					/>

					{timelineEvents.map((event, index) => {
						const isLeft = index % 2 === 0;

						return (
							<motion.div
								key={index}
								variants={isLeft ? itemVariants : itemVariantsRight}
								className="relative mb-8 md:mb-10 last:mb-0"
							>
								{/* Timeline Dot */}
								<div className="absolute left-1/2 transform -translate-x-1/2 top-8 z-10">
									<motion.div
										className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#b00000] flex items-center justify-center text-neutral-300"
										style={{
											boxShadow: "0 0 20px #eb2d32, 0 0 30px #ff005c",
										}}
										animate={{
											boxShadow: [
												"0 0 20px #b00000, 0 0 30px #b00000",
												"0 0 30px #b00000, 0 0 45px #b00000",
												"0 0 20px #b00000, 0 0 30px #b00000",
											],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									>
										{event.icon}
									</motion.div>
								</div>

								{/* Event Card */}
								<div
									className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
								>
									<div
										className={`w-full md:w-5/12 ${
											isLeft ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"
										}`}
									>
										<motion.div
											className="p-6 md:p-8 border-2 border-[#b00000]/40 relative bg-black/60 glass-effect rounded-3xl cursor-pointer transition-all duration-500"
											style={{
												boxShadow: "0 0 20px rgba(255, 0, 92, 0.3)",
											}}
											whileHover={{
												scale: 1.05,
												boxShadow: "0 0 45px rgba(255, 0, 92, 0.8)",
												borderColor: "rgba(255, 0, 92, 0.7)",
											}}
											transition={{ duration: 0.3 }}
										>
											{/* Time badge */}
											<div
												className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-red-500/60 rounded-lg"
												style={{
													backgroundColor: "rgba(255, 0, 92, 0.1)",
												}}
											>
												<Clock className="w-4 h-4 text-[#ba0000]" />
												<span className="text-[#ba0000] font-bold text-sm tracking-wider">
													{event.time}
												</span>
											</div>

											{/* Title */}
											<h3
												className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wider"
												style={{
													fontFamily: "'Courier New', monospace",
													letterSpacing: "0.05em",
												}}
											>
												{event.title}
											</h3>

											{/* Corner decorations */}
											<div
												className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff005c]"
												style={{
													boxShadow: "0 0 10px #ff005c",
												}}
											/>
											<div
												className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff005c]/70"
												style={{
													boxShadow: "0 0 10px #ff005c",
												}}
											/>
										</motion.div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Footer */}
				<motion.div
					className="text-center mt-16 text-gray-500 relative z-10 text-sm md:text-lg font-light"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.3, duration: 0.8 }}
				>
					Your complete guide to the hackathon journey 🚀
				</motion.div>
			</div>
		</section>
	);
}
