import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">TEDx</span>
              <span className="text-foreground">AhlconIntlSchool</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Ideas worth spreading
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/speakers" className="text-muted-foreground hover:text-primary transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  The Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/tedxahlconintlschool"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Instagram size={20} className="text-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://twitter.com/TedxAhlconIntl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Twitter size={20} className="text-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TEDxAhlconIntlSchool. This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
