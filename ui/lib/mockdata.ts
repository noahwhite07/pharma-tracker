export interface Asset {
  id: string;
  name: string; // e.g., "VX-548"
  indication: string; // e.g., "Acute Pain"
  phase: 'Phase 1' | 'Phase 2' | 'Phase 3' | 'Approved';
  aiSummary: string;
  lastUpdated: string;
}

export interface Company {
  id: string;
  name: string;
  ticker: string;
  stockPrice: number;
  changePercent: number;
  assets: Asset[];
}

export const MOCK_COMPANIES: Company[] = [
  {
    id: "1",
    name: "Vertex Pharmaceuticals",
    ticker: "VRTX",
    stockPrice: 465.20,
    changePercent: 1.45,
    assets: [
      {
        id: "a1",
        name: "Suzetrigine (VX-548)",
        indication: "Moderate-to-Severe Acute Pain",
        phase: "Phase 3",
        aiSummary: "Topline Phase 3 results showed significant reduction in pain intensity over placebo. FDA NDA filing submitted Q1.",
        lastUpdated: "2026-07-20"
      }
    ]
  },
  {
    id: "2",
    name: "Ventyx Biosciences",
    ticker: "VTYX",
    stockPrice: 2.85,
    changePercent: -3.20,
    assets: [
      {
        id: "a2",
        name: "VTX3232",
        indication: "Parkinson's Disease / NLRP3 inhibitor",
        phase: "Phase 1",
        aiSummary: "Phase 1 trial demonstrated CNS penetrance and favorable safety profile in healthy volunteers.",
        lastUpdated: "2026-07-15"
      }
    ]
  }
];