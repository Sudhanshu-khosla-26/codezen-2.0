"use client"

import { Card } from "@/components/ui/card"

export default function StatsSection() {
  const stats = [
    { number: "7000+", label: "Participants" },
    { number: "₹1Cr+", label: "Prize Pool" },
    { number: "₹65K+", label: "Cash Prizes" },
    { number: "Food", label: "& Accommodation" },
  ]

  return (
    <section className="container mx-auto px-4 pb-16 md:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <Card
            key={i}
            className="glass-effect p-4 md:p-6 text-center border-primary/30 hover-scale-bright cursor-pointer transition-all animate-scale-in"
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 text-balance">{stat.number}</p>
            <p className="text-xs md:text-sm text-muted-foreground font-semibold text-balance">{stat.label}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
