import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import stoicersLogoWhite from "@/assets/white.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-stoicers-dark to-stoicers-accent text-stoicers-gold relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-stoicers-gold/5 to-transparent"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={stoicersLogoWhite} 
                alt="Stoicers" 
                className="h-12 w-auto brightness-0 invert mr-4"
              />
            </div>
            <p className="text-stoicers-warm leading-relaxed mb-6 max-w-md">
              Embodying ancient wisdom through modern design. Clothing for those who value substance, 
              character, and timeless style. Live by philosophy, dress with purpose.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-stoicers-gold hover:text-stoicers-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-stoicers-gold hover:text-stoicers-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-stoicers-gold hover:text-stoicers-dark transition-colors">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-stoicers-gold hover:text-stoicers-dark transition-colors">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-stoicers-highlight">Philosophy</h3>
            <div className="space-y-3">
              <Link to="/brand-story" className="block text-stoicers-warm hover:text-stoicers-gold transition-colors">
                Our Story
              </Link>
              <Link to="/products" className="block text-stoicers-warm hover:text-stoicers-gold transition-colors">
                Collection
              </Link>
              <Link to="/contact" className="block text-stoicers-warm hover:text-stoicers-gold transition-colors">
                Connect
              </Link>
              <Link to="/sustainability" className="block text-stoicers-warm hover:text-stoicers-gold transition-colors">
                Sustainability
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-stoicers-highlight">Stay Wise</h3>
            <p className="text-stoicers-warm mb-4 text-sm">
              Join our community of modern Stoics for updates on new arrivals and philosophical insights.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-stoicers-dark-secondary/50 border-stoicers-gold/30 text-stoicers-gold placeholder:text-stoicers-warm focus:border-stoicers-gold"
              />
              <Button variant="hero" className="w-full bg-stoicers-gold text-stoicers-dark hover:bg-stoicers-highlight">
                Subscribe to Wisdom
              </Button>
            </div>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="border-t border-stoicers-gold/20 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/privacy" className="text-stoicers-warm hover:text-stoicers-gold transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/shipping" className="text-stoicers-warm hover:text-stoicers-gold transition-colors text-sm">
              Shipping Policy
            </Link>
            <Link to="/returns" className="text-stoicers-warm hover:text-stoicers-gold transition-colors text-sm">
              Return & Refund Policy
            </Link>
            <Link to="/terms" className="text-stoicers-warm hover:text-stoicers-gold transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-stoicers-warm text-sm mb-2">
            © 2025 Stoicers. Crafted with wisdom and purpose.
          </p>
          <p className="text-stoicers-warm/60 text-xs italic">
            "The happiness of your life depends upon the quality of your thoughts." - Marcus Aurelius
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;