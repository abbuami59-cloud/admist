"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { AdSenseUnit } from "./AdSenseUnit";
import { HistatsCounter } from "./HistatsCounter";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] transition-colors duration-200">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col md:ml-72 min-w-0 transition-all duration-300">
        {/* Temporarily Disabled News Ticker
        <div className="group bg-indigo-900 text-indigo-50 py-1.5 overflow-hidden flex items-center border-b border-indigo-950 shrink-0 shadow-inner z-30 relative">
          <div className="min-w-max shrink-0 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] hover:[animation-play-state:paused] font-medium text-xs sm:text-sm tracking-wide flex gap-4 items-center">
            <span>
              🎁 তালুকদার একাডেমীর এই ম্যাজিক ওয়েবসাইটগুলো দেখলে চমকে যাবেন! সবগুলো দেখতে 👉{" "}
              <a
                href="https://all.talukdaracademy.com.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline font-bold transition-colors"
              >
                এখানে ক্লিক করুন
              </a>
            </span>
          </div>
        </div>
        */}

        <Header onMenuClick={() => setSidebarOpen(true)} />
        
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
