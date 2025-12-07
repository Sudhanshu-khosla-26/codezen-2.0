"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function PrizesSection() {
  const prizes = [
    {
      place: "1st Prize",
      amount: "₹15,000",
      emoji: "🏆",
      gradient: "from-[#ff005c]/40 to-black/80",
    },
    {
      place: "2nd Prize",
      amount: "₹11,000",
      emoji: "🥈",
      gradient: "from-[#ff3366]/40 to-black/80",
    },
    {
      place: "3rd Prize",
      amount: "₹7,000",
      emoji: "🥉",
      gradient: "from-[#ff0044]/40 to-black/80",
    },
  ];

  const specialPrizes = [
    { category: "All-Girls Team", amount: "₹5,000", emoji: "💎" },
    { category: "Beginner Team", amount: "₹5,000", emoji: "🚀" },
  ];

  const rewards = [
    "💼 Internship Opportunities with Partner Companies",
    "👕 T-shirts, Bags, Notebooks & Stickers",
    "🎁 Vouchers & Platform Access (GitHub Copilot, Balsamiq, etc.)",
    "🏅 Certificates of Merit & Participation",
    "🤝 Networking & Mentorship Sessions",
    "🚀 Exposure to Industry Experts",
  ];

  const cardStyles =
    "border border-[#ff005c]/40 rounded-3xl backdrop-blur-md text-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,0,92,0.7)]";

  return (
    <section className="relative overflow-hidden bg-black text-white py-20 px-6 md:px-12">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,92,0.12)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />

      {/* Heading */}
      <motion.div
        className="text-center mb-12 md:mb-16 relative z-10 animate-scale-in"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-glow flicker tracking-wider animate-scale-in text-balance"
          style={{ fontFamily: "Stranger Things, sans-serif" }}
        >
          PRIZES & REWARDS
        </h1>
        <p className="mt-3 text-muted-foreground text-base md:text-lg font-light">
          Win exciting prizes and get recognized for your innovation ✨
        </p>
      </motion.div>

      {/* --- Grand Cash Prizes --- */}
      <div className="max-w-6xl mx-auto mb-10 relative z-10">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-primary text-center">
          🥇 Grand Cash Prizes
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {prizes.map((prize, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                className={`p-8 md:p-10 ${cardStyles} bg-gradient-to-br ${prize.gradient} glass-effect border-primary/30 overflow-hidden hover-glow-intense cursor-pointer transition-all animate-slide-in-up
`}
              >
                <motion.div
                  className="text-6xl mb-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1 + i,
                    ease: "easeInOut",
                  }}
                >
                  {prize.emoji}
                </motion.div>
                <h4 className="text-2xl font-bold tracking-wide text-white">
                  {prize.place}
                </h4>
                <p className="text-4xl font-extrabold text-primary mt-3 drop-shadow-[0_0_15px_rgba(120,0,60,1)]">
                  {prize.amount}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Category-Specific Awards --- */}
      <motion.div
        className="max-w-4xl mx-auto mb-20 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-primary text-center">
          ⭐ Category-Specific Awards
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialPrizes.map((sp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 border  bg-linear-to-r from-black/50 to-[#ff3366]/20 rounded-2xl backdrop-blur-md hover:shadow-[0_0_45px_rgba(255,0,92,0.4)] glass-effect border-primary/30 overflow-hidden hover-glow-intense cursor-pointer animate-slide-in-up

 transition-all">
                <div className="flex items-center justify-center space-x-4">
                  <motion.div
                    className="text-5xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2 + i,
                      ease: "easeInOut",
                    }}
                  >
                    {sp.emoji}
                  </motion.div>
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-white">
                      {sp.category}
                    </h4>
                    <p className="text-2xl font-bold text-primary mt-1 drop-shadow-[0_0_15px_rgba(120,0,60,1)]">
                      {sp.amount}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- Perks and Swag --- */}
      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-primary text-center">
          🎁 Perks and Swag
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewards.map((reward, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="p-5 border glass-effect bg-black/40 text-sm md:text-base text-gray-200 text-left font-medium flex items-center duration-300 hover:shadow-[0_0_35px_rgba(120,0,10,1)]
 hover:border-[#ff005c]/70 hover:scale-[1.03] glass-effect border-primary/30 overflow-hidden hover-glow-intense cursor-pointer transition-all animate-slide-in-up"
              >
                {reward}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="text-center mt-16 text-gray-500 relative z-10 text-sm md:text-lg font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        Prizes, goodies & experiences that make CodeZen 2.0 truly unforgettable 🚀
      </motion.div>
    </section>
  );
}