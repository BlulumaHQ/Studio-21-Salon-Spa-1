import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop: fixed right-side button */}
      <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
          <Button
            variant="cta"
            className="rounded-l-lg rounded-r-none py-6 px-4 flex flex-col gap-2 shadow-2xl"
          >
            <Calendar size={20} />
            <span className="text-[10px] tracking-widest writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
              BOOK NOW
            </span>
          </Button>
        </Link>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cta-dark/95 backdrop-blur-sm p-3 shadow-2xl">
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
