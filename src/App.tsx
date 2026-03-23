import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>Studio 21 Salon and Spa | Relax. Refresh. Re-imagine.</title>
          <meta name="description" content="Studio 21 Salon and Spa is an award-winning hydro spa and salon in the historic downtown Ashland area. Book manicures, pedicures, massage, facials, skin treatments, and microblading since 1996." />
          <meta property="og:title" content="Studio 21 Salon and Spa | Relax. Refresh. Re-imagine." />
          <meta property="og:description" content="Award-winning hydro spa and salon in the historic downtown Ashland area. Book your appointment today." />
          <meta property="og:type" content="website" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
