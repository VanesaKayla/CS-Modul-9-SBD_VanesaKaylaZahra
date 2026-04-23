"use client";

import { EXCLUSIVE_PROGRAMS } from "@/app/lib/data";
import type { ExclusiveProgramCard } from "@/app/lib/types";
import { GraduationCapIcon, ShieldIcon, PercentIcon, InfoIcon } from "./icons";

const BADGE_STYLES: Record<string, string> = {
  green:  "bg-green-100 text-green-700",
  blue:   "bg-blue-100 text-blue-700",
  yellow: "bg-amber-100 text-amber-700",
  purple: "bg-purple-100 text-purple-700",
};

function ProgramCard({ program }: { program: ExclusiveProgramCard }) {
  return (
    <div className="flex-1 min-w-[300px]">
      <div className="rounded-2xl p-6 mb-5 bg-gradient-to-r from-[#1d3461] via-[#0057e7] to-[#20c4f4]">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-full bg-gradient-to-br ${program.logoColor} flex items-center justify-center text-[#1d3461] text-xl font-black shadow-lg shrink-0`}
            >
              {program.logoText}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <GraduationCapIcon size={16} className="text-white/70" />
                <span className="text-white/70 text-[11px] font-bold uppercase tracking-wider">
                  {program.programLabel}
                </span>
              </div>
              <h2 className="text-white font-extrabold text-xl leading-tight">
                {program.title}
                <br />
                <span className="text-yellow-300">{program.highlight}</span>
              </h2>
              <p className="text-white/60 text-xs mt-1">{program.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:ml-auto mt-1">
            {program.badges.map((badge) => (
              <span
                key={badge}
                className="bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-600 rounded-xl px-5 py-3 mb-4 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-blue-700 font-bold text-[13px]">
          <ShieldIcon size={16} /> Cara Klaim:
        </div>
        {["Login ke akun Traveloka", "Masukkan kode promo", "Upload ID / KTM Aktif", "Diskon otomatis!"].map((step, idx) => (
          <div key={step} className="flex items-center gap-1.5 text-[12px] text-slate-500 dark:text-slate-300">
            <span className="w-5 h-5 bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300 rounded-full text-[10px] font-extrabold flex items-center justify-center shrink-0">
              {idx + 1}
            </span>
            {step}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {program.promos.map((promoItem, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-600 rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-gray-50">
                <img
                  src={promoItem.iconUrl}
                  alt={promoItem.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className={`text-[11px] font-bold px-3 py-1 rounded-full shrink-0 ${BADGE_STYLES[promoItem.badgeVariant]}`}>
                {promoItem.badge}
              </span>
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white font-extrabold text-[14px] leading-snug">
                {promoItem.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-xs mt-1 leading-relaxed">
                {promoItem.description}
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-gray-400 text-[11px] font-bold mb-1.5">Kode Promo</p>
              <div className="bg-[#f0f5ff] dark:bg-slate-700 border border-dashed border-[#93b4ff] dark:border-slate-500 text-[#0057e7] dark:text-blue-300 font-mono font-bold text-[13px] tracking-wider rounded-lg py-2 text-center select-all cursor-pointer hover:bg-[#e5edff] dark:hover:bg-slate-600 transition-colors">
                {promoItem.code}
              </div>
              <p className="text-gray-400 text-[11px] text-center mt-1.5">
                Berlaku s.d. {promoItem.expiry}
              </p>
            </div>
            <button className="w-full bg-[#0057e7] hover:bg-[#0047c4] text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-[13px] transition-colors">
              <PercentIcon size={15} /> Klaim Sekarang
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-600 rounded-xl px-5 py-3 flex gap-2 items-start">
        <span className="text-amber-500 shrink-0 mt-0.5">
          <InfoIcon size={14} />
        </span>
        <p className="text-amber-800 dark:text-amber-300 text-[11px] leading-relaxed">
          <strong>Syarat &amp; Ketentuan:</strong> {program.disclaimer}
        </p>
      </div>
    </div>
  );
}

export function ExclusiveProgramSection() {
  return (
    <section className="bg-gradient-to-b from-[#f5f8ff] to-white dark:from-slate-900 dark:to-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap gap-8">
          {EXCLUSIVE_PROGRAMS.map((program) => (
            <ProgramCard key={program.highlight} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
