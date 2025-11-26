"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Code, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="text-center space-y-6 md:space-y-8 animate-slide-in-down">
        <div className="inline-block">
          <Badge className="glass-effect px-4 md:px-6 py-2 text-xs md:text-sm font-mono blood-glow hover-glow-intense cursor-pointer transition-all">
            Welcome to the Upside Down of Coding
          </Badge>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-glow flicker tracking-wider animate-scale-in text-balance"
          style={{ fontFamily: "monospace" }}
        >
          CODEZEN 2
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-sans animate-slide-in-up text-balance">
          36-Hour Offline Hackathon Experience • February 20-21, 2025 • Delhi, India
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-6 md:pt-8">
          <Button
            size="lg"
            className="glass-effect blood-glow px-6 md:px-8 py-5 md:py-6 text-sm md:text-base bg-primary hover:bg-primary/90 text-primary-foreground hover-lift font-bold transition-all w-full sm:w-auto animate-pulse-glow"
            onClick={() => scrollToSection("register")}
          >
            <Users className="mr-2 h-4 md:h-5 w-4 md:w-5" />
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-effect px-6 md:px-8 py-5 md:py-6 text-sm md:text-base border-primary/50 hover:bg-primary/10 bg-transparent hover-glow-intense font-bold transition-all w-full sm:w-auto"
            onClick={() => scrollToSection("tracks")}
          >
            <Code className="mr-2 h-4 md:h-5 w-4 md:w-5" />
            View Tracks
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-8 md:pt-12 animate-bounce">
          <ChevronDown className="h-6 md:h-8 w-6 md:w-8 mx-auto text-primary opacity-60" />
        </div>
      </div>
    </section>
  )
}
