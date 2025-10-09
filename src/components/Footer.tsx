import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 hover:scale-105 transition-transform duration-300 inline-block">
              <span className="text-primary">TEDx</span>
              <span className="text-foreground">AhlconIntlSchool</span>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Ideas worth spreading
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="/speakers" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base">
                  Speakers
                </a>
              </li>
              <li>
                <a href="/team" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base">
                  The Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tedxahlconintlschool/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 hover-glow group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-foreground group-hover:text-primary-foreground transition-colors sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://x.com/TedxAhlconIntl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 hover-glow group"
                aria-label="X (Twitter)"
              >
                <Twitter size={20} className="text-foreground group-hover:text-primary-foreground transition-colors sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 lg:mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} TEDxAhlconIntlSchool. This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
