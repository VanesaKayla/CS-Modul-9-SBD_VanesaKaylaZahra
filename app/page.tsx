"use client";

import { useState } from "react";
import type { ServiceTab } from "@/app/lib/types";
import { Navbar } from "@/app/components/traveloka/Navbar";
import { SearchBox } from "@/app/components/traveloka/SearchBox";
import { PromoSection } from "@/app/components/traveloka/PromoSection";
import { ExclusiveProgramSection } from "@/app/components/traveloka/ExclusiveProgramSection";
import { DestinationSection } from "@/app/components/traveloka/DestinationSection";
import { WhySection, Footer } from "@/app/components/traveloka/WhyAndFooter";

export default function TravelokaPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("hotel");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans transition-colors duration-300">
      {}
      <div
        className="pb-10"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(10,28,78,0.80) 0%,
              rgba(10,28,78,0.60) 50%,
              rgba(10,28,78,0.88) 100%),
            url('https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?w=1600&q=80')
            center/cover no-repeat`,
        }}
      >
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

        <h1 className="text-white text-center font-extrabold mt-8 text-[clamp(20px,3vw,36px)] tracking-tight px-4">
          Pilihan utama untuk jelajahi dunia
        </h1>

        <SearchBox activeTab={activeTab} />
      </div>

      {}
      <PromoSection />

      <hr className="border-0 border-t border-gray-100" />

      <ExclusiveProgramSection />

      <hr className="border-0 border-t border-gray-100" />

      <DestinationSection />

      <hr className="border-0 border-t border-gray-100" />

      <WhySection />

      <Footer />
    </div>
  );
}
