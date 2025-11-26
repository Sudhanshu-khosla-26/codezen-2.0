"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Award } from "lucide-react"

export default function PrizesSection() {
  const mainPrizes = [
    { place: "1st Place", amount: "₹15,000", icon: Trophy, color: "text-primary" },
    { place: "2nd Place", amount: "₹11,000", icon: Award, color: "text-primary" },
    { place: "3rd Place", amount: "₹7,000", icon: Award, color: "text-primary" },
  ]

  const specialPrizes = [
    { category: "All-Girls Team", amount: "₹5,000" },
    { category: "Beginner Team", amount: "₹5,000" },
  ]

  const rewards = [
    "💻 GitHub Copilot Access",
    "🎨 Balsamiq Wireframing Tool",
    "🏆 T-shirts & Merchandise",
    "💼 Internship Opportunities",
    "📜 Certificates of Merit",
    "🤝 Networking & Mentorship",
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-10 md:mb-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-glow flicker text-balance"
          style={{ fontFamily: "monospace" }}
        >
          PRIZES
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-muted-foreground">Rewards worth escaping for</p>
      </div>

      {/* Main Prizes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-10 md:mb-12">
        {mainPrizes.map((prize, i) => (
          <Card
            key={i}
            className={`glass-effect p-6 md:p-8 space-y-3 md:space-y-4 border-primary/30 text-center ${
              i === 0 ? "blood-glow md:scale-105" : "hover-glow-intense"
            } transition-all duration-300 hover-lift animate-slide-in-up`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <prize.icon className={`h-10 md:h-16 w-10 md:w-16 mx-auto ${prize.color}`} />
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-card-foreground text-balance">{prize.place}</h3>
              <p className="text-2xl md:text-4xl font-bold text-primary mt-2">{prize.amount}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Special Prizes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-2xl mx-auto mb-10 md:mb-12">
        {specialPrizes.map((prize, i) => (
          <Card
            key={i}
            className="glass-effect p-4 md:p-6 border-primary/30 hover-scale-bright text-center transition-all animate-scale-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <h3 className="text-sm md:text-lg font-bold text-card-foreground text-balance">{prize.category}</h3>
            <p className="text-lg md:text-2xl font-bold text-primary mt-2">{prize.amount}</p>
          </Card>
        ))}
      </div>

      {/* Other Rewards */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-lg md:text-2xl font-bold text-center mb-4 md:mb-6 text-primary">Other Rewards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
          {rewards.map((reward, i) => (
            <Card
              key={i}
              className="glass-effect p-3 md:p-4 border-primary/30 hover-scale-bright text-center text-foreground text-xs md:text-sm transition-all animate-slide-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {reward}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
