import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-image.jpg";
import tshirtBeige from "@/assets/tshirt-beige.jpg";
import trousersBrown from "@/assets/trousers-brown.jpg";
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
          <h1 className="text-6xl md:text-8xl font-bold text-basiq-beige mb-6 tracking-wider">
            BASIQ
          </h1>
          <p className="text-xl md:text-2xl text-basiq-beige mb-8 italic">
            Timeless Dailywear
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-2 h-2 bg-basiq-beige rounded-full"></div>
            <div className="w-2 h-2 bg-basiq-beige/50 rounded-full"></div>
            <div className="w-2 h-2 bg-basiq-beige/50 rounded-full"></div>
            <div className="w-2 h-2 bg-basiq-beige/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Summer Collection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">BASIQ SUMMER DROP 25'</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Trousers */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-0">
                <div className="aspect-square bg-basiq-dark-secondary rounded-t-lg">
                  <img 
                    src={trousersBrown} 
                    alt="The Everyday Trouser" 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">The Everyday Trouser - Walnut Brown (Unisex)</h3>
                  <p className="text-basiq-beige font-bold">Rs.6,850.00 PKR</p>
                </div>
              </CardContent>
            </Card>

            {/* T-Shirt */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-0">
                <div className="aspect-square bg-basiq-dark-secondary rounded-t-lg">
                  <img 
                    src={tshirtBeige} 
                    alt="The Classic Tee" 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">The Classic Tee - Beige (Unisex)</h3>
                  <p className="text-basiq-beige font-bold">Rs.4,850.00 PKR</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 bg-basiq-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-basiq-beige">BASIQ — Where Luxury Meets Simplicity</h2>
              <p className="text-basiq-warm leading-relaxed mb-6">
                BASIQ is where timeless design meets modern minimalism. We craft refined wardrobe staples with 
                premium fabrics, clean silhouettes, and quiet confidence. No noise. Just everyday luxury 
                —built to last, made to live in.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/brand-story">MORE →</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={modelHero} 
                alt="BASIQ Model" 
                className="w-full rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-basiq-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-basiq-beige rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-basiq-dark mb-4">BASIQ</h3>
              <p className="text-basiq-dark mb-6">MEN'S SUMMER 2025</p>
              <div className="space-y-4">
                <div className="text-basiq-dark">
                  <h4 className="font-medium">BEIGE T-SHIRT</h4>
                  <p className="text-sm">100% COMBED COTTON</p>
                </div>
                <div className="text-basiq-dark">
                  <h4 className="font-medium">THE EVERYDAY TROUSER</h4>
                  <p className="text-sm">STRETCH COTTON BLEND</p>
                </div>
                <div className="text-basiq-dark">
                  <h4 className="font-medium">STRAIGHT FIT</h4>
                  <p className="text-sm">WALNUT BROWN</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-basiq-beige mb-6 italic">
                Live simply. Dress better. Wear BASIQ.
              </h3>
              <p className="text-basiq-warm mb-8">
                A refined wardrobe for those who value simplicity, style, and everyday ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;