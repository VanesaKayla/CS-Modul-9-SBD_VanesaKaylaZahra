import type {
  NavTab,
  PromoItem,
  ExclusiveProgramCard,
  Destination,
  WhyItem,
  FooterColumn,
} from "./types";

export const NAV_TABS: NavTab[] = [
  { id: "hotel",   label: "Hotel" },
  { id: "pesawat", label: "Tiket Pesawat", hasChevron: true },
  { id: "kereta",  label: "Tiket Kereta Api" },
  { id: "whoosh",  label: "Tiket Whoosh", hasBadge: true },
  { id: "bus",     label: "Tiket Bus & Travel" },
  { id: "bandara", label: "Antar Jemput Bandara" },
  { id: "mobil",   label: "Rental Mobil" },
  { id: "atraksi", label: "Atraksi dan Aktivitas" },
];

export const HOTEL_FILTERS = ["Semua", "Hotel", "Vila", "Apartemen"];

export const GENERAL_PROMOS: PromoItem[] = [
  {
    iconUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=80&q=80",
    tag: "Pengguna Baru",
    tagVariant: "red",
    title: "Hemat 10% Pemesanan Hotel Pertama",
    description: "Berlaku untuk Pengguna Baru.",
  },
  {
    iconUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=80&q=80",
    tag: "Pengguna Baru",
    tagVariant: "red",
    title: "Hemat 10% Pemesanan Xperience Pertama",
    description: "Berlaku untuk Pengguna Baru.",
  },
  {
    iconUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=80&q=80",
    tag: "Min. Rp150rb",
    tagVariant: "green",
    title: "Diskon 12% Antar Jemput Bandara",
    description: "min. transaksi Rp 150rb.",
  },
  {
    iconUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=80&q=80",
    tag: "Pengguna Baru",
    tagVariant: "red",
    title: "Hemat 10% Pemesanan Kereta Pertama",
    description: "Berlaku untuk Pengguna Baru.",
  },
  {
    iconUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=80&q=80",
    tag: "Terbatas",
    tagVariant: "orange",
    title: "Flash Sale Tiket Pesawat 30% Off",
    description: "Berlaku s.d. 30 April 2026.",
  },
];

export const PROMO_FILTER_OPTIONS = [
  "semua",
  "hotel",
  "pesawat",
  "kereta",
  "bandara",
];

