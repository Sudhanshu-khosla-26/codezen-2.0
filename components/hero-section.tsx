import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Rocket, Calendar, Clock, MapPin, Trophy, MessageCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Users, value: "10,000+ Participants", label: "", sublabel: "From across India" },
    { icon: Trophy, value: "10,00,000+", label: "", sublabel: "In Prizes" },
    { icon: MessageCircle, value: "JOIN WHATSAPP", label: "", sublabel: "Connect with Teams" },
  ];

  const eventDetails = [
    { icon: Calendar, text: "Feb 28 - Mar 1, 2026" },
    { icon: Clock, text: "36 Hours" },
    { icon: MapPin, text: "GTB4CEC, Delhi" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container max-w-5xl mx-auto mt-2">
        <div className="text-center space-y-8 md:space-y-4 mb-3">

          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="glass-card px-4 py-2 glass-effect blood-glow text-xs sm:text-sm font-medium tracking-wide border-primary/30 text-muted-foreground"
            >
              ⚡ Welcome to the Upside Down of Coding
            </Badge>
          </motion.div>

          <motion.div className="space-y-2" variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <motion.span
                className="gradient-text flicker text-glow mt-2"
                style={{ fontFamily: "Benguiat, sans-serif" }}
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                CODEZEN
              </motion.span>
              <br className="md:hidden"/>
              <span
                className="text-foreground text-8xl ml-2 sm:ml-4 text-glow"
                style={{ fontFamily: "Benguiat, sans-serif" }}
              >
                2.0
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-display tracking-[0.2em] text-muted-foreground uppercase">
              36-Hour Hackathon
            </p>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Join us for an exciting journey of coding, innovation, and creativity.
            Build something extraordinary in the Upside Down.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-4 text-sm sm:text-base"
            variants={itemVariants}
          >
            {eventDetails.map((detail, index) => (
              <motion.div
                key={index}
                className="flex p-1 px-4 rounded-full glass-card glass-effect hover-lift items-center gap-2 text-muted-foreground shine-effect"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(220, 20, 60, 0.5)" }}
              >
                <detail.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>{detail.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card group p-4 text-center transition-all shine-effect"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
                <div className="text-lg font-bold gradient-text leading-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
            variants={itemVariants}
          >
            <a href="https://www.namespace.world/events/AFYYA7?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnlueXbe9hiF1Tp1uY-MC62l15C19FuV9UMMLWrfH3_mjaKHaR-1IAoL0xsdI_aem_WGWwQcUVmP7K0gSJwgXHUw">
              <Button
                size="lg"
                className="blood-glow w-full pulse-glow cursor-pointer px-8 py-6 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Register Now
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="glass-card px-8  py-6 text-base cursor-pointer font-bold border-primary/40 hover:border-primary hover:bg-primary/10 transition-all"
              onClick={() => scrollToSection("tracks")}
            >
              <Users className="mr-2 h-5 w-5" />
              View Tracks
            </Button>
          </motion.div>

          <motion.div className="pt-8" variants={itemVariants}>
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs tracking-widest uppercase">Scroll Down</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;