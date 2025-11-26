"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center overflow-hidden z-50">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              backgroundColor: `rgba(220, 20, 60, ${Math.random() * 0.1 + 0.05})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated title */}
        <div className="mb-8 md:mb-12">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-glow flicker text-balance"
            style={{ fontFamily: "monospace" }}
          >
            CODEZEN
          </h1>
          <p className="text-primary mt-2 md:mt-4 text-sm md:text-xl lg:text-2xl animate-pulse">
            Initializing Portal...
          </p>
        </div>

        {/* Animated grid */}
        <div className="mb-8 md:mb-12 flex justify-center gap-1 md:gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary"
              style={{
                animation: `pulse-glow 0.8s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-48 md:w-64 h-1 bg-card rounded-full overflow-hidden border border-primary/30 glass-effect mx-auto">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 15px rgba(220, 20, 60, 0.8)",
            }}
          />
        </div>
        <p className="text-muted-foreground mt-3 md:mt-4 text-xs md:text-sm">{Math.round(progress)}%</p>

        {/* Flashing text */}
        <div className="mt-8 md:mt-12 space-y-1 md:space-y-2">
          <p className="text-primary text-xs md:text-sm animate-pulse">████ CONNECTING ████</p>
          <p className="text-accent text-xs md:text-sm animate-pulse" style={{ animationDelay: "0.3s" }}>
            ██ LOADING DIMENSIONS ██
          </p>
          <p className="text-primary text-xs md:text-sm animate-pulse" style={{ animationDelay: "0.6s" }}>
            ████████ READY ████████
          </p>
        </div>
      </div>
    </div>
  )
}
