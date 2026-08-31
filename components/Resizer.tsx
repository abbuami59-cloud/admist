"use client";
import React, { useState, useRef } from "react";
import { Upload, Download, RefreshCw, Scissors } from "lucide-react";

export default function Resizer() {
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [resizedSrc, setResizedSrc] = useState<string | null>(null);
  const [preset, setPreset] = useState<"photo" | "signature" | "custom">("photo");
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(300);
  const [maxKb, setMaxKb] = useState<number>(100);
  const [fileSize, setFileSize] = useState<number | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Switch between presets (Photo: 300x300, Signature: 300x80)
  const handlePresetChange = (type: "photo" | "signature" | "custom") => {
    setPreset(type);
    if (type === "photo") {
      setWidth(300);
      setHeight(300);
      setMaxKb(100);
    } else if (type === "signature") {
      setWidth(300);
      setHeight(80);
      setMaxKb(60);
    }
  };

  // Handle file selection & load to FileReader
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target?.result as string);
        setResizedSrc(null);
        setFileSize(null);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Core Resize & Compression Logic using HTML Canvas
  const processImage = () => {
    if (!imageSrc) return;
    setProcessing(true);

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        setProcessing(false);
        return;
      }

      // 1. Fill canvas with a solid white background (avoids black PNG transparency)
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      // 2. Aspect Ratio Covering / Centering
      const imgRatio = img.width / img.height;
      const targetRatio = width / height;
      let renderW = width;
      let renderH = height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > targetRatio) {
        renderW = height * imgRatio;
        offsetX = (width - renderW) / 2;
      } else {
        renderH = width / imgRatio;
        offsetY = (height - renderH) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, renderW, renderH);

      // 3. Iterative Compression to fit within Max KB
      let quality = 0.95;
      let dataUrl = canvas.toDataURL("image/jpeg", quality);

      const calculateBytes = (str: string) =>
        Math.round((str.length * 3) / 4 - (str.endsWith("==") ? 2 : str.endsWith("=") ? 1 : 0));

      while (calculateBytes(dataUrl) > maxKb * 1024 && quality > 0.1) {
        quality -= 0.05;
        dataUrl = canvas.toDataURL("image/jpeg", quality);
      }

      const finalSizeKb = Math.round(calculateBytes(dataUrl) / 1024);
      setResizedSrc(dataUrl);
      setFileSize(finalSizeKb);
      setProcessing(false);
    };
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-in fade-in">
      <div className="mb-6 flex items-center gap-3 w-full">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl">
          <Scissors size={24} />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Photo & Signature Resizer</h2>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            বিশ্ববিদ্যালয় ভর্তির জন্য নির্দিষ্ট ৩০০×৩০০ ছবি এবং ৩০০×৮০ স্বাক্ষর তৈরি করুন
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-5 sm:p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-xl shadow-slate-200/40 dark:shadow-none w-full flex flex-col gap-6 md:gap-8">
        
        {/* 1. Preset Selection */}
        <div>
          <h3 className="font-bold text-sm text-gray-700 dark:text-gray-200 mb-3">১. প্রিসেট নির্বাচন করুন</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handlePresetChange("photo")}
              className={`p-4 rounded-2xl border text-center font-bold text-sm transition-all ${
                preset === "photo"
                  ? "bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-blue-600 dark:text-blue-300 ring-1 ring-blue-500"
                  : "border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-300"
              }`}
            >
              ছবি (Photo)
              <span className="block text-[11px] font-medium opacity-70 mt-1">300×300 px (Max 100KB)</span>
            </button>

            <button
              onClick={() => handlePresetChange("signature")}
              className={`p-4 rounded-2xl border text-center font-bold text-sm transition-all ${
                preset === "signature"
                  ? "bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-blue-600 dark:text-blue-300 ring-1 ring-blue-500"
                  : "border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-300"
              }`}
            >
              স্বাক্ষর (Signature)
              <span className="block text-[11px] font-medium opacity-70 mt-1">300×80 px (Max 60KB)</span>
            </button>
          </div>
        </div>

        {/* 2. Upload Area */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm text-gray-700 dark:text-gray-200">২. ছবি আপলোড</h3>
            {imageSrc && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                অন্য ছবি দিন
              </button>
            )}
          </div>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          {!imageSrc ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-blue-300 dark:border-blue-800/60 rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition h-48 bg-blue-50/20 dark:bg-transparent"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full mb-3">
                <Upload size={24} />
              </div>
              <h4 className="font-bold text-sm text-gray-700 dark:text-gray-200">ছবি নির্বাচন করুন</h4>
              <p className="text-[11px] text-gray-500 mt-1">ক্লিক করুন অথবা ড্র্যাগ অ্যান্ড ড্রপ করুন (JPG, PNG)</p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-4 bg-gray-50 dark:bg-zinc-800/40 rounded-2xl border border-gray-100 dark:border-zinc-800/50">
              <div className="text-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">মূল ছবি</span>
                <div className="border border-gray-200 dark:border-zinc-700 rounded-xl p-1 bg-white dark:bg-zinc-900 h-32 w-32 flex items-center justify-center overflow-hidden">
                  <img src={imageSrc} alt="Original" className="max-h-full max-w-full object-contain rounded-lg" />
                </div>
              </div>

              {resizedSrc && (
                <div className="text-center">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider block mb-2">
                    রিসাইজড ({fileSize} KB)
                  </span>
                  <div className="border-2 border-emerald-500 rounded-xl p-1 bg-white dark:bg-zinc-900 h-32 w-32 flex items-center justify-center overflow-hidden relative shadow-sm shadow-emerald-100 dark:shadow-none">
                    <img src={resizedSrc} alt="Resized" className="max-h-full max-w-full object-contain rounded-lg" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 3. Dimensions and Size Settings */}
        <div>
          <h3 className="font-bold text-sm text-gray-700 dark:text-gray-200 mb-3">৩. সাইজ কাস্টমাইজেশন</h3>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 block mb-1.5 uppercase tracking-wide">প্রস্থ (px)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => {
                  setWidth(Number(e.target.value));
                  setPreset("custom");
                }}
                className="w-full px-3 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-center"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 block mb-1.5 uppercase tracking-wide">উচ্চতা (px)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => {
                  setHeight(Number(e.target.value));
                  setPreset("custom");
                }}
                className="w-full px-3 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-center"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 block mb-1.5 uppercase tracking-wide">সাইজ (KB)</label>
              <input
                type="number"
                value={maxKb}
                onChange={(e) => setMaxKb(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-center"
              />
            </div>
          </div>
        </div>

        {/* 4. Action Button */}
        <div className="pt-2">
          <div className="flex flex-col gap-3">
            <button
              onClick={processImage}
              disabled={processing || !imageSrc}
              className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] ${
                !imageSrc 
                  ? 'bg-gray-100 dark:bg-zinc-800 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {processing && <RefreshCw className="animate-spin" size={16} />}
              রিসাইজ ও সাইজ অ্যাডজাস্ট করুন
            </button>

            {resizedSrc && (
              <a
                href={resizedSrc}
                download={`${preset}_${width}x${height}.jpg`}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
              >
                <Download size={18} /> ছবি ডাউনলোড করুন
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
