import Layout from "@/components/Layout";
import tshirtFlat from "@/assets/tshirt-flat.jpg";
import trousersFlat from "@/assets/trousers-flat.jpg";

const BrandStory = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Brand Info */}
          <div>
            <h1 className="text-6xl font-bold mb-8">BASIQ</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">BASIQ - Brand Story</h2>
                <div className="space-y-4 text-basiq-warm leading-relaxed">
                  <p>
                    In a world of fleeting trends, BASIQ was born to bring timelessness back to 
                    the everyday. Founded with the belief that luxury isn't loud, BASIQ 
                    redefines basics with understated elegance, refined fabrics, and a classic 
                    silhouette that endures.
                  </p>
                  
                  <p>
                    Our journey begins with the essentials—a perfectly tailored tee and a refined pair of trousers—crafted for 
                    those who value simplicity, quality, and invention. Each piece is designed to be a foundation, not a 
                    statement. An anchor in your wardrobe, not a moment in the spotlight.
                  </p>
                  
                  <p>
                    At BASIQ, we don't chase trends. We create them—rich textures, neutral tones, and timeless 
                    cuts that never show they're trying. Our fabric-first approach ensures every garment feels as good as it looks, 
                    offering comfort, durability, and sophistication in every stitch.
                  </p>
                  
                  <p>
                    This is daily wear, done differently. No over-design. No compromise. Just refined, reliable pieces that 
                    work harder than trends ever could.
                  </p>
                  
                  <p className="italic font-medium">
                    Live simply. Dress better. Wear BASIQ.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Product Images */}
          <div className="space-y-8">
            <div className="bg-basiq-dark-secondary rounded-lg p-8">
              <img 
                src={tshirtFlat} 
                alt="Classic Tee" 
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="bg-basiq-dark-secondary rounded-lg p-8">
              <img 
                src={trousersFlat} 
                alt="Everyday Trouser" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BrandStory;