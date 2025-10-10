import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FuzzyText from "@/components/effects/FuzzyText";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ScrollFloat from "@/components/effects/ScrollFloat";
import eventPerformance from "@/assets/event-performance.jpg";

const Speakers = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={eventPerformance}
            alt="Our Speakers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollFloat>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6">
              Our Speakers
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
                  <span className="text-6xl sm:text-7xl relative z-10">🎤</span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12">
                <FuzzyText className="gradient-text">Coming Soon</FuzzyText>
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8 sm:mb-10" />
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-10 hover-lift">
                <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed">
                  We're excited to announce our incredible lineup of speakers soon. Stay tuned for updates on the inspiring voices that will be sharing their ideas worth spreading at TEDxAhlconIntlSchool.
                </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              <a 
                href="https://www.instagram.com/tedxahlconintlschool/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors cursor-hover underline"
              >
                Follow us on social media
              </a> for updates
            </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Speakers;
