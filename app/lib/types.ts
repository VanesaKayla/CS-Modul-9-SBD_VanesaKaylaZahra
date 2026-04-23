export type ServiceTab =
  | "hotel"
  | "pesawat"
  | "kereta"
  | "whoosh"
  | "bus"
  | "bandara"
  | "mobil"
  | "atraksi";

export interface NavTab {
  id: ServiceTab;
  label: string;
  hasBadge?: boolean;
  hasChevron?: boolean;
}

export interface PromoItem {
  iconUrl: string;
  tag: string;
  tagVariant: "red" | "green" | "orange";
  title: string;
  description: string;
}

export interface ExclusiveProgramCard {
  logoText: string;
  logoColor: string;
  programLabel: string;
  title: string;
  highlight: string;
  subtitle: string;
  badges: string[];
  promos: ExclusivePromoItem[];
  disclaimer: string;
}

export interface ExclusivePromoItem {
  iconUrl: string;
  title: string;
  description: string;
  badge: string;
  badgeVariant: "green" | "blue" | "yellow" | "purple";
  code: string;
  expiry: string;
}

export interface Destination {
  name: string;
  imageUrl: string;
  country: string;
  startingPrice: string;
}

export interface WhyItem {
  iconUrl: string;
  title: string;
  description: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}
