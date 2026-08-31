"use client";

import React, { useState } from 'react';
import { Check, X, RefreshCw, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'eligibility' | 'marks';

const GRADE_OPTIONS = [
  { label: '-', val: '' },
  { label: 'A+ (5)', val: '5' },
  { label: 'A (4)', val: '4' },
  { label: 'A- (3.5)', val: '3.5' },
  { label: 'B (3)', val: '3' },
  { label: 'C (2)', val: '2' },
  { label: 'D (1)', val: '1' },
  { label: 'F (0)', val: '0' },
];

const MAIN_SUBJECT_OPTIONS = [
  { label: 'উচ্চতর গণিত', val: 'hmath' },
  { label: 'জীববিজ্ঞান', val: 'bio' },
];

interface GradeTileProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  isMainSubject?: boolean;
  subjectType?: string;
  onSubjectChange?: (val: string) => void;
  hasError?: boolean;
}

const GradeTile = ({ label, value, onChange, isMainSubject, subjectType, onSubjectChange, hasError }: GradeTileProps) => {
  return (
    <div className={`relative flex flex-col items-center justify-center border rounded-xl p-2 transition-all duration-200 ${isMainSubject ? 'border-emerald-200 bg-emerald-50/30 min-h-[90px]' : 'border-slate-200 bg-white min-h-[76px]'} ${hasError ? 'border-rose-400 ring-1 ring-rose-400' : 'hover:border-slate-400'}`}>
      {isMainSubject ? (
        <div className="flex flex-col items-center w-full mb-1">
          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">মেইন সাবজেক্ট:</span>
          <select
            value={subjectType}
            onChange={(e) => onSubjectChange?.(e.target.value)}
            className="w-full appearance-none bg-white px-1 py-1 rounded text-[10px] font-bold text-emerald-700 text-center cursor-pointer border border-emerald-200 focus:outline-none focus:border-emerald-500 shadow-sm"
          >
            {MAIN_SUBJECT_OPTIONS.map(opt => (
              <option key={opt.val} value={opt.val}>{opt.label}</option>
            ))}
          </select>
        </div>
      ) : (
        <span className="text-xs font-bold text-slate-600 mb-1">{label}</span>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none bg-slate-50 px-2 py-1 rounded-md text-xs font-bold text-center cursor-pointer border focus:outline-none transition-colors ${value === '' ? 'text-slate-400 border-slate-200' : 'text-slate-800 border-slate-300'}`}
      >
        {GRADE_OPTIONS.map(g => (
          <option key={g.label} value={g.val}>{g.label}</option>
        ))}
      </select>
    </div>
  );
};

const ResultRow = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
  <div className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
    <span className="text-sm font-medium text-slate-500">{label}</span>
    <div className="text-right">
      <div className="text-base font-bold text-slate-800">{value}</div>
      {sub && <div className={`text-[10px] font-semibold ${sub.includes("❌") ? 'text-rose-500' : 'text-slate-400'}`}>{sub}</div>}
    </div>
  </div>
);

export default function Calculator() {
  const [tab, setTab] = useState<Tab>('eligibility');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState<any>(null);

  const [ssc, setSsc] = useState({
    bangla: '', english: '', ict: '', social: '', religion: '',
    math: '', physics: '', chemistry: '', mainGpa: ''
  });
  const [sscMainType, setSscMainType] = useState('hmath');

  const [hsc, setHsc] = useState({
    bangla: '', english: '', ict: '', physics: '', chemistry: '', mainGpa: ''
  });
  const [hscMainType, setHscMainType] = useState('hmath');

  const [marks, setMarks] = useState({ ssc: '', hsc: '' });

  const updateSsc = (key: string, val: string) => {
    setSsc(prev => ({ ...prev, [key]: val }));
    setErrors(prev => ({ ...prev, [`ssc_${key}`]: false }));
  };

  const updateHsc = (key: string, val: string) => {
    setHsc(prev => ({ ...prev, [key]: val }));
    setErrors(prev => ({ ...prev, [`hsc_${key}`]: false }));
  };

  const updateMarks = (key: string, val: string) => {
    setMarks(prev => ({ ...prev, [key]: val }));
    setErrors(prev => ({ ...prev, [`mark_${key}`]: false }));
  };

  const resetAll = () => {
    setSsc({ bangla: '', english: '', ict: '', social: '', religion: '', math: '', physics: '', chemistry: '', mainGpa: '' });
    setHsc({ bangla: '', english: '', ict: '', physics: '', chemistry: '', mainGpa: '' });
    setMarks({ ssc: '', hsc: '' });
    setErrors({});
    setShowResult(false);
    setResultData(null);
  };

  const validate = () => {
    let newErrors: Record<string, boolean> = {};
    if (tab === 'eligibility') {
      Object.keys(ssc).forEach(k => { if (!ssc[k as keyof typeof ssc]) newErrors[`ssc_${k}`] = true; });
      Object.keys(hsc).forEach(k => { if (!hsc[k as keyof typeof hsc]) newErrors[`hsc_${k}`] = true; });
    } else {
      const sVal = parseFloat(marks.ssc);
      const hVal = parseFloat(marks.hsc);
      if (!marks.ssc || isNaN(sVal) || sVal < 0 || sVal > 5) newErrors.mark_ssc = true;
      if (!marks.hsc || isNaN(hVal) || hVal < 0 || hVal > 5) newErrors.mark_hsc = true;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculate = () => {
    if (!validate()) return;
    
    if (tab === 'eligibility') {
      const getVal = (v: string) => parseFloat(v) || 0;
      const sscSum = Object.values(ssc).reduce((a, b) => a + getVal(b), 0);
      const sscAvg = sscSum / 9;
      const hscSum = Object.values(hsc).reduce((a, b) => a + getVal(b), 0);
      const hscAvg = hscSum / 6;
      const totalGpa = sscAvg + hscAvg;
      
      const eligible = sscAvg >= 4.00 && hscAvg >= 4.00 && totalGpa >= 8.50;
      
      setResultData({
        type: 'eligibility',
        sscAvg: sscAvg.toFixed(2),
        hscAvg: hscAvg.toFixed(2),
        totalGpa: totalGpa.toFixed(2),
        eligible: eligible,
        reasons: {
          sscLow: sscAvg < 4.00,
          hscLow: hscAvg < 4.00,
          totalLow: totalGpa < 8.50
        }
      });
    } else {
      const sGpa = Math.min(5, Math.max(0, parseFloat(marks.ssc) || 0));
      const hGpa = Math.min(5, Math.max(0, parseFloat(marks.hsc) || 0));
      const sScore = sGpa * 5;
      const hScore = hGpa * 5;
      const totalScore = sScore + hScore;
      
      setResultData({
        type: 'marks',
        sscGpa: sGpa.toFixed(2),
        hscGpa: hGpa.toFixed(2),
        sscScore: sScore.toFixed(2),
        hscScore: hScore.toFixed(2),
        totalScore: totalScore.toFixed(2)
      });
    }
    setShowResult(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
      <div className="bg-white px-6 py-5 border-b border-slate-50 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">কৃষি গুচ্ছ ২০২৫-২৬</h1>
          <p className="text-[11px] text-slate-400 font-semibold tracking-wide uppercase mt-1">ভর্তি যোগ্যতা ক্যালকুলেটর</p>
        </div>
        <button onClick={resetAll} className="p-2 text-slate-400 hover:text-slate-800 transition-colors bg-slate-50 rounded-full hover:bg-slate-100">
          <RefreshCw size={18} />
        </button>
      </div>

      <div className="px-6 pt-4 pb-0">
        <div className="p-1 bg-slate-100/70 rounded-xl flex relative">
          {tab === 'eligibility' && (
            <motion.div layoutId="active-tab" className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm" />
          )}
          {tab === 'marks' && (
            <motion.div layoutId="active-tab" className="absolute right-1 top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm" />
          )}
          <button
            onClick={() => { setTab('eligibility'); setErrors({}); }}
            className={`relative z-10 flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${tab === 'eligibility' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            যোগ্যতা যাচাই
          </button>
          <button
            onClick={() => { setTab('marks'); setErrors({}); }}
            className={`relative z-10 flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${tab === 'marks' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            জিপিএ মার্ক
          </button>
        </div>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {tab === 'eligibility' ? (
            <motion.div
              key="eligibility"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {Object.keys(errors).length > 0 && (
                <div className="flex items-center text-rose-600 bg-rose-50 p-3 rounded-xl text-xs font-bold">
                  <AlertCircle size={16} className="mr-2" /> সবগুলোর ঘর পূরণ করা বাধ্যতামূলক
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-1.5 h-4 bg-emerald-500 rounded-full"></div>
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">SSC</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <GradeTile label="বাংলা" value={ssc.bangla} onChange={v => updateSsc('bangla', v)} hasError={errors.ssc_bangla} />
                  <GradeTile label="ইংরেজি" value={ssc.english} onChange={v => updateSsc('english', v)} hasError={errors.ssc_english} />
                  <GradeTile label="আইসিটি" value={ssc.ict} onChange={v => updateSsc('ict', v)} hasError={errors.ssc_ict} />
                  <GradeTile label="সমাজ" value={ssc.social} onChange={v => updateSsc('social', v)} hasError={errors.ssc_social} />
                  <GradeTile label="ধর্ম" value={ssc.religion} onChange={v => updateSsc('religion', v)} hasError={errors.ssc_religion} />
                  <GradeTile label="গণিত" value={ssc.math} onChange={v => updateSsc('math', v)} hasError={errors.ssc_math} />
                  <GradeTile label="পদার্থ" value={ssc.physics} onChange={v => updateSsc('physics', v)} hasError={errors.ssc_physics} />
                  <GradeTile label="রসায়ন" value={ssc.chemistry} onChange={v => updateSsc('chemistry', v)} hasError={errors.ssc_chemistry} />
                  <GradeTile isMainSubject value={ssc.mainGpa} onChange={v => updateSsc('mainGpa', v)} subjectType={sscMainType} onSubjectChange={setSscMainType} hasError={errors.ssc_mainGpa} />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-1.5 h-4 bg-blue-500 rounded-full"></div>
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">HSC</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <GradeTile label="বাংলা" value={hsc.bangla} onChange={v => updateHsc('bangla', v)} hasError={errors.hsc_bangla} />
                  <GradeTile label="ইংরেজি" value={hsc.english} onChange={v => updateHsc('english', v)} hasError={errors.hsc_english} />
                  <GradeTile label="আইসিটি" value={hsc.ict} onChange={v => updateHsc('ict', v)} hasError={errors.hsc_ict} />
                  <GradeTile label="পদার্থ" value={hsc.physics} onChange={v => updateHsc('physics', v)} hasError={errors.hsc_physics} />
                  <GradeTile label="রসায়ন" value={hsc.chemistry} onChange={v => updateHsc('chemistry', v)} hasError={errors.hsc_chemistry} />
                  <GradeTile isMainSubject value={hsc.mainGpa} onChange={v => updateHsc('mainGpa', v)} subjectType={hscMainType} onSubjectChange={setHscMainType} hasError={errors.hsc_mainGpa} />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="marks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-5 py-2"
            >
              {Object.keys(errors).length > 0 && (
                <div className="flex items-center text-rose-600 bg-rose-50 p-3 rounded-xl text-xs font-bold">
                  <AlertCircle size={16} className="mr-2 shrink-0" /> সঠিক জিপিএ (০.০০ থেকে ৫.০০) প্রদান করুন
                </div>
              )}

              {/* Quick GPA Presets */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide px-1 block mb-2">কুইক সিলেক্ট প্রিসেট:</span>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "গোল্ডেন ৫.০০", val: "5.00" },
                    { label: "৪.৮০", val: "4.80" },
                    { label: "৪.৫০", val: "4.50" },
                    { label: "৪.০০", val: "4.00" }
                  ].map(preset => (
                    <button
                      key={preset.val}
                      type="button"
                      onClick={() => {
                        setMarks({ ssc: preset.val, hsc: preset.val });
                        setErrors({});
                      }}
                      className="py-2 px-1 text-xs font-bold rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-300 transition-all active:scale-95 text-center"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5 px-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">SSC জিপিএ (GPA)</label>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">জিপিএ × ৫ (সর্বোচ্চ ২৫)</span>
                </div>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="5"
                  value={marks.ssc}
                  onChange={e => updateMarks('ssc', e.target.value)}
                  className={`w-full h-14 border rounded-xl px-4 font-bold text-xl text-slate-800 focus:outline-none transition-all placeholder-slate-300 ${errors.mark_ssc ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'}`}
                  placeholder="যেমন: 5.00"
                />
                <p className="text-[11px] text-slate-400 mt-1 px-1">আপনার এসএসসি পরীক্ষার প্রাপ্ত জিপিএ (সর্বোচ্চ ৫.০০)</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5 px-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">HSC জিপিএ (GPA)</label>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">জিপিএ × ৫ (সর্বোচ্চ ২৫)</span>
                </div>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="5"
                  value={marks.hsc}
                  onChange={e => updateMarks('hsc', e.target.value)}
                  className={`w-full h-14 border rounded-xl px-4 font-bold text-xl text-slate-800 focus:outline-none transition-all placeholder-slate-300 ${errors.mark_hsc ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`}
                  placeholder="যেমন: 5.00"
                />
                <p className="text-[11px] text-slate-400 mt-1 px-1">আপনার এইচএসসি পরীক্ষার প্রাপ্ত জিপিএ (সর্বোচ্চ ৫.০০)</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={calculate}
          className="w-full mt-8 bg-slate-900 hover:bg-black text-white font-bold h-14 rounded-2xl shadow-xl shadow-slate-200/50 transition-all active:scale-[0.98] text-sm tracking-wide uppercase"
        >
          ফলাফল দেখুন
        </button>
      </div>

      <AnimatePresence>
        {showResult && resultData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setShowResult(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl ring-1 ring-white"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-10 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>

              {resultData.type === 'eligibility' ? (
                <div className="text-center">
                  <div className="mb-5 flex justify-center">
                    {resultData.eligible ? (
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check size={32} className="text-emerald-500" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center">
                        <X size={32} className="text-rose-500" />
                      </div>
                    )}
                  </div>
                  <h2 className={`text-2xl font-bold mb-3 ${resultData.eligible ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {resultData.eligible ? 'অভিনন্দন! যোগ্য' : 'দুঃখিত! অযোগ্য'}
                  </h2>

                  {!resultData.eligible && (
                    <div className="mb-6 text-xs text-rose-600 bg-rose-50 py-3 px-4 rounded-xl inline-block font-medium space-y-1">
                      {resultData.reasons.sscLow && <span className="block">SSC জিপিএ ৪.০০ এর কম</span>}
                      {resultData.reasons.hscLow && <span className="block">HSC জিপিএ ৪.০০ এর কম</span>}
                      {resultData.reasons.totalLow && <span className="block">মোট জিপিএ ৮.৫০ এর কম</span>}
                    </div>
                  )}

                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6">
                    <ResultRow label="SSC জিপিএ" value={resultData.sscAvg} sub={resultData.reasons?.sscLow ? "❌ কম" : "ন্যূনতম ৪.০০"} />
                    <ResultRow label="HSC জিপিএ" value={resultData.hscAvg} sub={resultData.reasons?.hscLow ? "❌ কম" : "ন্যূনতম ৪.০০"} />
                    <ResultRow label="মোট জিপিএ" value={resultData.totalGpa} sub="ন্যূনতম ৮.৫০ প্রয়োজন" />
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h2 className="text-xl font-bold text-slate-800 mb-1">কৃষি গুচ্ছ জিপিএ মার্ক</h2>
                  <p className="text-xs text-slate-500 font-medium mb-5">SSC × ৫ + HSC × ৫ ফর্মুলা</p>

                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 mb-5 shadow-lg shadow-slate-300">
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">TOTAL GPA SCORE</p>
                    <p className="text-5xl font-black tracking-tight">{resultData.totalScore}</p>
                    <p className="text-xs text-slate-300 mt-2 font-medium">৫০ নম্বরের মধ্যে মোট স্কোর</p>
                  </div>

                  <div className="flex gap-3 mb-2">
                    <div className="flex-1 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100 text-left">
                      <p className="text-[10px] font-bold text-emerald-700 uppercase mb-1">SSC স্কোর (২৫)</p>
                      <p className="text-2xl font-black text-slate-800">{resultData.sscScore}</p>
                      <p className="text-[10px] text-slate-500 font-medium mt-1">জিপিএ {resultData.sscGpa} × ৫</p>
                    </div>
                    <div className="flex-1 bg-blue-50/60 p-4 rounded-2xl border border-blue-100 text-left">
                      <p className="text-[10px] font-bold text-blue-700 uppercase mb-1">HSC স্কোর (২৫)</p>
                      <p className="text-2xl font-black text-slate-800">{resultData.hscScore}</p>
                      <p className="text-[10px] text-slate-500 font-medium mt-1">জিপিএ {resultData.hscGpa} × ৫</p>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowResult(false)}
                className="w-full mt-8 h-12 rounded-xl bg-slate-100 text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors"
              >
                বন্ধ করুন
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
