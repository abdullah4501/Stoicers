import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { X, Plus, Minus } from "lucide-react";

// Helper
const formatPKR = (price) =>
    price != null ? `Rs. ${Number(price).toLocaleString()}` : "";

const Cart = () => {
    const [items, setItems] = React.useState([]);

    // Load cart on mount
    React.useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setItems(cart);
    }, []);

    // Update localStorage whenever items change
    const updateCart = (updatedItems) => {
        setItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
        window.dispatchEvent(new Event("cart-updated"));
    };

    // Remove product from cart
    const handleRemove = (id) => {
        const updated = items.filter((item) => item.id !== id);
        updateCart(updated);
    };

    // Increment quantity
    const handleIncrement = (id) => {
        const updated = items.map((item) => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updated);
    };

    // Decrement quantity
    const handleDecrement = (id) => {
        const updated = items.map((item) => 
            item.id === id && item.quantity > 1 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
        );
        updateCart(updated);
    };

    const totalAmount = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Layout>
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight catchy bg-gradient-to-r from-stoicers-gold to-stoicers-highlight bg-clip-text text-transparent text-center">Your Cart</h1>
                <Card className="max-w-3xl mx-auto bg-card border-border shadow-elegant mt-[35px]">
                    <CardContent className="p-8">
                        {items.length === 0 ? (
                            <div className="text-center text-stoicers-warm text-lg font-semibold py-12">
                                Your cart is empty.
                            </div>
                        ) : (
                            <>
                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-4 border-b border-border pb-6 last:border-none last:pb-0"
                                        >
                                            <img
                                                src={item.featured_image_url}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-lg border"
                                            />
                                            <div className="flex-1">
                                                <div className="font-bold text-lg text-stoicers-gold">
                                                    {item.name}
                                                </div>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <span className="text-stoicers-warm">Quantity:</span>
                                                    <div className="flex items-center gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="h-8 w-8 p-0"
                                                            onClick={() => handleDecrement(item.id)}
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </Button>
                                                        <span className="font-medium min-w-[2rem] text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="h-8 w-8 p-0"
                                                            onClick={() => handleIncrement(item.id)}
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="text-stoicers-highlight font-bold mt-1">
                                                    {formatPKR(item.price)}{" "}
                                                   
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="ml-2"
                                                onClick={() => handleRemove(item.id)}
                                                aria-label="Remove from cart"
                                            >
                                                <X className="w-5 h-5 text-red-500" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                                    <div className="text-2xl font-bold text-stoicers-gold">
                                        Total:
                                    </div>
                                    <div className="text-3xl font-bold text-stoicers-highlight">
                                        {formatPKR(totalAmount)}
                                    </div>
                                </div>
                                <div className="mt-8 flex gap-4 justify-end items-center">
                                    <Link to="/products">
                                        <Button variant="outline" className="px-8">
                                            Continue Shopping
                                        </Button>
                                    </Link>
                                    <Link to="/checkout">
                                        <Button variant="hero" size="xl" className="px-8">
                                            Proceed to Checkout
                                        </Button>
                                    </Link>
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
};

export default Cart;