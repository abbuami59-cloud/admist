"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { AdSenseUnit } from "./AdSenseUnit";
import { HistatsCounter } from "./HistatsCounter";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

  // Auto-close desktop sidebar on smaller screens or if window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Just let media queries handle mobile
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    // If mobile (inner width < 768px), toggle mobile sidebar
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setSidebarOpen(true);
    } else {
      // Toggle desktop sidebar
      setDesktopSidebarOpen(!desktopSidebarOpen);
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] transition-colors duration-200">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        isDesktopOpen={desktopSidebarOpen}
        onDesktopClose={() => setDesktopSidebarOpen(false)}
      />
      
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${desktopSidebarOpen ? 'md:ml-72' : 'md:ml-0'}`}>
        <Header onMenuClick={handleMenuClick} isDesktopSidebarOpen={desktopSidebarOpen} />
        
        <main className="flex-1 p-2.5 sm:p-4 md:p-8 max-w-6xl mx-auto w-full pb-10">
          <AdSenseUnit className="mb-6 !my-2" />
          {children}
          <AdSenseUnit className="mt-8 !my-4" />
        </main>

        {/* Footer section for tracking code */}
        <HistatsCounter />
      </div>
    </div>
  );
}
