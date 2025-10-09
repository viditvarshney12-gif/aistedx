import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Speakers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero
        title="Our Speakers"
        compact
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8 sm:mb-12">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center animate-float shadow-2xl hover-glow">
                <span className="text-5xl sm:text-6xl">🎤</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-foreground">
              <span className="gradient-text">Coming Soon</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6 sm:mb-8" />
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed px-4">
              We're excited to announce our incredible lineup of speakers soon. Stay tuned for updates on the inspiring voices that will be sharing their ideas worth spreading at TEDxAhlconIntlSchool.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Speakers;