export const EXCLUSIVE_PROGRAMS: ExclusiveProgramCard[] = [
  {
    logoText: "UI",
    logoColor: "from-yellow-400 to-orange-400",
    programLabel: "Program Eksklusif Mahasiswa",
    title: "Promo Khusus Mahasiswa",
    highlight: "Universitas Indonesia",
    subtitle: "Tunjukkan KTM Aktif · Berlaku April – Juni 2026",
    badges: ["Verifikasi KTM", "Harga Eksklusif", "Tidak Perlu Kode Promo"],
    promos: [
      {
        iconUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=160&q=80",
        title: "Tiket Pesawat Diskon 20%",
        description: "Khusus mahasiswa UI untuk penerbangan domestik & internasional. Tunjukkan KTM aktif saat check-in.",
        badge: "Hemat 20%",
        badgeVariant: "green",
        code: "UIFLIGHT20",
        expiry: "30 Juni 2026",
      },
      {
        iconUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=160&q=80",
        title: "Hotel Diskon 30%",
        description: "Menginap di 500+ hotel mitra Traveloka dengan diskon 30%. Berlaku untuk seluruh Indonesia.",
        badge: "Diskon 30%",
        badgeVariant: "blue",
        code: "UIHOTEL30",
        expiry: "31 Mei 2026",
      },
      {
        iconUrl: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=160&q=80",
        title: "Cashback Kereta 15%",
        description: "Cashback langsung ke Traveloka Pay untuk pembelian tiket kereta api mahasiswa UI.",
        badge: "Cashback 15%",
        badgeVariant: "yellow",
        code: "UITRAIN15",
        expiry: "15 Mei 2026",
      },
      {
        iconUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=160&q=80",
        title: "Atraksi & Wisata 25% Off",
        description: "Diskon tiket atraksi, museum, dan paket wisata lokal. Cocok untuk study trip!",
        badge: "Diskon 25%",
        badgeVariant: "purple",
        code: "UIAKTIF25",
        expiry: "30 Juni 2026",
      },
    ],
    disclaimer: "Promo berlaku bagi mahasiswa aktif Universitas Indonesia semester genap 2025/2026. Satu kode per akun per periode. Traveloka berhak membatalkan transaksi jika verifikasi KTM tidak valid. Tidak dapat digabungkan dengan promo lain kecuali ditentukan lain.",
  },
  {
    logoText: "NL",
    logoColor: "from-blue-400 to-cyan-400",
    programLabel: "Program Eksklusif Asisten Lab",
    title: "Promo Khusus Asisten",
    highlight: "Network Laboratory UI",
    subtitle: "Tunjukkan ID Aslab Aktif · Berlaku April – Juni 2026",
    badges: ["Verifikasi ID Aslab", "Harga Riset", "Tidak Perlu Kode Promo"],
    promos: [
      {
        iconUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=160&q=80",
        title: "Tiket Pesawat Diskon 25%",
        description: "Khusus asisten Network Lab untuk keperluan riset, seminar, dan konferensi nasional maupun internasional.",
        badge: "Hemat 25%",
        badgeVariant: "green",
        code: "NLFLIGHT25",
        expiry: "30 Juni 2026",
      },
      {
        iconUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=160&q=80",
        title: "Hotel Diskon 30% + Sarapan",
        description: "Menginap di hotel mitra dengan diskon 30% sudah termasuk sarapan. Cocok untuk perjalanan riset.",
        badge: "Diskon 30%",
        badgeVariant: "blue",
        code: "NLHOTEL30",
        expiry: "31 Mei 2026",
      },
      {
        iconUrl: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=160&q=80",
        title: "Cashback Kereta 20%",
        description: "Cashback ke Traveloka Pay untuk tiket kereta. Prioritas seat bisnis untuk perjalanan antar kota.",
        badge: "Cashback 20%",
        badgeVariant: "yellow",
        code: "NLTRAIN20",
        expiry: "15 Mei 2026",
      },
      {
        iconUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=160&q=80",
        title: "Paket Konferensi All-in",
        description: "Bundling tiket pesawat + hotel + transportasi lokal khusus untuk keperluan seminar & konferensi.",
        badge: "All-in Bundle",
        badgeVariant: "purple",
        code: "NLCONF2026",
        expiry: "30 Juni 2026",
      },
    ],
    disclaimer: "Promo berlaku bagi asisten laboratorium aktif Network Laboratory Universitas Indonesia. Verifikasi melalui ID Aslab yang dikeluarkan koordinator laboratorium. Satu kode per asisten per periode. Tidak dapat digabungkan dengan promo lain kecuali ditentukan lain.",
  },
];

export const DESTINATIONS: Destination[] = [
  {
    name: "Bali",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
    country: "Indonesia",
    startingPrice: "Rp 450rb",
  },
  {
    name: "Yogyakarta",
    imageUrl: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&q=80",
    country: "Indonesia",
    startingPrice: "Rp 320rb",
  },
  {
    name: "Raja Ampat",
    imageUrl: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=400&q=80",
    country: "Indonesia",
    startingPrice: "Rp 1.2jt",
  },
  {
    name: "Labuan Bajo",
    imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80",
    country: "Indonesia",
    startingPrice: "Rp 890rb",
  },
  {
    name: "Lombok",
    imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&q=80",
    country: "Indonesia",
    startingPrice: "Rp 510rb",
  },
  {
    name: "Bromo",
    imageUrl: "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?w=400&q=80",
    country: "Indonesia",
    startingPrice: "Rp 275rb",
  },
];

export const WHY_ITEMS: WhyItem[] = [
  {
    iconUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&q=80",
    title: "Pembayaran Aman",
    description: "Enkripsi 256-bit melindungi setiap transaksi. Uang kembali jika ada masalah.",
  },
  {
    iconUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=120&q=80",
    title: "Dukungan 24/7",
    description: "Tim siap membantu via chat, telepon, atau email kapanpun kamu butuhkan.",
  },
  {
    iconUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=120&q=80",
    title: "Garansi Harga Terbaik",
    description: "Temukan harga lebih murah di tempat lain? Kami refund selisihnya. Dijamin.",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Layanan",
    links: ["Hotel", "Tiket Pesawat", "Kereta Api", "Rental Mobil", "Atraksi"],
  },
  {
    title: "Perusahaan",
    links: ["Tentang Kami", "Karir", "Investor", "Blog"],
  },
  {
    title: "Bantuan",
    links: ["FAQ", "Syarat & Ketentuan", "Privasi", "Hubungi Kami"],
  },
];
