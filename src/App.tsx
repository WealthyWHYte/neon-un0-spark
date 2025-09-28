import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./pages/LoadingScreen";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Docs from "./pages/Docs";
import Legal from "./pages/Legal";
import Game from "./pages/Game";
import Community from "./pages/Community";
import Analytics from "./pages/Analytics";
import Roadmap from "./pages/Roadmap";
import About from "./pages/About";
import Policies from "./pages/Policies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/legal/*" element={<Legal />} />
          <Route path="/game/*" element={<Game />} />
          <Route path="/community/*" element={<Community />} />
          <Route path="/analytics/*" element={<Analytics />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/policies/*" element={<Policies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
