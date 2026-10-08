import React, { useState } from "react";
import {
  HotelIcon,
  TrendingUpIcon,
  SlidersIcon,
  ShieldCheckIcon,
  GlobeIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "./Icons";

export default function SkillsSnapshot() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const skillCategories = [
    {
      title: "Luxury Hospitality",
      icon: <HotelIcon className="w-4 h-4" />,
      level: 98,
      headline: "Cluster-Level Resort Leadership",
      summary: "End-to-end direct booking engines, rate parity alignment, OTA negotiation, and guest journey architecture.",
      capabilities: [
        "Direct Booking Engine Architecture (Profitroom / SynXis)",
        "3-Resort Cluster Marketing Management (AAA Hotels)",
        "International Feeder Market Strategy (EU, India, Russia, GCC)",
        "Off-Season Occupancy Maximization & Domestic Packages",
        "Influencer & High-End Creator Collaboration Protocols"
      ],
      tools: ["Profitroom", "GLOPSS", "Affilired Spain", "OTA Extranets", "WhatsApp Concierge"]
    },
    {
      title: "Performance & Paid Media",
      icon: <TrendingUpIcon className="w-4 h-4" />,
      level: 95,
      headline: "High-ROAS Full-Funnel Advertising",
      summary: "Pioneering multi-market ad campaigns, micro-targeting luxury demographics, and maximizing conversion efficiency.",
      capabilities: [
        "Meta Ads Manager (Sales, Video Views & Retargeting)",
        "Google Search, Display & Performance Max",
        "Yandex Direct & Metrica (Russian Luxury Market)",
        "Hyper-Efficient CPM Campaigns ($0.02 CPM in India)",
        "High-Urgency Conversational Commerce (WhatsApp Ads)"
      ],
      tools: ["Meta Ads", "Google Ads", "Yandex Direct", "TikTok Ads", "Looker Studio"]
    },
    {
      title: "MarTech & Analytics",
      icon: <SlidersIcon className="w-4 h-4" />,
      level: 93,
      headline: "Server-Side & Enterprise Tracking",
      summary: "First-party data infrastructure, cross-domain attribution, and real-time business intelligence dashboards.",
      capabilities: [
        "Google Tag Manager (GTM) Server-Side & Client-Side",
        "GA4 Enhanced E-commerce Tracking & Custom Funnels",
        "Meta Conversions API (CAPI) & Pixel Integration",
        "Enterprise Technical SEO & Core Web Vitals Audits",
        "Full-Funnel Executive Dashboards & Revenue Reporting"
      ],
      tools: ["GTM", "GA4", "SEMrush", "Ahrefs", "Looker Studio", "WordPress"]
    },
    {
      title: "Brand & Communications",
      icon: <ShieldCheckIcon className="w-4 h-4" />,
      level: 96,
      headline: "Executive PR, Media & Brand Protection",
      summary: "Spokesperson presence on national broadcast media, corporate expo pavilions, and proactive brand security.",
      capabilities: [
        "Spokesperson on National Media (PSM, PVM, Mihaaru)",
        "Flagship Expo Pavilion Leadership (Build Expo Maldives)",
        "In-House Content Creation Studio Architecture (4K Drone & UW)",
        "Brand Protection & Fake Domain Legal Investigation",
        "CSR & Sustainable Tourism Advocacy (Fushifaru Partnerships)"
      ],
      tools: ["Broadcast Media", "Sony Alpha Rigs", "DJI Drones", "Adobe Creative", "Legal Forensics"]
    },
    {
      title: "International Business",
      icon: <GlobeIcon className="w-4 h-4" />,
      level: 90,
      headline: "Cross-Border B2B & Export Sales",
      summary: "Record-breaking B2B tender victories, multinational supply contracts, and regional trade strategies.",
      capabilities: [
        "2.5M+ Rufiyaa Record B2B Project Sales Execution",
        "Government Tender Strategy (STO, MTCC, Ministries)",
        "Cross-Border Market Entry (Europe, USA, Middle East, Asia)",
        "Multi-Brand Corporate Portfolio Management (8 Subsidiaries)",
        "Fine Gemstones & Luxury Export Practice (Chrish Royal Gems)"
      ],
      tools: ["Enterprise CRM", "Tender Portals", "Export Logistics", "Contract Negotiation"]
    }
  ];

  const handleNextTab = () => {
    if (activeTab < skillCategories.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrevTab = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const current = skillCategories[activeTab];

  return (
    <div className="skills-snapshot-card">
      <div className="skills-header-row">
        <div>
          <div className="skills-pill">
            <SparklesIcon className="w-3.5 h-3.5 text-[var(--acid)]" />
            <span>Interactive Skills Matrix</span>
          </div>
          <h3 className="skills-headline">Verified Core Competencies</h3>
        </div>
        <p className="skills-subtext">
          A strategic blend of high-level luxury brand governance and technical execution across platforms.
        </p>
      </div>

      {/* Navigation helper & counter */}
      <div className="skills-nav-helper-bar">
        <div className="skills-arrow-nav">
          <button
            type="button"
            onClick={handlePrevTab}
            className="skills-arrow-nav-btn"
            aria-label="Previous skill pillar"
            disabled={activeTab === 0}
          >
            ‹
          </button>
          <span className="skills-nav-counter">
            {activeTab + 1}&nbsp;/&nbsp;{skillCategories.length}
          </span>
          <button
            type="button"
            onClick={handleNextTab}
            className="skills-arrow-nav-btn"
            aria-label="Next skill pillar"
            disabled={activeTab === skillCategories.length - 1}
          >
            ›
          </button>
        </div>
      </div>

      {/* Desktop Tabs View: All 5 tabs visible in a row */}
      <div className="skills-tabs-desktop">
        {skillCategories.map((cat, idx) => (
          <button
            key={cat.title}
            className={`skills-tab-btn ${activeTab === idx ? "active" : ""}`}
            onClick={() => setActiveTab(idx)}
            type="button"
          >
            <span className="tab-icon">{cat.icon}</span>
            <span className="tab-text">{cat.title}</span>
            <span className="tab-pct">{cat.level}%</span>
          </button>
        ))}
      </div>

      {/* Mobile Topic View: Only the active topic pill centered */}
      <div className="skills-mobile-topic-stage">
        <div key={current.title} className="skills-single-active-pill">
          <span className="tab-icon">{current.icon}</span>
          <span className="tab-text">{current.title}</span>
          <span className="tab-pct">{current.level}%</span>
        </div>
      </div>

      <div className="skills-active-panel">
        <div className="panel-left">
          <div className="panel-badge-row">
            <span className="panel-badge inline-flex items-center gap-2">
              {current.icon}
              <span>{current.title}</span>
            </span>
            <div className="meter-container">
              <span className="meter-label">Proficiency</span>
              <div className="meter-bar">
                <div className="meter-fill" style={{ width: `${current.level}%` }} />
              </div>
              <span className="meter-val">{current.level}%</span>
            </div>
          </div>
          <h4 className="panel-title">{current.headline}</h4>
          <p className="panel-summary">{current.summary}</p>

          <div className="panel-tools-strip">
            <span className="tools-title">Key Tool Stack:</span>
            <div className="tools-badges">
              {current.tools.map((t) => (
                <span key={t} className="tool-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="panel-right">
          <span className="capabilities-label">Strategic Deliverables & Capabilities</span>
          <ul className="capabilities-list">
            {current.capabilities.map((cap, i) => (
              <li key={i}>
                <CheckCircleIcon className="w-4 h-4 text-[var(--acid)] shrink-0 mt-0.5" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
