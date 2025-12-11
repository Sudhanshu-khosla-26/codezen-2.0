import { motion } from "framer-motion";

const sponsors = {
  platinum: [
    { name: "Duality", logo: "/sponsor-logos/duality.svg" },
    { name: "Srijan", logo: "/sponsor-logos/srijan.svg" },
  ],
  gold: [
    { name: "Verbwire", logo: "/sponsor-logos/verbwire.svg" },
    { name: "Axure", logo: "/sponsor-logos/axure.svg" },
  ],
  silver: [
    { name: "Web3 Samachar", logo: "/sponsor-logos/web3-samachar.svg" },
    { name: "IMS Ghaziabad", logo: "/sponsor-logos/ims-ghaziabad.svg" },
    { name: "Echo3D", logo: "/sponsor-logos/echo3d.svg" },
  ],
};

const SponsorsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const renderSponsorTier = (tier: keyof typeof sponsors, title: string) => (
    <motion.div className="mb-12" variants={itemVariants}>
      <h3
        className="text-2xl sm:text-3xl font-bold text-center mb-8 tracking-wider text-primary"
        style={{ fontFamily: "Benguiat, sans-serif" }}
      >
        {title}
      </h3>
      <div
        className={`grid grid-cols-2 ${tier === 'platinum' ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6 sm:gap-8 items-center max-w-4xl mx-auto`}
      >
        {sponsors[tier].map((sponsor, index) => (
          <motion.a
            key={index}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card shine-effect rounded-2xl p-6 flex justify-center items-center h-32 sm:h-40 hover-lift transition-all duration-300"
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(220, 20, 60, 0.4)" }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-h-12 sm:max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.section
      id="sponsors"
      className="py-20 sm:py-28 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container max-w-6xl mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text" style={{ fontFamily: "Benguiat, sans-serif" }}>
              OUR SPONSORS
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Powering the Upside Down of innovation.
          </p>
        </motion.div>

        {renderSponsorTier("platinum", "Platinum Sponsors")}
        {renderSponsorTier("gold", "Gold Sponsors")}
        {renderSponsorTier("silver", "Silver Sponsors")}
      </div>
    </motion.section>
  );
};

export default SponsorsSection;
