"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import LoadingScreen from "@/components/loading-screen";
import HeroSection from "@/components/hero-section";
import EventDetails from "@/components/event-details";
import TracksSection from "@/components/tracks-section";
import PrizesSection from "@/components/prizes-section";
import StatsSection from "@/components/stats-section";
import FaqSection from "@/components/faq-section";
import FooterSection from "@/components/footer-section";
import TimelineSection from "@/components/timeline-section";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";

export default function CodeZenPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.15),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/dark-abstract-pattern.png')] bg-cover bg-center" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(500)].map((_, i) => {
          const size = Math.random() * 4 + 0.5;
          const duration = 8 + Math.random() * 15;
          const delay = Math.random() * 8;
          const colors = [
            "rgba(220, 20, 60, 0.8)",
            "rgba(139, 0, 0, 0.6)",
            "rgba(255, 0, 0, 0.4)",
            "rgba(178, 34, 34, 0.5)",
            "rgba(255, 20, 147, 0.3)",
          ];

          return (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                filter: `blur(${Math.random() * 1}px)`,
                boxShadow: `0 0 ${
                  5 + Math.random() * 5
                }px rgba(220, 20, 60, 0.6)`,
              }}
            />
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        {/* <EventDetails /> */}
        {/* <StatsSection /> */}
      
        <div id="tracks">
          <TracksSection />
        </div>
        <div id="timeline">
          <TimelineSection />
        </div>
        <div id="prizes">
          <PrizesSection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <div id="faq">
          <FaqSection />
        </div>
        <div id="contact">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
