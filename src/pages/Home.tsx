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
import { motion } from "framer-motion";
import mainLogo from "@/assets/main-logo.png";
import whatIsTedx from "@/assets/what-is-tedx.jpg";
import heroBackground from "@/assets/hero-background.jpg";
import afterglowLogo from "@/assets/afterglow-logo.png";

const Home = () => {
  const eventDate = new Date('2025-11-01T09:00:00+05:30');

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section - Full Screen with Placeholder */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Placeholder background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-title">
              <span className="block gradient-text text-glow-strong drop-shadow-2xl">
                TEDxAhlconIntlSchool
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-foreground font-light tracking-wide drop-shadow-lg font-varela">
              Ideas Worth Spreading
            </p>
            <div className="pt-8">
              <Button size="lg" className="text-xl px-12 py-7 rounded-full hover:scale-110 transition-all duration-300 cursor-hover bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl shadow-primary/50 font-heading">
                Buy Tickets
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Theme Section - Afterglow */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
          <div className="container mx-auto max-w-5xl text-center">
            <ScrollFloat offset={30}>
              <div className="mb-8 flex justify-center">
                <img src={afterglowLogo} alt="Afterglow" className="w-full max-w-2xl h-auto" />
              </div>
            </ScrollFloat>
            <p className="text-2xl sm:text-3xl md:text-4xl mb-12 text-primary/90 font-bold font-heading text-glow">
              <SplitText>Light that Outlives the Flame</SplitText>
            </p>
            <ScrollFloat offset={20} className="space-y-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-varela">
              <p>
                An afterglow is the light that remains after the source has faded—a lasting impression, 
                an echo of brilliance. It's the warmth that lingers after a fire, the glow that follows a sunset, 
                and the impact that outlasts a moment.
              </p>
            </ScrollFloat>
          </div>
        </section>
      </ScrollReveal>

      {/* Event Countdown */}
      <ScrollReveal>
        <section className="py-28 px-4 bg-gradient-to-b from-background/50 to-background">
          <div className="container mx-auto text-center">
            <ScrollFloat offset={40}>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-16 gradient-text text-glow-strong font-title">
                Event Countdown
              </h2>
            </ScrollFloat>
            <CountdownTimer targetDate={eventDate} />
          </div>
        </section>
      </ScrollReveal>

      {/* Speakers Gallery */}
      <ScrollReveal>
        <section className="py-28 px-4 bg-gradient-to-b from-background to-background/50">
          <div className="container mx-auto text-center">
            <ScrollFloat offset={50}>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-20 gradient-text text-glow-strong font-title">
                Our Speakers
              </h2>
            </ScrollFloat>
            <CircularGallery />
          </div>
        </section>
      </ScrollReveal>

      {/* TEDx is Section */}
      <ScrollReveal>
        <section className="py-28 px-4 bg-gradient-to-b from-background/50 to-background">
          <div className="container mx-auto text-center max-w-6xl">
            <ScrollFloat offset={35}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 font-title text-glow">
                TEDxAhlconIntlSchool is{' '}
                <RotatingText 
                  words={['Back', 'Bigger', 'Better', 'Bolder']}
                  className="gradient-text text-glow-strong"
                />
              </h2>
            </ScrollFloat>
          </div>
        </section>
      </ScrollReveal>

      <ContentBlock
        heading="What is TEDx"
        body="TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These events are independently organized under a free license granted by TED."
        imageUrl={whatIsTedx}
      />

      <ContentBlock
        heading="About TEDxAhlconIntlSchool"
        body={
          <div className="space-y-4">
            <p className="font-varela">
              TEDxAhlconIntlSchool is a premier event bringing together innovative thinkers, inspiring speakers, and passionate individuals. Join us as we celebrate the 7th edition of this transformative experience.
            </p>
            <div className="pt-4 space-y-3">
              <p className="text-3xl sm:text-4xl font-black text-primary font-heading text-glow">
                📅 November 1st, 2025 | 9:00 AM IST
              </p>
              <p className="text-3xl sm:text-4xl font-black text-primary font-heading text-glow">
                📍 Ahlcon International School, Mayur Vihar Phase 1, Delhi
              </p>
            </div>
            <p className="font-varela pt-4">
              Our theme 'Light that Outlives the Flame' explores ideas that create lasting impact beyond their moment of creation.
            </p>
          </div>
        }
        imageUrl={mainLogo}
        reverse
      />

      {/* Lanyard Section */}
      <ScrollReveal>
        <section className="py-28 px-4 bg-gradient-to-b from-background/50 to-background">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-12 rounded-3xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-lg border-2 border-primary/50 shadow-2xl hover:shadow-primary/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <img src={mainLogo} alt="TEDx Logo" className="w-32 h-32 object-contain drop-shadow-[0_0_20px_rgba(255,23,68,0.5)]" />
                <div>
                  <h3 className="text-4xl sm:text-5xl font-black font-title gradient-text text-glow-strong mb-4">
                    See You There!
                  </h3>
                  <p className="text-xl text-muted-foreground font-varela">Join us for an unforgettable experience</p>
                </div>
                <img src={afterglowLogo} alt="Afterglow Logo" className="w-32 h-32 object-contain drop-shadow-[0_0_20px_rgba(255,23,68,0.5)]" />
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Home;
