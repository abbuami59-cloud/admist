"use client";

import React, { useState, useEffect } from "react";

export default function InstallAppButton() {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if the user is already using the installed PWA/App
    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    const checkStandalone = () => {
      const isApp = mediaQuery.matches || Boolean((window.navigator as any).standalone);
      setIsStandalone(isApp);
    };

    checkStandalone();
    mediaQuery.addEventListener("change", checkStandalone);
    return () => mediaQuery.removeEventListener("change", checkStandalone);
  }, []);

  const handleInstallClick = () => {
    window.open(
      "https://all.talukdaracademy.com.bd/apps/admission-hub",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Hide the button if the user is already browsing from inside the installed app
  if (isStandalone) {
    return null;
  }

  return (
    <button
      onClick={handleInstallClick}
      className="flex flex-col items-center justify-center px-2 py-1 sm:px-2.5 sm:py-1.5 bg-[#1e293b] hover:bg-[#0f172a] rounded-xl text-white transition-all transform hover:scale-105 active:scale-95 shadow-md flex-shrink-0 border border-slate-700 cursor-pointer"
      aria-label="Get it as App - Click Here"
      title="App ডাউনলোড করুন"
    >
      {/* 1st Row: Google Play Icon */}
      <svg
        className="w-4 h-4 md:w-5 md:h-5 mb-0.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 1.9C2.2 2.3 2 2.8 2 3.3v17.4c0 .5.2 1 .5 1.4l.1.1 9.6-9.6v-.4L2.6 2.5l-.1-.6z"
          fill="#00E676"
        />
        <path
          d="M16.1 15.7l-3.9-3.9v-.4l3.9-3.9.1.1 4.6 2.6c1.3.8 1.3 2 0 2.7l-4.6 2.6-.1.2z"
          fill="#FFC107"
        />
        <path
          d="M16.3 15.7L12.2 11.7 2.5 21.5c.4.5 1.1.5 1.9.1l11.9-6.7v-.1z"
          fill="#FF3D00"
        />
        <path
          d="M16.3 8.3L4.4 1.5C3.6 1.1 2.9 1.1 2.5 1.6L12.2 11.3l4.1-3z"
          fill="#29B6F6"
        />
      </svg>

      {/* 2nd Row: "Get it as App" */}
      <span className="text-[7.5px] md:text-[8.5px] text-slate-300 font-medium leading-none tracking-wide whitespace-nowrap">
        Get it as App
      </span>

      {/* 3rd Row: "Click Here" */}
      <span className="text-[9.5px] md:text-[11px] font-bold tracking-tight text-white leading-tight whitespace-nowrap mt-0.5">
        Click Here
      </span>
    </button>
  );
}
