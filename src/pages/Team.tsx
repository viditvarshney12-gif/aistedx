import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero
        title="The Team"
        compact
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
            Team information coming soon...
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
