import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

const Speakers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero
        title="Our Speakers"
        compact
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card border border-border rounded-lg p-12 animate-fade-in-up">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center animate-glow-pulse">
              <Sparkles size={48} className="text-primary" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Coming Soon
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              We're curating an incredible lineup of speakers who will share their groundbreaking ideas and inspiring stories.
            </p>
            
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-full font-semibold">
              Speakers will be announced soon
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Speakers;
