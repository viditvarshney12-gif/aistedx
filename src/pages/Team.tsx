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

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-lg">
            Team information will be added here.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
