import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop: fixed right-side button */}
      <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
          <Button
            variant="cta"
            className="rounded-l-xl rounded-r-none py-8 px-5 flex flex-col gap-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-l border-t border-b border-white/10 hover:px-6 transition-all duration-300"
          >
            <Calendar size={22} />
            <span className="text-[11px] font-bold tracking-[0.2em]" style={{ writingMode: 'vertical-rl' }}>
              BOOK NOW
            </span>
          </Button>
        </Link>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-cta-dark/95 backdrop-blur-sm p-3 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]">
        <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)} className="block">
          <Button variant="hero" size="lg" className="w-full bg-white/10 hover:bg-white/20 border border-white/20">
            <Calendar size={18} />
            Book Your Appointment
          </Button>
        </Link>
      </div>
    </>
  );
};

export default StickyCTA;
