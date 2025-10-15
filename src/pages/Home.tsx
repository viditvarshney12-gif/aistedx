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
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mainLogo from "@/assets/main-logo.png";
import tedxLogo from "@/assets/tedx-logo.png";
import heroBackground from "@/assets/hero-banner.jpg";
import afterglowLogo from "@/assets/afterglow-logo.png";
import nobgLogo from "@/assets/nobg.png";

const Home = () => {
  const eventDate = new Date('2025-11-01T09:00:00+05:30');

  return (
    <div className="min-h-screen bg-background mobile-safe-area">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section - Full Screen with Background Image */}
      <section className="relative h-[85vh] sm:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-contain sm:bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="pt-24 sm:pt-56 md:pt-72 lg:pt-96"
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdkzkzO1tpNbt7-L6QMA7eW7tB745nKK0Sxcl0ByUpyaUnv4w/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-sm sm:text-lg px-5 sm:px-8 py-4 sm:py-6 rounded-full hover:scale-110 transition-all duration-300 cursor-hover bg-white hover:bg-white/90 text-black font-bold shadow-xl font-heading">
                Pre-Book Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Theme Section - About Theme */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-background to-background/50">
          <div className="container mx-auto max-w-5xl text-center space-y-6 sm:space-y-8">
            <ScrollFloat offset={30}>
              <div className="flex justify-center mb-6 sm:mb-8">
                <img src={afterglowLogo} alt="Afterglow" className="w-full max-w-xl sm:max-w-2xl h-auto" />
              </div>
            </ScrollFloat>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-varela leading-relaxed px-4">
              Afterglow represents the lasting radiance of ideas that continue to inspire and illuminate long after their initial spark. Join us as we explore the enduring impact of transformative thoughts.
            </p>
            <div className="pt-4">
              <Link to="/about" className="inline-block">
                <Button size="lg" className="text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-full hover:scale-110 transition-all duration-300 cursor-hover bg-primary hover:bg-primary/90 text-white font-bold shadow-xl font-heading">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TEDx is Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 md:py-28 px-4 bg-gradient-to-b from-background/50 to-background">
          <div className="container mx-auto text-center max-w-6xl">
            <ScrollFloat offset={35}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-12 font-aller text-foreground text-glow-strong px-4">
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

      {/* Event Details Box */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-glow-strong font-aller text-foreground">
                Event Details
              </h2>
            </div>
            <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-lg border-2 border-primary/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:border-primary/60 hover:scale-[1.02]">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-xl md:text-2xl font-varela text-foreground font-bold">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-xl sm:text-3xl md:text-4xl">📅</span>
                    <span className="text-center sm:text-left">Nov 1, 2025 · 9:00 AM IST</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-xl md:text-2xl font-varela text-foreground font-bold">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-xl sm:text-3xl md:text-4xl">📍</span>
                    <span className="text-center sm:text-left">Ahlcon International School, Mayur Vihar Phase 1, Delhi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Event Countdown */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 md:py-28 px-4 bg-gradient-to-b from-background/50 to-background">
          <div className="container mx-auto text-center">
            <ScrollFloat offset={40}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 sm:mb-16 text-glow-strong font-aller text-foreground px-4">
                Event Countdown
              </h2>
            </ScrollFloat>
            <CountdownTimer targetDate={eventDate} />
          </div>
        </section>
      </ScrollReveal>

      <ContentBlock
        heading="About TEDx"
        body="TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These events are independently organized under a free license granted by TED."
        imageUrl={tedxLogo}
      />

      <ContentBlock
        heading="About TEDxAhlconIntlSchool"
        headingClassName="text-2xl sm:text-3xl md:text-4xl"
        body={
          <div className="space-y-4">
            <p className="font-varela text-base sm:text-lg">
              TEDxAhlconIntlSchool is a premier event bringing together innovative thinkers, inspiring speakers, and passionate individuals. Join us as we celebrate the 7th edition of this transformative experience.
            </p>
            <div className="pt-4 space-y-3">
              <p className="text-base sm:text-lg font-varela text-primary text-glow">
                📅 November 1st, 2025 : 9:00 AM IST
              </p>
              <p className="text-base sm:text-lg font-varela text-primary text-glow">
                📍 Ahlcon International School, Mayur Vihar Phase 1, Delhi
              </p>
            </div>
            <p className="font-varela text-base sm:text-lg pt-4">
              Our theme 'Afterglow' explores ideas that create lasting impact beyond their moment of creation.
            </p>
          </div>
        }
        imageUrl={mainLogo}
        reverse
      />

      {/* Lanyard Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 md:py-28 px-4 bg-gradient-to-b from-background/50 to-background">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-lg border-2 border-primary/50 shadow-2xl hover:shadow-primary/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
                <img src={nobgLogo} alt="TEDx Logo" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_0_20px_rgba(255,23,68,0.5)]" />
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-coolvetica text-foreground text-glow-strong mb-2 sm:mb-3">
                    See You There!
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-varela">Join us for an unforgettable experience</p>
                </div>
                <img src={afterglowLogo} alt="Afterglow Logo" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_0_20px_rgba(255,23,68,0.5)]" />
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
