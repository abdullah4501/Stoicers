import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-card border-border shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Join BASIQ</CardTitle>
              <p className="text-basiq-warm">Create your account</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First name" className="bg-background border-border h-12" />
                  <Input placeholder="Last name" className="bg-background border-border h-12" />
                </div>
                <Input type="email" placeholder="Email address" className="bg-background border-border h-12" />
                <Input type="password" placeholder="Password" className="bg-background border-border h-12" />
                <Input type="password" placeholder="Confirm password" className="bg-background border-border h-12" />
                <Button variant="hero" size="xl" className="w-full">Create Account</Button>
              </form>
              <div className="text-center">
                <p className="text-basiq-warm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-basiq-beige hover:underline font-medium">Sign in</Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Register;