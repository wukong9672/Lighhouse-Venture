export interface SectorCardInsight {
  name: string;
  thesis: string;
  tags: string[];
}

export interface LiquidityFlowPoint {
  quarter: string;
  dataCentres: number;
  utilities: number;
  technology: number;
}

export const sectorCards: SectorCardInsight[] = [
  {
    name: "Data Centres & Utilities",
    thesis:
      "Power demand, landbank scarcity, and cloud infrastructure spending form a clear institutional narrative.",
    tags: ["High Liquidity", "Institutional Focus"],
  },
  {
    name: "Tech & Semiconductor",
    thesis:
      "Global AI capex creates a Bursa proxy trade when local supply is limited and demand is concentrated.",
    tags: ["Growth Narrative", "Global Proxy"],
  },
];

export const liquidityFlow: LiquidityFlowPoint[] = [
  {
    quarter: "2023 Q1",
    dataCentres: 28,
    utilities: 34,
    technology: 42,
  },
  {
    quarter: "2023 Q2",
    dataCentres: 36,
    utilities: 39,
    technology: 45,
  },
  {
    quarter: "2023 Q3",
    dataCentres: 51,
    utilities: 44,
    technology: 48,
  },
  {
    quarter: "2023 Q4",
    dataCentres: 64,
    utilities: 52,
    technology: 55,
  },
  {
    quarter: "2024 Q1",
    dataCentres: 79,
    utilities: 67,
    technology: 58,
  },
  {
    quarter: "2024 Q2",
    dataCentres: 96,
    utilities: 73,
    technology: 63,
  },
  {
    quarter: "2024 Q3",
    dataCentres: 112,
    utilities: 86,
    technology: 71,
  },
  {
    quarter: "2024 Q4",
    dataCentres: 128,
    utilities: 104,
    technology: 83,
  },
];
