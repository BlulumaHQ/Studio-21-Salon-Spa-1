import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Award, Star, ArrowRight, Sparkles, CheckCircle, Shield, Clock, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-spa.jpg";
import interiorImg from "@/assets/spa-interior.jpg";
import massageImg from "@/assets/service-massage.jpg";
import manicureImg from "@/assets/service-manicure.jpg";
import facialImg from "@/assets/service-facial.jpg";
import productsImg from "@/assets/spa-products.jpg";
import microbladingImg from "@/assets/service-microblading.jpg";

const BookCTA = ({ text = "Book Online", variant = "hero" as const, size = "xl" as const, className = "" }) => (
  <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
    <Button variant={variant} size={size} className={className}>
      {text} <ArrowRight size={16} />
    </Button>
  </Link>
);

const Index = () => {
  return (
    <Layout>
      {/* ===== 1. HOOK — Full-Screen Hero ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Studio 21 Salon and Spa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-spa-dark/70 via-spa-dark/60 to-spa-dark/90" />
        </div>
        <div className="relative container-spa text-center py-20">
          <p className="font-body text-sm md:text-base tracking-[0.35em] uppercase text-primary mb-6">
            Award-Winning Salon &amp; Spa · Since 1996
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] mb-8">
            Relax. Refresh.<br />Re-imagine.
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a time at our tranquil facility for manicures, pedicures, massage, facials, and skin treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <BookCTA text="Book Your Appointment Now" />
          </div>
          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/60">
            {[
              { icon: Award, label: "Best in Tri-State" },
              { icon: Star, label: "Reader's Choice" },
              { icon: Shield, label: "29+ Years" },
              { icon: Sparkles, label: "Global Salon Finalist" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-xs tracking-wider uppercase font-body">
                <b.icon size={14} className="text-primary" />
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ===== 2. PROBLEM — Pain Point ===== */}
      <section className="section-padding bg-spa-dark">
        <div className="container-spa text-center max-w-3xl mx-auto">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">Sound Familiar?</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            The Bustle of Everyday Life is Wearing You Down
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              "Stress and tension building up with no relief in sight",
              "Neglecting self-care because there's never enough time",
              "Feeling like you deserve a break but don't know where to go",
            ].map((pain, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="font-body text-sm text-white/70 leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. AGITATION — Emphasize the Problem ===== */}
      <section className="py-16 md:py-20 bg-secondary/15">
        <div className="container-spa text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
            You Shouldn't Have to Wait for Relaxation
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From the moment you walk in the door, our focus is on your complete relaxation. From massage to salt scrubs, our services are a great way to take a step back from the bustle of everyday life.
          </p>
        </div>
      </section>

      {/* ===== 4. SOLUTION — What We Offer ===== */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="text-center mb-14">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary mb-3">The Solution</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Your Personal Sanctuary Awaits
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
              Our highly trained team of professionals are here to provide you with a complete experience of personal well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={interiorImg} alt="Studio 21 spa interior" className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-5 -right-5 bg-cta-dark rounded-lg p-5 shadow-xl hidden lg:flex items-center gap-3">
                <Clock size={22} className="text-primary" />
                <div>
                  <p className="font-heading text-2xl font-bold text-white">29+</p>
                  <p className="font-body text-[10px] text-white/70 uppercase tracking-widest">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Studio 21 Salon and Spa is located in the historic downtown Ashland area. Since opening our doors in 1996, we have grown from a small two chair salon to an award-winning hydro spa and salon.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Come take a break with us.
              </p>
              <BookCTA text="Book Your Experience" variant="cta" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. BENEFITS — Value Breakdown ===== */}
      <section className="section-padding bg-spa-warm">
        <div className="container-spa">
          <div className="text-center mb-14">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary mb-3">Why Studio 21</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              What You Get
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Friendly Service",
                desc: "We strive to build a trusting relationship with our clients, and hope you will enjoy our small town friendliness along with our world-class spa treatments and superior service.",
              },
              {
                title: "Relaxing Environment",
                desc: "From the moment you walk in the door, our focus is on your complete relaxation. From massage to salt scrubs, our services are a great way to take a step back from the bustle of everyday life.",
              },
              {
                title: "High-Quality Products",
                desc: "Many people underestimate the effect high-quality lotions and oils have on a spa treatment. We guarantee all of our products help you with that extra feeling of zen.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-lg p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300">
                <CheckCircle size={28} className="text-secondary mb-4" />
                <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{benefit.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MID-PAGE CTA ===== */}
      <section className="py-14 md:py-16 bg-cta-dark">
        <div className="container-spa text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="font-body text-base text-white/70 mb-8 max-w-lg mx-auto">
            Book a time at our tranquil facility for manicures, pedicures, massage, facials, and skin treatments.
          </p>
          <BookCTA text="Book Your Appointment" variant="hero" size="xl" className="bg-white/15 hover:bg-white/25 border border-white/20" />
        </div>
      </section>

      {/* ===== 6. TRUST — Testimonials & Awards ===== */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="text-center mb-14">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary mb-3">Don't Just Take Our Word</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Trusted & Award-Winning
            </h2>
          </div>
          {/* Testimonial */}
          <div className="bg-secondary/10 rounded-2xl p-10 md:p-14 text-center max-w-2xl mx-auto mb-14">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="text-spa-gold fill-spa-gold" />
              ))}
            </div>
            <blockquote className="font-heading text-2xl md:text-3xl italic text-foreground mb-6 leading-relaxed">
              "Great experience! Definitely would recommend!"
            </blockquote>
            <p className="font-body text-base text-muted-foreground">— Brianna</p>
          </div>
          {/* Awards grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "Best in Tri-State" },
              { icon: Award, label: "Best in Ashland" },
              { icon: Star, label: "Reader's Choice Awards" },
              { icon: Sparkles, label: "Global Salon Awards Finalist" },
            ].map((award) => (
              <div key={award.label} className="bg-card border border-border/50 rounded-lg p-6 text-center shadow-md">
                <award.icon size={28} className="text-secondary mx-auto mb-3" />
                <p className="font-body text-xs font-semibold text-foreground/70 uppercase tracking-wider">{award.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="font-body text-sm text-muted-foreground">
              2016's Northeast Kentucky Small Business of the Year · UCLA Anderson School of Business finalist
            </p>
          </div>
        </div>
      </section>

      {/* ===== 7. OFFER — Services Showcase ===== */}
      <section className="section-padding bg-spa-dark">
        <div className="container-spa">
          <div className="text-center mb-14">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              World-Class Spa Treatments
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Massage", img: massageImg, desc: "Therapeutic and relaxation massage tailored to your needs." },
              { name: "Facials", img: facialImg, desc: "Revitalize your skin with our professional facial treatments." },
              { name: "Manicures & Pedicures", img: manicureImg, desc: "Perfectly polished nails in a relaxing spa environment." },
              { name: "Salt Scrubs", img: productsImg, desc: "Exfoliating salt scrub treatments for smooth, radiant skin." },
              { name: "Skin Treatments", img: interiorImg, desc: "Advanced skin care and rejuvenation treatments." },
              { name: "Microblading", img: microbladingImg, desc: "Enhance your natural beauty with perfectly shaped, fuller-looking brows." },
            ].map((service) => (
              <div key={service.name} className="group relative rounded-lg overflow-hidden aspect-[4/3]">
                <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/90 via-spa-dark/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-1">{service.name}</h3>
                  <p className="font-body text-xs text-white/70 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="hero" size="xl" className="bg-white/10 hover:bg-white/20 border border-white/20">
                View All Services <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 8. PRIMARY CTA ===== */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-spa text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Your Relaxation Starts Here
          </h2>
          <p className="font-body text-base text-primary-foreground/70 mb-10 max-w-lg mx-auto leading-relaxed">
            Come take a break with us. Our highly trained team of professionals are here to provide you with a complete experience of personal well-being.
          </p>
          <BookCTA text="Book Your Appointment Now" variant="cta" size="xl" />
        </div>
      </section>

      {/* ===== 9. REINFORCEMENT — New Service + Mailing List ===== */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          {/* Microblading highlight */}
          <div className="bg-secondary/10 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 mb-16">
            <div className="flex-1">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-secondary mb-2">Big News</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">We Now Offer Microblading!</h2>
              <p className="font-body text-base text-muted-foreground mb-6 leading-relaxed">
                Enhance your natural beauty with our new microblading service. Achieve perfectly shaped, fuller-looking brows that last.
              </p>
              <BookCTA text="Book Microblading" variant="cta" size="lg" />
            </div>
            <div className="flex-shrink-0 w-full md:w-80">
              <img src={microbladingImg} alt="Microblading service" className="rounded-xl shadow-lg w-full object-cover aspect-[3/2]" />
            </div>
          </div>
          {/* Mailing list */}
          <div className="bg-spa-warm rounded-2xl p-8 md:p-12 text-center max-w-xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">Join Our Mailing List</h3>
            <p className="font-body text-base text-muted-foreground mb-6">
              Sign up to hear from us about specials, sales, and events.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 h-12 px-4 rounded-md border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" size="lg" type="submit">Sign Up</Button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== 10. FINAL CTA ===== */}
      <section className="section-padding bg-spa-dark">
        <div className="container-spa text-center max-w-3xl mx-auto">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
            Award-Winning Hydro Spa &amp; Salon
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Waiting.<br />Start Relaxing.
          </h2>
          <p className="font-body text-base text-white/70 mb-10 max-w-lg mx-auto leading-relaxed">
            Studio 21 Salon and Spa — located in the historic downtown Ashland area. Your world-class spa experience is one click away.
          </p>
          <BookCTA text="Book Your Appointment Now" variant="hero" size="xl" />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
