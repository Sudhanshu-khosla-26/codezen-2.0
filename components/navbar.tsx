import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Timeline", href: "#timeline" },
  { name: "Prizes", href: "#prizes" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Load Devfolio script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle scroll and section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      // Detect active section
      const sections = navItems.map((item) =>
        item.href.startsWith("#") ? document.querySelector(item.href) : null
      );

      const currentSection = sections.findIndex((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection !== -1) {
        setActiveSection(navItems[currentSection].href);
      } else if (window.scrollY === 0) {
        setActiveSection("/");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle smooth scrolling
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, href: string) => {
      e.preventDefault();
      setIsOpen(false);

      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    },
    []
  );

  return (
    <>
      {/* Scroll Progress Bar */}
      {/* <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary z-50 transition-transform origin-left"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
        }}
      /> */}

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-effect "
            : "backdrop-blur-sm "
        }`}
      >
        <div className="container mx-auto px-4 h-18 flex items-center justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center  items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 font-squids tracking-wide ${
                    activeSection === item.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  style={{ fontFamily: "Benguiat, sans-serif" }}
                  whileHover={{ y: -2 }}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}

            {/* Desktop Devfolio Button */}
            <div
              className="apply-button ml-4 glass-effect blood-glow hover-lift transition-all"
              data-hackathon-slug="codezen2025"
              data-button-theme="dark-inverted"
              style={{
                height: "44px",
                width: "180px",
              }}
            />
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-lg transition-all hover:scale-110 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-primary/20 glass-effect"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:translate-x-2 ${
                        activeSection === item.href
                          ? "bg-primary/20 text-primary"
                          : "text-foreground hover:bg-primary/5"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 10 }}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}

                {/* Mobile Devfolio Button */}
                <div
                  className="apply-button w-full mt-2 glass-effect blood-glow"
                  data-hackathon-slug="codezen2025"
                  data-button-theme="dark-inverted"
                  style={{
                    height: "44px",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default memo(Navbar);
