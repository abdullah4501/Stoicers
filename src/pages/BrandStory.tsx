import Layout from "@/components/Layout";
import tshirtFlat from "@/assets/5.png";
import tshirtFlat2 from "@/assets/model2.jpeg";
import tshirtFlat3 from "@/assets/IMG_4421.jpg";
import tshirtFlat4 from "@/assets/IMG_4439.jpg";

const BrandStory = () => {
  return (
    <Layout>
<section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Brand Info */}
            <div>
              <header className="mb-8">
                <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight">STOICERS</h1>
              </header>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <h2 className="text-2xl font-semibold text-foreground">Brand Story</h2>
                <p>
                  STOICERS is a modern clothing brand inspired by Stoic philosophy—grounded in the virtues of
                  wisdom, courage, discipline, and justice. We craft clothing with purpose, where every piece mirrors a mindset.
                </p>
                <p>
                  Each piece blends minimalist design with meaningful quotes and artwork, turning timeless values into wearable statements.
                  We design foundations, not fads—essentials that outlast the season and elevate the everyday.
                </p>
                <p>
                  Our fabric-first approach ensures comfort, durability, and a refined silhouette. No over-design. No noise. Just intentional
                  details that speak softly and carry weight.
                </p>
                <p className="italic font-medium text-foreground">Live simply. Dress better. Wear STOICERS.</p>
              </div>
            </div>

            {/* Right Side - Product Images */}
            <aside className="grid grid-cols-2 gap-6">
              <figure className="group rounded-lg overflow-hidden border border-border bg-card">
                <img loading="lazy" src={tshirtFlat} alt="STOICERS minimalist tee flat-lay with stoic quote" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              </figure>
              <figure className="group rounded-lg overflow-hidden border border-border bg-card">
                <img loading="lazy" src={tshirtFlat2} alt="STOICERS outfit on model in neutral studio" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              </figure>
              <figure className="group rounded-lg overflow-hidden border border-border bg-card">
                <img loading="lazy" src={tshirtFlat3} alt="STOICERS fabric detail with embossed quote" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              </figure>
              <figure className="group rounded-lg overflow-hidden border border-border bg-card">
                <img loading="lazy" src={tshirtFlat4} alt="STOICERS hoodie with virtues-inspired artwork" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              </figure>
            </aside>
          </div>
        </section>
    </Layout>
  );
};

export default BrandStory;