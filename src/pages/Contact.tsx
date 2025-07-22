import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-basiq-warm">
              Get in touch with us for any questions about our products or brand.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input 
                  placeholder="Name" 
                  className="bg-background border-border rounded-full h-12"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email *" 
                  className="bg-background border-border rounded-full h-12"
                  required
                />
              </div>
            </div>
            
            <div>
              <Input 
                type="tel"
                placeholder="Phone number" 
                className="bg-background border-border rounded-full h-12"
              />
            </div>
            
            <div>
              <Textarea 
                placeholder="Comment" 
                className="bg-background border-border rounded-lg min-h-32 resize-none"
                rows={6}
              />
            </div>
            
            <div className="text-center">
              <Button variant="basiq-dark" size="xl" className="px-12 rounded-full">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;