"use client";

import { useEffect, useState } from "react";
import { Menu, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import InstallAppButton from "./InstallAppButton";

export function Header({ onMenuClick, isDesktopSidebarOpen = true }: { onMenuClick: () => void, isDesktopSidebarOpen?: boolean }) {
  const [sloganText, setSloganText] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const slogan = "সকল বিশ্ববিদ্যালয়ের ভর্তির সময়সূচী ও তথ্য";
    let i = 0;
    const typeTimer = setInterval(() => {
      setSloganText(slogan.substring(0, i + 1));
      i++;
      if (i > slogan.length) clearInterval(typeTimer);
    }, 100);
    return () => clearInterval(typeTimer);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <header className="sticky top-0 z-30 bg-white/85 dark:bg-[#18181b]/85 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 px-2.5 sm:px-4 md:px-8 flex items-center justify-between gap-2 md:gap-4 h-20">
      {/* Left: Animated 3-Line Menu Button */}
      <div className="flex items-center shrink-0">
        <div className="relative flex items-center">
          {/* Glowing Color Emission Aura */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-indigo-500 opacity-75 blur-md animate-color-emission pointer-events-none" />

          <button 
            onClick={onMenuClick}
            aria-label="মেন্যু খুলুন"
            className="relative flex items-center justify-center p-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-950 text-white font-bold text-xs shadow-lg border border-white/20 active:scale-95 hover:scale-105 transition-all overflow-hidden cursor-pointer"
          >
            {/* 3 Color Changing & Glowing Lines */}
            <div className="flex flex-col gap-1.5 w-5 items-center justify-center">
              <span className="w-full h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 animate-menu-lines block shadow-[0_0_8px_#38bdf8]" />
              <span className="w-full h-0.5 rounded-full bg-gradient-to-r from-emerald-400 via-indigo-400 to-pink-400 animate-menu-lines block shadow-[0_0_8px_#10b981]" style={{ animationDelay: "0.5s" }} />
              <span className="w-full h-0.5 rounded-full bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-400 animate-menu-lines block shadow-[0_0_8px_#f43f5e]" style={{ animationDelay: "1s" }} />
            </div>
          </button>
        </div>
      </div>

      {/* Center on Mobile / Left on Desktop: Title & Typing Slogan */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center min-w-0 text-center md:text-left px-1 md:pl-2">
        <div className={`flex flex-col items-center md:items-start justify-center group mb-0.5 ${isDesktopSidebarOpen ? 'md:hidden' : 'md:flex'}`}>
          <Link href="/" className="flex items-center justify-center md:justify-start group">
            <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent truncate tracking-tight text-center md:text-left">
              Admission Hub
            </span>
          </Link>
          
          <a 
            href="https://admission.talukdaracademy.com.bd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[9px] sm:text-[10px] font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 tracking-wider hover:underline mt-0.5 text-center md:text-left hidden sm:block"
          >
            admission.talukdaracademy.com.bd
          </a>
        </div>
        <p className={`text-xs sm:text-sm md:text-lg font-medium text-zinc-600 dark:text-zinc-400 flex items-center justify-center md:justify-start truncate max-w-full ${isDesktopSidebarOpen ? 'md:mt-0' : 'md:hidden lg:flex lg:mt-0'}`}>
          <span className="truncate">{sloganText}</span>
          <span className="animate-pulse inline-block w-1.5 h-3.5 md:h-4 bg-primary-500 ml-1 shrink-0"></span>
        </p>
      </div>

      {/* Right Side Header Controls: Install App Button + Desktop Theme Toggle */}
      <div className="flex items-center justify-end gap-2 shrink-0">
        <InstallAppButton />

        <div className="hidden md:flex items-center">
          <ThemeToggle 
            className="p-2.5 bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-white/10 rounded-xl transition-colors focus:outline-none cursor-pointer" 
            iconSize={20} 
          />
        </div>
      </div>
    </header>
  );
}
