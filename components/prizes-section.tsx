"use client";

import { Card } from "@/components/ui/card";
import { Trophy, Medal } from "lucide-react";

export default function PrizesSection() {
  const mainPrizes = [
    {
      place: "1st Prize",
      amount: "₹15,000",
      icon: Trophy, 
      color: "text-yellow-400",
    },
    {
      place: "2nd Prize",
      amount: "₹11,000",
      icon: Medal, 
      color: "text-gray-300",
    },
    {
      place: "3rd Prize",
      amount: "₹7,000",
      icon: Medal, 
      color: "text-amber-600",
    },
  ];

  const specialPrizes = [
    { category: "All-Girls Team", amount: "₹5,000" },
    { category: "Beginner Team", amount: "₹5,000" },
  ];

  const rewards = [
    "💼 Internship Opportunities with Partner Companies",
    "👕 T-shirts, Bags, Notebooks & Stickers",
    "🎁 Vouchers & Platform Access (GitHub Copilot, Balsamiq, etc.)",
    "🏅 Certificates of Merit & Participation",
    "🤝 Networking & Mentorship Sessions",
    "🚀 Exposure to Industry Experts",
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5 text-glow text-balance"
          style={{ fontFamily: "Stranger Things, sans-serif" }}
        >
          PRIZE BREAKDOWN
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Amazing rewards await the brightest innovators at CodeZen 2.0 ✨
        </p>
      </div>

      {/* Main Prizes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto mb-16">
        {mainPrizes.map((prize, i) => (
          <Card
            key={i}
            className={`glass-effect p-6 md:p-8 text-center border-primary/30 hover-glow-intense transition-all duration-300 animate-slide-in-up ${
              i === 0 ? "scale-105 blood-glow" : ""
            }`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <prize.icon
              className={`h-12 md:h-16 w-12 md:w-16 mx-auto mb-3 ${prize.color}`}
            />
            <h3 className="text-lg md:text-2xl font-bold text-white">
              {prize.place}
            </h3>
            <p className="text-2xl md:text-4xl font-bold text-primary mt-2">
              {prize.amount}
            </p>
          </Card>
        ))}
      </div>

      {/* Special Prizes */}
      <div className="max-w-3xl mx-auto mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
          Special Prizes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {specialPrizes.map((prize, i) => (
            <Card
              key={i}
              className="glass-effect p-5 md:p-6 border-primary/30 text-center hover-glow-intense transition-all animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h4 className="text-lg md:text-xl font-semibold text-white">
                {prize.category}
              </h4>
              <p className="text-xl md:text-2xl font-bold text-primary mt-2">
                {prize.amount}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Other Rewards */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
          Other Exciting Rewards
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {rewards.map((reward, i) => (
            <Card
              key={i}
              className="glass-effect border-primary/30 p-4 md:p-5 text-center text-white text-sm md:text-base font-medium hover-glow-intense animate-slide-in-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {reward}
            </Card>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-16">
        <p className="text-sm md:text-base text-muted-foreground">
          Prizes, goodies, and opportunities that make every hour of CodeZen 2.0 worth it 🚀
        </p>
      </div>
    </section>
  );
}
