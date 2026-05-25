import type { IPOListing } from "../types/ipo";

export const IPO_DATABASE: IPOListing[] = [
  {
    id: "1",
    companyName: "ALPHA TECH BHD",
    sector: "Technology",
    underwriter: "Maybank IB",
    ipoPrice: 0.5,
    firstDayClose: 1.25,
    oversubscription: 125.4,
    marketCap: "RM 850M",
    status: "Booming",
    narrative:
      "AI infrastructure demand coupled with limited technology supply on Bursa.",
  },
  {
    id: "2",
    companyName: "NUSANTARA DC REIT",
    sector: "Data Centre",
    underwriter: "CIMB IB",
    ipoPrice: 0.88,
    firstDayClose: 1.34,
    oversubscription: 68.2,
    marketCap: "RM 1.9B",
    status: "Booming",
    narrative:
      "Cloud capacity scarcity and Johor corridor demand created a clear liquidity magnet.",
  },
  {
    id: "3",
    companyName: "MERIDIAN UTILITIES",
    sector: "Utilities",
    underwriter: "RHB IB",
    ipoPrice: 1.12,
    firstDayClose: 1.28,
    oversubscription: 31.8,
    marketCap: "RM 2.4B",
    status: "Resilient",
    narrative:
      "Stable cashflow profile attracted defensive capital during a rotation into yield assets.",
  },
  {
    id: "4",
    companyName: "HARBOUR CONSTRUCTION",
    sector: "Construction",
    underwriter: "Kenanga IB",
    ipoPrice: 0.62,
    firstDayClose: 0.58,
    oversubscription: 9.6,
    marketCap: "RM 620M",
    status: "Weak",
    narrative:
      "Policy catalyst was visible, but weak float demand limited listing-day liquidity.",
  },
  {
    id: "5",
    companyName: "AURORA CONSUMER",
    sector: "Consumer",
    underwriter: "Public IB",
    ipoPrice: 0.74,
    firstDayClose: 0.79,
    oversubscription: 18.5,
    marketCap: "RM 710M",
    status: "Neutral",
    narrative:
      "Brand recognition helped demand, while margin pressure kept institutional conviction measured.",
  },
  {
    id: "6",
    companyName: "KLANG VALLEY PROPERTY",
    sector: "Property",
    underwriter: "AmInvestment Bank",
    ipoPrice: 0.4,
    firstDayClose: 0.46,
    oversubscription: 22.1,
    marketCap: "RM 540M",
    status: "Resilient",
    narrative:
      "Transit-linked landbank gave the listing a tangible story despite cautious property sentiment.",
  },
];
