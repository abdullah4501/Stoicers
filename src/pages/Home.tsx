import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-image.jpg";
import tshirtBeige from "@/assets/tshirt_display.jpeg";
import model2 from "@/assets/model2.jpeg";
import modelHero from "@/assets/model-hero.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-basiq-dark/60 z-10" />
        
        <div className="relative z-20 text-center max-w-4xl px-4">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-stoicers-gold mb-6 tracking-wider bg-gradient-to-r from-stoicers-gold to-stoicers-highlight bg-clip-text text-transparent">
              STOICERS
            </h1>
            <p className="text-xl md:text-2xl text-stoicers-gold mb-8 italic font-light tracking-wide">
              Timeless Philosophy, Modern Style
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-3 h-3 bg-stoicers-gold rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-stoicers-gold/60 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-stoicers-gold/40 rounded-full animate-pulse delay-200"></div>
              <div className="w-3 h-3 bg-stoicers-gold/20 rounded-full animate-pulse delay-300"></div>
            </div>
            <div className="flex justify-center space-x-6">
              <Button variant="hero" size="lg" className="bg-stoicers-gold text-stoicers-dark hover:bg-stoicers-highlight shadow-glow" asChild>
                <Link to="/products">Explore Collection</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-stoicers-gold text-stoicers-gold hover:bg-stoicers-gold hover:text-stoicers-dark" asChild>
                <Link to="/brand-story">Our Philosophy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Collection */}
      <section className="py-20 bg-gradient-to-b from-background to-stoicers-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-stoicers-gold to-stoicers-highlight bg-clip-text text-transparent">
              STOICERS SUMMER DROP 25'
            </h2>
            <p className="text-stoicers-warm text-lg max-w-2xl mx-auto">
              Embrace the wisdom of ancient philosophy with our modern interpretations of timeless wardrobe essentials.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Trousers */}
            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-0">
                <div className="aspect-square bg-stoicers-dark-secondary rounded-t-lg overflow-hidden">
                  <img 
                    src={model2} 
                    alt="The Stoic Trouser" 
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-card to-stoicers-dark-secondary">
                  <h3 className="text-lg font-medium mb-2 text-stoicers-gold">The Stoic Trouser - Walnut Brown (Unisex)</h3>
                  <p className="text-stoicers-highlight font-bold text-xl">Rs.6,850.00 PKR</p>
                  <p className="text-stoicers-warm text-sm mt-2">Crafted for the modern philosopher</p>
                </div>
              </CardContent>
            </Card>

            {/* T-Shirt */}
            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-0">
                <div className="aspect-square bg-stoicers-dark-secondary rounded-t-lg overflow-hidden">
                  <img 
                    src={tshirtBeige} 
                    alt="The Wisdom Tee" 
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-card to-stoicers-dark-secondary">
                  <h3 className="text-lg font-medium mb-2 text-stoicers-gold">The Wisdom Tee - Beige (Unisex)</h3>
                  <p className="text-stoicers-highlight font-bold text-xl">Rs.4,850.00 PKR</p>
                  <p className="text-stoicers-warm text-sm mt-2">Simplicity in its purest form</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-gradient-to-r from-stoicers-dark-secondary to-stoicers-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stoicers-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl font-bold mb-8 text-stoicers-gold leading-tight">
                STOICERS — Where Ancient Wisdom Meets Modern Style
              </h2>
              <p className="text-stoicers-warm leading-relaxed mb-8 text-lg">
                Stoicers embodies the timeless principles of Stoic philosophy through contemporary fashion. 
                We create garments that reflect strength, wisdom, and inner peace—clothing for those who 
                understand that true style comes from character, not trends.
              </p>
              <div className="flex space-x-4">
                <Button variant="hero" size="lg" className="bg-stoicers-gold text-stoicers-dark hover:bg-stoicers-highlight shadow-glow" asChild>
                  <Link to="/brand-story">Discover Our Philosophy →</Link>
                </Button>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-stoicers-gold/20 to-stoicers-highlight/20 rounded-2xl blur-2xl"></div>
              <img 
                src={modelHero} 
                alt="Stoicers Philosophy" 
                className="w-full rounded-xl shadow-deep relative z-10 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Showcase */}
      <section className="py-20 bg-stoicers-dark relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stoicers-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-stoicers-gold to-stoicers-highlight rounded-2xl p-10 text-center shadow-glow">
              <h3 className="text-3xl font-bold text-stoicers-dark mb-6">STOICERS</h3>
              <p className="text-stoicers-dark mb-8 text-lg font-medium">PHILOSOPHY COLLECTION 2025</p>
              <div className="space-y-6">
                <div className="text-stoicers-dark">
                  <h4 className="font-bold text-lg">THE WISDOM TEE</h4>
                  <p className="text-sm opacity-80">100% Organic Cotton | Mindfully Crafted</p>
                </div>
                <div className="text-stoicers-dark">
                  <h4 className="font-bold text-lg">THE STOIC TROUSER</h4>
                  <p className="text-sm opacity-80">Premium Blend | Timeless Design</p>
                </div>
                <div className="text-stoicers-dark">
                  <h4 className="font-bold text-lg">VIRTUE IN SIMPLICITY</h4>
                  <p className="text-sm opacity-80">Sustainable | Enduring Quality</p>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-8">
              <h3 className="text-5xl font-bold text-stoicers-gold mb-8 italic leading-tight">
                "You have power over your mind - not outside events. Realize this, and you will find strength."
              </h3>
              <p className="text-stoicers-warm text-xl leading-relaxed">
                Clothing inspired by Stoic wisdom. Designed for those who seek substance over spectacle, 
                quality over quantity, and meaning over materialism.
              </p>
              <div className="flex justify-center space-x-6 pt-8">
                <Button variant="outline" size="lg" className="border-stoicers-gold text-stoicers-gold hover:bg-stoicers-gold hover:text-stoicers-dark" asChild>
                  <Link to="/products">Shop Collection</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;