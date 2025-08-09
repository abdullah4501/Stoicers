import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import tshirtBeige from "@/assets/tshirt-beige.jpg";
import tshirtGallery1 from "@/assets/1.png";
import tshirtGallery2 from "@/assets/1.png";
import tshirtGallery3 from "@/assets/1.png";
import trousersBrown from "@/assets/1.png";

const ProductDetail = () => {
  const { slug } = useParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    tshirtBeige,
    tshirtGallery1,
    tshirtGallery2,
    tshirtGallery3
  ];

  const product = {
    name: '"Memento Mori" Oversized Tee – by STOICERS',
    price: "Rs.3,000",
    description: 'Quote: “When Death finds you, may it find you Alive.”'
  };

  const relatedProduct = {
    name: "The Everyday Trouser – Walnut Brown (Unisex)",
    price: "Rs.5,480.00",
    originalPrice: "Rs.6,850.00",
    image: trousersBrown
  };

  const sizes = ["S", "M", "L", "XL"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-basiq-dark-secondary rounded-lg overflow-hidden">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-basiq-dark-secondary rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-basiq-beige' : 'border-transparent'
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
          </div>
          
          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-bold text-basiq-beige">{product.price}</p>
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
                <span className="px-6 py-2 border-x border-border">{quantity}</span>
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
              <Button variant="basiq-dark" size="xl" className="w-full">
                ADD TO CART
              </Button>
              <Button variant="hero" size="xl" className="w-full">
                BUY IT NOW
              </Button>
            </div>
            
            <div>
              <p className="text-basiq-warm leading-relaxed">{product.description}</p>
            </div>
            
            {/* You may also like */}
            <div>
              <h3 className="text-xl font-bold mb-6">You may also like</h3>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-basiq-dark-secondary rounded-lg overflow-hidden">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{relatedProduct.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-basiq-beige font-bold">{relatedProduct.price}</span>
                        <span className="text-basiq-warm line-through text-sm">{relatedProduct.originalPrice}</span>
                      </div>
                    </div>
                    <Button variant="basiq-dark" size="sm">
                      + Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;