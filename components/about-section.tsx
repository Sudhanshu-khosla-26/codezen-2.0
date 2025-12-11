import { Users, Trophy, Coins, Utensils } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "7000+", label: "Participants", icon: Users },
    { number: "₹1Cr+", label: "Prize Pool", icon: Trophy },
    { number: "₹65K+", label: "Cash Prizes", icon: Coins },
    { number: "Food", label: "& Accommodation", icon: Utensils },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text  "
              style={{ fontFamily: "Benguiat, sans-serif" }}
            >ABOUT</span>{" "}
            <span className="text-foreground text-primary "      style={{ fontFamily: "Benguiat, sans-serif" }}>CODEZEN</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Enter the Upside Down of innovation. A 36-hour journey where code meets creativity,
            and extraordinary ideas come to life.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card  shine-effect rounded-2xl p-6 sm:p-8 text-center group hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-4 text-primary group-hover:text-accent transition-colors duration-300" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Description cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card  shine-effect rounded-2xl p-6 sm:p-8 hover-lift">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              🔥 The Experience
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              CODEZEN 2025 brings together the brightest minds for an intense 36-hour hackathon 
              experience. Network with industry experts, collaborate with passionate developers, 
              and push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="glass-card shine-effect rounded-2xl p-6 sm:p-8 hover-lift">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              ⚡ Why Join?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a seasoned developer or just starting your journey, CODEZEN offers 
              mentorship, resources, and the platform to turn your wildest ideas into reality. 
              Win prizes, gain recognition, and launch your next big project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
