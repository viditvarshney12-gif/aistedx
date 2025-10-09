import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentBlock from "@/components/ContentBlock";
import Footer from "@/components/Footer";
import eventPerformance from "@/assets/event-performance.jpg";
import tedStage from "@/assets/ted-stage.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero
        subtitle="Ideas Worth Spreading"
        title="TEDxAhlconIntlSchool"
        description="Join us for a transformative experience where ideas drive change and showcase the power of interconnected thinking in shaping the future we envision."
      />

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

      <Footer />
    </div>
  );
};

export default Home;
