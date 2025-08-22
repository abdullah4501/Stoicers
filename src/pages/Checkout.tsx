import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Checkout = () => {
  const [params] = useSearchParams();
  const productId = params.get("product_id");
  const token = localStorage.getItem("customer_token");

  const [product, setProduct] = useState(null);     // for single
  const [cartItems, setCartItems] = useState([]);   // for multiple
  const [customer, setCustomer] = useState(null);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", area: "", city: "", quantity: 1,
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // 1. Load product OR cart items
  useEffect(() => {
    if (productId) {
      axios.get(`${API_BASE_URL}/api/products/${productId}`)
        .then(res => setProduct(res.data));
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(cart);
    }
  }, [productId]);

  // 2. Load customer if logged in
  useEffect(() => {
    if (token) {
      axios.get(`${API_BASE_URL}/api/customer/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => {
          setCustomer(res.data);
          setForm(f => ({
            ...f,
            name: res.data.name || "",
            email: res.data.email || "",
            phone: res.data.phone || "",
            address: res.data.address || "",
            area: res.data.area || "",
            city: res.data.city || "",
          }));
        });
    }
  }, [token]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 3. Handle order for single or multiple items
  const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      let payload;
      if (productId) {
        // Single product
        payload = {
          items: [{
            product_id: product?.id,
            quantity: 1, // or use a quantity field
          }],
          ...form,
        };
      } else {
        // Multiple products from cart
        payload = {
          items: cartItems.map(item => ({
            product_id: item.id,
            quantity: item.quantity,
          })),
          ...form,
        };
      }
      await axios.post(`${API_BASE_URL}/api/orders`, payload, token
        ? { headers: { Authorization: `Bearer ${token}` } }
        : {});
      setMsg("Order placed successfully!");
      // Optionally clear cart on success
      if (!productId) {
        localStorage.removeItem("cart");
      }
    } catch (err) {
      setMsg(err.response?.data?.message || "Order failed");
    } finally {
      setLoading(false);
    }
  };

  const formatPKR = (price) =>
    price != null ? `Rs.${Number(price).toLocaleString()}` : "";

  // 4. Render
  if (productId && !product) return <div>Loading product...</div>;
  if (!productId && cartItems.length === 0)
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center text-lg text-stoicers-warm">Your cart is empty.</div>
        </div>
      </Layout>
    );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight catchy bg-gradient-to-r from-stoicers-gold to-stoicers-highlight bg-clip-text text-transparent text-center">Checkout</h1>
          <div className="grid lg:grid-cols-2 gap-12 mt-[35px]">
            <form className="space-y-6" onSubmit={handleOrder}>
              <h2 className="text-xl font-bold">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium text-sm">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Full name"
                    className="bg-background border-border h-12"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="bg-background border-border h-12"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block mb-1 font-medium text-sm">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Address"
                  className="bg-background border-border h-12"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block mb-1 font-medium text-sm">
                    City
                  </label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="City"
                    className="bg-background border-border h-12"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="area" className="block mb-1 font-medium text-sm">
                    Area
                  </label>
                  <Input
                    id="area"
                    name="area"
                    placeholder="Area"
                    className="bg-background border-border h-12"
                    value={form.area}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium text-sm">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="bg-background border-border h-12"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block mb-1 font-medium text-sm">
                  Quantity
                </label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min={1}
                  className="bg-background border-border h-12"
                  value={form.quantity}
                  onChange={handleChange}
                />
              </div>
            </form>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                {productId ? (
                  <>
                    <img
                      src={product.featured_image_url}
                      alt={product.name}
                      className="w-full h-64 object-cover mb-4 rounded-xl border"
                    />
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>{product.name}</span>
                      </div>
                      <div className="flex justify-between text-stoicers-warm text-base">
                        <span>Quantity</span>
                        <span>{form.quantity}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold pt-2 border-t mt-2">
                        <span>Total</span>
                        <span>{formatPKR(product.price * form.quantity)}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map(item => (
                      <div className="flex items-center gap-3" key={item.id}>
                        <img
                          src={item.featured_image_url}
                          alt={item.name}
                          className="w-14 h-14 object-cover rounded border"
                        />
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm">x {item.quantity}</div>
                        </div>
                        <div className="font-bold">{formatPKR(item.price * item.quantity)}</div>
                      </div>
                    ))}
                    <div className="border-t pt-4 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>
                        {formatPKR(
                          cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
                        )}
                      </span>
                    </div>
                  </div>
                )}

                {/* Complete Order button – stays the same for both modes */}
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full mt-6"
                  disabled={loading}
                  onClick={handleOrder}
                >
                  {loading ? "Placing order..." : "Complete Order"}
                </Button>
                {msg && (
                  <div className="mt-2 text-stoicers-highlight text-center">
                    {msg}
                  </div>
                )}
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
