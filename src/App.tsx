import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Regions from "./pages/Regions";
import RegionDetail from "./pages/RegionDetail";
import CityDetail from "./pages/CityDetail";
import ShelterDetail from "./pages/ShelterDetail";
import NearestShelter from "./pages/NearestShelter";
import Search from "./pages/Search";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/regions/:slug" element={<RegionDetail />} />
          <Route path="/city/:slug" element={<CityDetail />} />
          <Route path="/shelter/:id" element={<ShelterDetail />} />
          <Route path="/nearest" element={<NearestShelter />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
