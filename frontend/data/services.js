// Central source of truth for all services rendered across the site.
// Each entry powers both the /services listing and the /services/[slug] detail page.

export const services = [
  {
    slug: 'customs-advisory',
    title: 'Customs Advisory',
    short: 'Classification, valuation, SVB, AEO, refunds, drawback and end-to-end clearance support across major Indian ports.',
    intro: 'We help importers and exporters resolve every aspect of Indian customs law — from day-to-day clearance to high-stakes valuation and classification disputes.',
    icon: 'package',
    highlights: [
      'Tariff classification & HS code advisory',
      'Customs valuation, SVB orders and related-party transactions',
      'AEO (Authorised Economic Operator) certification support',
      'Refund of duty, drawback and IGST refund claims',
      'Bond, BG and warehousing (Section 65 / MOOWR) compliance',
      'Representations before AC/DC, Commissioner and CESTAT'
    ],
    related: ['gst-indirect-tax', 'dgft-foreign-trade', 'litigation-appeals']
  },
  {
    slug: 'gst-indirect-tax',
    title: 'GST & Indirect Tax',
    short: 'GST applicability on exports/imports, refunds, LUTs, departmental audits, notices and appeals before GST authorities.',
    intro: 'Indirect tax matters can stall an export consignment overnight. Our GST practice keeps your books, returns and refund pipeline running clean.',
    icon: 'grid',
    highlights: [
      'GST registration, LUT and zero-rated supply strategy',
      'Refund claims under inverted duty structure & exports',
      'GST audits, scrutiny replies and SCN handling',
      'Input Tax Credit (ITC) reconciliation & blocked credit advice',
      'E-invoicing and e-way bill compliance',
      'Appeals before Appellate Authority, GSTAT and High Courts'
    ],
    related: ['customs-advisory', 'income-tax-planning', 'litigation-appeals']
  },
  {
    slug: 'dgft-foreign-trade',
    title: 'DGFT & Foreign Trade',
    short: 'IEC, RoDTEP, Advance Authorisation, EPCG, MEIS/SEIS legacy claims and licence-related representations to DGFT.',
    intro: 'We work closely with DGFT regional authorities to secure incentives, licences and policy benefits under the Foreign Trade Policy.',
    icon: 'clock',
    highlights: [
      'IEC issuance, modification and DGFT compliance',
      'Advance Authorisation & EPCG — issuance to redemption',
      'RoDTEP, RoSCTL & SEIS / MEIS legacy claim handling',
      'EOU / SEZ scheme advisory',
      'DGFT representations, appeals and PRC matters',
      'Norms fixation under Foreign Trade Policy'
    ],
    related: ['customs-advisory', 'export-import', 'corporate-law']
  },
  {
    slug: 'export-import',
    title: 'Export & Import Consultancy',
    short: 'Strategic EXIM consultancy — documentation, compliance, incentive optimisation and cross-border structuring.',
    intro: 'End-to-end EXIM consultancy for first-time exporters and established trading houses alike — built around your product, route and buyer.',
    icon: 'layers',
    highlights: [
      'Export documentation & banking compliance (FEMA, RBI)',
      'Import licensing, restricted/prohibited item advisory',
      'Incentive maximisation across schemes',
      'High-seas sales & merchant trade structuring',
      'Country-specific FTA / PTA benefit advisory',
      'EXIM training for in-house teams'
    ],
    related: ['dgft-foreign-trade', 'customs-advisory', 'maritime-shipping']
  },
  {
    slug: 'maritime-shipping',
    title: 'Maritime & Shipping',
    short: 'Advisory for shipping lines, freight forwarders and CHAs on maritime law, port compliance and operational matters.',
    intro: 'Port-level expertise — built from years of working at India\'s busiest western-coast gateways.',
    icon: 'anchor',
    highlights: [
      'Shipping line and NVOCC compliance',
      'CHA / Customs Broker licensing and disciplinary matters',
      'Container detention, demurrage and shipping disputes',
      'Port authority and customs liaisoning',
      'Maritime contracts and B/L disputes',
      'Operational support at KASEZ, Mundra and Tuna Port'
    ],
    related: ['customs-advisory', 'export-import', 'litigation-appeals']
  },
  {
    slug: 'income-tax-planning',
    title: 'Income Tax & Planning',
    short: 'Direct tax advisory, assessments, scrutiny, appeals and bespoke tax planning for businesses and promoters.',
    intro: 'A direct tax practice geared for trade-driven businesses — with strategy, planning and litigation under one roof.',
    icon: 'file',
    highlights: [
      'Corporate and personal tax planning',
      'Assessments, scrutiny and faceless proceedings',
      'TDS / TCS compliance & defaults',
      'Capital gains, restructuring and succession planning',
      'Search, survey and raid representation',
      'Appeals before CIT(A), ITAT, High Court and Supreme Court'
    ],
    related: ['gst-indirect-tax', 'corporate-law', 'litigation-appeals']
  },
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    short: 'Company law compliance, secretarial work, contracts, structuring and corporate governance advisory.',
    intro: 'Practical corporate law support that keeps EXIM and trading companies clean on filings, contracts and governance.',
    icon: 'building',
    highlights: [
      'Company incorporation, conversion and restructuring',
      'ROC filings, board minutes and statutory registers',
      'Commercial contracts, NDAs and joint ventures',
      'FEMA & FDI compliance for cross-border investment',
      'M&A due diligence and integration support',
      'Corporate governance and board advisory'
    ],
    related: ['income-tax-planning', 'dgft-foreign-trade', 'financial-management']
  },
  {
    slug: 'financial-management',
    title: 'Financial Management',
    short: 'Financial structuring, working-capital strategy and advisory tailored to trade-driven businesses.',
    intro: 'CFO-grade financial advisory for EXIM businesses — sharper working capital, tighter margins, cleaner books.',
    icon: 'bar-chart',
    highlights: [
      'Working capital and trade finance optimisation',
      'Cost & margin analysis for product / route mix',
      'Forex risk and hedging advisory',
      'Banking facility structuring and CMA preparation',
      'MIS, dashboards and management reporting',
      'Investor-ready financial modelling'
    ],
    related: ['corporate-law', 'income-tax-planning', 'export-import']
  },
  {
    slug: 'litigation-appeals',
    title: 'Litigation & Appeals',
    short: 'Representation in Search, Survey, Raid & Inspection — with appeals up to Tribunal, High Court and Supreme Court.',
    intro: 'When the notice has already arrived, you need experience — not theory. We defend matters across every tier of the Indian judicial hierarchy.',
    icon: 'shield',
    highlights: [
      'Customs, GST and Income Tax SCN replies',
      'Search, survey, raid and inspection representation',
      'Appeals before CESTAT, GSTAT, ITAT and Commissioner (Appeals)',
      'Writ petitions before High Courts',
      'Special Leave Petitions and appeals before the Supreme Court',
      'Settlement Commission and ADR options'
    ],
    related: ['customs-advisory', 'gst-indirect-tax', 'income-tax-planning']
  }
];

export const findService = (slug) => services.find(s => s.slug === slug);
