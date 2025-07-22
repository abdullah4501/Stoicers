import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import tshirtBeige from "@/assets/tshirt-beige.jpg";
import trousersBrown from "@/assets/trousers-brown.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "The Everyday Trouser – Walnut Brown (Unisex)",
      price: "Rs.6,850.00 PKR",
      image: trousersBrown,
      slug: "everyday-trouser-walnut-brown"
    },
    {
      id: 2,
      name: "The Classic Tee – Beige (Unisex)",
      price: "Rs.4,850.00 PKR",
      image: tshirtBeige,
      slug: "classic-tee-beige"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">BASIQ — Where Luxury Meets Simplicity</h1>
          <p className="text-basiq-warm max-w-3xl mx-auto">
            BASIQ is where timeless design meets modern minimalism. We craft refined wardrobe staples with 
            premium fabrics, clean silhouettes, and quiet confidence. No noise. Just everyday luxury 
            —built to last, made to live in.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Summer collection</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.slug}`}>
                <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-basiq-dark-secondary rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                      <p className="text-basiq-beige font-bold">{product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;