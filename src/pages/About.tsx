import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero
        title="About"
        compact
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-foreground hover:text-primary transition-colors duration-300">
              About <span className="gradient-text">TEDx</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6 sm:mb-8" />
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed bg-card border border-border rounded-xl p-6 sm:p-8 lg:p-10 hover-lift">
              <p>
                In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-foreground hover:text-primary transition-colors duration-300">
              About <span className="gradient-text">TED</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6 sm:mb-8" />
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed bg-card border border-border rounded-xl p-6 sm:p-8 lg:p-10 hover-lift">
              <p>
                TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
              </p>
              
              <p>
                TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. View a full list of TED's many programs and initiatives.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-card to-secondary border border-primary/20 rounded-xl p-6 sm:p-8 lg:p-10 animate-fade-in-up hover-lift shadow-xl" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">Event Details</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                <span className="text-primary font-semibold text-base sm:text-lg min-w-[100px]">Date:</span>
                <span className="text-foreground text-base sm:text-lg">1st November, 2025</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start space-y-1 sm:space-y-0">
                <span className="text-primary font-semibold text-base sm:text-lg min-w-[100px]">Venue:</span>
                <span className="text-foreground text-base sm:text-lg">Ahlcon International School, Mayur Vihar Phase-1, Delhi, 110091, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
