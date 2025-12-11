import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Rocket, Calendar, Clock, MapPin, Trophy, MessageCircle, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Users, value: "3000+ Participants", label: "", sublabel: "From across India" },
    { icon: Trophy, value: "₹3,00,000+", label: "", sublabel: "In Prizes" },
    { icon: MessageCircle, value: "JOIN Discord", label: "", sublabel: "Connect with Teams" },
  ];
  

  const eventDetails = [
    { icon: Calendar, text: "Feb 28 - Mar 1, 2025" },
    { icon: Clock, text: "36 Hours" },
    { icon: MapPin, text: "Delhi, India" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20">
      <div className="container max-w-5xl mx-auto mt-2">
        <div className="text-center space-y-8 md:space-y-4 mb-3">
          
          {/* Welcome badge */}
          <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Badge 
              variant="outline" 
              className="glass-card px-4 py-2 glass-effect blood-glow animate-bounce text-xs sm:text-sm font-medium tracking-wide border-primary/30 text-muted-foreground"
            >
              ⚡ Welcome to the Upside Down of Coding
            </Badge>
          </div>

          {/* Main title */}
          <div className="space-y-2 scale-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="gradient-text flicker text-glow mt-2"
                style={{ fontFamily: "Benguiat, sans-serif" }}
              >CODEZEN</span>
              <span className="text-foreground text-8xl ml-2 sm:ml-4 text-glow"
                style={{ fontFamily: "Benguiat, sans-serif" }}>2.0</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-display tracking-[0.2em] text-muted-foreground uppercase">
              36-Hour Hackathon
            </p>
          </div>

          {/* Description */}
          <p className="fade-in-up text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.3s" }}>
            Join us for an exciting journey of coding, innovation, and creativity. 
            Build something extraordinary in the Upside Down.
          </p>

          {/* Event details */}
          <div className="fade-in-up flex flex-wrap justify-center gap-4 sm:gap-4 text-sm sm:text-base" style={{ animationDelay: "0.4s" }}>
            {eventDetails.map((detail, index) => (
              <div key={index} className="flex p-1 px-4 rounded-full glass-card glass-effect hover-lift items-center gap-2 text-muted-foreground">
                <detail.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>{detail.text}</span>
              </div>
            ))}
          </div>

          {/* Stats cards */}
          <div
  className="fade-in-up grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 "
  style={{ animationDelay: "0.5s" }}
>
  {stats.map((stat, index) => (
    <div
      key={index}
      className={`stat-card  group p-4 text-center transition-all`}
    >
      <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:text-accent" />

      <div className="text-lg font-bold gradient-text leading-tight">
        {stat.value}
      </div>

      {/* <div className="text-sm font-semibold text-foreground leading-tight mt-1">
        {stat.label}
      </div> */}

      <div className="text-xs text-muted-foreground mt-1">
        {stat.sublabel}
      </div>
    </div>
  ))}
</div>


          {/* CTA Buttons */}
          <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center pt-2" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="blood-glow pulse-glow cursor-pointer px-8 py-6 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
              onClick={() => scrollToSection("register")}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card px-8 py-6 text-base cursor-pointer font-bold border-primary/40 hover:border-primary hover:bg-primary/10 transition-all"
              onClick={() => scrollToSection("tracks")}
            >
              <Users className="mr-2 h-5 w-5" />
              View Tracks
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8 fade-in-up" style={{ animationDelay: "0.8s" }}>
            <button 
              onClick={() => scrollToSection("about")}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs tracking-widest uppercase">Scroll Down</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
