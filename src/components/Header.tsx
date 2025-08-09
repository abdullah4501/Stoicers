import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
          {/* Mobile: Menu trigger */}
          <div className="md:hidden">
            <MobileSidebar />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Primary">
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

          {/* Search & Icons (kept in main header on all screens) */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop search input */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search..."
                className="pl-10 w-64 bg-background border-border"
              />
            </div>

            {/* Compact search button for mobile */}
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" asChild aria-label="Account">
              <Link to="/login">
                <User className="w-5 h-5" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild aria-label="Cart">
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

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[85%] sm:w-96 p-0 bg-stoicers-dark sidebar-menu text-stoicers-warm
      
      ">
        {/* Top brand bar */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10 bg-gradient-to-r from-stoicers-dark to-stoicers-accent justify-center">
          <img src={stoicersLogoWhite} alt="Stoicers" className="h-8 w-auto brightness-0 invert" />
        </div>

        {/* Search */}
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stoicers-warm/70" />
            <Input
              placeholder="Search products"
              className="pl-10 bg-background/60 border-white/10 text-foreground placeholder:text-stoicers-warm/60"
            />
          </div>
        </div>

        {/* Nav */}
        <nav className="px-2 py-2" aria-label="Mobile">
          {[
            { to: "/", label: "Home" },
            { to: "/brand-story", label: "Brand Story" },
            { to: "/products", label: "Products" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-3 rounded-lg text-base font-medium hover:text-stoicers-dark hover:bg-stoicers-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="mt-2 px-4 pb-6 space-y-3 border-t border-white/10 pt-4">
          <div className="grid grid-cols-2 gap-3">
            <Button asChild variant="secondary" className="bg-white/5 border border-white/10 hover:bg-stoicers-gold hover:text-stoicers-dark">
              <Link to="/login" className="flex items-center justify-center gap-2">
                <User className="w-4 h-4" /> <span>Account</span>
              </Link>
            </Button>
            <Button asChild variant="secondary" className="bg-white/5 border border-white/10 hover:bg-stoicers-gold hover:text-stoicers-dark">
              <Link to="/checkout" className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" /> <span>Cart</span>
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Header;
