import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ShinyText from "@/components/effects/ShinyText";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ScrollFloat from "@/components/effects/ScrollFloat";
import speakersBg from "@/assets/speakers-bg.png";
import dearSirImg from "@/assets/speakers/dear_sir.jpg";
import suhaniSethiImg from "@/assets/speakers/suhani_sethi.jpg";
import manjeetSekhonImg from "@/assets/speakers/manjeet_singh_sekhon.jpg";
import veenaVermaMehtaImg from "@/assets/speakers/veena_verma_mehta.jpg";
import kuldeepVedwaanImg from "@/assets/speakers/kuldeep_vedwaan.jpg";
import shashankPrabhuImg from "@/assets/speakers/shashank_prabhu.jpeg";
import siddarthAnandImg from "@/assets/speakers/siddarth_anand.jpg";

const Speakers = () => {
  return (
    <div className="min-h-screen bg-background mobile-safe-area">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[320px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={speakersBg}
            alt="Our Speakers"
            className="w-full h-full object-contain sm:object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollFloat>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 font-aller">
              <ShinyText className="text-foreground text-glow-strong">Our Speakers</ShinyText>
            </h1>
          </ScrollFloat>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto max-w-6xl">
          
          {/* Speaker 1 - Dear Sir */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 sm:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg text-left sm:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-aller text-center">
                  <ShinyText className="text-foreground text-glow">Dear Sir</ShinyText>
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-left sm:text-justify">
                    Dear Sir is a passionate educator and digital pioneer with a PhD in Commerce from Jamia Millia Islamia. With over a decade of teaching experience, he makes learning simple and accessible. In 2016, he launched the Dear Sir platform and YouTube channel, now with over 21 million subscribers and 2 billion views. He teaches English, exam preparation, and motivation using clear, practical methods with real-life examples. Recognized as one of India's top educational influencers, he bridges the gap between classroom learning and real life, reaching students from all backgrounds through perseverance, creativity, and purpose.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 aspect-[4/5]">
                <img src={dearSirImg} alt="Dear Sir" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </ScrollReveal>

          {/* Speaker 2 - Suhani Sethi */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 aspect-[4/5] order-2 md:order-1">
                <img src={suhaniSethiImg} alt="Suhani Sethi" className="w-full h-full object-cover object-center" />
              </div>
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 sm:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg order-1 md:order-2 text-left sm:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-aller text-center">
                  <ShinyText className="text-foreground text-glow">Suhani Sethi</ShinyText>
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-left sm:text-justify">
                    Suhani Sethi is a young actor and student who bridges mainstream media and youth empowerment. Having appeared in major Bollywood productions like Student of the Year 2, Cuttputlli, and Pal Pal Dil Ke Paas, she combines early industry exposure with academic brilliance. Her experiences as a public figure in her teens give her a unique voice on identity, balance, and self-growth, making her especially relevant for an audience of students exploring passion and pressure.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Speaker 3 - Manjit Singh Sekhon */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 sm:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg text-left sm:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-aller text-center">
                  <ShinyText className="text-foreground text-glow">Manjit Singh Sekhon</ShinyText>
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-left sm:text-justify">
                    Air Marshal Manjit Singh Sekhon (Retd.) is a decorated veteran of the Indian Air Force with a distinguished career spanning decades of service to the nation. He fought in the 1971 Indo-Pak war and played a key role in air operations during the Kargil conflict, earning several of India's highest military honors including the Vir Chakra, Shaurya Chakra, Vayu Sena Medal, and Param Vishisht Seva Medal. Known for his courage, strategic vision, and leadership, he has been instrumental in advancing India's air defense capabilities and continues to inspire future generations with his dedication and integrity.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 aspect-[4/5]">
                <img src={manjeetSekhonImg} alt="Manjit Singh Sekhon" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </ScrollReveal>

          {/* Speaker 4 - Veena Verma Mehta */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 aspect-[4/5] order-2 md:order-1">
                <img src={veenaVermaMehtaImg} alt="Veena Verma Mehta" className="w-full h-full object-cover object-center" />
              </div>
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 sm:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg order-1 md:order-2 text-left sm:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-aller text-center">
                  <ShinyText className="text-foreground text-glow">Veena Verma Mehta</ShinyText>
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-left sm:text-justify">
                    Veena Mehta Verma, a visually impaired leader from Delhi, overcame childhood blindness to become a trailblazer in disability empowerment. Starting school at 12, she earned an MBA with NAB's support and rose to Senior HR Manager in a PSU. After 15 years, she left her corporate career to lead a disability resource centre in Dwarka. Honoured with the National Award and Emerging Social Entrepreneur of the Year, her impact is widely recognized. An ICF-certified coach, she mentors blind girls and women, breaking barriers through skill development. Her journey reflects resilience, leadership, and deep commitment to inclusive change.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Speaker 5 - Kuldeep Vedwaan */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 sm:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg text-left sm:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-aller text-center">
                  <ShinyText className="text-foreground text-glow">Kuldeep Vedwaan</ShinyText>
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-left sm:text-justify">
                    Kuldeep Vedwaan brings extensive expertise in archery coaching, working with athletes at every level—from novices to elite competitors. His approach emphasizes not only technical mastery in precision, consistency, and technique, but also mental resilience, discipline, and focus, reflecting a holistic perspective on athlete development. His work is highly relevant for anyone interested in sports development, archery talent cultivation, coaching methodologies, inclusive and para-sports, and building athletic ecosystems across diverse geographies.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 aspect-[4/5]">
                <img src={kuldeepVedwaanImg} alt="Kuldeep Vedwaan" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </ScrollReveal>

          {/* Speaker 6 - Shashank Prabhu */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 aspect-[4/5] order-2 md:order-1">
                <img src={shashankPrabhuImg} alt="Shashank Prabhu" className="w-full h-full object-cover object-center" />
              </div>
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 sm:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg order-1 md:order-2 text-left sm:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-aller text-center">
                  <ShinyText className="text-foreground text-glow">Shashank Prabhu</ShinyText>
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-left sm:text-justify">
                    Shashank is an engineer-turned-development professional with over seven years of experience across the corporate sector and the waste management field. He combines technical expertise with grassroots insight, having led end-to-end project implementation and operational management in diverse contexts. With more than four years dedicated to waste management, Shashank has been instrumental in designing decentralized systems, engaging communities, and building stakeholder partnerships that drive sustainable impact and environmental change.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Speaker 7 - Siddharth Anand */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 sm:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg text-left sm:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-aller text-center">
                  <ShinyText className="text-foreground text-glow">Siddharth Anand</ShinyText>
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-varela text-left sm:text-justify">
                    Siddharth is the Founder and CEO of TEA – Tertiary Education Advisors, a youth empowerment company that blends academic planning with personal development to help students build clarity, confidence, and character. With 7+ years of experience in finance, education, and consulting, and 20+ years in competitive sports, he champions the power of mindset. As a former NCAA Division 1 student-athlete and Wall Street professional, he learned to perform under pressure and developed systems for focus and resilience. A former pro tennis player, he now also builds international-standard sports infrastructure across India to support young athletes.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 aspect-[4/5]">
                <img src={siddarthAnandImg} alt="Siddharth Anand" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speakers;
