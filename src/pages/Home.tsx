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
import TargetCursor from "@/components/effects/TargetCursor";
import ClickSpark from "@/components/effects/ClickSpark";
import LightRays from "@/components/effects/LightRays";
import Particles from "@/components/effects/Particles";
import Galaxy from "@/components/effects/Galaxy";
import GlareHover from "@/components/effects/GlareHover";
import StarBorder from "@/components/effects/StarBorder";
import GradualBlurScroll from "@/components/effects/GradualBlurScroll";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import mainLogo from "@/assets/main-logo.png";
import whatIsTedx from "@/assets/what-is-tedx.jpg";
import heroBackground from "@/assets/hero-background.jpg";
import afterglowLogo from "@/assets/afterglow-logo.png";
import nobgLogo from "@/assets/nobg.png";

const Home = () => {
  const eventDate = new Date('2025-11-01T09:00:00+05:30');

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <TargetCursor />
      <ClickSpark />
      <Navbar />
      
      {/* Hero Section - Full Screen with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/90" />
        </div>
        
        <LightRays />
        <Particles />
        <Galaxy />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6 sm:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight font-title leading-tight">
              <span className="block gradient-text text-glow-strong drop-shadow-2xl">
                TEDxAhlconIntlSchool
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-light tracking-wide drop-shadow-lg font-varela">
              Ideas Worth Spreading
            </p>
            <div className="pt-4 sm:pt-8">
              <GlareHover>
                <Button size="lg" className="text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-7 rounded-full hover:scale-110 transition-all duration-300 cursor-hover bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl shadow-primary/50 font-heading">
                  Buy Tickets
                </Button>
              </GlareHover>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Theme Section - Afterglow */}
      <ScrollReveal>
        <GradualBlurScroll>
          <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-background to-background/50">
            <div className="container mx-auto max-w-5xl text-center">
              <ScrollFloat offset={30}>
                <div className="mb-8 sm:mb-12 flex justify-center">
                  <img src={afterglowLogo} alt="Afterglow" className="w-full max-w-xl sm:max-w-2xl h-auto" />
                </div>
              </ScrollFloat>
              <ScrollFloat offset={20} className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-varela px-4">
                <p>
                  An afterglow is the light that remains after the source has faded—a lasting impression, 
                  an echo of brilliance. It's the warmth that lingers after a fire, the glow that follows a sunset, 
                  and the impact that outlasts a moment.
                </p>
              </ScrollFloat>
            </div>
          </section>
        </GradualBlurScroll>
      </ScrollReveal>

      {/* Event Countdown */}
      <ScrollReveal>
        <GradualBlurScroll>
          <section className="py-16 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-background/50 to-background">
            <div className="container mx-auto text-center">
              <ScrollFloat offset={40}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 sm:mb-16 gradient-text text-glow-strong font-title">
                  Event Countdown
                </h2>
              </ScrollFloat>
              <CountdownTimer targetDate={eventDate} className="text-white" />
            </div>
          </section>
        </GradualBlurScroll>
      </ScrollReveal>

      {/* Speakers Gallery */}
      <ScrollReveal>
        <GradualBlurScroll>
          <section className="py-16 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-background to-background/50">
            <div className="container mx-auto text-center">
              <ScrollFloat offset={50}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 sm:mb-16 md:mb-20 gradient-text text-glow-strong font-title">
                  Our Speakers
                </h2>
              </ScrollFloat>
              <CircularGallery />
            </div>
          </section>
        </GradualBlurScroll>
      </ScrollReveal>

      {/* TEDx is Section */}
      <ScrollReveal>
        <GradualBlurScroll>
          <section className="py-16 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-background/50 to-background">
            <div className="container mx-auto text-center max-w-6xl">
              <ScrollFloat offset={35}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 font-title text-glow px-4">
                  TEDxAhlconIntlSchool is{' '}
                  <RotatingText 
                    words={['Back', 'Bigger', 'Better', 'Bolder']}
                    className="gradient-text text-glow-strong"
                  />
                </h2>
              </ScrollFloat>
            </div>
          </section>
        </GradualBlurScroll>
      </ScrollReveal>

      <ContentBlock
        heading="What is TEDx"
        body="TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These events are independently organized under a free license granted by TED."
        imageUrl={whatIsTedx}
      />

      <GradualBlurScroll>
        <ContentBlock
          heading="About TEDxAhlconIntlSchool"
          body={
            <div className="space-y-4">
              <p className="font-varela text-base sm:text-lg">
                TEDxAhlconIntlSchool is a premier event bringing together innovative thinkers, inspiring speakers, and passionate individuals. Join us as we celebrate the 7th edition of this transformative experience.
              </p>
              <div className="pt-4 space-y-3">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-varela text-glow">
                  📅 November 1st, 2025 | 9:00 AM IST
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-varela text-glow">
                  📍 Ahlcon International School, Mayur Vihar Phase 1, Delhi
                </p>
              </div>
              <p className="font-varela pt-4 text-base sm:text-lg">
                Our theme explores ideas that create lasting impact beyond their moment of creation.
              </p>
            </div>
          }
          imageUrl={mainLogo}
          reverse
        />
      </GradualBlurScroll>

      {/* Lanyard Section */}
      <ScrollReveal>
        <GradualBlurScroll>
          <section className="py-16 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-background/50 to-background">
            <div className="container mx-auto text-center max-w-4xl">
              <StarBorder>
                <GlareHover>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-lg shadow-2xl"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
                      <img src={mainLogo} alt="TEDx Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-[0_0_20px_rgba(255,23,68,0.5)]" />
                      <div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-title gradient-text text-glow-strong mb-3 sm:mb-4">
                          See You There!
                        </h3>
                        <p className="text-lg sm:text-xl text-muted-foreground font-varela">Join us for an unforgettable experience</p>
                      </div>
                      <img src={nobgLogo} alt="TEDx X Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-[0_0_30px_rgba(255,23,68,0.8)]" />
                    </div>
                  </motion.div>
                </GlareHover>
              </StarBorder>
            </div>
          </section>
        </GradualBlurScroll>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Home;
