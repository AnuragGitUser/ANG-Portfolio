import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import TargetCursor from "./components/TargetCursor";
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div className="min-h-screen relative">
                  {/* Background Ripple Effect */}
                  <div className="fixed inset-0 z-0">
                    <BackgroundRippleEffect rows={12} cols={40} cellSize={48} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <TargetCursor spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />
                    <Header />
                    <main>
                      <HeroSection />
                      <AboutSection />
                      <SkillsSection />
                      <ProjectsSection />
                      <ContactSection />
                    </main>
                  </div>
                </div>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;