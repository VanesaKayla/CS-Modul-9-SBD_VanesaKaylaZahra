import { WHY_ITEMS, FOOTER_COLUMNS } from "@/app/lib/data";
import { TravelokaBirdLogo } from "./icons";

export function WhySection() {
  return (
    <section className="bg-[#f5f8ff] dark:bg-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-gray-800 dark:text-white font-extrabold text-[18px] text-center mb-6">
          Mengapa Traveloka?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {WHY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-slate-700 rounded-2xl p-5 border border-gray-100 dark:border-slate-600 flex gap-4 items-start hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-gray-50">
                <img
                  src={item.iconUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-900 dark:text-white text-[14px] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-11 pb-5">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TravelokaBirdLogo size={22} className="shrink-0" />
              <span className="text-white font-light text-[17px] tracking-wide">traveloka</span>
            </div>
            <p className="text-xs leading-relaxed">
              Platform perjalanan terpercaya sejak 2012 untuk jutaan traveler Indonesia.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-[13px] mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>© 2026 Traveloka. All rights reserved.</span>
          <span>Made with ♡ · Vanesa Kayla Zahra</span>
        </div>
      </div>
    </footer>
  );
}
