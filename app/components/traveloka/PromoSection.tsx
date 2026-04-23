"use client";

import { useState } from "react";
import { GENERAL_PROMOS, PROMO_FILTER_OPTIONS } from "@/app/lib/data";
import { GiftIcon, ArrowRightIcon, InfoIcon } from "./icons";

const TAG_STYLES: Record<"red" | "green" | "orange", string> = {
  red:    "bg-red-500 text-white",
  green:  "bg-green-600 text-white",
  orange: "bg-orange-500 text-white",
};

export function PromoSection() {
  const [activeFilter, setActiveFilter] = useState("semua");

  return (
    <section className="bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700 py-6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#0057e7] shrink-0">
            <GiftIcon size={22} />
          </div>
          <div>
            <h2 className="text-gray-900 font-extrabold text-base leading-tight">
              Kupon Diskon 12% untuk Pengguna Baru
            </h2>
            <p className="text-[#0057e7] text-[13px] font-bold">
              Berlaku untuk Transaksi Pertama di Traveloka App
            </p>
          </div>
          <button className="ml-auto flex items-center gap-1 text-[#0057e7] text-[13px] font-bold hover:underline shrink-0">
            Lihat semua <ArrowRightIcon size={15} />
          </button>
        </div>

        <div className="flex gap-2 mb-4 overflow-x-auto pb-1 scrollbar-hide">
          {PROMO_FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={[
                "px-4 py-1.5 rounded-full text-[13px] font-semibold border whitespace-nowrap transition-all",
                activeFilter === option
                  ? "bg-[#0057e7] text-white border-[#0057e7]"
                  : "text-slate-500 border-slate-200 hover:bg-[#0057e7] hover:text-white hover:border-[#0057e7]",
              ].join(" ")}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {GENERAL_PROMOS.map((promo, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col gap-3 shadow-sm cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-gray-50">
                  <img
                    src={promo.iconUrl}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${TAG_STYLES[promo.tagVariant]}`}>
                    {promo.tag}
                  </span>
                  <span className="text-gray-300">
                    <InfoIcon size={13} />
                  </span>
                </div>
              </div>
              <div>
                <p className="text-gray-800 font-bold text-[13px] leading-snug">
                  {promo.title}
                </p>
                <p className="text-gray-400 text-[11px] mt-1">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
