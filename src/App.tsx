import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Experiences from "./pages/Experiences";
import ExperienceDetail from "./pages/ExperienceDetail";
import Booking from "./pages/Booking";
import Artisans from "./pages/Artisans";
import Story from "./pages/Story";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import ArtisanPortal from "./pages/ArtisanPortal";
import NotFound from "./pages/NotFound";
import { LocationProvider } from "./context/LocationContext";
import { LocationPrompt } from "./components/craft/LocationPrompt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LocationProvider>
          <LocationPrompt />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
          <Route path="/booking/:slug" element={<Booking />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/story" element={<Story />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/artisan-portal" element={<ArtisanPortal />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </LocationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
