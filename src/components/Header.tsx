import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Shop", path: "/shop" },
  { label: "Contact Us", path: "/contact-us" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container-spa flex items-center justify-between h-20">
        <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-foreground">
            Studio 21
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => window.scrollTo(0, 0)}
              className={`font-body text-sm tracking-wide uppercase transition-colors duration-300 hover:text-secondary ${
                location.pathname === link.path ? "text-secondary font-semibold" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="cta" size="lg">Book Online</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container-spa py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                className={`font-body text-base tracking-wide uppercase py-2 transition-colors ${
                  location.pathname === link.path ? "text-secondary font-semibold" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact-us" onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}>
              <Button variant="cta" size="lg" className="w-full mt-2">Book Online</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
