export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  client: string;
  role: string;
  duration: string;
  category: string;
  filterCategory: "hospitality" | "performance" | "brand" | "consulting";
  featuredOnHome?: boolean;
  resultMetric: string;
  resultLabel: string;
  colorScheme: "purple" | "green" | "coral" | "gold" | "navy" | "wine";
  cardBg: string;
  accentColor: string;
  heroImage: string;
  tagline: string;
  story: string;
  challenges: string[];
  approach: string[];
  toolsUsed: string[];
  results: string[];
  keyLearningOrWhyItMatters: {
    heading: string;
    text: string;
  };
  sectorsOrThemes?: {
    title: string;
    items: string[];
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    slug: "aaa-direct-booking-growth",
    number: "01",
    title: "AAA Hotels & Resorts — Direct Booking Growth (0% to 30%)",
    shortTitle: "Turning 0% direct bookings into 30% of online revenue",
    client: "AAA Hotels & Resorts (Filitheyo, Medhufushi, Hondaafushi Island Resorts)",
    role: "Cluster Manager – Marketing & Communications",
    duration: "August 2025 – Present",
    category: "Luxury Hospitality | Direct Booking | Website | SEO | Performance Marketing",
    filterCategory: "hospitality",
    featuredOnHome: true,
    resultMetric: "0 → 30%",
    resultLabel: "Direct Booking Share",
    colorScheme: "purple",
    cardBg: "var(--lavender)",
    accentColor: "#8472a9",
    heroImage: "https://res.cloudinary.com/dyp247eoh/image/upload/q_auto:best,f_auto,e_sharpen:90,e_improve/v1791358709/images_-_2026-10-07T130759.249_mqoups.jpg",
    tagline: "Building an owned high-margin booking engine from the ground up for 3 luxury Maldivian resort properties.",
    story: "When I joined AAA Hotels & Resorts as Cluster Manager, direct website bookings sat at 0%. The entire booking pipeline flowed through OTAs — Booking.com, Expedia, Agoda — with their high commission structures eroding margin and limiting our ability to build direct guest relationships. The resort chain also lacked in-house digital marketing capability, and there was no proper backend integration through Google Tag Manager across our Meta and Google campaigns.\n\nI saw an opportunity to fundamentally shift how the group approached digital — building an owned booking channel, establishing full-funnel analytics, and taking marketing capability in-house.",
    challenges: [
      "Zero direct website bookings — 100% reliance on high-commission OTAs",
      "No proper backend integration for Meta and Google advertising campaigns",
      "No in-house digital marketing capability across the three resort brands",
      "No unified tracking, analytics, or performance visibility for executive leadership",
      "High commission costs heavily eroding profit margins across room inventory",
      "Fragmented brand presence and inconsistent digital touchpoints across three properties"
    ],
    approach: [
      "Built the cluster's main resort website from scratch on WordPress — including all pages, rich media content, and daily maintenance for all three resort brands",
      "Created conversion events tightly integrated with driving targeted campaigns to direct website bookings",
      "Established full backend integration through Google Tag Manager for all Meta and Google campaigns",
      "Set up complete enterprise tracking infrastructure: GA4, Meta Pixel, custom event triggers, and conversion tracking across all platforms",
      "Built an in-house Google Ads and SEO function from scratch (previously outsourced to external vendors)",
      "Coordinated with third-party booking engine partners: Profitroom, GLOPSS Marketing, and Affilired Spain",
      "Aligned direct booking incentive strategy with OTA and affiliate partner relationships to protect rate parity while boosting direct perks"
    ],
    toolsUsed: [
      "WordPress",
      "Google Tag Manager",
      "GA4",
      "Meta Pixel",
      "Google Ads",
      "Meta Ads Manager",
      "SEMrush",
      "Ahrefs",
      "Yoast Premium",
      "Looker Studio",
      "Profitroom",
      "GLOPSS Marketing",
      "Affilired Spain"
    ],
    results: [
      "Grew direct website booking share from 0% to 30% of all online bookings across the resort cluster",
      "Established the first-ever in-house digital marketing programme for the luxury resort chain",
      "Built comprehensive backend tracking integration across all active advertising campaigns",
      "Significantly reduced long-term dependency on high-commission OTA channels",
      "Created full-funnel analytics visibility for executive management reporting and revenue forecasting"
    ],
    keyLearningOrWhyItMatters: {
      heading: "Key Learning",
      text: "Luxury hospitality marketing requires balancing brand aesthetics with commercial performance. Building an in-house digital function was the single highest-impact decision — it gave us control, transparency, and the ability to iterate daily."
    }
  },
  {
    id: "cs-2",
    slug: "aaa-yandex-russian-market",
    number: "02",
    title: "AAA Hotels & Resorts — Yandex Russian Market Entry",
    shortTitle: "Opening the Russian market through Yandex advertising",
    client: "AAA Hotels & Resorts",
    role: "Cluster Manager – Marketing & Communications",
    duration: "2025 – Present",
    category: "Luxury Hospitality | International Marketing | Performance Advertising | Russian Market",
    filterCategory: "performance",
    featuredOnHome: true,
    resultMetric: "New",
    resultLabel: "Pioneering Market Capability",
    colorScheme: "green",
    cardBg: "var(--mint)",
    accentColor: "#3b6b47",
    heroImage: "https://res.cloudinary.com/dyp247eoh/image/upload/q_auto:best,f_auto,e_sharpen:90,e_improve/v1791358775/images_-_2026-10-07T130858.586_wkzd4s.jpg",
    tagline: "Pioneering Russian luxury market advertising through Yandex Direct & Metrica when traditional channels fell short.",
    story: "The Russian market represents significant value for luxury Maldivian resorts, but reaching Russian audiences requires platforms most Maldives-based marketing teams don't use — Yandex Direct and Yandex Metrica. When I identified this gap at AAA Hotels & Resorts, I introduced Yandex advertising as a strategic new capability for the resort chain.",
    challenges: [
      "Russian market traffic and bookings were minimal despite high organic demand for Maldivian luxury resorts",
      "Meta and Google have severe limitations and restricted effectiveness in Russia due to sanctions and market dynamics",
      "No existing Yandex capability or Russian localization within the resort chain",
      "Rare skill in the Maldivian resort marketing landscape requiring Cyrillic nuances and search behavior expertise"
    ],
    approach: [
      "Created new Yandex corporate accounts and infrastructure for the resort chain",
      "Set up Yandex Direct search and contextual advertising campaigns tailored to high-net-worth travellers",
      "Configured Yandex Metrica for deep results measurement, session replay, and analytics",
      "Developed Russian-market specific creative and messaging strategies highlighting pristine coral reefs, seaplane transfers, and luxury amenities",
      "Managed campaigns targeting Russian luxury traveller audiences across Moscow, St. Petersburg, and regional hubs",
      "Established performance benchmarks and continuous daily optimisation workflows"
    ],
    toolsUsed: [
      "Yandex Direct",
      "Yandex Metrica",
      "Meta Pixel",
      "Canva",
      "Adobe Photoshop",
      "Russian Language Copywriting"
    ],
    results: [
      "Successfully entered the Russian market as one of few Maldivian resorts with dedicated in-house Yandex advertising",
      "Built comprehensive Russian luxury audience data profiles through Yandex Metrica",
      "Established a highly differentiated capability that most competing Maldivian resorts lack",
      "Created an evergreen foundation for scaling Russian feeder market efforts year-round"
    ],
    keyLearningOrWhyItMatters: {
      heading: "Why This Matters",
      text: "Most Maldivian resort marketing teams stop at Meta and Google. Building Yandex capability required learning a new platform, understanding Russian audience preferences, and establishing tracking infrastructure that didn't exist in our stack. This is exactly the kind of specialised expertise luxury resorts need to differentiate."
    }
  },
  {
    id: "cs-3",
    slug: "aaa-medhufushi-india-campaign",
    number: "03",
    title: "Medhufushi Island Resort — Indian Market Awareness Campaign",
    shortTitle: "Reaching millions of luxury travellers at $0.02 CPM efficiency",
    client: "AAA Hotels & Resorts — Medhufushi Island Resort",
    role: "Cluster Manager – Marketing & Communications",
    duration: "Ongoing",
    category: "Performance Marketing | Meta Ads | Indian Market | Feeder Strategy",
    filterCategory: "performance",
    featuredOnHome: true,
    resultMetric: "$0.02",
    resultLabel: "Cost Per Result (CPM)",
    colorScheme: "coral",
    cardBg: "var(--coral)",
    accentColor: "#b23b26",
    heroImage: "https://res.cloudinary.com/dyp247eoh/image/upload/q_auto:best,f_auto,e_sharpen:90,e_improve/v1791358975/hq720_u1a2ll.jpg",
    tagline: "Driving hyper-efficient brand awareness and qualified website visits from India's high-growth luxury travel segment.",
    story: "India represents one of the largest and most dynamic emerging luxury travel markets for Maldivian resorts. For Medhufushi Island Resort, I developed and continue to run a highly efficient awareness and web visits campaign targeting Indian luxury travellers across tier-1 cities.",
    challenges: [
      "High competition among Indian outbound travellers considering competing tropical destinations (Thailand, Bali, Mauritius)",
      "Need to stand out while maintaining strict cost-efficiency on paid media budgets",
      "Ensuring message resonance with high-income families, honeymooners, and leisure seekers in Mumbai, Delhi, Bengaluru, and Chennai"
    ],
    approach: [
      "Engineered a Meta Ads campaign focused on Indian market awareness, high-intent video views, and qualified web visits",
      "Designed audience segmentation targeting Indian luxury travellers, affluent lifestyle segments, and luxury honeymooners",
      "Curated creative development tailored to Indian cultural preferences, highlighting culinary diversity, water sports, and private overwater villas",
      "Implemented continuous A/B testing on ad creatives and landing page experiences for maximum efficiency"
    ],
    toolsUsed: [
      "Meta Ads Manager",
      "GA4",
      "Meta Pixel",
      "Canva Pro",
      "Looker Studio",
      "Video Storytelling Tools"
    ],
    results: [
      "Generated millions of qualified reach and impressions across target Indian demographics",
      "Achieved an exceptional $0.02 cost per result — ranking among the highest efficiency campaigns in the region",
      "Consistently driven high-intent Indian traffic to direct booking reservation channels",
      "Campaign remains ongoing and continues to deliver dependable performance month over month"
    ],
    keyLearningOrWhyItMatters: {
      heading: "Key Takeaway",
      text: "In hyper-competitive feeder markets like India, creative framing that balances luxury aspiration with cultural resonance unlocks viral engagement while driving acquisition costs down to fractions of standard benchmarks."
    }
  },
  {
    id: "cs-4",
    slug: "aaa-hondaafushi-eu-campaign",
    number: "04",
    title: "Hondaafushi Island Resort — EU Market Special Packages",
    shortTitle: "Driving direct sales with European seasonal package campaigns",
    client: "AAA Hotels & Resorts — Hondaafushi Island Resort",
    role: "Cluster Manager – Marketing & Communications",
    duration: "2025 – Present",
    category: "Meta Ads | EU Market | Direct Booking | Seasonal Campaigns",
    filterCategory: "hospitality",
    featuredOnHome: false,
    resultMetric: "High ROAS",
    resultLabel: "Direct Package Sales",
    colorScheme: "wine",
    cardBg: "rgba(116, 50, 71, 0.12)",
    accentColor: "var(--wine)",
    heroImage: "https://res.cloudinary.com/dyp247eoh/image/upload/q_auto:best,f_auto,e_sharpen:80,e_improve/v1791359031/hondaafushi-island-pool-overview_ll8lyr.webp",
    tagline: "Targeting high-value European travellers with irresistible seasonal package promotions that convert directly on site.",
    story: "The European market is Hondaafushi Island Resort's key feeder market for premium bookings. I developed a series of special package campaigns targeting European travellers through Meta Sales Ads, driving direct website bookings for early booking offers, seasonal packages, and festive season promotions.",
    challenges: [
      "European travellers have long booking lead times and expect detailed package transparency",
      "Heavy reliance on traditional European tour operators before launching digital direct channels",
      "Need to establish Hondaafushi as a distinct, natural island paradise amidst numerous boutique competitors"
    ],
    approach: [
      "Structured Meta Sales Ads campaigns targeting EU market luxury travellers across Germany, UK, Switzerland, and France",
      "Engineered attractive special package offers: Early Booking, Early Winner, November Packages, and Festive Season Packages",
      "Executed direct website booking optimisation and end-to-end conversion tracking via Profitroom",
      "Maintained continuous creative testing, copy localisation, and audience refinement"
    ],
    toolsUsed: [
      "Meta Ads Manager",
      "Profitroom Engine",
      "Google Analytics 4",
      "Canva / Photoshop",
      "Multilingual Copy Frameworks"
    ],
    results: [
      "Multiple package sales driven directly through the resort website without OTA intermediary fees",
      "Achieved strong return on ad spend (ROAS) across all seasonal campaigns",
      "Established Hondaafushi Island Resort as a preferred choice in the EU luxury dive and relaxation market",
      "Generated confirmed bookings across Early Booking, November, and Festive high-demand periods"
    ],
    keyLearningOrWhyItMatters: {
      heading: "Strategic Value",
      text: "Packaging long-stay perks and clear seasonal value propositions directly addresses European travellers' high-consideration buying cycle, enabling premium direct capture."
    }
  },
  {
    id: "cs-5",
    slug: "aaa-off-season-promotions",
    number: "05",
    title: "Off-Season Local Offer Promotions (Medhufushi & Hondaafushi)",
    shortTitle: "Filling off-season occupancy through targeted domestic campaigns",
    client: "AAA Hotels & Resorts — Medhufushi & Hondaafushi Island Resorts",
    role: "Cluster Manager – Marketing & Communications",
    duration: "2025",
    category: "Seasonal Marketing | Local Market | Meta Ads | Direct Booking",
    filterCategory: "hospitality",
    featuredOnHome: false,
    resultMetric: "Occupancy Boost",
    resultLabel: "Low-Season Revenue",
    colorScheme: "gold",
    cardBg: "rgba(229, 185, 114, 0.16)",
    accentColor: "#9a7024",
    heroImage: "https://res.cloudinary.com/dyp247eoh/image/upload/q_auto:best,f_auto,e_sharpen:90,e_improve/v1791359085/maxresdefault_1_ecnygp.jpg",
    tagline: "Transforming low-season occupancy hurdles into high-yielding domestic travel campaigns.",
    story: "Off-season presents a unique challenge for luxury resorts — international occupancy drops, but fixed operational costs remain. I developed a targeted off-season local offer promotion campaign for both Medhufushi and Hondaafushi Island Resorts, focused on the domestic Maldivian market and resident expatriates to fill low-season occupancy.",
    challenges: [
      "Severe dip in international tourist arrivals during monsoonal low-season months",
      "Fixed overhead costs requiring alternative predictable cash flow streams",
      "Crafting compelling packages that cater specifically to local Maldivian weekenders and domestic holidays"
    ],
    approach: [
      "Segmented Meta advertising campaigns specifically targeting local Maldivian residents and resident expats",
      "Created attractive domestic package rates with seaplane and speedboat transfer allowances",
      "Delivered localised Dhivehi/English creative and cultural messaging",
      "Offered direct booking incentives, instant WhatsApp concierge booking, and weekend promotions",
      "Installed rigorous conversion tracking to measure exact ROAS and booking volume"
    ],
    toolsUsed: [
      "Meta Ads Manager",
      "WhatsApp Business API",
      "GA4 Custom Events",
      "Localised Content Assets"
    ],
    results: [
      "Achieved strong ROAS during traditionally quiet, low-occupancy months",
      "Generated confirmed domestic room nights and restaurant revenue driven directly through digital channels",
      "Created a repeatable blueprint and playbook for future off-season revenue optimisation"
    ],
    keyLearningOrWhyItMatters: {
      heading: "Key Insight",
      text: "Domestic and regional resident markets are often overlooked by luxury resorts, but with the right pricing and local messaging, they provide crucial high-margin cushion during international shoulder seasons."
    }
  },
  {
    id: "cs-6",
    slug: "aaa-brand-protection",
    number: "06",
    title: "Brand Protection — Fake Domain Investigation & Legal Action",
    shortTitle: "Protecting brand reputation & guest revenue against fake domains",
    client: "AAA Hotels & Resorts",
    role: "Cluster Manager – Marketing & Communications",
    duration: "2025",
    category: "Brand Protection | Reputation Management | Legal & Investigation",
    filterCategory: "brand",
    featuredOnHome: false,
    resultMetric: "100% Mitigated",
    resultLabel: "Brand Integrity Secured",
    colorScheme: "purple",
    cardBg: "rgba(185, 173, 214, 0.18)",
    accentColor: "var(--aubergine)",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=90",
    tagline: "Uncovering fraudulent clone domains, conducting digital forensics, and enforcing legal takedowns to protect guest trust.",
    story: "As AAA's resort brands grew in visibility, we discovered fake domains impersonating our three resorts — using misleadingly similar URLs to drive web visitors to competing or fraudulent channels. This required careful investigation and coordinated legal action.",
    challenges: [
      "Multiple fake domains and spoofed websites impersonating AAA's three resort properties",
      "Fraudulent websites intercepting high-intent booking traffic and redirecting guests to rogue intermediaries",
      "Severe risk of guest scams, financial loss, and severe brand reputational damage",
      "Legal complexity of cross-jurisdiction domain enforcement, registrar disputes, and anonymity shields"
    ],
    approach: [
      "Executed systematic identification and monitoring of all spoofed domains impersonating resort brands",
      "Conducted deep forensic investigation of domain ownership, WHOIS records, server footprints, and geographic origins",
      "Compiled detailed inspection dossiers and legal documentation of trademark infringements",
      "Filed formal legal action reports and takedown notices with ICANN, domain registrars, and relevant hosting authorities",
      "Coordinated cross-functional legal action against malicious actors to protect corporate goodwill"
    ],
    toolsUsed: [
      "WHOIS & DNS Forensics",
      "IP Geolocation Tools",
      "ICANN Dispute Frameworks",
      "Legal Dossier Documentation",
      "Search Engine Delisting Requests"
    ],
    results: [
      "Successfully identified fake domain operators, associated registrant identities, and infrastructure locations",
      "Filed enforceable legal and abuse actions leading to domain suspension and delisting",
      "Protected AAA's brand reputation and guest bookings across all three luxury properties",
      "Established an ongoing brand protection and domain monitoring protocol for rapid incident response"
    ],
    keyLearningOrWhyItMatters: {
      heading: "Why This Matters",
      text: "Luxury hospitality brands are frequent targets for domain impersonation and fraud. Proactive brand protection is often overlooked but critical — it is an indispensable pillar of the modern marketing and communications function."
    }
  },
  {
    id: "cs-7",
    slug: "aaa-content-unit",
    number: "07",
    title: "Establishing the In-House Content Creation Unit",
    shortTitle: "Building an always-on creative content studio across 3 resorts",
    client: "AAA Hotels & Resorts",
    role: "Cluster Manager – Marketing & Communications",
    duration: "2025 – Present",
    category: "Content Creation | Creative Operations | Team Building | Visual Assets",
    filterCategory: "brand",
    featuredOnHome: false,
    resultMetric: "3 Resorts",
    resultLabel: "Always-On Content Engine",
    colorScheme: "navy",
    cardBg: "rgba(40, 17, 39, 0.08)",
    accentColor: "var(--aubergine)",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=90",
    tagline: "Equipping, standardizing, and leading an in-house visual asset pipeline for continuous high-production storytelling.",
    story: "Luxury resorts live and die by their imagery. Recognising that AAA's three resorts needed a dedicated, always-on content capability, I established a full content creation unit — analysing equipment needs, procuring the right gear, and setting up an end-to-end content capture and production workflow.",
    challenges: [
      "Reliance on expensive, sporadic agency visits resulted in outdated visual assets and seasonal gaps",
      "Lack of standardized in-house camera, drone, and underwater filming gear across remote island resorts",
      "Need to fuel 28 social media channels with fresh, high-resolution guest experiences daily"
    ],
    approach: [
      "Analysed comprehensive content creation equipment needs across Filitheyo, Medhufushi, and Hondaafushi",
      "Sourced and procured professional mirrorless cameras, cinematic lenses, aerial 4K drones, and underwater video equipment",
      "Established core content capture themes: Accommodation, Nature, Experience, Excursions, and Social Content",
      "Formulated guest and high-tier influencer collaboration workflows and shoot schedules",
      "Built structured cloud-based image and video libraries for instant marketing deployment across all channels",
      "Coordinated directly with in-house designers to maximize daily social output and campaign turnaround"
    ],
    sectorsOrThemes: [
      {
        title: "Content Themes Covered",
        items: [
          "Resort Accommodation — Luxury villas, overwater bungalows, private suites, and interior details",
          "Nature & Scenery — Island landscapes, house reefs, vibrant marine life, Maldivian sunsets, and turquoise lagoons",
          "Guest Experience — Fine dining, floating breakfasts, wellness spa therapies, and authentic hospitality moments",
          "Excursions — Scuba diving, manta ray snorkelling, water sports, and uninhabited island hopping",
          "Social Content — Guest interactions, behind-the-scenes staff culture, and emotive brand storytelling",
          "Influencer Collaborations — On-property production with global travel creators and luxury brand ambassadors"
        ]
      }
    ],
    toolsUsed: [
      "Sony Cinema & Mirrorless Cameras",
      "DJI 4K Drones & Gimbals",
      "Underwater Housing Rigging",
      "Adobe Premiere Pro",
      "Adobe Lightroom",
      "Brand Asset DAM"
    ],
    results: [
      "Established permanent in-house content creation capability across all three resort properties",
      "Built comprehensive, evergreen image and 4K video asset libraries for each resort brand",
      "Dramatically reduced ongoing dependency and expenditure on external creative agencies",
      "Enabled always-on, real-time content delivery for social media, paid ad campaigns, and PR press releases",
      "Created consistent, elevated creative direction aligned with global luxury benchmarks"
    ],
    keyLearningOrWhyItMatters: {
      heading: "Operational Impact",
      text: "Owning the content engine in luxury hospitality turns marketing from a passive, episodic campaign approach into a daily, responsive storytelling machine that captivates travellers across their decision journey."
    }
  },
  {
    id: "cs-8",
    slug: "muni-project-sales-record",
    number: "08",
    title: "Muni Group — Record Project Sales Achievement (2.5M+ Rufiyaa)",
    shortTitle: "Achieving record 2.5M+ MVR B2B sales in competitive resort supply",
    client: "Muni Group of Companies",
    role: "Assistant Manager – Sales & Marketing",
    duration: "August 2023 – August 2025",
    category: "Project Sales | B2B | Government Tenders | Resort Supply",
    filterCategory: "consulting",
    featuredOnHome: false,
    resultMetric: "2.5M+ MVR",
    resultLabel: "8-Year Sales Record",
    colorScheme: "coral",
    cardBg: "rgba(228, 110, 89, 0.12)",
    accentColor: "var(--coral)",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90",
    tagline: "Driving high-volume B2B contract wins across top Maldivian resort conglomerates and public sector tenders.",
    story: "Project sales in the Maldives resort supply, construction, and government sectors is highly competitive and relationship-driven. During my time at Muni Group of Companies, I achieved a record project sales milestone — the highest in the company's 8-year history for that period.",
    challenges: [
      "Highly competitive Maldivian commercial supply landscape with entrenched multinational suppliers",
      "Complex stakeholder ecosystems spanning resort holding companies, general contractors, and government ministries",
      "Stringent procurement criteria, strict tender deadlines, and multi-tier compliance requirements",
      "Balancing eight distinct brand categories within the Muni portfolio simultaneously"
    ],
    approach: [
      "Spearheaded end-to-end B2B sales strategy for major hospitality renovation and construction projects",
      "Cultivated strategic partnerships with tier-1 resort management groups and procurement directors",
      "Led high-stakes government tender submissions with comprehensive technical and financial proposals",
      "Orchestrated cross-functional collaboration between supply chain, warehouse logistics, and technical sales reps",
      "Positioned Muni as the premier one-stop partner for commercial flooring, paint, furniture, and building solutions"
    ],
    sectorsOrThemes: [
      {
        title: "Resort Sector Clients",
        items: [
          "Universal Group",
          "Adaaran Group",
          "Cinnamon Group",
          "SO Maldives",
          "Sai Lagoon",
          "HardRock Maldives",
          "Champa Resorts",
          "Centara Resorts",
          "Plus additional luxury resort partners"
        ]
      },
      {
        title: "Government Tenders & Special Projects",
        items: [
          "STO (State Trading Organisation)",
          "MTCC (Maldives Transport & Contracting Company)",
          "Ministry of Higher Education",
          "Maldives Pension Administration Office",
          "Ministry of Finance",
          "Ministry of Foreign Affairs"
        ]
      },
      {
        title: "Muni Brand Portfolio Handled",
        items: [
          "Muni Homecare",
          "Muni Paint Center",
          "Muni Living Center",
          "Muni Furniture Center",
          "Muni Traders",
          "Muni Clearance Depot",
          "Muni Foundation",
          "Muni Travels"
        ]
      }
    ],
    toolsUsed: [
      "B2B CRM Systems",
      "Tender Management Portals",
      "Enterprise Sales Frameworks",
      "Proposal Pitch Suites"
    ],
    results: [
      "Achieved 2.5+ Million Rufiyaa in project sales — the single highest revenue period in 8 years of company history",
      "Built enduring relationships across major resort chains, government institutions, and construction giants",
      "Delivered consistent double-digit B2B growth across multiple brand portfolios",
      "Established Muni Group as the preferred supplier for landmark national projects"
    ],
    keyLearningOrWhyItMatters: {
      heading: "Key Takeaway",
      text: "B2B commercial success in high-value island economies relies on pairing deep institutional trust with flawless technical execution and rapid logistics fulfilment."
    }
  },
  {
    id: "cs-9",
    slug: "muni-sps-flooring-campaign",
    number: "09",
    title: "Muni Living Center — SPS Flooring WhatsApp Campaign",
    shortTitle: "Clearing entire SPS flooring inventory in 1 week via WhatsApp",
    client: "Muni Group of Companies — Muni Living Center",
    role: "Assistant Manager – Sales & Marketing",
    duration: "2024",
    category: "WhatsApp Marketing | Stock Clearance | High ROI Campaign | Direct Engagement",
    filterCategory: "performance",
    featuredOnHome: false,
    resultMetric: "1 Week",
    resultLabel: "100% Inventory Cleared",
    colorScheme: "green",
    cardBg: "rgba(187, 214, 189, 0.18)",
    accentColor: "#2d5e38",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
    tagline: "A masterclass in rapid direct-to-customer conversion using high-urgency conversational commerce.",
    story: "Muni Living Center had SPS flooring stock that needed to be cleared urgently. Traditional advertising channels would have taken weeks and generated limited urgency. I designed a WhatsApp-driven campaign that combined direct customer engagement with time-limited urgency — clearing the entire stock within 1 week.",
    challenges: [
      "Substantial high-value SPS flooring inventory occupying prime warehouse space requiring rapid clearance",
      "Strictly limited timeline and promotional budget",
      "Need to reach qualified property owners, contractors, and interior designers directly without broadcast spam fatigue",
      "Ensuring immediate sales team responsiveness to handle sudden inbound chat volume"
    ],
    approach: [
      "Designed a WhatsApp-first campaign structure optimized for instant conversational selling",
      "Created compelling visual cards and video demonstrations emphasising waterproof durability and limited-time discounts",
      "Segmented historical customer lists by past purchasing behaviour, contractors, and renovation leads",
      "Trained and coordinated showroom sales personnel for sub-3-minute response times and instant quote delivery",
      "Monitored live message conversions and adjusted stock allocation in real time"
    ],
    toolsUsed: [
      "WhatsApp Business Platform",
      "Segmented Customer Database",
      "Canva Pro Creative Assets",
      "Rapid Lead Routing System"
    ],
    results: [
      "Cleared the entire SPS flooring stock within exactly 7 days",
      "Delivered the highest ROI promotional campaign for Muni Living Center in that fiscal period",
      "Established WhatsApp as a permanent, high-converting direct sales channel for new product launches",
      "Created a proven playbook for future inventory clearances and flash sales"
    ],
    keyLearningOrWhyItMatters: {
      heading: "Growth Playbook",
      text: "Direct conversational channels like WhatsApp remove friction from considered purchases when matched with razor-sharp segmentation, honest urgency, and rapid sales response."
    }
  },
  {
    id: "cs-10",
    slug: "muni-brand-representation",
    number: "10",
    title: "Muni Group — Brand Representation & Media Relations",
    shortTitle: "Amplifying brand authority across national media, expos & CSR",
    client: "Muni Group of Companies",
    role: "Assistant Manager – Sales & Marketing",
    duration: "August 2023 – August 2025",
    category: "PR & Communications | Brand Representation | Media Relations | Events",
    filterCategory: "brand",
    featuredOnHome: false,
    resultMetric: "National",
    resultLabel: "Media & Event Visibility",
    colorScheme: "wine",
    cardBg: "rgba(116, 50, 71, 0.1)",
    accentColor: "var(--wine)",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=90",
    tagline: "Serving as official spokesperson, media liaison, and event lead to cement enterprise credibility across the Maldives.",
    story: "Building brand visibility in the competitive Maldivian market requires consistent public presence across media, industry events, and community engagement. As Assistant Manager – Sales & Marketing at Muni Group, I represented the group across multiple media platforms, industry events, sponsorships, and community activities.",
    challenges: [
      "Establishing top-of-mind brand recognition across diverse B2B and B2C segments",
      "Managing complex media relationships and live television/press interviews",
      "Representing 8 distinct subsidiary brands consistently under a unified corporate prestige umbrella"
    ],
    approach: [
      "Acted as corporate spokesperson and media representative on leading national broadcast networks",
      "Designed and managed Muni's presence at flagship trade exhibitions, including Build Expo Maldives",
      "Spearheaded community and Corporate Social Responsibility (CSR) initiatives in partnership with luxury resorts",
      "Organised nationwide customer outreach programmes, island shop merchant visits, and interactive roadshows"
    ],
    sectorsOrThemes: [
      {
        title: "Media Appearances",
        items: [
          "PSM (Public Service Media Maldives) — Live coverage and corporate features",
          "PVM (Public Voice Maldives) — In-depth trade and business discussions",
          "Mihaaru News Platform — National press coverage and product spotlight articles",
          "Additional leading Maldivian news & television platforms"
        ]
      },
      {
        title: "Industry Events & Sponsorships",
        items: [
          "Build Expo Maldives — Headed pavilion design, attendee engagement, and corporate PR",
          "Industry Award Ceremonies representing Muni brand portfolio",
          "National marketing summits and international business symposiums"
        ]
      },
      {
        title: "Corporate Social Responsibility (CSR)",
        items: [
          "Contributed to Fushifaru Resort CSR sustainability initiatives",
          "Community engagement programmes for local island schools and youth clubs",
          "Eco-friendly building product advocacy and sustainability communications"
        ]
      },
      {
        title: "Customer & Merchant Engagement",
        items: [
          "Comprehensive customer visits across the Maldivian atolls",
          "Island shop visits and merchant partnership building",
          "Resort partner visits with chief engineers and project directors",
          "Special roadshows, live demonstrations, and in-shop activation events"
        ]
      }
    ],
    toolsUsed: [
      "Press Release Syndication",
      "Broadcast Media Protocol",
      "Exhibition Architecture",
      "Public Speaking & Media Relations"
    ],
    results: [
      "Substantially strengthened Muni Group's brand equity and visibility across national media",
      "Built an extensive network of top-tier media editors, industry executives, and government leaders",
      "Enhanced community goodwill through impactful CSR partnerships including Fushifaru Resort",
      "Solidified Muni brands as active, trusted industry thought leaders across the Maldives"
    ],
    keyLearningOrWhyItMatters: {
      heading: "Strategic Impact",
      text: "Consistent corporate presence across broadcast media, trade expos, and community initiatives turns brand equity into tangible commercial trust that accelerates sales cycles."
    }
  }
];
