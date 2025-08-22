import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero.jpeg";
import modelHero from "@/assets/model-hero.jpg";
import collectionImage from "@/assets/DSC00171.jpg";
import product1 from "@/assets/3.png";
import product2 from "@/assets/6.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [added, setAdded] = useState({}); // Track which product is "Added"
  const navigate = useNavigate();

    useEffect(() => {
    axios.get(`${API_BASE_URL}/api/products`)
      .then(res => setProducts(res.data.data || res.data))
      .catch(() => setProducts([]));
  }, []);

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const idx = cart.findIndex(item => item.id === product.id);
    if (idx > -1) {
      cart[idx].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        featured_image_url: product.featured_image_url,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(a => ({ ...a, [product.id]: true }));
    window.dispatchEvent(new Event("cart-updated"));
    // Remove 'Added' after a short delay
    setTimeout(() => setAdded(a => ({ ...a, [product.id]: false })), 1200);
  };

  // Format price
  const formatPKR = (price) => price != null ? `Rs.${Number(price).toLocaleString()}` : "";

  if (!products.length) return null;
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
            <h1 className="text-6xl md:text-8xl font-bold text-stoicers-gold mb-6 tracking-wider bg-gradient-to-r from-stoicers-gold to-stoicers-highlight bg-clip-text text-transparent catchy">
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


    <section className="py-20 bg-gradient-to-b from-background to-stoicers-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-stoicers-gold to-stoicers-highlight bg-clip-text text-transparent catchy">
            Stoicers Summer Drop 25'
          </h2>
          <p className="text-stoicers-warm text-lg max-w-2xl mx-auto">
            Embrace the wisdom of ancient philosophy with our modern interpretations of timeless wardrobe essentials.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 max-h-[580px] mx-auto">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="aspect-[4/5] bg-stoicers-dark-secondary rounded-t-lg overflow-hidden">
                  <img
                    src={product.featured_image_url}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-gradient-to-b from-card to-stoicers-dark-secondary flex-1 flex flex-col justify-between">
                  <h3 className="text-base font-medium mb-1 text-stoicers-gold">{product.name}</h3>
                  <p className="text-stoicers-highlight font-bold text-lg">{formatPKR(product.price)}</p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleAddToCart(product)}
                      disabled={added[product.id]}
                    >
                      {added[product.id] ? "Added" : "+ Add to Cart"}
                    </Button>
                    <Button
                      variant="hero"
                      className="flex-1"
                      onClick={() => navigate(`/checkout?product_id=${product.id}`)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>


      {/* Brand Story Section */}
      <section className="py-20 bg-gradient-to-r from-stoicers-dark-secondary to-stoicers-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stoicers-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-6xl font-bold  text-stoicers-gold leading-tight catchy">
                STOICERS
              </h2>
              <h3 className="text-3xl font-bold mb-8 text-stoicers-gold leading-tight catchy">
                Where Ancient Wisdom Meets Modern Style
              </h3>
              <p className="text-stoicers-warm leading-relaxed mb-8 text-lg">
                Stoicers embodies the timeless principles of Stoic philosophy through contemporary fashion.
                We create garments that reflect strength, wisdom, and inner peace. Clothing for those who
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
                <p className="text-xs tracking-widest text-stoicers-gold">NEW ARRIVAL • 2025</p>
              </div>
            </div>

            {/* RIGHT: Copy + CTA */}
            <div className="text-center md:text-left space-y-8">
              <h3 className="text-5xl md:text-6xl font-bold text-stoicers-gold italic leading-tight catchy">
                “You have power over your mind, not outside events.”
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