"use client";

import { NAV_TABS } from "@/app/lib/data";
import type { ServiceTab } from "@/app/lib/types";
import { DarkModeToggle } from "./DarkModeToggle";
import {
  TravelokaBirdLogo,
  ChevronDownIcon,
  PlaneIcon,
  HotelIcon,
  TrainIcon,
  BusIcon,
  CarIcon,
  WhooshIcon,
  AirportIcon,
  ActivityIcon,
  MoreDotsIcon,
} from "./icons";

const SERVICE_ICONS: Record<ServiceTab, React.FC<{ size?: number; className?: string }>> = {
  hotel:   HotelIcon,
  pesawat: PlaneIcon,
  kereta:  TrainIcon,
  whoosh:  WhooshIcon,
  bus:     BusIcon,
  bandara: AirportIcon,
  mobil:   CarIcon,
  atraksi: ActivityIcon,
};

interface NavbarProps {
  activeTab: ServiceTab;
  onTabChange: (tab: ServiceTab) => void;
}

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-5 pt-4 flex items-center justify-between">
        <div className="select-none">
          <TravelokaBirdLogo size={160} />
        </div>

        <div className="hidden md:flex items-center gap-0.5">
          {["🇮🇩 IDR | ID", "Promo", "Bisnis", "Bantuan", "Pesanan"].map((label, idx) => (
            
            <button
              key={label}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[13.5px] font-semibold text-white/85 hover:bg-white/15 hover:text-white transition-all"
            >
              {label}
              {(idx === 0 || idx === 2 || idx === 3) && (
                <ChevronDownIcon size={13} className="opacity-60" />
              )}
            </button>
          ))}

           <DarkModeToggle />

          <button className="ml-2 px-4 py-1.5 border border-white/50 rounded-xl text-white text-[13px] font-bold hover:bg-white/12 transition-all">
            Log In ↗
          </button>
          <button className="ml-1.5 px-4 py-1.5 bg-[#0057e7] hover:bg-[#0047c4] text-white text-[13px] font-bold rounded-xl transition-colors">
            Daftar
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 mt-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 min-w-max">
          {NAV_TABS.map((tab) => {
            const ServiceIcon = SERVICE_ICONS[tab.id];
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={[
                  "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13.5px] font-semibold transition-all whitespace-nowrap",
                  isActive
                    ? "bg-white text-[#0057e7] shadow-md"
                    : "text-white/75 hover:bg-white/14 hover:text-white",
                ].join(" ")}
              >
                <ServiceIcon size={18} className={isActive ? "text-[#0057e7]" : "text-white/80"} />
                {tab.label}
                {tab.hasBadge && (
                  <span className="ml-0.5 bg-gradient-to-r from-amber-400 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Baru!
                  </span>
                )}
                {tab.hasChevron && (
                  <ChevronDownIcon size={13} className="opacity-50 -ml-0.5" />
                )}
              </button>
            );
          })}
          <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13.5px] font-semibold text-white/75 hover:bg-white/14 hover:text-white transition-all whitespace-nowrap">
            <MoreDotsIcon size={18} className="text-white/80" />
            Produk Lainnya
            <ChevronDownIcon size={13} className="opacity-50 -ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
