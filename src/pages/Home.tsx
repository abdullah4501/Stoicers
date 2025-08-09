import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero.jpeg";
import tshirtBeige from "@/assets/tshirt_display.jpeg";
import model2 from "@/assets/model2.jpeg";
import modelHero from "@/assets/model-hero.jpg";
import collectionImage from "@/assets/DSC00171.jpg";
import product1 from "@/assets/3.png";
import product2 from "@/assets/6.png";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl px-4">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-stoicers-gold mb-6 tracking-wider bg-gradient-to-r from-stoicers-gold to-stoicers-highlight bg-clip-text text-transparent">
              STOICERS
            </h1>
            <p className="text-xl md:text-2xl text-stoicers-gold mb-8 italic font-light tracking-wide">
              Timeless Philosophy, Modern Style
            </p>
            <div className="flex justify-center space-x-6">
              <Button
                variant="hero"
                size="lg"
                className="bg-stoicers-gold text-stoicers-dark hover:bg-stoicers-highlight shadow-glow"
                asChild
              >
                <Link to="/products">Explore Collection</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-stoicers-gold text-stoicers-gold hover:bg-stoicers-gold hover:text-stoicers-dark"
                asChild
              >
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
                    src={product1}
                    alt="The Stoic Trouser"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-card to-stoicers-dark-secondary">
                  <h3 className="text-lg font-medium mb-2 text-stoicers-gold">Memento Mori" Oversized Tee – by STOICERS</h3>
                  <p className="text-stoicers-highlight font-bold text-xl">3,000 PKR</p>
                  <p className="text-stoicers-warm text-sm mt-2">CLive fully. Fearlessly. This t-shirt serves as a quiet rebellion against passivity. Inspired by the Stoic call to live with intention, its bold artwork and quote are a reminder: when your time comes, make sure you were truly living.
                  Crafted from 220 GSM, 100% French Terry Cotton for lasting comfort and structure.</p>
                </div>
              </CardContent>
            </Card>

            {/* T-Shirt */}
            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-0">
                <div className="aspect-square bg-stoicers-dark-secondary rounded-t-lg overflow-hidden">
                  <img
                    src={product2}
                    alt="The Wisdom Tee"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-card to-stoicers-dark-secondary">
                  <h3 className="text-lg font-medium mb-2 text-stoicers-gold">Invincible" Oversized Tee – by STOICERS</h3>
                  <p className="text-stoicers-highlight font-bold text-xl">3,000 PKR</p>
                  <p className="text-stoicers-warm text-sm mt-2">This t-shirt serves as a virtue for those who refuse to quit, who won't back down or give in, no matter the cost. Inspired by the core Stoic principle: True strength lies not in survival, but in how you choose to live. Wear it not just to be seen, but to be remembered for what you stood for.
                  Crafted from 220 GSM, 100% French Terry Cotton for lasting comfort and structure.</p>
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
      <section className="relative overflow-hidden py-24 bg-stoicers-dark">
        {/* Soft background accents */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(closest-side, rgba(212,175,55,.35), transparent)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(closest-side, rgba(255,216,128,.28), transparent)" }}
        />
        {/* Subtle vertical sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stoicers-gold/5 to-transparent" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 md:gap-16 md:grid-cols-2">
            {/* LEFT: Feature Image */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-stoicers-gold/40 via-stoicers-highlight/30 to-stoicers-gold/10 blur-xl opacity-70" />

              {/* Image frame */}
              <div className="relative rounded-3xl bg-gradient-to-br from-stoicers-gold/20 to-stoicers-highlight/10 p-[2px] shadow-glow">
                <div className="rounded-[calc(1.5rem-2px)] overflow-hidden bg-black/30 ring-1 ring-white/10">
                  <img
                    src={collectionImage}        // <-- your imported image goes here
                    alt="STOICERS Philosophy Collection 2025 apparel showcase"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 backdrop-blur-md ring-1 ring-white/10 px-4 py-2">
                <p className="text-xs tracking-widest text-stoicers-gold">PHILOSOPHY • 2025</p>
              </div>
            </div>

            {/* RIGHT: Copy + CTA */}
            <div className="text-center md:text-left space-y-8">
              <h3 className="text-5xl md:text-6xl font-bold text-stoicers-gold italic leading-tight">
                “You have power over your mind — not outside events.”
              </h3>

              <p className="text-stoicers-warm/90 text-lg md:text-xl leading-relaxed">
                Clothing inspired by Stoic wisdom. Designed for those who seek substance over spectacle,
                quality over quantity, and meaning over materialism.
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <h4 className="font-semibold text-stoicers-gold">THE WISDOM TEE</h4>
                  <p className="text-sm text-stoicers-warm/80">100% Organic Cotton</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <h4 className="font-semibold text-stoicers-gold">THE STOIC TROUSER</h4>
                  <p className="text-sm text-stoicers-warm/80">Premium Blend • Tailored</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <h4 className="font-semibold text-stoicers-gold">VIRTUE IN SIMPLICITY</h4>
                  <p className="text-sm text-stoicers-warm/80">Sustainable • Enduring</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-stoicers-gold text-stoicers-gold hover:bg-stoicers-gold hover:text-stoicers-dark"
                  asChild
                >
                  <Link to="/products">Shop Collection</Link>
                </Button>
              </div>

              {/* Small brand card */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-stoicers-gold animate-pulse" />
                  <span className="text-sm tracking-wide text-stoicers-warm/80">
                    STOICERS • Philosophy Collection 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;