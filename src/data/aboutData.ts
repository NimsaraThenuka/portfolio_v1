export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
  keySkill: string;
}

export interface AcademicQualification {
  degree: string;
  institution: string;
  country: string;
  focus: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: "Completed" | "Pursuing";
}

export interface PhilosophyItem {
  number: string;
  title: string;
  summary: string;
  description: string;
}

export const aboutStory = {
  paragraphs: [
    "I'm a Marketing and Communications professional with over 10 years of international experience spanning luxury hospitality, tourism, FMCG, and consumer services. My work bridges strategic brand thinking with hands-on digital execution — I love the moments where creativity, data, and storytelling come together to build genuine brand impact.",
    "Today, I lead the marketing and communications function for three luxury Maldivian resorts under AAA Hotels & Resorts — Filitheyo Island Resort, Medhufushi Island Resort, and Hondaafushi Island Resort. My role covers overall digital marketing strategy, social media across 28 channels, website management, online bookings, influencer collaborations, PR, and communications.",
    "Beyond my primary role, I take on selective independent consulting engagements — helping hospitality brands, international businesses, e-commerce ventures, and consumer brands with digital marketing strategy, website development, and brand communications.",
    "What drives me is the intersection of luxury and performance. Marketing a luxury resort requires a unique balance — every asset needs to feel worthy of the guest experience while also delivering measurable commercial results. That's the work I love."
  ]
};

export const philosophies: PhilosophyItem[] = [
  {
    number: "01",
    title: "Strategic + Hands-on",
    summary: "Strategy grounded in daily execution",
    description: "I don't just plan high-level campaigns — I build them, launch them, configure tracking, and optimise them daily. That hands-on execution keeps my strategic thinking grounded in operational reality rather than abstract theory."
  },
  {
    number: "02",
    title: "Data-driven Storytelling",
    summary: "Creativity validated by rigorous analytics",
    description: "Great marketing requires both an emotive narrative and rigorous measurement. I combine evocative luxury brand stories with GA4, Looker Studio, and platform analytics to prove and continuously elevate what works."
  },
  {
    number: "03",
    title: "International Perspective",
    summary: "Cross-cultural nuance across global markets",
    description: "Having managed campaigns targeting travellers and buyers across Europe, the USA, the Middle East, Asia, and Russia, I bring a cross-market lens to every brand challenge — understanding how cultural nuances shape consumer decisions."
  },
  {
    number: "04",
    title: "Long-term Partnerships",
    summary: "Investing in relationships, not transactions",
    description: "My best work has always stemmed from deep, enduring relationships with clients, resort owners, media partners, and creative collaborators. I invest in sustainable value creation over short-term transactional quick fixes."
  }
];

export const careerTimeline: TimelineItem[] = [
  {
    period: "AUGUST 2025 — PRESENT",
    role: "Cluster Manager – Marketing & Communications",
    company: "AAA Hotels & Resorts",
    location: "Maldives (Filitheyo | Medhufushi | Hondaafushi)",
    highlights: [
      "Leading comprehensive marketing, PR, and communications strategy across 3 luxury resort properties",
      "Grew direct website bookings from 0% to 30% of total online room revenue",
      "Managing and curating 28 active social media channels with an in-house content creation unit",
      "Pioneered Yandex Russian market entry and multi-channel international feeder campaigns"
    ],
    keySkill: "Luxury Hospitality Leadership"
  },
  {
    period: "AUGUST 2023 — AUGUST 2025",
    role: "Assistant Manager – Sales & Marketing",
    company: "Muni Group of Companies",
    location: "Maldives",
    highlights: [
      "Achieved 2.5M+ Rufiyaa project sales record in B2B resort supply and government tenders",
      "Represented corporate brand across PSM, PVM, Mihaaru media, and Build Expo Maldives",
      "Executed high-urgency WhatsApp marketing campaigns clearing 100% target inventories",
      "Managed marketing and commercial relationships across 8 distinct business subsidiaries"
    ],
    keySkill: "B2B Project Sales & Media Relations"
  },
  {
    period: "JANUARY 2019 — JULY 2023",
    role: "Manager – International Marketing & Digital",
    company: "Planets Pick Holdings",
    location: "Sri Lanka",
    highlights: [
      "Spearheaded international market development, export promotion, and digital strategy",
      "Structured cross-border trade campaigns across Europe, Middle East, and Asia",
      "Led digital transformation, e-commerce infrastructure, and performance advertising"
    ],
    keySkill: "International Trade & Digital Growth"
  },
  {
    period: "FEBRUARY 2017 — JANUARY 2019",
    role: "Assistant Manager – Marketing",
    company: "Celebration Holdings (Pvt) Ltd",
    location: "Sri Lanka",
    highlights: [
      "Orchestrated brand launches, retail marketing promotions, and partner communications",
      "Managed consumer market research, creative direction, and campaign ROI tracking"
    ],
    keySkill: "Brand Management & Retail Marketing"
  },
  {
    period: "JANUARY 2015 — FEBRUARY 2017",
    role: "Management Trainee / Executive",
    company: "Unilever Sri Lanka",
    location: "Sri Lanka",
    highlights: [
      "Rotated through brand management, trade marketing, and market execution disciplines",
      "Formulated foundational brand analytics, FMCG brand strategy, and consumer insights"
    ],
    keySkill: "FMCG Brand Foundation"
  }
];

