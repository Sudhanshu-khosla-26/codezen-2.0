import { motion } from "framer-motion";
import { Handshake, Crown, Star, Zap } from "lucide-react";

const SponsorsSection = () => {
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      icon: Crown,
      cardClass: "animate-glow-pulse",
    },
    {
      tier: "Platinum Sponsors",
      icon: Star,
      cardClass: "",
    },
    {
      tier: "Gold Sponsors",
      icon: Zap,
      cardClass: "",
    },
  ];

  return (
    <motion.section
      id="sponsors"
      className="relative py-10 sm:py-10 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="container max-w-6xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-20" variants={fadeInUp}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4  flicker" style={{ fontFamily: "'Benguiat', sans-serif" }}>
            SPON
            <span className="text-primary">
            SORS
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Fueled by the vanguards of technology and innovation.
          </p>
        </motion.div>

        <div className="space-y-12">
            {sponsorTiers.map((tier, index) => (
                 <motion.div key={tier.tier} variants={fadeInUp}>
                     <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-primary/50"></div>
                        <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                          <tier.icon className="h-5 w-5 text-primary" />
                          <span className="text-sm font-bold text-foreground uppercase tracking-wider">{tier.tier}</span>
                        </div>
                        <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-primary/50"></div>
                      </div>
                    <div className={`glass-card shine-effect rounded-2xl p-8 sm:p-12 text-center group hover-lift ${tier.cardClass}`}>
                        <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "Benguiat, sans-serif" }}>
                            To Be Revealed...
                        </h3>
                        <p className="text-muted-foreground">
                            Our {tier.tier} for CodeZen 2026 are being finalized. Stay tuned!
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        <motion.div className="mt-20 text-center" variants={fadeInUp}>
          <div className="stat-card rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/30">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "Benguiat, sans-serif" }}>
                  Become a Sponsor
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Join us in our mission to empower the next generation of tech leaders. Connect with a vast pool of talent and showcase your brand.
                </p>
                <button className="glass-effect px-8 py-3 rounded-full font-bold text-primary hover:text-foreground border border-primary/50 hover:border-primary hover:blood-glow transition-all duration-300 hover-lift">
                  Get in Touch
                </button>
              </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SponsorsSection;
