import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-primary text-glow-strong mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Oops! Page not found
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist. But don't worry, you can still join us for an amazing TEDx experience!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/">
                <Button 
                  size="lg" 
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-full hover:scale-110 transition-all duration-300 cursor-hover bg-primary hover:bg-primary/90 text-white font-bold shadow-xl"
                >
                  Return to Home
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-full border-primary text-primary font-bold shadow-xl"
                disabled
              >
                Sold Out!
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
