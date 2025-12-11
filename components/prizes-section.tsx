import { Trophy, Gift, Award } from "lucide-react";

const PrizesSection = () => {
  const prizes = [
    {
      place: "1st Prize",
      amount: "₹15,000",
      emoji: "🏆",
      rank: 1,
    },
    {
      place: "2nd Prize",
      amount: "₹11,000",
      emoji: "🥈",
      rank: 2,
    },
    {
      place: "3rd Prize",
      amount: "₹7,000",
      emoji: "🥉",
      rank: 3,
    },
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

  return (
    <section id="prizes" className="relative py-20 sm:py-28 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text" style={{
					fontFamily: "Benguiat, sans-serif",
				}}>PRIZES</span>{" "}
            <span className="text-foreground text-primary"
            style={{
              fontFamily: "Benguiat, sans-serif",
            }}
            >& REWARDS</span>
          </h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Glory awaits the brave. Compete for incredible prizes and recognition.
          </p> */}
        </div>

        {/* Main prizes - Podium style */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* 2nd Place */}
          <div className="prize-card order-2 md:order-1 w-full md:w-64 h-auto md:h-56">
            <div className="glass-card shine-effect rounded-2xl p-6 sm:p-8 text-center h-full hover-lift border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl sm:text-5xl mb-3">{prizes[1].emoji}</div>
              <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">{prizes[1].place}</div>
              <div className="text-2xl sm:text-3xl font-black gradient-text">{prizes[1].amount}</div>
            </div>
          </div>
          
          {/* 1st Place - Bigger */}
          <div className="prize-card order-1 md:order-2 w-full md:w-72 h-auto md:h-72">
            <div className="glass-card shine-effect rounded-2xl p-6 sm:p-10 text-center h-full hover-lift border-2 border-primary/50 blood-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
              <div className="relative z-10">
                {/* <Trophy className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-primary" /> */}
                <div className="text-5xl sm:text-6xl mb-4">{prizes[0].emoji}</div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{prizes[0].place}</div>
                <div className="text-3xl sm:text-4xl font-black gradient-text">{prizes[0].amount}</div>
              </div>
            </div>
          </div>
          
          {/* 3rd Place */}
          <div className="prize-card order-3 w-full md:w-64 h-auto md:h-48">
            <div className="glass-card shine-effect rounded-2xl p-6 text-center h-full hover-lift border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl sm:text-5xl mb-3">{prizes[2].emoji}</div>
              <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">{prizes[2].place}</div>
              <div className="text-2xl sm:text-3xl font-black gradient-text">{prizes[2].amount}</div>
            </div>
          </div>
        </div>

        {/* Special prizes */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-2xl mx-auto">
          {specialPrizes.map((prize, index) => (
            <div
              key={index}
              className="glass-card shine-effect rounded-xl p-5 sm:p-6 text-center hover-lift group"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                {/* <span className="text-2xl sm:text-3xl">{prize.emoji}</span> */}
                <Award className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div className="text-base sm:text-lg font-bold text-foreground mb-1">{prize.category}</div>
              <div className="text-xl sm:text-2xl font-black gradient-text">{prize.amount}</div>
            </div>
          ))}
        </div>

        {/* Rewards section */}
        <div className="glass-card stat-card shine-effect rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* <Gift className="h-6 w-6 text-primary" /> */}
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Additional Rewards</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
              >
                <span className="text-lg sm:text-xl shrink-0">{reward.emoji}</span>
                <span className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                  {reward.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
