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
  Gamepad2,
  Utensils,
  Moon,
  Sun,
  Presentation,
  PartyPopper,
} from "lucide-react";

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [show, setShow] = useState(true);
  const [activeDay, setActiveDay] = useState(1);

  const timelineEvents = {
    day1: [
      {
        time: "07:00 AM - 09:00 AM",
        title: "REGISTRATION STARTS",
        description: "Entry and registration at main gate, near Electrical Lab",
        icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "09:00 AM - 11:00 AM",
        title: "INAUGURATION CEREMONY",
        description:
          "Diya lighting, speakers, side-quest & meme contest announcements",
        icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "11:00 AM - 12:00 PM",
        title: "BUFFER & ESCORTING",
        description:
          "Participants escorted to assigned classrooms on 4th floor",
        icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "12:00 PM - 03:00 PM",
        title: "HACKING BEGINS",
        description: "Teams start working on their projects",
        icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "03:00 PM - 05:00 PM",
        title: "MENTORSHIP ROUND 1",
        description:
          "Mentors review ideas and provide guidance with mystery box chits",
        icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "05:00 PM - 07:00 PM",
        title: "GAMES SESSION",
        description: "Reverse hide & seek, Maram Pitti, Chain Chain on ground",
        icon: <Gamepad2 className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "07:00 PM - 09:00 PM",
        title: "HACKING ROUND 2 + MYSTERY BOX",
        description: "Teams implement changes based on mentor chits",
        icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "09:00 PM - 11:00 PM",
        title: "DINNER BREAK",
        description: "Dinner served at ground area",
        icon: <Utensils className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "11:00 PM - 01:00 AM",
        title: "MENTORSHIP ROUND 2",
        description: "Mentors verify mystery box implementations",
        icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "01:00 AM - 03:00 AM",
        title: "JAMMING & GAMING SESSION",
        description: "Mafia, Never Have I Ever, Pop the Balloon games",
        icon: <Gamepad2 className="w-5 h-5 md:w-6 md:h-6" />,
      },
    ],
    day2: [
      {
        time: "03:00 AM - 07:00 AM",
        title: "FREE TIME / REST",
        description: "Participants can rest or continue hacking",
        icon: <Moon className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "07:00 AM - 08:00 AM",
        title: "BREAKFAST",
        description: "Morning refreshments at ground area",
        icon: <Coffee className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "08:00 AM - 09:30 AM",
        title: "MENTORSHIP ROUND 3",
        description: "Final mentorship with PPT review and marking",
        icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "09:30 AM - 10:30 AM",
        title: "PROJECT SUBMISSION DEADLINE",
        description: "Submit projects and move to auditorium for evaluation",
        icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "10:30 AM - 11:30 AM",
        title: "MINI CEREMONY",
        description: "Participation certificates, Top 10 announcement",
        icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "11:30 AM - 02:00 PM",
        title: "FINAL PRESENTATIONS",
        description: "Top 10 teams present (7 min + 3 min Q&A)",
        icon: <Presentation className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "02:00 PM - 03:00 PM",
        title: "LUNCH BREAK",
        description: "Lunch for all participants, judges, and mentors",
        icon: <Utensils className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "03:00 PM - 05:00 PM",
        title: "CLOSING & PRIZE DISTRIBUTION",
        description: "Winner announcement and appreciation ceremony",
        icon: <PartyPopper className="w-5 h-5 md:w-6 md:h-6" />,
      },
      {
        time: "05:00 PM - 07:00 PM",
        title: "SEE OFF",
        description: "Event wrap-up and farewells",
        icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      },
    ],
  };

  const currentEvents =
    activeDay === 1 ? timelineEvents.day1 : timelineEvents.day2;

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return !show ? (
    <motion.div
      className="text-center mb-12 md:mb-16 px-4"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flicker tracking-wider text-balance"
        style={{
          fontFamily: "Benguiat, sans-serif",
          textShadow: "0 0 10px #ff1515, 0 0 20px #ff1515",
        }}
      >
        EVENT <span className="text-primary pl-2">TIMELINE</span>
      </h1>
      <p className="mt-3 text-muted-foreground text-lg md:text-2xl">
        to be revealed soon!
      </p>
    </motion.div>
  ) : (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black text-white py-12 md:py-20 px-4 md:px-6 lg:px-12"
    >
      <style>{`
				@keyframes flicker {
					0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
						opacity: 1;
						text-shadow: 0 0 10px #ff1515, 0 0 20px #ff1515, 0 0 30px #ff1515;
					}
					20%, 24%, 55% {
						opacity: 0.85;
						text-shadow: 0 0 5px #ff1515, 0 0 10px #ff1515;
					}
				}
				
				.text-glow {
					animation: flicker 5s infinite;
				}
				
				.glass-effect {
					backdrop-filter: blur(10px);
					background: rgba(0, 0, 0, 0.65);
				}
			`}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,21,21,0.1)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-glow tracking-wider text-balance mb-2"
            style={{
              fontFamily: "Benguiat, sans-serif",
            }}
          >
            EVENT TIMELINE
          </h1>
          <p className="text-muted-foreground text-sm md:text-base font-light">
            CODEZEN 2026 • February 20-21, 2026
          </p>
          <p className="mt-2 text-muted-foreground text-sm md:text-base font-light">
            Mark your calendar for these important moments ✨
          </p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button
            onClick={() => setActiveDay(1)}
            className={`px-6 md:px-8 py-2.5 md:py-3 border-2 font-bold tracking-wider rounded-lg transition-all duration-300 ${
              activeDay === 1
                ? "border-[#ff1515] text-white bg-black shadow-[0_0_20px_rgba(255,21,21,0.5)]"
                : "border-[#ff1515]/30 text-gray-500 bg-black/40 hover:border-[#ff1515]/60"
            }`}
            style={{
              fontFamily: "'Courier New', monospace",
            }}
          >
            DAY 1
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`px-6 md:px-8 py-2.5 md:py-3 border-2 font-bold tracking-wider rounded-lg transition-all duration-300 ${
              activeDay === 2
                ? "border-[#ff1515] text-white bg-black shadow-[0_0_20px_rgba(255,21,21,0.5)]"
                : "border-[#ff1515]/30 text-gray-500 bg-black/40 hover:border-[#ff1515]/60"
            }`}
            style={{
              fontFamily: "'Courier New', monospace",
            }}
          >
            DAY 2
          </button>
        </motion.div>

        {/* Timeline */}
        <motion.div
          key={activeDay}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative  max-w-5xl mx-auto"
        >
          {/* Center vertical line */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 h-full bg-[#b00000]"
            style={{
              boxShadow: "0 0 10px #ff1515",
            }}
          />

          {currentEvents.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={isLeft ? itemVariants : itemVariantsRight}
                className="relative mb-6 md:mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-6 md:top-8 z-10">
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#b00000] flex items-center justify-center text-neutral-300"
                    style={{
                      boxShadow: "0 0 20px #ff1515, 0 0 30px #ff1515",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 12px #b00000, 0 0 30px #b00000",
                        "0 0 10px #ff1515, 0 0 45px #ff1515",
                        "0 0 12px #b00000, 0 0 30px #b00000",
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
                  className={`flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"
                    }`}
                  >
                    <motion.div
                      className="p-5 md:p-6 lg:py-5 lg:px-7 border-2 border-[#b00000]/40 relative bg-black/60 glass-effect rounded-2xl md:rounded-3xl cursor-pointer transition-all duration-500"
                      style={{
                        boxShadow: "0 0 20px rgba(255, 21, 21, 0.25)",
                      }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 0 40px rgba(255, 21, 21, 0.7)",
                        borderColor: "rgba(255, 21, 21, 0.7)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Mobile Icon */}
                      {/* <div className="md:hidden mb-3 flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full bg-[#b00000] flex items-center justify-center text-neutral-300"
                          style={{
                            boxShadow: "0 0 15px #ff1515",
                          }}
                        >
                          {event.icon}
                        </div>
                      </div> */}

                      {/* Time badge */}
                      <div
                        className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 mb-3 md:mb-4 border border-red-500/60 rounded-lg"
                        style={{
                          backgroundColor: "rgba(255, 21, 21, 0.1)",
                        }}
                      >
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#ff1515]" />
                        <span className="text-[#ff1515] font-bold text-xs md:text-sm tracking-wide">
                          {event.time}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-lg md:text-xl lg:text-lg font-bold text-white mb-2 tracking-wider leading-tight"
                        style={{
                          fontFamily: "'Courier New', monospace",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 md:mt-16 text-gray-500 relative z-10 text-sm md:text-base font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Your complete guide to the hackathon journey 🚀
        </motion.div>
      </div>
    </section>
  );
}
