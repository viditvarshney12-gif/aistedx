import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FuzzyText from "@/components/effects/FuzzyText";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ScrollFloat from "@/components/effects/ScrollFloat";
import teamPhoto from "@/assets/team.jpg";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={teamPhoto}
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollFloat>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground text-glow-strong mb-6 font-coolvetica">
              The Team
            </h1>
          </ScrollFloat>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div>
              <div className="mb-8 sm:mb-12">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 sm:mb-12 rounded-full bg-gradient-to-br from-primary via-primary-glow to-primary flex items-center justify-center animate-float shadow-2xl hover-glow relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-glow animate-glow-pulse" />
                  <span className="text-6xl sm:text-7xl relative z-10">👥</span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-foreground text-glow-strong font-coolvetica">
                Coming Soon
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8 sm:mb-10" />
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 sm:p-10 hover-lift shadow-lg">
                <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed font-varela mb-8">
                  Meet the passionate individuals behind TEDxAhlconIntlSchool. Our team information will be revealed soon. 
                  Stay tuned to discover the dedicated organizers making this event possible!
                </p>
                <div className="pt-6 border-t border-foreground/10">
                  <a 
                    href="https://www.instagram.com/tedxahlconintlschool/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-xl font-varela text-primary hover:text-primary-glow transition-colors duration-300 cursor-hover relative group"
                  >
                    Follow us on Social Media for updates
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground/20 transform origin-left transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
