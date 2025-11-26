"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function EventDetails() {
  return (
    <section className="container mx-auto px-4 pb-16 md:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {[
          { icon: Calendar, title: "Date", content: "20-21 February 2025" },
          { icon: Clock, title: "Duration", content: "36 Hours Offline" },
          { icon: MapPin, title: "Location", content: "Delhi, India" },
        ].map((item, i) => (
          <Card
            key={i}
            className="glass-effect p-4 md:p-6 space-y-3 md:space-y-4 border-primary/30 hover-lift hover-scale-bright transition-all animate-slide-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-start md:items-center gap-3">
              <item.icon className="h-6 md:h-8 w-6 md:w-8 text-primary flex-shrink-0 mt-1 md:mt-0" />
              <div className="min-w-0">
                <h3 className="font-bold text-base md:text-lg text-card-foreground">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground break-words">{item.content}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
