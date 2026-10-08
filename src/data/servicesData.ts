export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  badge: string;
}

export interface ConsultingProcessStep {
  step: string;
  title: string;
  description: string;
  outcome: string;
}

export interface ConsultingClient {
  name: string;
  industry: string;
  scope: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const servicePillars: ServicePillar[] = [
  {
    id: "branding",
    number: "01",
    title: "Branding & Positioning",
    description: "Creating distinctive brand identities and positioning strategies that command pricing power and stand out in crowded global markets.",
    deliverables: [
      "Brand identity & visual narrative development",
      "Positioning strategy for new & international markets",
      "Brand storytelling, tone-of-voice & messaging frameworks",
      "Brand guidelines, assets & standard operating procedures"
    ],
    idealFor: "Hospitality brands, consumer products & new market entrants",
    badge: "Brand Identity"
  },
  {
    id: "strategy",
    number: "02",
    title: "Marketing Strategy & Orchestration",
    description: "Comprehensive go-to-market plans and operational roadmaps that align leadership vision with commercial revenue goals.",
    deliverables: [
      "Annual & quarterly marketing plans and growth roadmaps",
      "International market entry & feeder market penetration strategy",
      "Integrated campaign planning & multi-channel orchestration",
      "Marketing team leadership advisory, hiring & capability building"
    ],
    idealFor: "Resort groups, mid-size enterprises & expanding businesses",
    badge: "Growth Strategy"
  },
  {
    id: "digital",
    number: "03",
    title: "Digital Marketing & MarTech",
    description: "High-performance direct acquisition infrastructure combining paid advertising, search visibility, and server-side analytics.",
    deliverables: [
      "Meta Ads, Google Ads & Yandex Direct performance campaigns",
      "Enterprise SEO strategy, technical audits & search dominance",
      "High-converting website development & booking engine optimization",
      "Marketing technology stack setup (GA4, GTM, Pixel, CAPI, CRM)",
      "Content strategy & multi-channel social media architecture"
    ],
    idealFor: "Luxury hotels, e-commerce ventures & direct-to-consumer brands",
    badge: "Performance"
  },
  {
    id: "exports",
    number: "04",
    title: "International Business & Exports",
    description: "Cross-border marketing and export expansion frameworks tailored to regional consumer cultures across Europe, Asia, Middle East, and Russia.",
    deliverables: [
      "International market entry & trade partner matchmaking",
      "Cross-border marketing & cultural localization strategies",
      "Export marketing communications & B2B collateral",
      "International trade show, expo & exhibition strategy"
    ],
    idealFor: "Export-oriented manufacturers, premium goods & trading houses",
    badge: "Cross-Border"
  },
  {
    id: "tourism",
    number: "05",
    title: "Tourism & Destination Marketing",
    description: "Specialized destination branding and feeder market acquisition strategies designed exclusively for the luxury hospitality sector.",
    deliverables: [
      "Destination marketing & multi-atoll luxury positioning",
      "Key feeder market strategy (Europe, India, Russia, Middle East, USA)",
      "Tourism board, DMO & travel partner coordination",
      "Hospitality-specific direct booking & guest retention systems"
    ],
    idealFor: "Island resorts, boutique retreats, dive operators & liveaboards",
    badge: "Hospitality"
  }
];

export const consultingProcess: ConsultingProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description: "An initial 30-minute strategic consultation to understand your business model, current roadblocks, target markets, and high-priority goals. Completely no-obligation.",
    outcome: "Clarity on fit and core growth opportunities"
  },
  {
    step: "02",
    title: "Tailored Proposal",
    description: "If we determine mutual alignment, I formulate a precise scope of work outlining deliverables, timelines, expected milestones, and clear commercial investment.",
    outcome: "Transparent roadmap with defined deliverables"
  },
  {
    step: "03",
    title: "Hands-On Execution",
    description: "Engagement proceeds through a disciplined blend of executive advisory sessions, direct hands-on technical execution, and continuous KPI monitoring.",
    outcome: "Agile sprints with weekly visibility"
  },
  {
    step: "04",
    title: "Measurable Delivery",
    description: "Whether structured as a strategic retainer, a focused advisory sprint, or a turnkey project launch, every initiative is measured against hard commercial ROI.",
    outcome: "Tangible business revenue & owned capability"
  }
];

export const recentClients: ConsultingClient[] = [
  {
    name: "Anchor Maldives",
    industry: "Consumer Goods & Distribution",
    scope: "Digital presence, brand positioning & promotional campaign architecture",
    tag: "Brand & Digital Strategy"
  },
  {
    name: "Baby Boo",
    industry: "Mother & Baby Care Retail",
    scope: "E-commerce strategy, social media advertising & customer retention funnel",
    tag: "E-Commerce Growth"
  },
  {
    name: "Ethera Api Maldives",
    industry: "Expatriate & Community Services",
    scope: "Brand communications, event promotions & digital community engagement",
    tag: "Community PR & Media"
  },
  {
    name: "Chrish Royal Gems & Jewellery",
    industry: "Luxury Gemstones & Fine Jewellery",
    scope: "Cross-border brand identity, export marketing & private client acquisition",
    tag: "Luxury Branding & Exports"
  }
];

export const consultingFAQs: FAQItem[] = [
  {
    question: "Are you available full-time for consulting?",
    answer: "No — my primary role is Cluster Manager – Marketing & Communications at AAA Hotels & Resorts (overseeing Filitheyo, Medhufushi, and Hondaafushi Island Resorts). My independent consulting practice is selective, taking on a strictly limited number of advisory clients per quarter to ensure undivided senior attention and exceptional quality."
  },
  {
    question: "How do you structure engagement fees?",
    answer: "Engagement models are structured to match your exact business requirements: hourly advisory for executive soundboarding, fixed project-based fees for defined-scope initiatives (such as a website rebuild, market entry blueprint, or MarTech overhaul), or monthly retainers for ongoing strategic growth partnerships. The appropriate model is agreed upon following our discovery call."
  },
  {
    question: "What size businesses do you typically partner with?",
    answer: "I work with a range of businesses from ambitious founder-led ventures to established mid-size enterprises and resort groups. The common denominator is that leadership values direct, high-level marketing expertise and seeks to work directly with an experienced practitioner rather than being handed off to junior agency teams."
  },
  {
    question: "Do you collaborate with clients outside the Maldives?",
    answer: "Yes, absolutely. A significant portion of my professional career spans cross-border campaigns across Europe, the USA, Middle East, Asia, and Russia. I comfortably run remote advisory sprints, asynchronous execution, and virtual workshops with international teams worldwide."
  },
  {
    question: "What makes your consulting approach different from traditional agencies?",
    answer: "Traditional agencies often come with high overheads, slow communication layers, and cookie-cutter campaign templates. Working directly with me provides senior strategic leadership combined with hands-on technical execution — you get immediate, agile decisions and actionable work grounded in real-world luxury hospitality performance."
  }
];
