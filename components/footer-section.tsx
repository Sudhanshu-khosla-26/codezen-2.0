"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, MessageSquare } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="border-t border-primary/20 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* About */}
          <div className="animate-slide-in-up">
            <h3 className="text-lg md:text-2xl font-bold text-primary mb-3 md:mb-4">CodeZen 2</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-balance">
              A 36-hour offline hackathon experience in Delhi. Where innovation meets creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold text-foreground mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>
                <a href="#tracks" className="hover:text-primary transition-colors">
                  Tracks
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sponsorship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold text-foreground mb-3 md:mb-4 text-sm md:text-base">Connect With Us</h4>
            <div className="flex gap-2 md:gap-4">
              <Button
                variant="outline"
                size="icon"
                className="glass-effect hover-scale-bright bg-transparent h-8 w-8 md:h-10 md:w-10 transition-all"
              >
                <MessageSquare className="h-4 md:h-5 w-4 md:w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="glass-effect hover-scale-bright bg-transparent h-8 w-8 md:h-10 md:w-10 transition-all"
              >
                <Instagram className="h-4 md:h-5 w-4 md:w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="glass-effect hover-scale-bright bg-transparent h-8 w-8 md:h-10 md:w-10 transition-all"
              >
                <Linkedin className="h-4 md:h-5 w-4 md:w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="glass-effect hover-scale-bright bg-transparent h-8 w-8 md:h-10 md:w-10 transition-all"
              >
                <Github className="h-4 md:h-5 w-4 md:w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2025 CodeZen 2. All rights reserved. Organized by CodeGeeks</p>
          <p className="mt-2">Stay in the light... or dive into the darkness of innovation.</p>
        </div>
      </div>
    </footer>
  )
}
