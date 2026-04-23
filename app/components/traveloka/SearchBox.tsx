"use client";

import { HOTEL_FILTERS } from "@/app/lib/data";
import type { ServiceTab } from "@/app/lib/types";
import { MapPinIcon, CalendarIcon, GuestsIcon, SearchIcon } from "./icons";

interface SearchBoxProps {
  activeTab: ServiceTab;
}

export function SearchBox({ activeTab }: SearchBoxProps) {
  const isHotel = activeTab === "hotel";

  return (
    <div className="max-w-4xl mx-auto px-5 mt-5">
      {isHotel && (
        <div className="flex gap-2 mb-3">
          {HOTEL_FILTERS.map((filter, idx) => (
            <button
              key={filter}
              className={[
                "px-4 py-1.5 rounded-full text-[13px] font-bold border transition-all",
                idx === 0
                  ? "bg-[#0057e7] text-white border-transparent"
                  : "bg-white/18 text-white border-white/35 hover:bg-white/28",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,.22)] flex flex-wrap">
        <div className="flex-[2] min-w-[160px] flex items-center gap-2.5 px-5 py-[14px] border-r border-gray-100">
          <MapPinIcon size={16} className="text-[#0057e7] shrink-0" />
          <div className="min-w-0">
            <p className="text-[11px] text-gray-400 font-bold mb-0.5">
              {isHotel ? "Kota, tujuan, atau nama hotel" : "Kota atau bandara"}
            </p>
            <input
              className="w-full bg-transparent text-[13px] font-semibold text-gray-800 placeholder-gray-400 outline-none"
              placeholder={isHotel ? "Kota, hotel, tempat wisata" : "Dari mana?"}
            />
          </div>
        </div>

        <div className="flex-1 min-w-[160px] flex items-center gap-2.5 px-5 py-[14px] border-r border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
          <CalendarIcon size={16} className="text-[#0057e7] shrink-0" />
          <div>
            <p className="text-[11px] text-gray-400 font-bold mb-0.5">
              Tanggal Check-in &amp; Check-out
            </p>
            <p className="text-[13px] font-semibold text-gray-800">
              23 Apr 2026 – 24 Apr 2026
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-[150px] flex items-center gap-2.5 px-5 py-[14px] border-r border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
          <GuestsIcon size={16} className="text-[#0057e7] shrink-0" />
          <div>
            <p className="text-[11px] text-gray-400 font-bold mb-0.5">
              Tamu dan Kamar
            </p>
            <p className="text-[13px] font-semibold text-gray-800">
              2 Dewasa, 0 Anak, 1 Kamar
            </p>
          </div>
        </div>

        <button className="m-2 px-7 bg-[#0057e7] hover:bg-[#0047c4] active:bg-[#003dbf] text-white font-bold rounded-xl flex items-center gap-2 text-[15px] transition-colors">
          <SearchIcon size={20} />
          <span className="hidden sm:inline">Cari</span>
        </button>
      </div>
    </div>
  );
}
