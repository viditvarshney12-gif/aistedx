import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentBlock from "@/components/ContentBlock";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ShinyText from "@/components/effects/ShinyText";
import SplitText from "@/components/effects/SplitText";
import RotatingText from "@/components/effects/RotatingText";
import CountdownTimer from "@/components/effects/CountdownTimer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ScrollFloat from "@/components/effects/ScrollFloat";
import eventPerformance from "@/assets/event-performance.jpg";
import tedStage from "@/assets/ted-stage.png";

const Home = () => {
  const eventDate = new Date('2025-11-01T00:00:00');

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      
      <Hero
        subtitle="Ideas Worth Spreading"
        title="TEDxAhlconIntlSchool"
        description="Join us for a transformative experience where ideas drive change and showcase the power of interconnected thinking in shaping the future we envision."
      />

      {/* Theme Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <ScrollFloat>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <ShinyText>Afterglow</ShinyText>
            </h2>
          </ScrollFloat>
          <ScrollReveal delay={0.2}>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-4">
              <SplitText delay={0.3}>Ideas Intersecting for Change</SplitText>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Like the lingering light after sunset, ideas create lasting impressions that illuminate new pathways. 
              This year's theme explores how ideas intersect, merge, and create ripples of transformation that 
              extend far beyond their origin.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* TEDx Is Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                TEDx is <RotatingText words={['Bigger', 'Better', 'Bolder', 'Brilliant', 'Boundless']} className="gradient-text" />
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContentBlock
        heading="What is TEDx"
        body="In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxAhlconIntlSchool, where x = independently organized TED event. At our TEDxAhlconIntlSchool event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized."
        imageUrl={tedStage}
      />

      <ContentBlock
        heading="About TEDxAhlconIntlSchool"
        body={`Let's dive into the world of ideas at TEDxAhlconIntlSchool and uncover the revolution beneath the surface. This event will illustrate how a single thought or action, much like a stone creating ripples in water, can spread influence across various facets of society and ignite further innovation. Our speakers will blend creativity and intellectual insight to inspire and engage you. Join us at TEDxAhlconIntlSchool for a transformative experience where ideas drive change and showcase the power of interconnected thinking in shaping the future we envision.

Date: 1st November, 2025
Venue: Ahlcon International School, Mayur Vihar Phase-1, Delhi, 110091, India`}
        imageUrl={eventPerformance}
        reverse
      />

      {/* Countdown Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
              <ShinyText>Event Countdown</ShinyText>
            </h2>
            <CountdownTimer targetDate={eventDate} />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
