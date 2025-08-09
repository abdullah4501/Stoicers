import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Layout from "@/components/Layout";
import product2 from "@/assets/3.png";
import product1 from "@/assets/1.png";
import product4 from "@/assets/4.png";
import product5 from "@/assets/5.png";
import product6 from "@/assets/6.png";
import product7 from "@/assets/DSC00163.jpg";
import product8 from "@/assets/DSC00174.jpg";
import product9 from "@/assets/DSC00184.jpg";

const Products = () => {
  const products = [
    { id: 2, name: '"Memento Mori" Oversized Tee – by STOICERS', price: "3,000 PKR", image: product2, alt: '"Memento Mori" Oversized Tee – by STOICERS' },
    { id: 6, name: '"Invincible" Oversized Tee – by STOICERS', price: "Rs.3,000 PKR", image: product6, alt: '"Invincible" Oversized Tee – by STOICERS' },
  ];

  const productLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: p.name,
        image: p.image,
        brand: { "@type": "Brand", name: "STOICERS" },
      },
    })),
  };

  return (
    <Layout>
    <div className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3">STOICERS Products</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern essentials inspired by Stoic philosophy — wisdom, courage, discipline, and justice.
          </p>
        </header>

        <section aria-label="Product grid">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {products.map((product) => (
              <article key={product.id} className="group">
                <Card className="bg-card border border-border overflow-hidden transition-shadow group-hover:shadow-md">
                  <CardContent className="p-0">
                      <img
                        src={product.image}
                        alt={product.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    <div className="p-4">
                      <h3 className="text-base font-medium leading-tight">{product.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;