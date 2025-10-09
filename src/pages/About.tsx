import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ShinyText from "@/components/effects/ShinyText";
import ScrollReveal from "@/components/effects/ScrollReveal";
import DecryptText from "@/components/effects/DecryptText";
import ScrollFloat from "@/components/effects/ScrollFloat";
import tedStage from "@/assets/ted-stage.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tedStage}
            alt="About TEDxAhlconIntlSchool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollFloat>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              <ShinyText>About Us</ShinyText>
            </h1>
          </ScrollFloat>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <ShinyText>Afterglow: Ideas Intersecting for Change</ShinyText>
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-12 hover-lift">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
                The afterglow is that magical moment when the sun has set, yet its light continues to paint the sky 
                with brilliant hues. It's a transitional space where day meets night, where one state transforms into 
                another, creating something entirely new and beautiful in the process.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
                Similarly, <span className="gradient-text font-semibold">Afterglow: Ideas Intersecting for Change</span> celebrates 
                the moments when ideas collide, merge, and create lasting impact. Just as a single stone creates ripples 
                across water, one idea can spark innovation across multiple domains, illuminating paths we never knew existed.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                At TEDxAhlconIntlSchool 2025, we explore how seemingly disparate concepts intersect to drive transformation. 
                We celebrate the persistent glow of ideas that continue to inspire long after their initial spark, creating 
                chains of innovation that reshape our world.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                About <span className="gradient-text">TEDx</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6 sm:mb-8" />
              <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed bg-gradient-to-br from-card/50 to-secondary/30 border border-border rounded-2xl p-6 sm:p-8 lg:p-10 hover-lift backdrop-blur-sm">
                <p>
                  In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                About <span className="gradient-text">TED</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6 sm:mb-8" />
              <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed bg-gradient-to-br from-card/50 to-secondary/30 border border-border rounded-2xl p-6 sm:p-8 lg:p-10 hover-lift backdrop-blur-sm">
                <p>
                  TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
                </p>
                
                <p>
                  TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. View a full list of TED's many programs and initiatives.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-card via-card to-secondary border-2 border-primary/30 rounded-2xl p-8 sm:p-10 lg:p-12 hover-lift shadow-2xl">
                <h3 className="text-3xl sm:text-4xl font-bold mb-8">
                  <ShinyText>Event Details</ShinyText>
                </h3>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 p-4 bg-background/50 rounded-xl">
                    <span className="text-primary font-bold text-lg sm:text-xl min-w-[120px]">Date:</span>
                    <span className="text-foreground text-lg sm:text-xl font-semibold">
                      <DecryptText>1st November, 2025</DecryptText>
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 p-4 bg-background/50 rounded-xl">
                    <span className="text-primary font-bold text-lg sm:text-xl min-w-[120px]">Venue:</span>
                    <span className="text-foreground text-lg sm:text-xl font-semibold">
                      <DecryptText>Ahlcon International School, Mayur Vihar Phase-1, Delhi, 110091, India</DecryptText>
                    </span>
                  </div>
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

export default About;
