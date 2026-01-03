import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia?.("(display-mode: standalone)")?.matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(!!standalone);

    const handleBeforeInstallPrompt = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      (window as any).__pwaDeferredPrompt = e;
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsStandalone(true);
      (window as any).__pwaDeferredPrompt = null;
    };

    const existing = (window as any).__pwaDeferredPrompt;
    if (existing) setDeferredPrompt(existing);

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    await deferredPrompt.userChoice;
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    (window as any).__pwaDeferredPrompt = null;
  };

  if (isStandalone) return null;

  const isEnabled = !!deferredPrompt;

  return (
    <Button
      className="h-9 w-9 p-0 sm:w-auto sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 border-none shadow-md"
      onClick={handleInstallClick}
      disabled={!isEnabled}
      title={isEnabled ? "Install this app" : "Install will be available after the page is fully ready (try refresh once)"}
    >
      <Download className="w-4 h-4 sm:mr-2" />
      <span className="hidden sm:inline">Install App</span>
    </Button>
  );
};
