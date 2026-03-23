import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { MapPin, Clock, Heart } from "lucide-react";
import interiorImg from "@/assets/spa-interior.jpg";

const ContactUs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={interiorImg} alt="Studio 21 interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-spa-dark/70" />
        </div>
        <div className="relative container-spa text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto">
            We'd love to hear from you. Reach out to book your appointment or ask us anything.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Book Online</h2>
              <p className="font-body text-base text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible to schedule your appointment.
              </p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-md border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-md border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                  <input type="email" className="w-full h-12 px-4 rounded-md border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Service Interested In</label>
                  <select className="w-full h-12 px-4 rounded-md border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select a service</option>
                    <option>Massage</option>
                    <option>Facials</option>
                    <option>Manicures</option>
                    <option>Pedicures</option>
                    <option>Skin Treatments</option>
                    <option>Microblading</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                </div>
                <Button variant="cta" size="lg" type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Location</h3>
                    <p className="font-body text-sm text-muted-foreground">Historic Downtown Ashland Area</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={22} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">About</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Serving the Ashland community since 1996. Award-winning hydro spa and salon with a highly trained team of professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart size={22} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Our Promise</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      We strive to build a trusting relationship with our clients, and hope you will enjoy our small town friendliness along with our world-class spa treatments and superior service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="mt-10 bg-spa-warm rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Awards &amp; Recognition</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li>• Best in Tri-State</li>
                  <li>• Best in Ashland</li>
                  <li>• Reader's Choice Awards</li>
                  <li>• 2016 Northeast Kentucky Small Business of the Year</li>
                  <li>• Global Salon Awards Finalist (UCLA Anderson School of Business)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
