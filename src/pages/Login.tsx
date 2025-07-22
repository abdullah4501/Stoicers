import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-card border-border shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <p className="text-basiq-warm">Sign in to your BASIQ account</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div>
                  <Input 
                    type="email"
                    placeholder="Email address" 
                    className="bg-background border-border h-12"
                    required
                  />
                </div>
                
                <div>
                  <Input 
                    type="password"
                    placeholder="Password" 
                    className="bg-background border-border h-12"
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <Link to="/forgot-password" className="text-basiq-beige hover:underline">
                    Forgot password?
                  </Link>
                </div>
                
                <Button variant="hero" size="xl" className="w-full">
                  Sign In
                </Button>
              </form>
              
              <div className="text-center">
                <p className="text-basiq-warm">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-basiq-beige hover:underline font-medium">
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