export const areasOfFocus = [
  {
    title: "Luxury Hospitality & Resort Marketing",
    desc: "Cluster-level brand positioning, direct booking engines, and guest journey architecture for island retreats.",
    tag: "Hospitality"
  },
  {
    title: "Tourism Marketing & Destination Branding",
    desc: "Multi-atoll tourism promotions, feeder market demand generation, and national travel board alignment.",
    tag: "Destination"
  },
  {
    title: "International Business & Export Marketing",
    desc: "Cross-border positioning, international distributor enablement, and global trade show execution.",
    tag: "Cross-Border"
  },
  {
    title: "Digital Marketing Strategy & Execution",
    desc: "End-to-end digital roadmaps combining website UX, search visibility, conversion funnels, and CRM.",
    tag: "Digital"
  },
  {
    title: "Performance Advertising",
    desc: "High-ROAS paid campaigns across Meta Ads, Google Ads, Yandex Direct, and TikTok Ads.",
    tag: "Paid Media"
  },
  {
    title: "PR, Communications & Brand Storytelling",
    desc: "Executive spokesperson representation, broadcast media relations, press syndication, and luxury narratives.",
    tag: "PR & Media"
  },
  {
    title: "Website Development & E-Commerce",
    desc: "Modern, high-speed website engineering, direct booking engine integration, and technical SEO.",
    tag: "Web / E-Com"
  },
  {
    title: "Content Creation & Creative Direction",
    desc: "On-island studio workflows, aerial drone cinematography, underwater captures, and creator collabs.",
    tag: "Creative"
  }
];

export const academicQualifications: AcademicQualification[] = [
  {
    degree: "MSc in Strategic Marketing",
    institution: "Queen Margaret University",
    country: "United Kingdom",
    focus: "Global marketing strategy, consumer behaviour, and corporate brand positioning"
  },
  {
    degree: "MBA in Tourism & Hospitality Management",
    institution: "Sichuan University",
    country: "Chengdu, China",
    focus: "International resort operations, destination branding, and cross-cultural tourism"
  },
  {
    degree: "BSc (Hons) in Marketing Management",
    institution: "University of Sri Jayewardenepura",
    country: "Sri Lanka",
    focus: "Core marketing disciplines, quantitative market research, and financial management"
  }
];

export const professionalCertifications: CertificationItem[] = [
  {
    title: "CPD UK Certified Digital Marketing Specialist",
    issuer: "Eminds Academy, Australia",
    status: "Completed"
  },
  {
    title: "Professional Diploma in Digital Marketing",
    issuer: "Asia Pacific Institute of Digital Marketing (APIDM)",
    status: "Completed"
  },
  {
    title: "Diploma in Strategic Brand Management",
    issuer: "Sri Lanka Institute of Marketing (SLIM)",
    status: "Completed"
  },
  {
    title: "Associate Member (AMSLIM)",
    issuer: "Sri Lanka Institute of Marketing (SLIM)",
    status: "Completed"
  },
  {
    title: "Strategic Hospitality Marketing Certificate",
    issuer: "Cornell University",
    status: "Pursuing"
  }
];

export const skillsMatrix = [
  { category: "Hospitality & Tourism", level: 98, skills: ["Direct Booking Strategy", "Resort Cluster Marketing", "Feeder Market Penetration", "OTA Negotiation", "Revenue Engine Optimization"] },
  { category: "Performance & Media", level: 95, skills: ["Meta Ads Manager", "Google Search & Display", "Yandex Direct & Metrica", "Conversion API (CAPI)", "Looker Studio"] },
  { category: "MarTech & Development", level: 92, skills: ["WordPress & Modern Web", "Google Tag Manager", "GA4 Enhanced E-commerce", "SEMrush / Ahrefs", "Profitroom Booking"] },
  { category: "Brand & Communications", level: 96, skills: ["Spokesperson & Broadcast Media", "Luxury Storytelling", "Brand Protection & Forensics", "Content Studio Leadership", "Trade Shows & Expos"] },
  { category: "International Business", level: 90, skills: ["Cross-Border Strategy", "B2B Project Sales", "Government Tenders", "Export Marketing", "Cultural Localization"] }
];

export const beyondWork = {
  text: "Outside my primary role, I'm deeply passionate about entrepreneurship, mentoring rising marketers, exploring how AI is reshaping creative workflows, and building brands that genuinely connect with people. I also founded and run Chrish Royal Gems & Jewellery — a Sri Lankan gems and fine rings business serving clients across the Maldives and Sri Lanka markets."
};
