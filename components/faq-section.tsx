"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who can participate?",
      a: "CodeZen 2.0 is open to all passionate innovators — whether you're a student, developer, or designer from any college or university across India! If you have a knack for coding, creativity, or problem-solving, this is your stage to shine.",
    },
    {
      q: "What is the team size?",
      a: "Each team can have 2 to 4 members. We recommend forming a diverse team that includes people skilled in design, development, and presentation — collaboration fuels innovation!",
    },
    {
      q: "Is there a registration fee?",
      a: "Absolutely not! Participation in CodeZen 2.0 is completely free. We believe innovation should have no entry barrier — all you need is your creativity and enthusiasm!",
    },
    {
      q: "Is accommodation and food provided?",
      a: "Yes! We provide complimentary accommodation and meals for all participants during the entire duration of the 36-hour hackathon. You just bring your energy — we’ll take care of your comfort!",
    },
    {
      q: "What are the prizes?",
      a: "Exciting cash prizes and exclusive partner rewards await the top innovators! 🏆 Expect amazing goodies, mentorship opportunities, and recognition that goes beyond the event. The top 3 teams and category winners will be handsomely rewarded!",
    },
    {
      q: "What are the tracks or problem statements?",
      a: "CodeZen 2.0 features multiple tracks focusing on impactful innovation — from AI & Sustainability 🌱 to FinTech 💰, Healthcare 💊, and EducationTech 📚. Each track will challenge teams to build real-world solutions for modern problems.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-10 md:mb-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-glow text-balance"
          style={{ fontFamily: "Stranger Things, sans-serif" }}
        >
          FAQ
        </h2>
        <p className="text-xs md:text-sm lg:text-base">
          Frequently Asked Questions — Everything You Need to Know About CodeZen
          2.0
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-2 md:space-y-4">
        {faqs.map((faq, i) => (
          <Card
            key={i}
            className="glass-effect border-primary/30 overflow-hidden hover-glow-intense cursor-pointer transition-all animate-slide-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            {/* Question */}
            <div className="p-4 md:p-0 md:px-6 flex items-center justify-between gap-4">
              <h3 className="font-bold text-sm md:text-lg text-card-foreground text-balance tracking-wide">
                {faq.q}
              </h3>
              <ChevronDown
                className={`h-4 md:h-5 w-4 md:w-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                  expanded === i ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer */}
            {expanded === i && (
              <div className="px-4 md:px-6 pb-4 md:pb-2 border-t border-primary/20 pt-3 md:pt-4 animate-slide-in-down leading-relaxed">
                <p className="text-sm md:text-base font-medium text-white">
                  {faq.a}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
