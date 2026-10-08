import React, { useState, useEffect } from "react";
import { PageId } from "./Navbar";
import { caseStudies, CaseStudy } from "../data/caseStudies";
import { Arrow, SparklesIcon, ExternalLinkIcon } from "./Icons";

interface WorkViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  images?: {
    beige: string;
    burgundy: string;
    navy: string;
    seated: string;
  };
}

export default function WorkView({ onNavigate, images }: WorkViewProps) {
  const heroImg = images?.navy || "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1000,c_limit/v1791344665/SaliyaWimalasena_variation_01_with_spectacles_whrwlk.png";

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Projects (10)" },
    { id: "hospitality", label: "Luxury Hospitality (5)" },
    { id: "performance", label: "Performance Marketing (3)" },
    { id: "brand", label: "Brand & Communications (2)" },
    { id: "consulting", label: "Project Sales & B2B (2)" },
  ];

  const currentTabIdx = filterTabs.findIndex((t) => t.id === activeFilter);
  const safeTabIdx = currentTabIdx >= 0 ? currentTabIdx : 0;

  const handlePrevFilter = () => {
    if (safeTabIdx > 0) {
      const prevId = filterTabs[safeTabIdx - 1].id;
      setActiveFilter(prevId);
      document.querySelector(`[data-work-chip="${prevId}"]`)?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handleNextFilter = () => {
    if (safeTabIdx < filterTabs.length - 1) {
      const nextId = filterTabs[safeTabIdx + 1].id;
      setActiveFilter(nextId);
      document.querySelector(`[data-work-chip="${nextId}"]`)?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".work-card, .project-card").forEach((el) => {
        el.classList.add("is-revealed");
        el.classList.add("in-view");
      });
    }, 10);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filteredProjects = caseStudies.filter((cs) => {
    if (activeFilter === "all") return true;
    return cs.filterCategory === activeFilter;
  });

  const handleCaseClick = (slug: string) => {
    onNavigate("work", slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mediaAndEvents = [
    {
      type: "Broadcast Media",
      outlet: "PSM (Public Service Media Maldives)",
      detail: "Live broadcast coverage and executive features discussing trade development and luxury hospitality supply.",
      badge: "National Television"
    },
    {
      type: "Broadcast Media",
      outlet: "PVM (Public Voice Maldives)",
      detail: "In-depth corporate panel features highlighting supply chain innovations across island resorts.",
      badge: "Broadcast Feature"
    },
    {
      type: "National Press",
      outlet: "Mihaaru News Platform",
      detail: "National coverage and product spotlight articles covering major retail launches and B2B contracts.",
      badge: "Print & Digital Press"
    },
    {
      type: "Trade Exhibitions",
      outlet: "Build Expo Maldives",
      detail: "Head of corporate pavilion architecture, B2B VIP networking, and lead generation for luxury resort developments.",
      badge: "Flagship Trade Expo"
    },
    {
      type: "Corporate Social Responsibility",
      outlet: "Fushifaru Resort CSR Initiatives",
      detail: "Community development, coral conservation advocacy, and island sustainability communications.",
      badge: "Resort Partnership CSR"
    },
    {
      type: "Merchant Engagement",
      outlet: "Nationwide Atoll Roadshows",
      detail: "Direct customer visits, island merchant relationships, and on-property resort engineering inspections across atolls.",
      badge: "Atoll Outreach"
    }
  ];

  return (
    <div className="work-page-view">
      {/* WORK HERO */}
      <section className="work-hero-section hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Portfolio & Selected Case Studies
          </div>
          <h1>
            Evidence, not
            <br />
            <em>adjectives.</em>
          </h1>
          <div className="hero-subtitles mt-3">
            <h2 className="hero-h2">10 Verified Transformation Case Studies</h2>
            <h3 className="hero-h3">Luxury Resorts · Global Feeders · B2B Contracts</h3>
          </div>
          <p className="hero-intro">
            A comprehensive portfolio of transformation case studies across luxury Maldivian resorts, international feeder markets, high-urgency B2B sales, and proactive brand security.
          </p>
          <div className="about-quick-tags mt-6">
            <span>01–10 Full Case Studies</span>
            <span>0% → 30% Direct Booking</span>
            <span>2.5M+ MVR Sales Record</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={heroImg}
              alt="Saliya Wimalasena in navy blazer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero-stamp">
            <span>10</span>
            <small>
              Verified
              <br />
              Case Studies
            </small>
          </div>
          <div className="hero-caption">
            <span>03</span>
            <p>
              Selected Work
              <br />
              Commercial Evidence
            </p>
          </div>
        </div>
        <div
          className="hero-scroll"
          onClick={() => {
            const nextEl = document.querySelector(".work-filters-bar") || document.querySelector(".hero + *");
            if (nextEl) {
              nextEl.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Scroll to discover content"
        >
          Scroll to discover <span>↓</span>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="work-filters-bar">
        <div className="filters-container">
          <div className="filters-header-row">
            <span className="filters-label">Filter By:</span>
            <div className="filters-nav-controls">
              <button
                type="button"
                className="filter-arrow-btn prev"
                onClick={handlePrevFilter}
                disabled={safeTabIdx === 0}
                aria-label="Previous filter"
                title="Previous filter"
              >
                ‹
              </button>
              <span className="filter-index-counter">
                {safeTabIdx + 1} / {filterTabs.length}
              </span>
              <button
                type="button"
                className="filter-arrow-btn next"
                onClick={handleNextFilter}
                disabled={safeTabIdx === filterTabs.length - 1}
                aria-label="Next filter"
                title="Next filter"
              >
                ›
              </button>
            </div>
          </div>
          <div className="filters-list">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                data-work-chip={tab.id}
                className={`filter-chip ${activeFilter === tab.id ? "active" : ""}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="work-grid-section section-pad">
        <div className="case-studies-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`work-card card-${project.colorScheme}`}
              onClick={() => handleCaseClick(project.slug)}
            >
              <div className="work-card-top">
                <div className="work-card-num">
                  <span>{project.number}</span>
                </div>
                <span className="work-card-category">{project.category.split("|")[0]}</span>
                <div className="work-card-metric-badge">
                  <strong>{project.resultMetric}</strong>
                  <small>{project.resultLabel}</small>
                </div>
              </div>

              <div className="work-card-image-wrap">
                <img src={project.heroImage} alt={project.title} />
                <div className="work-card-overlay">
                  <span>Read Full Case Study <Arrow diagonal /></span>
                </div>
              </div>

              <div className="work-card-body">
                <span className="work-card-client">{project.client}</span>
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-tagline">{project.tagline}</p>

                <div className="work-card-footer">
                  <div className="work-tools-mini">
                    {project.toolsUsed.slice(0, 3).map((tool, i) => (
                      <span key={i} className="tool-tag-pill">{tool}</span>
                    ))}
                    {project.toolsUsed.length > 3 && (
                      <span className="tool-tag-more">+{project.toolsUsed.length - 3} more</span>
                    )}
                  </div>
                  <button className="read-case-study-btn">
                    Explore Case Study <Arrow />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 5: MEDIA, TRADE SHOWS & EVENTS */}
      <section className="media-events-sec section-pad">
        <div className="media-header">
          <div className="section-label">
            <span />
            Section 05 / Public Presence & Relations
          </div>
          <h2>Media appearances, trade expos & CSR.</h2>
          <p className="lead-text">
            Representing premier brands across national television, industry summits, and island community outreach.
          </p>
        </div>

        <div className="media-grid">
          {mediaAndEvents.map((item, idx) => (
            <div className="media-card" key={idx}>
              <div className="media-badge-row">
                <span className="media-badge">{item.badge}</span>
                <span className="media-type">{item.type}</span>
              </div>
              <h3>{item.outlet}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="cta-band-content">
          <div className="cta-tag">Start a Project</div>
          <h2>Have a challenging campaign or market to unlock?</h2>
          <p>
            Let's discuss how customized direct booking architecture, performance advertising, or brand leadership can drive record results for your business.
          </p>
          <button className="button button-primary" onClick={() => onNavigate("contact")}>
            Start a Conversation <Arrow />
          </button>
        </div>
      </section>
    </div>
  );
}
