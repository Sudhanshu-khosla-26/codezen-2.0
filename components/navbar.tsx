"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "TRACKS", id: "tracks" },
    { label: "TIMELINE", id: "timeline" },
    { label: "PRIZES", id: "prizes" },
    { label: "TEAM", id: "team" },
    { label: "FAQ", id: "faq" },
    // { label: "CONTACT", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">
              CZ
            </span>
          </div>
          <span className="font-bold text-lg hidden sm:inline text-foreground">
            CodeZen
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="text-foreground  hover:bg-primary/5 transition-all"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Register Button & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex glass-effect blood-glow bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all hover-lift"
            onClick={() => scrollToSection("register")}
          >
            Register
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-sm animate-slide-in-down">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              className="w-full glass-effect blood-glow bg-primary hover:bg-primary/90 text-primary-foreground font-bold mt-2"
              onClick={() => scrollToSection("register")}
            >
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
