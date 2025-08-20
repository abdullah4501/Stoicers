import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout";
import product2 from "@/assets/3.png";
import product6 from "@/assets/6.png";

// Slug utility
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const Products = () => {
  const products = [
    { id: 2, name: '"Memento Mori" Oversized Tee – by STOICERS', price: "3,000 PKR", image: product2, alt: '"Memento Mori" Oversized Tee – by STOICERS' },
    { id: 6, name: '"Invincible" Oversized Tee – by STOICERS', price: "Rs.3,000 PKR", image: product6, alt: '"Invincible" Oversized Tee – by STOICERS' },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight catchy bg-gradient-to-r from-stoicers-gold to-stoicers-highlight bg-clip-text text-transparent">STOICERS Products</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-stoicers-warm">
            Modern essentials inspired by Stoic philosophy wisdom, courage, discipline, and justice.
          </p>
        </header>

        <section aria-label="Product grid">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => {
              const slug = slugify(product.name);
              return (
                <article key={product.id} className="group flex">
                  <Link
                    to={`/product/${slug}`}
                    className="w-full" // makes the whole card clickable
                    style={{ textDecoration: 'none' }} // removes default link underline
                  >
                    <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 max-w- w-full mx-auto flex flex-col">
                      <CardContent className="p-0 flex-1 flex flex-col">
                        <div className="w-full bg-stoicers-dark-secondary rounded-t-2xl overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.alt}
                            className="w-full h-[500px] object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
                            draggable={false}
                          />
                        </div>
                        <div className="p-4 bg-gradient-to-b from-card to-stoicers-dark-secondary flex-1 flex flex-col justify-center items-center rounded-b-2xl">
                          <h3 className="text-base font-semibold mb-1 text-stoicers-gold text-center">{product.name}</h3>
                          <p className="text-stoicers-highlight font-bold text-lg text-center">{product.price}</p>
                          <Button
                            
                            className="mt-3"
                            onClick={e => {
                              e.preventDefault();
                            }}
                          >
                            <ShoppingCart />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
