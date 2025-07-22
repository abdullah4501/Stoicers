import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-basiq-dark text-basiq-beige">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Sign up for updates</h3>
            <div className="flex max-w-md">
              <Input 
                placeholder="Email" 
                className="bg-transparent border-basiq-beige text-basiq-beige placeholder:text-basiq-warm rounded-r-none"
              />
              <Button variant="hero" className="rounded-l-none">
                →
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick links</h3>
            <div className="flex flex-wrap gap-6">
              <Link to="/brand-story" className="text-basiq-warm hover:text-basiq-beige transition-colors">
                BASIQ - Brand Story
              </Link>
              <Link to="/privacy" className="text-basiq-warm hover:text-basiq-beige transition-colors">
                Privacy Policy
              </Link>
              <Link to="/shipping" className="text-basiq-warm hover:text-basiq-beige transition-colors">
                Shipping Policy
              </Link>
              <Link to="/returns" className="text-basiq-warm hover:text-basiq-beige transition-colors">
                Return & Refund Policy
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-basiq-brown">
          <p className="text-basiq-warm text-sm">
            © 2025, wearbasiq Powered by Shopify
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;