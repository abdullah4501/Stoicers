import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import stoicersLogoWhite from "@/assets/white.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-stoicers-dark to-stoicers-accent text-stoicers-gold text-center py-3 text-sm font-medium tracking-wide">
        ✦ NEW STOICERS COLLECTION NOW AVAILABLE ✦
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-stoicers-gold transition-colors font-medium tracking-wide">
              Home
            </Link>
            <Link to="/brand-story" className="text-foreground hover:text-stoicers-gold transition-colors font-medium tracking-wide">
              Brand Story
            </Link>
            <Link to="/products" className="text-foreground hover:text-stoicers-gold transition-colors font-medium tracking-wide">
              Products
            </Link>
            <Link to="/contact" className="text-foreground hover:text-stoicers-gold transition-colors font-medium tracking-wide">
              Contact
            </Link>
          </nav>
          
          {/* Logo */}
          <div className="flex-1 flex justify-center md:flex-none">
            <Link to="/" className="flex items-center">
              <img 
                src={stoicersLogoWhite} 
                alt="Stoicers" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
          </div>
          
          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-64 bg-background border-border"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/login">
                <User className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/checkout">
                <ShoppingCart className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;