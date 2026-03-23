import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop: fixed right-side tab */}
      <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <Link
          to="/contact-us"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-3 bg-cta-dark text-white px-4 py-6 rounded-l-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:pr-6 transition-all duration-300 border-l border-t border-b border-white/10"
          style={{ writingMode: 'vertical-rl' }}
        >
          <Calendar size={20} className="rotate-90" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase">
            Book Now
          </span>
        </Link>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-cta-dark/95 backdrop-blur-sm p-3 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]">
        <Link
          to="/contact-us"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm tracking-wide transition-colors"
        >
          <Calendar size={18} />
          Book Your Appointment
        </Link>
      </div>
    </>
  );
};

export default StickyCTA;
