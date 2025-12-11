import { Trophy, Gift, Award } from "lucide-react";
import { motion } from "framer-motion";

const PrizesSection = () => {
  const prizes = [
    { place: "1st Prize", amount: "₹15,000", emoji: "🏆", rank: 1 },
    { place: "2nd Prize", amount: "₹11,000", emoji: "🥈", rank: 2 },
    { place: "3rd Prize", amount: "₹7,000", emoji: "🥉", rank: 3 },
  ];

  const specialPrizes = [
    { category: "All-Girls Team", amount: "₹5,000", emoji: "💎" },
    { category: "Beginner Team", amount: "₹5,000", emoji: "🚀" },
  ];

  const rewards = [
    { text: "Internship Opportunities with Partner Companies", emoji: "💼" },
    { text: "T-shirts, Bags, Notebooks & Stickers", emoji: "👕" },
    { text: "Vouchers & Platform Access (GitHub Copilot, Balsamiq, etc.)", emoji: "🎁" },
    { text: "Certificates of Merit & Participation", emoji: "🏅" },
    { text: "Networking & Mentorship Sessions", emoji: "🤝" },
    { text: "Exposure to Industry Experts", emoji: "🚀" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="prizes"
      className="relative py-20 sm:py-28 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container max-w-6xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text" style={{ fontFamily: "Benguiat, sans-serif" }}>
              PRIZES
            </span>{" "}
            <span className="text-foreground text-primary" style={{ fontFamily: "Benguiat, sans-serif" }}>
              & REWARDS
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-end gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={containerVariants}
        >
          <motion.div
            className="prize-card order-2 md:order-1 w-full md:w-64 h-auto md:h-56"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="glass-card shine-effect rounded-2xl p-6 sm:p-8 text-center h-full hover-lift border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl sm:text-5xl mb-3">{prizes[1].emoji}</div>
              <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">{prizes[1].place}</div>
              <div className="text-2xl sm:text-3xl font-black gradient-text">{prizes[1].amount}</div>
            </div>
          </motion.div>

          <motion.div
            className="prize-card order-1 md:order-2 w-full md:w-72 h-auto md:h-72"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10, boxShadow: "0 0 30px rgba(220, 20, 60, 0.6)" }}
          >
            <div className="glass-card shine-effect rounded-2xl p-6 sm:p-10 text-center h-full hover-lift border-2 border-primary/50 blood-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
              <div className="relative z-10">
                <div className="text-5xl sm:text-6xl mb-4">{prizes[0].emoji}</div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{prizes[0].place}</div>
                <div className="text-3xl sm:text-4xl font-black gradient-text">{prizes[0].amount}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="prize-card order-3 w-full md:w-64 h-auto md:h-48"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="glass-card shine-effect rounded-2xl p-6 text-center h-full hover-lift border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl sm:text-5xl mb-3">{prizes[2].emoji}</div>
              <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">{prizes[2].place}</div>
              <div className="text-2xl sm:text-3xl font-black gradient-text">{prizes[2].amount}</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-2xl mx-auto"
          variants={containerVariants}
        >
          {specialPrizes.map((prize, index) => (
            <motion.div
              key={index}
              className="glass-card shine-effect rounded-xl p-5 sm:p-6 text-center hover-lift group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Award className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div className="text-base sm:text-lg font-bold text-foreground mb-1">{prize.category}</div>
              <div className="text-xl sm:text-2xl font-black gradient-text">{prize.amount}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="glass-card stat-card shine-effect rounded-2xl p-6 sm:p-8"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Additional Rewards</h3>
          </div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            variants={containerVariants}
          >
            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-lg sm:text-xl shrink-0">{reward.emoji}</span>
                <span className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                  {reward.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PrizesSection;
