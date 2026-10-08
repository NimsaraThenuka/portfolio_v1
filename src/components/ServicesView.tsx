import React, { useState, useEffect } from "react";
import { PageId } from "./Navbar";
import {
  servicePillars,
  consultingProcess,
  recentClients,
  consultingFAQs,
} from "../data/servicesData";
import { Arrow, CheckCircleIcon, SparklesIcon, ExternalLinkIcon } from "./Icons";

interface ServicesViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  images?: {
    beige: string;
    burgundy: string;
    navy: string;
    seated: string;
  };
}

export default function ServicesView({ onNavigate, images }: ServicesViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".faq-sec, .pillar-card, .process-step-card, .client-box").forEach((el) => {
        el.classList.add("is-revealed");
        el.classList.add("in-view");
      });
    }, 20);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const heroImg = images?.seated || "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1200,c_limit/v1791344666/seated-workspace_xxbwnk.png";

  return (
    <div className="services-page-view">
      {/* HERO SECTION */}
      <section className="services-hero hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Independent Consulting & Advisory
          </div>
          <h1>
            Senior marketing expertise.
            <br />
            <em className="whitespace-nowrap">Direct, no overhead.</em>
          </h1>
          <div className="hero-subtitles mt-3">
            <h2 className="hero-h2">High-Leverage Strategic Partnerships</h2>
            <h3 className="hero-h3">Branding · Digital Performance · Exports · Tourism</h3>
          </div>
          <p className="hero-intro">
            Alongside my cluster leadership at AAA Hotels & Resorts, I partner with a select group of ambitious hospitality brands, exporters, and founders seeking senior strategic firepower without bloated agency overheads.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => handleNav("contact")}>
              Book a Discovery Call <Arrow />
            </button>
            <button className="text-link" onClick={() => handleNav("work")}>
              View Selected Case Studies <Arrow diagonal />
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={heroImg}
              alt="Saliya Wimalasena in workspace"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero-stamp">
            <span>2026</span>
            <small>
              Selective
              <br />
              Engagements
            </small>
          </div>
          <div className="hero-caption">
            <span>04</span>
            <p>
              Advisory Practice
              <br />
              Direct Senior Execution
            </p>
          </div>
        </div>
        <div
          className="hero-scroll"
          onClick={() => {
            const nextEl = document.querySelector(".services-intro-sec") || document.querySelector(".hero + *");
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

      {/* SECTION 1: INTRODUCTION */}
      <section className="services-intro-sec section-pad">
        <div className="services-intro-grid">
          <div className="intro-left">
            <div className="section-label">
              <span />
              Section 01 / Advisory Model
            </div>
            <h2>
              The power of a senior partner,
              <br />
              <em>without</em> agency friction.
            </h2>
          </div>
          <div className="intro-right">
            <p className="lead-p">
              Alongside my primary role in luxury hospitality marketing, I take on a limited number of selective consulting engagements each year — providing senior-level expertise in branding, marketing, digital marketing, international business, exports, and tourism.
            </p>
            <p className="body-p">
              My independent consulting practice is built on the same strategic rigour and hands-on execution that defines my work in luxury hospitality — delivered directly to clients who benefit from senior expertise without agency overhead, markups, or junior account handlers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT I OFFER (SERVICE PILLARS) */}
      <section className="services-pillars-sec section-pad">
        <div className="pillars-header">
          <div className="section-label">
            <span />
            Section 02 / Strategic Pillars
          </div>
          <h2>What I offer.</h2>
          <p className="lead-text">
            Tailored advisory and hands-on execution across five core growth disciplines.
          </p>
        </div>

        <div className="pillars-cards-list">
          {servicePillars.map((pillar) => (
            <div className="pillar-card" key={pillar.id}>
              <div className="pillar-meta">
                <span className="pillar-num">{pillar.number}</span>
                <span className="pillar-badge">{pillar.badge}</span>
              </div>
              <div className="pillar-main">
                <h3>{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
                <div className="pillar-deliverables">
                  <span className="deliv-title">Core Deliverables:</span>
                  <ul>
                    {pillar.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[var(--wine)] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pillar-ideal">
                  <strong>Ideal for:</strong> <span>{pillar.idealFor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: WHO I WORK WITH */}
      <section className="who-i-work-with-sec section-pad">
        <div className="who-header">
          <div className="section-label">
            <span />
            Section 03 / Client Fit
          </div>
          <h2>Who I work with.</h2>
          <p className="lead-text">
            I take on selective engagements each year with organizations where direct senior marketing leadership creates outsized business leverage.
          </p>
        </div>

        <div className="who-grid">
          {[
            { title: "Luxury Hospitality Brands & Resorts", desc: "Islands, boutique hotels, and resort groups looking to scale direct booking shares and international feeder market reach." },
            { title: "Tourism Operators & Travel Agencies", desc: "Liveaboards, premium diving operations, and destination management companies seeking distinctive branding." },
            { title: "International Businesses & Exporters", desc: "Companies expanding into Europe, the Middle East, India, China, and Russia needing cross-border marketing positioning." },
            { title: "Export-Oriented Brands & Manufacturers", desc: "Producers seeking high-value trade positioning, B2B tender collateral, and distributor enablement." },
            { title: "E-Commerce Ventures & Retailers", desc: "Consumer brands requiring full-funnel digital advertising, high ROAS, and conversion funnel optimization." },
            { title: "Founders & Executive Owners", desc: "Business leaders who need strategic marketing clarity, team hiring guidance, and executive soundboarding." }
          ].map((item, idx) => (
            <div className="who-card" key={idx}>
              <span className="who-index">0{idx + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: HOW I WORK (PROCESS) */}
      <section className="process-sec section-pad">
        <div className="process-header">
          <div className="section-label">
            <span />
            Section 04 / Engagement Blueprint
          </div>
          <h2>How I work.</h2>
          <p className="lead-text">
            A transparent 4-stage engagement framework focused on clarity, velocity, and measurable business return.
          </p>
        </div>

        <div className="process-steps-grid">
          {consultingProcess.map((step) => (
            <div className="process-step-card" key={step.step}>
              <span className="step-num">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="step-outcome">
                <SparklesIcon className="w-3.5 h-3.5 text-[var(--acid)]" />
                <span>{step.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: RECENT ENGAGEMENTS */}
      <section className="engagements-sec section-pad">
        <div className="engagements-header">
          <div className="section-label">
            <span />
            Section 05 / Client Engagements
          </div>
          <h2>Recent advisory projects.</h2>
          <p className="lead-text">
            Selected private and corporate clients partnered with for marketing transformation (with client permission).
          </p>
        </div>

        <div className="clients-grid">
          {recentClients.map((client, idx) => (
            <div className="client-box" key={idx}>
              <div className="client-top">
                <span className="client-tag">{client.tag}</span>
                <span className="client-idx">#{idx + 1}</span>
              </div>
              <h3>{client.name}</h3>
              <span className="client-ind">{client.industry}</span>
              <p>{client.scope}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="faq-sec section-pad">
        <div className="faq-header">
          <div className="section-label">
            <span />
            Section 06 / Frequently Asked Questions
          </div>
          <h2>Common questions.</h2>
          <p className="lead-text">Everything you need to know about working together.</p>
        </div>

        <div className="faq-accordion-list">
          {consultingFAQs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`faq-item-card ${isOpen ? "open" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-row">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle-icon">{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-band">
        <div className="cta-band-content">
          <div className="cta-tag">Let's Talk</div>
          <h2>Let's talk about your project.</h2>
          <p>
            Book a 30-minute discovery call — no obligation, just a conversation about what you're building and how we can accelerate it.
          </p>
          <button className="button button-primary" onClick={() => handleNav("contact")}>
            Book a Discovery Call <Arrow />
          </button>
        </div>
      </section>
    </div>
  );
}
