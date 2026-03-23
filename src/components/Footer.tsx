import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-spa-dark text-white/80">
      <div className="container-spa section-padding">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl font-bold text-white mb-4">Studio 21</h3>
            <p className="font-body text-sm leading-relaxed text-white/60">
              Award-winning salon and spa in the historic downtown Ashland area. Serving clients since 1996.
            </p>
          </div>

          {/* Column 2: Spacer */}
          <div className="hidden md:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-4">Navigation</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/shop" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/contact-us" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>Massage</li>
              <li>Facials</li>
              <li>Manicures &amp; Pedicures</li>
              <li>Skin Treatments</li>
              <li>Microblading</li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-4">Visit Us</h4>
            <p className="font-body text-sm leading-relaxed">
              Historic Downtown Ashland Area
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-spa py-5 text-center">
          <p className="font-body text-xs text-white/40">
            © 2026 Studio 21 Salon and Spa. All rights reserved. | Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
