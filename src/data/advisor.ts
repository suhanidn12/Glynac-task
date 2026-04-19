export const advisorData = {
  metrics: {
    totalAUMUSD: 1240000000, // raw USD
    totalAUMChangePct: 1.4,
    avgReturnYTD: 8.9,
    households: 412,
    householdsChangePct: 2.1,
    satisfactionPct: 94,
    satisfactionChangePct: -0.3,
  },
  perfTrend: [
    { month: "Jan", returnPct: 1.2 },
    { month: "Feb", returnPct: 1.9 },
    { month: "Mar", returnPct: -0.6 },
    { month: "Apr", returnPct: 2.1 },
    { month: "May", returnPct: 0.8 },
    { month: "Jun", returnPct: 1.7 },
    { month: "Jul", returnPct: 0.9 },
  ],
  assetReturns: [
    { asset: "US Equities", ytd: 12.4 },
    { asset: "Intl Equities", ytd: 7.8 },
    { asset: "Fixed Income", ytd: 3.2 },
    { asset: "Alternatives", ytd: 9.1 },
    { asset: "Cash", ytd: 1.1 },
  ],
  topClients: [
    { id: 1, name: "Greenfield Holdings", segment: "UHNW", aumUSD: 38400000, risk: "Medium", lastTouch: "2025-12-25", nextAction: "Review - Mon" },
    { id: 2, name: "Raynor Family", segment: "HNW", aumUSD: 12900000, risk: "Low", lastTouch: "2025-12-22", nextAction: "Quarterly Plan" },
    { id: 3, name: "Han & Co.", segment: "SME", aumUSD: 7200000, risk: "Medium", lastTouch: "2025-12-26", nextAction: "Proposal Follow-up" },
    { id: 4, name: "M. Ortega", segment: "Mass Affluent", aumUSD: 2100000, risk: "High", lastTouch: "2025-12-27", nextAction: "Risk Review" },
    { id: 5, name: "K-Line Ventures", segment: "Institutional", aumUSD: 88000000, risk: "Low", lastTouch: "2025-12-24", nextAction: "Board Update" },
  ],
};