import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ShinyText from "@/components/effects/ShinyText";
import ScrollReveal from "@/components/effects/ScrollReveal";
import DecryptText from "@/components/effects/DecryptText";
import { Calendar, MapPin } from "lucide-react";
import performanceStage from "@/assets/performance-stage.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />

      {/* Compact Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${performanceStage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6">
            <ShinyText>About Us</ShinyText>
          </h1>
        </div>
      </section>

      {/* Event Details - Prominent at Top */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30 -mt-20 relative z-20">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 border-2 border-primary/40 rounded-3xl p-8 sm:p-12 lg:p-16 hover-glow hover-lift">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-10">
                <ShinyText>Event Details</ShinyText>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4 text-left">
                  <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">Date & Time</h3>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                      <DecryptText>1st November, 2025 at 9:00 AM IST</DecryptText>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">Venue</h3>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                      <DecryptText>Ahlcon International School, Mayur Vihar Phase-1, Delhi, 110091, India</DecryptText>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-8">
              <ShinyText>Afterglow: Light that Outlives the Flame</ShinyText>
            </h2>
            <div className="prose prose-lg sm:prose-xl md:prose-2xl prose-invert max-w-none">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-medium mb-6">
                This year's theme celebrates the enduring power of ideas—how they persist, evolve, and continue to illuminate long after their initial spark. Like the afterglow that remains when a flame extinguishes, transformative thoughts leave lasting impressions that guide us forward.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                Join us as we explore ideas that transcend their moment of creation, spreading light across communities, generations, and disciplines. These are the ideas that outlive their origin, continuing to inspire and shape our collective future.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About TED Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 sm:p-12 hover:border-primary/40 transition-all duration-300">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-center">
                <ShinyText>About TED</ShinyText>
              </h2>
              <div className="prose prose-lg prose-invert max-w-none space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                  TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                  TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                  Each year, thousands of independently run TEDx events bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About TEDx Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 sm:p-12 hover:border-primary/40 transition-all duration-300">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-center">
                <ShinyText>About TEDx</ShinyText>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized (subject to certain rules and regulations).
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
