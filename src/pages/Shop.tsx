import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Gift } from "lucide-react";
import productsImg from "@/assets/spa-products.jpg";

const Shop = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={productsImg} alt="Studio 21 spa products" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-spa-dark/60" />
        </div>
        <div className="relative container-spa text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Shop</h1>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto">
            High-quality lotions and oils to extend that feeling of zen at home.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="text-center mb-14">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-secondary mb-3">Featured Products</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Premium Spa Products</h2>
            <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
              Many people underestimate the effect high-quality lotions and oils have on a spa treatment. We guarantee all of our products help you with that extra feeling of zen.
            </p>
          </div>
          <div className="bg-spa-warm rounded-2xl p-8 md:p-14 text-center">
            <p className="font-body text-muted-foreground mb-6">
              Visit us in person to browse our full collection of premium spa and beauty products, or contact us for product inquiries.
            </p>
            <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="cta" size="lg">Contact Us for Products <ArrowRight size={16} /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="section-padding bg-spa-warm">
        <div className="container-spa">
          <div className="bg-card rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                <Gift size={40} className="text-secondary" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-heading text-3xl font-bold text-card-foreground mb-3">Gift Cards</h2>
              <p className="font-body text-base text-muted-foreground mb-6">
                Give the gift of relaxation. Studio 21 gift cards are the perfect way to show someone you care.
              </p>
              <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="cta" size="lg">Buy Now <ArrowRight size={16} /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
