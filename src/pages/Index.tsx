import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Award, Clock, Heart, Star, ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-spa.jpg";
import interiorImg from "@/assets/spa-interior.jpg";
import massageImg from "@/assets/service-massage.jpg";
import manicureImg from "@/assets/service-manicure.jpg";
import facialImg from "@/assets/service-facial.jpg";
import productsImg from "@/assets/spa-products.jpg";

const services = [
  { name: "Massage", img: massageImg, desc: "Therapeutic and relaxation massage tailored to your needs." },
  { name: "Facials", img: facialImg, desc: "Revitalize your skin with our professional facial treatments." },
  { name: "Manicures", img: manicureImg, desc: "Perfectly polished nails in a relaxing spa environment." },
];

const trustBadges = [
  { icon: Award, label: "Best in Tri-State" },
  { icon: Star, label: "Reader's Choice Awards" },
  { icon: Award, label: "Best in Ashland" },
  { icon: Sparkles, label: "Global Salon Awards Finalist" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Studio 21 Salon and Spa treatment room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-spa-dark/80 via-spa-dark/50 to-transparent" />
        </div>
        <div className="relative container-spa py-20">
          <div className="max-w-2xl">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 animate-fade-in-up">
              Award-Winning Salon &amp; Spa Since 1996
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6" style={{ animationDelay: '0.1s' }}>
              Relax. Refresh.<br />Re-imagine.
            </h1>
            <p className="font-body text-lg text-white/80 mb-10 max-w-lg leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Book a time at our tranquil facility for manicures, pedicures, massage, facials, and skin treatments.
            </p>
            <div className="flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="hero" size="xl">Book Online</Button>
              </Link>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="ctaOutline" size="xl" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-spa-warm">
        <div className="container-spa py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3 justify-center">
                <badge.icon size={22} className="text-secondary flex-shrink-0" />
                <span className="font-body text-sm font-medium text-foreground/70">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-body text-sm tracking-[0.2em] uppercase text-secondary mb-3">Your Escape Awaits</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Step Into Tranquility
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                From the moment you walk in the door, our focus is on your complete relaxation. From massage to salt scrubs, our services are a great way to take a step back from the bustle of everyday life.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                Come take a break with us.
              </p>
              <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="cta" size="lg">
                  Book Your Experience <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img src={interiorImg} alt="Studio 21 spa interior lounge" className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-lg p-6 shadow-xl hidden lg:block">
                <div className="flex items-center gap-3">
                  <Clock size={24} className="text-primary-foreground" />
                  <div>
                    <p className="font-heading text-2xl font-bold text-primary-foreground">29+</p>
                    <p className="font-body text-xs text-primary-foreground/70 uppercase tracking-wider">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-spa-warm">
        <div className="container-spa">
          <div className="text-center mb-14">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-secondary mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
              Our highly trained team of professionals are here to provide you with a complete experience of personal well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-card-foreground mb-2">{service.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{service.desc}</p>
                  <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="font-body text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="cta" size="lg">View All Services <ArrowRight size={16} /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-secondary/10">
        <div className="container-spa text-center max-w-3xl mx-auto">
          <Heart size={32} className="text-secondary mx-auto mb-6" />
          <blockquote className="font-heading text-2xl md:text-3xl italic text-foreground mb-6 leading-relaxed">
            "Great experience! Definitely would recommend!"
          </blockquote>
          <p className="font-body text-base text-muted-foreground">— Brianna</p>
        </div>
      </section>

      {/* New Service Highlight */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="bg-primary/15 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="font-body text-sm tracking-[0.2em] uppercase text-secondary mb-2">Big News</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">We Now Offer Microblading!</h2>
              <p className="font-body text-base text-muted-foreground mb-6">
                Enhance your natural beauty with our new microblading service. Achieve perfectly shaped, fuller-looking brows that last.
              </p>
              <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="cta" size="lg">Book Microblading <ArrowRight size={16} /></Button>
              </Link>
            </div>
            <div className="flex-shrink-0 w-full md:w-80">
              <img src={productsImg} alt="High quality spa products" className="rounded-xl shadow-lg w-full object-cover aspect-[3/2]" />
            </div>
          </div>
        </div>
      </section>

      {/* About / Credibility */}
      <section className="section-padding bg-spa-dark text-white">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">A Legacy of Excellence</h2>
            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Studio 21 Salon and Spa is located in the historic downtown Ashland area. Since opening our doors in 1996, we have grown from a small two chair salon to an award-winning hydro spa and salon. Awards include "Best in Tri-State", "Best in Ashland", "Reader's Choice Awards", and 2016's Northeast Kentucky Small Business of the Year. We have also been named a finalist in the "Global Salon Awards" given yearly by the UCLA Anderson School of Business.
            </p>
            <p className="font-body text-base text-white/70 leading-relaxed mb-8">
              Our highly trained team of professionals are here to provide you with a complete experience of personal well-being. We strive to build a trusting relationship with our clients, and hope you will enjoy our small town friendliness along with our world-class spa treatments and superior service.
            </p>
            <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="hero" size="xl">Book Your Visit Today</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mailing List */}
      <section className="section-padding bg-spa-warm">
        <div className="container-spa text-center max-w-xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">Join Our Mailing List</h2>
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
      </section>
    </Layout>
  );
};

export default Index;
