"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who can participate?",
      a: "Anyone with a passion for coding and innovation! Students and professionals from all backgrounds are welcome.",
    },
    {
      q: "What is the team size?",
      a: "Teams typically consist of 2-4 members. You can form a team or join an existing one.",
    },
    {
      q: "Is there a registration fee?",
      a: "No! Registration is completely free for all participants.",
    },
    {
      q: "Is accommodation and food provided?",
      a: "Yes! We provide free accommodation and meals throughout the 36-hour hackathon.",
    },
    {
      q: "What are the main prizes?",
      a: "1st Place: ₹15,000 | 2nd Place: ₹11,000 | 3rd Place: ₹7,000 + special category prizes",
    },
    {
      q: "Can I submit previous projects?",
      a: "No, all projects must be created during the hackathon event.",
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
        <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
          Frequently Asked Questions
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
            <div className="p-4 md:p-6 flex items-center justify-between gap-4">
              <h3 className="font-bold text-sm md:text-lg text-card-foreground text-balance">
                {faq.q}
              </h3>
              <ChevronDown
                className={`h-4 md:h-5 w-4 md:w-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                  expanded === i ? "rotate-180" : ""
                }`}
              />
            </div>
            {expanded === i && (
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-xs md:text-sm text-muted-foreground border-t border-primary/20 pt-3 md:pt-4 animate-slide-in-down">
                {faq.a}
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
