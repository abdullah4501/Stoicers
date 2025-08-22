import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState([]);


  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/products`)
      .then(res => setProducts(res.data.data || res.data)) // if using pagination
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product, quantity = 1) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const idx = cart.findIndex(item => item.id === product.id);
    if (idx > -1) {
      cart[idx].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        featured_image_url: product.featured_image_url,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(prev => [...prev, product.id]);
    window.dispatchEvent(new Event("cart-updated"));

  };
useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  setAdded(cart.map(item => item.id));
}, []);


  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight catchy bg-gradient-to-r from-stoicers-gold to-stoicers-highlight bg-clip-text text-transparent text-center">Products</h1>
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {loading ? "Loading..." :
            products.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.slug}`}  // Use .id if that's your route param
                style={{ textDecoration: 'none' }}
                className="block group" // makes the whole card clickable
              >
                <Card className="transition-all duration-200 hover:shadow-glow hover:scale-[1.03]">
                  <CardContent>
                    <img
                      src={product.featured_image_url}
                      alt={product.name}
                      className="w-full max-h-[490px] object-cover rounded-xl "
                    />
                    <h3 className="mt-2 text-xl font-bold">{product.name}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <Link to={`/checkout?product_id=${product.id}`}>
                        <Button>
                          <ShoppingCart className="mr-2" /> Buy Now
                        </Button>
                      </Link>
                      <Button
                        variant={added.includes(product.id) ? "success" : "outline"}
                        disabled={added.includes(product.id)}
                        onClick={e => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                      >
                        {added.includes(product.id) ? "Added" : "+ Add to Cart"}
                      </Button>

                    </div>

                  </CardContent>
                </Card>
              </Link>
            ))
          }
        </div>
      </div>
    </Layout>
  );
};

export default Products;
