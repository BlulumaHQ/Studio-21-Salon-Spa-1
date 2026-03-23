import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import massageImg from "@/assets/service-massage.jpg";
import manicureImg from "@/assets/service-manicure.jpg";
import pedicureImg from "@/assets/service-pedicure.jpg";
import facialImg from "@/assets/service-facial.jpg";
import saltscrubImg from "@/assets/service-saltscrub.jpg";
import microbladingImg from "@/assets/service-microblading.jpg";
import heroImg from "@/assets/hero-spa.jpg";

const allServices = [
  { name: "Massage", img: massageImg, desc: "Therapeutic and relaxation massage sessions tailored to relieve tension and restore balance. Our skilled therapists use a variety of techniques for your complete well-being." },
  { name: "Facials", img: facialImg, desc: "Professional facial treatments designed to cleanse, exfoliate, and nourish your skin. Customized to your skin type for a radiant, healthy glow." },
  { name: "Manicures", img: manicureImg, desc: "Expert nail care in a serene spa setting. From classic manicures to gel and specialty treatments, your hands deserve the best." },
  { name: "Pedicures", img: pedicureImg, desc: "Luxurious pedicure treatments to pamper your feet. Relax while we shape, polish, and rejuvenate with premium products." },
  { name: "Skin Treatments", img: saltscrubImg, desc: "Advanced skin treatments including salt scrubs and body wraps. Exfoliate, hydrate, and revitalize your skin from head to toe." },
  { name: "Microblading", img: microbladingImg, desc: "Enhance your natural beauty with semi-permanent microblading. Achieve perfectly shaped, fuller-looking brows that frame your face beautifully.", isNew: true },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Studio 21 spa services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-spa-dark/70" />
        </div>
        <div className="relative container-spa text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto">
            From massage to salt scrubs, our services are a great way to take a step back from the bustle of everyday life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <div key={service.name} className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {service.isNew && (
                    <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground font-body text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{service.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                  <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)} className="font-body text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1 mt-4">
                    Book Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-spa-dark text-white text-center">
        <div className="container-spa max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Relax?</h2>
          <p className="font-body text-base text-white/70 mb-8">
            Book a time at our tranquil facility. Our highly trained team is here to provide you with a complete experience of personal well-being.
          </p>
          <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="hero" size="xl">Book Online <ArrowRight size={16} /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
