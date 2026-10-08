export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  relationship: string;
  highlight: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "Saliya transformed our digital direct booking pipeline from virtually non-existent into a powerhouse generating 30% of our online bookings. His rare ability to combine high-level luxury brand storytelling with precise Google Tag Manager and Yandex execution is extraordinary.",
    author: "Executive Leadership",
    role: "General Management / CMO",
    organization: "AAA Hotels & Resorts, Maldives",
    relationship: "Direct Manager at Resort Cluster",
    highlight: "0% to 30% direct booking transformation"
  },
  {
    id: "test-2",
    quote: "During his tenure at Muni Group, Saliya delivered our highest project sales volume in 8 years (over 2.5M Rufiyaa) and represented our company on national television and Build Expo Maldives with exceptional distinction and professionalism.",
    author: "Senior Commercial Director",
    role: "Executive Management",
    organization: "Muni Group of Companies, Maldives",
    relationship: "Senior Leadership at Muni Group",
    highlight: "Record 2.5M+ MVR B2B sales achievement"
  },
  {
    id: "test-3",
    quote: "Working with Saliya gave us access to top-tier international marketing expertise without the overhead of an agency. He built our digital strategy, elevated our branding, and provided clear, measurable growth frameworks from day one.",
    author: "Founder & Managing Director",
    role: "Client Partner",
    organization: "Independent Consulting Engagement",
    relationship: "Consulting Client Partner",
    highlight: "Senior strategic clarity without agency overhead"
  }
];
