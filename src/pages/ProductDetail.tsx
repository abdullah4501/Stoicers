import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [relatedProduct, setRelatedProduct] = useState(null);

  // Fetch product by slug (or id, depending on your route)
  useEffect(() => {
    if (slug) {
      axios
        .get(`${API_BASE_URL}/api/products/${slug}`)
        .then((res) => {
          setProduct(res.data);
          setSelectedImage(0);
          // Optionally fetch a related product
          axios.get(`${API_BASE_URL}/api/products`).then((response) => {
            const rel = (response.data.data || response.data).find(
              (p) => p.id !== res.data.id
            );
            setRelatedProduct(rel);
          });
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }
  }, [slug]);

  const sizes = ["S", "M", "L", "XL"];

  if (!product) {
    return <div>Loading product...</div>;
  }

  // Prepare productImages array: featured + gallery
  const productImages = [];
  
  // Add featured image first
  if (product.featured_image_url) {
    productImages.push(product.featured_image_url);
  }
  
  // Add gallery images from the images field
  if (product.images_urls && Array.isArray(product.images_urls)) {
    productImages.push(...product.images_urls);
  }
  
  // If no images available, use a placeholder
  if (productImages.length === 0) {
    productImages.push('/api/placeholder/400/400');
  }

  // Add to cart function
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Check if product already exists in cart
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex > -1) {
      // Update quantity if product exists
      cart[existingIndex].quantity += quantity;
    } else {
      // Add new product to cart
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        featured_image_url: product.featured_image_url,
        quantity: quantity,
        size: selectedSize
      });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
  };

  // Price formatter
  const formatPKR = (price) =>
    price != null ? `Rs.${Number(price).toLocaleString()}` : "";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-stoicers-dark-secondary rounded-lg overflow-hidden">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-stoicers-dark-secondary rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-stoicers-gold"
                        : "border-transparent hover:border-stoicers-warm"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4 text-stoicers-gold">{product.name}</h1>
              <p className="text-2xl font-bold text-stoicers-highlight">
                {formatPKR(product.price)}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Select Size</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "hero" : "outline"}
                    size="lg"
                    onClick={() => setSelectedSize(size)}
                    className="w-16 h-16"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Quantity</h3>
              <div className="flex items-center border border-border rounded-lg w-fit">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-r-none"
                >
                  -
                </Button>
                <span className="px-6 py-2 border-x border-border">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-l-none"
                >
                  +
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                variant="outline" 
                size="xl" 
                className="w-full"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
              <Link
                to={`/checkout?product_id=${product.id}`}
                className="block w-full"
              >
                <Button variant="hero" size="xl" className="w-full">
                  BUY IT NOW
                </Button>
              </Link>
            </div>

            {product.description && (
              <div>
                <h3 className="text-lg font-medium mb-4">Description</h3>
                <p className="text-stoicers-warm leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* You may also like */}
            {relatedProduct && (
              <div>
                <h3 className="text-xl font-bold mb-6">You may also like</h3>
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-stoicers-dark-secondary rounded-lg overflow-hidden">
                        <img
                          src={relatedProduct.featured_image_url}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1 text-stoicers-gold">
                          {relatedProduct.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-stoicers-highlight font-bold">
                            {formatPKR(relatedProduct.price)}
                          </span>
                        </div>
                      </div>
                      <Link to={`/product/${relatedProduct.slug}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;