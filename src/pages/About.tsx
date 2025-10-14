import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ShinyText from "@/components/effects/ShinyText";
import ScrollReveal from "@/components/effects/ScrollReveal";
import DecryptText from "@/components/effects/DecryptText";
import { Calendar, MapPin } from "lucide-react";
import musicalPerformance from "@/assets/musical-performance.jpg";
import culturalDance from "@/assets/cultural-dance.jpg";
import acrobaticPerformance from "@/assets/acrobatic-performance.jpg";
import performancePhoto from "@/assets/event-performance.jpg";
import stagePhoto from "@/assets/stage-photo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />

      {/* Compact Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${culturalDance})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 font-aller">
            <ShinyText className="text-foreground text-glow-strong">About Us</ShinyText>
          </h1>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="mb-16">
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-10 sm:p-12 hover-lift shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-center text-foreground font-coolvetica">
                    <ShinyText className="text-glow">Afterglow : Light that Outlives the Flame</ShinyText>
                  </h3>
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 font-varela text-justify">
                    An afterglow is the light that remains after the source has faded : a lasting impression, an echo of brilliance.
                    It's the warmth that lingers after a fire, the glow that follows a sunset, and the impact that outlasts a moment.
                  </p>
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-varela text-justify">
                    At TEDxAhlconIntlSchool, we celebrate ideas that endure. The conversations we spark, the perspectives we challenge,
                    and the connections we forge continue to resonate long after the event ends. Join us as we explore the lasting
                    impact of transformative ideas.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About TED Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 sm:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-aller">
                  <ShinyText className="text-foreground text-glow">About TED</ShinyText>
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-justify">
                    TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge : without an agenda.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-justify">
                    We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20 hover:border-primary/40">
                <img src={stagePhoto} alt="TEDx Stage" className="w-full h-full object-cover" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 order-2 md:order-1">
                <img src={performancePhoto} alt="TEDx Performance" className="w-full h-full object-cover" />
              </div>
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 sm:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg order-1 md:order-2">
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-justify">
                    TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-justify">
                    In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About TEDx Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 sm:p-12 hover:border-primary/40 transition-all duration-300 shadow-lg">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-center font-aller">
                <ShinyText className="text-foreground text-glow">About TEDx</ShinyText>
              </h2>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-justify">
                  In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized (subject to certain rules and regulations).
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-justify">
                  Each year, thousands of independently run TEDx events bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
