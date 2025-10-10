import Navbar from "@/components/Navbar";
import ContentBlock from "@/components/ContentBlock";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ShinyText from "@/components/effects/ShinyText";
import SplitText from "@/components/effects/SplitText";
import RotatingText from "@/components/effects/RotatingText";
import CountdownTimer from "@/components/effects/CountdownTimer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ScrollFloat from "@/components/effects/ScrollFloat";
import CircularGallery from "@/components/CircularGallery";
import { Button } from "@/components/ui/button";
import mainLogo from "@/assets/main-logo.png";

const Home = () => {
  // Set to 9 AM IST on November 1, 2025
  const eventDate = new Date('2025-11-01T09:00:00+05:30');

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      
      {/* Landing Page Hero - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_100%_52%_/_0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(356_100%_52%_/_0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(356_100%_52%_/_0.15),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8">
              <span className="text-primary text-glow">TEDx</span>
              <span className="text-foreground">AhlconIntlSchool</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Ideas Worth Spreading
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover-lift hover-glow font-semibold cursor-hover"
            >
              Buy Tickets
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Theme Section - Afterglow */}
      <section className="py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto text-center">
          <ScrollFloat>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 sm:mb-12">
              <ShinyText>Afterglow</ShinyText>
            </h2>
          </ScrollFloat>
          <ScrollReveal delay={0.2}>
            <p className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold mb-6 text-glow">
              <SplitText delay={0.3}>Light that Outlives the Flame</SplitText>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
              Like the enduring radiance after a flame dies, ideas create lasting impressions that continue to illuminate and inspire. 
              This year's theme explores how transformative thoughts persist, evolve, and brighten pathways long after their inception.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-16 sm:mb-20">
              <ShinyText>Event Countdown</ShinyText>
            </h2>
            <CountdownTimer targetDate={eventDate} />
          </ScrollReveal>
        </div>
      </section>

      {/* Circular Gallery for Speakers */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-12">
              <ShinyText>Our Speakers</ShinyText>
            </h2>
          </ScrollReveal>
          <CircularGallery />
        </div>
      </section>

      {/* TEDx Is Section */}
      <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                TEDxAhlconIntlSchool is <RotatingText words={['Back', 'Bigger', 'Better', 'Bolder']} className="gradient-text text-glow" />
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContentBlock
        heading="What is TEDx"
        body="In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxAhlconIntlSchool, where x = independently organized TED event. At our TEDxAhlconIntlSchool event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized."
        imageUrl={mainLogo}
      />

      <ContentBlock
        heading="About TEDxAhlconIntlSchool"
        body={`Let's dive into the world of ideas at TEDxAhlconIntlSchool and uncover the revolution beneath the surface. This is the 7th edition of TEDxAhlconIntlSchool, continuing our tradition of bringing together brilliant minds and transformative ideas.

This event will illustrate how a single thought or action, much like light that persists after the flame, can spread influence across various facets of society and ignite further innovation. Our speakers will blend creativity and intellectual insight to inspire and engage you. Join us at TEDxAhlconIntlSchool for a transformative experience where ideas drive change and showcase the power of enduring thinking in shaping the future we envision.

Date: 1st November, 2025 at 9:00 AM IST
Venue: Ahlcon International School, Mayur Vihar Phase-1, Delhi, 110091, India`}
        imageUrl={mainLogo}
        reverse
      />

      <Footer />
    </div>
  );
};

export default Home;
