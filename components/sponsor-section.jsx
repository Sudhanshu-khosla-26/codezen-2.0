import { Handshake, Crown, Star, Zap, Heart } from "lucide-react";

const SponsorsSection = () => {
  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      icon: Crown,
      sponsors: [
        { name: "TechCorp", logo: "🏢" },
      ],
      cardClass: "animate-glow-pulse",
    },
    {
      tier: "Platinum Sponsors",
      icon: Star,
      sponsors: [
        { name: "InnovateLabs", logo: "💡" },
        { name: "CloudSync", logo: "☁️" },
      ],
      cardClass: "",
    },
    {
      tier: "Gold Sponsors",
      icon: Zap,
      sponsors: [
        { name: "DevTools Inc", logo: "🛠️" },
        { name: "DataFlow", logo: "📊" },
        { name: "CodeCraft", logo: "💻" },
      ],
      cardClass: "",
    },
    {
      tier: "Community Partners",
      icon: Heart,
      sponsors: [
        { name: "OpenSource Hub", logo: "🌐" },
        { name: "Tech Community", logo: "👥" },
        { name: "Dev Network", logo: "🔗" },
        { name: "Startup Accelerator", logo: "🚀" },
      ],
      cardClass: "",
    },
  ];

  return (
    <section id="sponsors" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20 animate-slide-in-down">
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6">
            <Handshake className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Our Allies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-foreground">Our</span>{" "}
            <span className="text-glow text-primary flicker">Sponsors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl">
            Powered by industry leaders who believe in fostering innovation
          </p>
        </div>

        {/* Sponsor tiers */}
        <div className="space-y-12 sm:space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div 
              key={tier.tier} 
              className="animate-slide-in-up"
              style={{ animationDelay: `${tierIndex * 0.15}s` }}
            >
              {/* Tier header */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-primary/50"></div>
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                  <tier.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-wider">{tier.tier}</span>
                </div>
                <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-primary/50"></div>
              </div>

              {/* Sponsors grid */}
              <div className={`flex flex-wrap justify-center gap-6 ${tier.sponsors.length === 1 ? 'max-w-md mx-auto' : ''}`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsor.name}
                    className={`stat-card rounded-2xl p-6 sm:p-8 group cursor-pointer hover-scale-bright ${tier.cardClass} ${
                      tierIndex === 0 ? 'w-full max-w-lg' : 'w-full sm:w-auto sm:min-w-[200px] sm:max-w-[280px]'
                    }`}
                    style={{ animationDelay: `${tierIndex * 0.15 + sponsorIndex * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Sponsor logo placeholder */}
                      <div className={`${tierIndex === 0 ? 'w-24 h-24 text-5xl' : 'w-16 h-16 text-3xl'} rounded-xl bg-secondary/50 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 group-hover:blood-glow transition-all duration-300 mb-4`}>
                        {sponsor.logo}
                      </div>
                      <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors ${tierIndex === 0 ? 'text-2xl' : 'text-lg'}`}>
                        {sponsor.name}
                      </h3>
                      {tierIndex === 0 && (
                        <span className="text-sm text-muted-foreground mt-2">Title Sponsor</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-20 text-center animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="stat-card rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/30">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Become a Sponsor
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Partner with us to connect with 7000+ talented developers and innovators. 
                Shape the future of technology together.
              </p>
              <button className="glass-effect px-8 py-3 rounded-full font-bold text-primary hover:text-foreground border border-primary/50 hover:border-primary hover:blood-glow transition-all duration-300 hover-lift">
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Sponsor benefits */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-in-up" style={{ animationDelay: "0.7s" }}>
          {[
            { icon: "🎯", text: "Brand Visibility to 7K+ Devs" },
            { icon: "🤝", text: "Talent Acquisition Pipeline" },
            { icon: "🏆", text: "Custom Track Sponsorship" },
            { icon: "📢", text: "Social Media Promotion" },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <span className="text-2xl">{benefit.icon}</span>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
