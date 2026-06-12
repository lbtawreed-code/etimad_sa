import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Download } from "lucide-react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  // --- YOUR PWA LOGIC START ---
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) return;
    setShowInstall(true);

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) {
<<<<<<< HEAD
      alert(
        'To install the app:\n\nChrome: menu â‹® â†’ Cast, save, and share â†’ Install page\n\niPhone: Share â†’ Add to Home Screen'
      );
=======
      alert('To install the app:\n\nChrome: menu ⋮ → Cast, save, and share → Install page\n\niPhone: Share → Add to Home Screen');
>>>>>>> f58725cce2099a452c3287d1cd867c6cd17c0e84
      return;
    }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowInstall(false);
  };
  // --- YOUR PWA LOGIC END ---

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* --- PWA BUTTON --- */}
        {showInstall && (
          <button
            onClick={installApp}
<<<<<<< Updated upstream
            className="fixed bottom-5 right-5 z-[9999] flex items-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-glow active:scale-95 transition-all hover:opacity-90"
=======
            className="fixed bottom-5 right-5 z-[9999] flex items-center gap-2 rounded-full gradient-primary text-primary-foreground shadow-glow px-5 py-3 text-sm font-bold text-white shadow-lg active:scale-95"
>>>>>>> Stashed changes
          >
            <Download size={18} />
            Download App
          </button>
        )}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
