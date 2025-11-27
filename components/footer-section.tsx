"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Instagram,
  MessageSquare,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="border-t border-primary/20 bg-gradient-to-b from-black via-[#050505] to-[#0a0a0a] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 md:mb-12">
          {/* About */}
          <div className="animate-slide-in-up">
            <h3 className="text-lg md:text-2xl font-bold text-primary mb-4">
              CodeZen 2.0
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              A 36-hour offline hackathon experience in Delhi where innovation,
              code, and creativity collide. 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold text-white mb-4 text-sm md:text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
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
                <a href="#prizes" className="hover:text-primary transition-colors">
                  Prizes
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.15s" }}>
            <h4 className="font-bold text-white mb-4 text-sm md:text-base">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs md:text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <Link href="mailto:business.codegeeks@gmail.com" target="_blank">
                  business.codegeeks@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <Link href="tel:+918448047279" target="_blank">
                  +91 84480 47279
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <Link
                  href="https://maps.app.goo.gl/z8Kcn6KhtQApLMcc8"
                  target="_blank"
                >
                  Guru Tegh Bahadur 4th Centenary Engineering College, Delhi
                </Link>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold text-white mb-4 text-sm md:text-base">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {/* WhatsApp */}
              <Link
                href="https://chat.whatsapp.com/G028i6VGhcyEiy0OAii6lX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect hover-scale-bright bg-transparent h-9 w-9 md:h-10 md:w-10 transition-all hover:bg-primary/10"
                >
                  <MessageSquare className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                </Button>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/codegeeks_gtb4cec/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect hover-scale-bright bg-transparent h-9 w-9 md:h-10 md:w-10 transition-all hover:bg-primary/10"
                >
                  <Instagram className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                </Button>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/codegeeks-gtb4cec/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect hover-scale-bright bg-transparent h-9 w-9 md:h-10 md:w-10 transition-all hover:bg-primary/10"
                >
                  <Linkedin className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                </Button>
              </Link>

              {/* GitHub */}
              <Link href="https://github.com/codegeeks-gtb4cec" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect hover-scale-bright bg-transparent h-9 w-9 md:h-10 md:w-10 transition-all hover:bg-primary/10"
                >
                  <Github className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-gray-400">
            © 2025 <span className="text-primary font-semibold">CodeZen 2.0</span>. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Organized with ❤️ by{" "}
            <span className="text-primary font-medium">CodeGeeks</span> at{" "}
            <span className="text-primary font-medium">
              Guru Tegh Bahadur 4th Centenary Engineering College, Delhi
            </span>
            .
          </p>
          <p className="mt-3 text-[11px] md:text-xs text-gray-600">
            Stay in the light... or dive into the darkness of innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
