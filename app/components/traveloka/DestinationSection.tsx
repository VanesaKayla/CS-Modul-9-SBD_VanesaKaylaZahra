import { DESTINATIONS } from "@/app/lib/data";
import { ArrowRightIcon } from "./icons";

export function DestinationSection() {
  return (
    <section className="bg-white dark:bg-slate-900 py-9">
      <div className="max-w-7xl mx-auto px-5">
        {/* heading */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-gray-900 dark:text-white font-extrabold text-[18px]">
            Bertamasya keliling dunia, cek panduannya!
          </h2>
          <button className="flex items-center gap-1 text-[#0057e7] text-[13px] font-bold hover:underline">
            Lihat semua <ArrowRightIcon size={15} />
          </button>
        </div>

        {/* destination cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {DESTINATIONS.map((destination) => (
            <div
              key={destination.name}
              className="rounded-2xl overflow-hidden border border-gray-100 cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all group"
            >
              {/* photo */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* dark gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                {/* name + country overlaid on photo like Traveloka */}
                <div className="absolute bottom-2 left-3">
                  <p className="text-white font-bold text-[13px] leading-tight drop-shadow">
                    {destination.name}
                  </p>
                  <p className="text-white/80 text-[11px] drop-shadow">
                    {destination.country}
                  </p>
                </div>
              </div>
              {/* price */}
              <div className="px-3 py-2 bg-white">
                <p className="text-[#0057e7] text-[11px] font-extrabold">
                  mulai {destination.startingPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
