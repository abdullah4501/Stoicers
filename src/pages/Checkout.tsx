import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Checkout = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First name" className="bg-background border-border h-12" />
                <Input placeholder="Last name" className="bg-background border-border h-12" />
              </div>
              <Input placeholder="Address" className="bg-background border-border h-12" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="City" className="bg-background border-border h-12" />
                <Input placeholder="Postal code" className="bg-background border-border h-12" />
              </div>
              <Input placeholder="Phone" className="bg-background border-border h-12" />
            </div>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Classic Tee - Beige (M)</span>
                    <span>Rs.4,850.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>Rs.4,850.00</span>
                    </div>
                  </div>
                  <Button variant="hero" size="xl" className="w-full mt-6">Complete Order</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;