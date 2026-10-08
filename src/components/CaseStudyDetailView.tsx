import React from "react";
import { PageId } from "./Navbar";
import { caseStudies, CaseStudy } from "../data/caseStudies";
import { Arrow, CheckCircleIcon, SparklesIcon, AwardIcon, ClockIcon } from "./Icons";

interface CaseStudyDetailViewProps {
  slug: string;
  onNavigate: (page: PageId, slug?: string) => void;
}

export default function CaseStudyDetailView({ slug, onNavigate }: CaseStudyDetailViewProps) {
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const project = caseStudies[currentIndex] || caseStudies[0];

  const prevProject = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextProject = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const handleNav = (slugTarget: string) => {
    onNavigate("work", slugTarget);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="case-detail-view">
      {/* CASE STUDY TOP BAR */}
      <div className="case-detail-header-bar">
        <button
          className="back-to-work-btn"
          onClick={() => {
            onNavigate("work");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ← Back to All Projects
        </button>
        <div className="case-breadcrumbs">
          <span onClick={() => onNavigate("home")}>Home</span>
          <span className="sep">/</span>
          <span onClick={() => onNavigate("work")}>Work</span>
          <span className="sep">/</span>
          <span className="current">{project.number} {project.shortTitle}</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="case-hero">
        <div className="case-hero-container">
          <div className="case-hero-meta-row">
            <span className="case-number-badge">{project.number}</span>
            <span className="case-category-pill">{project.category}</span>
          </div>

          <h1 className="case-main-title">{project.title}</h1>
          <p className="case-tagline-text">{project.tagline}</p>

          <div className="case-info-grid">
            <div className="case-info-cell">
              <span className="info-lbl">Client / Organization</span>
              <strong className="info-val">{project.client}</strong>
            </div>
            <div className="case-info-cell">
              <span className="info-lbl">Role Executed</span>
              <strong className="info-val">{project.role}</strong>
            </div>
            <div className="case-info-cell">
              <span className="info-lbl">Duration / Period</span>
              <strong className="info-val">{project.duration}</strong>
            </div>
            <div className="case-info-cell highlight-cell">
              <span className="info-lbl">Core Metric Achieved</span>
              <strong className="info-metric">{project.resultMetric}</strong>
              <span className="info-metric-lbl">{project.resultLabel}</span>
            </div>
          </div>
        </div>
        <div
          className="hero-scroll"
          onClick={() => {
            const nextEl = document.querySelector(".case-hero-image-banner") || document.querySelector(".hero + *");
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

      {/* HERO VISUAL */}
      <div className="case-hero-image-banner">
        <div className="case-hero-image-frame">
          <img src={project.heroImage} alt={project.title} loading="eager" decoding="async" />
        </div>
      </div>

      {/* CASE CONTENT BODY */}
      <div className="case-body-container">
        {/* SECTION 1: THE STORY */}
        <section className="case-story-block">
          <div className="case-section-tag">
            <span />
            Background Context
          </div>
          <h2>The Story</h2>
          <div className="case-story-paragraphs">
            {project.story.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* SECTION 2: THE CHALLENGE */}
        <section className="case-challenge-block">
          <div className="case-section-tag">
            <span />
            Obstacles & Complexity
          </div>
          <h2>The Challenge</h2>
          <div className="challenge-cards-list">
            {project.challenges.map((ch, idx) => (
              <div className="challenge-item" key={idx}>
                <span className="challenge-idx">0{idx + 1}</span>
                <p>{ch}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: MY APPROACH */}
        <section className="case-approach-block">
          <div className="case-section-tag">
            <span />
            Strategic Execution
          </div>
          <h2>My Approach</h2>
          <div className="approach-list">
            {project.approach.map((app, idx) => (
              <div className="approach-item" key={idx}>
                <div className="approach-check">
                  <CheckCircleIcon className="w-5 h-5 text-[var(--acid)]" />
                </div>
                <div className="approach-content">
                  <span className="approach-num">Phase 0{idx + 1}</span>
                  <p>{app}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTORS / CLIENTS / THEMES (If applicable) */}
        {project.sectorsOrThemes && project.sectorsOrThemes.map((sec, i) => (
          <section className="case-themes-block" key={i}>
            <div className="case-section-tag">
              <span />
              Portfolio & Stakeholder Matrix
            </div>
            <h2>{sec.title}</h2>
            <div className="themes-grid">
              {sec.items.map((item, itemIdx) => (
                <div className="theme-card" key={itemIdx}>
                  <CheckCircleIcon className="w-3.5 h-3.5 text-[var(--wine)] shrink-0 mt-0.5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* SECTION 4: TOOLS & STACK */}
        <section className="case-tools-block">
          <div className="case-section-tag">
            <span />
            Technology & Platforms
          </div>
          <h2>Tools & Stack Used</h2>
          <div className="tools-cloud">
            {project.toolsUsed.map((tool, idx) => (
              <span className="tool-chip-lg" key={idx}>
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* SECTION 5: THE RESULTS */}
        <section className="case-results-block">
          <div className="case-section-tag">
            <span />
            Commercial Impact
          </div>
          <h2>The Results</h2>
          <div className="results-grid">
            {project.results.map((res, idx) => (
              <div className="result-card" key={idx}>
                <div className="result-top">
                  <AwardIcon className="w-4 h-4 text-[var(--acid)]" />
                  <span>Key Result 0{idx + 1}</span>
                </div>
                <p>{res}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: KEY LEARNING / WHY THIS MATTERS */}
        <section className="case-learning-block">
          <div className="learning-card">
            <div className="learning-icon">
              <SparklesIcon className="w-5 h-5 text-[var(--ink)]" />
            </div>
            <div className="learning-copy">
              <h3>{project.keyLearningOrWhyItMatters.heading}</h3>
              <p>{project.keyLearningOrWhyItMatters.text}</p>
            </div>
          </div>
        </section>

        {/* SECTION 7: VISUAL PROOF & DASHBOARDS PLACEHOLDER */}
        <section className="visual-proof-block">
          <div className="case-section-tag">
            <span />
            Visual Documentation
          </div>
          <h2>Artifacts & Campaign Verification</h2>
          <div className="proof-placeholder-box">
            <div className="proof-watermark">Verified Case Documentation</div>
            <p className="proof-subtext">
              Campaign dashboards, tracking blueprints, GTM tags, and confidential revenue figures are redacted for client confidentiality. Full live interactive demonstrations available during discovery consultations.
            </p>
            <div className="proof-meta-tags">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircleIcon className="w-3.5 h-3.5 text-[var(--wine)]" /> GTM Infrastructure Verified
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircleIcon className="w-3.5 h-3.5 text-[var(--wine)]" /> Profitroom Integration Audited
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircleIcon className="w-3.5 h-3.5 text-[var(--wine)]" /> Attribution Models Cross-Validated
              </span>
            </div>
          </div>
        </section>

        {/* NEXT / PREVIOUS CASE STUDY BAR */}
        <div className="case-pagination-bar">
          {prevProject ? (
            <button
              className="case-nav-btn prev-btn"
              onClick={() => handleNav(prevProject.slug)}
            >
              <small>← Previous Project</small>
              <strong>{prevProject.number} {prevProject.shortTitle}</strong>
            </button>
          ) : (
            <div />
          )}

          {nextProject && (
            <button
              className="case-nav-btn next-btn"
              onClick={() => handleNav(nextProject.slug)}
            >
              <small>Next Project →</small>
              <strong>{nextProject.number} {nextProject.shortTitle}</strong>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
