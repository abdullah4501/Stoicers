import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/customer/login`; // <-- update this!

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(API_URL, { email, password });
      // Save token to localStorage
      localStorage.setItem("customer_token", res.data.token);
      // Optionally save user info
      localStorage.setItem("customer", JSON.stringify(res.data.customer));
      // Redirect to dashboard or homepage
      navigate("/"); // Change route as needed
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-card border-border shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-stoicers-gold mb-8 italic font-bold tracking-wide">Welcome Back</CardTitle>
              <p className="text-stoicers-warm">Sign in to your Stoicers account</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Input 
                    type="email"
                    placeholder="Email address"
                    className="bg-background border-border h-12 text-stoicers-warm"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                
                <div>
                  <Input 
                    type="password"
                    placeholder="Password"
                    className="bg-background border-border h-12 text-stoicers-warm"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <Link to="/forgot-password" className="text-stoicers-warm hover:underline">
                    Forgot password?
                  </Link>
                </div>

                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}
                
                <Button variant="hero" size="xl" className="w-full text-stoicers-warm" disabled={loading}>
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
              
              <div className="text-center">
                <p className="text-stoicers-warm">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-stoicers-warm hover:underline font-medium">
                    Create one
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
