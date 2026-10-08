import React from "react";
import { PageId } from "./Navbar";
import { caseStudies } from "../data/caseStudies";
import { Arrow, SparklesIcon } from "./Icons";
import SkillsSnapshot from "./SkillsSnapshot";
import TestimonialsSection from "./TestimonialsSection";

interface HomeViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  images?: {
    beige: string;
    burgundy: string;
    navy: string;
    seated: string;
  };
}

export default function HomeView({ onNavigate, images }: HomeViewProps) {
  const featuredCases = caseStudies.filter((cs) => cs.featuredOnHome);
  const heroImg = images?.burgundy || "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1000,c_limit/v1791344662/portrait_burgundy_with_spectacles_1_o2wvzd.png";

  const handleNav = (page: PageId, slug?: string) => {
    onNavigate(page, slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="home-page-view">
      {/* SECTION 1: HERO */}
      <section className="hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Marketing & Communications · Maldives
          </div>
          <h1>
            Building brands
            <br />
            that <em>move</em> markets.
          </h1>
          <div className="hero-subtitles mt-4">
            <h2 className="hero-h2">Marketing & Communications Professional</h2>
            <h3 className="hero-h3">Luxury Hospitality | Tourism | International Business</h3>
          </div>
          <p className="hero-intro">
            Building brands, driving digital growth, and creating measurable business impact for luxury resorts, international brands, and forward-thinking businesses across the Maldives and global markets.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => handleNav("work")}>
              View My Work <Arrow />
            </button>
            <button className="text-link" onClick={() => handleNav("contact")}>
              Start a Conversation <Arrow diagonal />
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={heroImg}
              alt="Saliya Wimalasena in a burgundy blazer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero-stamp">
            <span>10+</span>
            <small>
              Years of
              <br />
              international experience
            </small>
          </div>
          <div className="hero-caption">
            <span>01</span>
            <p>
              Luxury hospitality
              <br />
              Tourism · Global business
            </p>
          </div>
        </div>
        <div
          className="hero-scroll"
          onClick={() => {
            const nextEl = document.querySelector(".positioning-section") || document.querySelector(".hero + *");
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

      {/* SECTION 2: POSITIONING STATEMENT */}
      <section className="positioning-section">
        <div className="positioning-container">
          <div className="positioning-badge">
            <SparklesIcon className="w-3.5 h-3.5 text-[var(--acid)]" />
            <span>Executive Positioning</span>
          </div>
          <blockquote className="positioning-quote">
            “With over 10 years of international experience across luxury hospitality, tourism, FMCG and consumer services, I bring strategic marketing thinking with hands-on digital execution. Currently leading the marketing and communications function for three luxury Maldivian resorts under AAA Hotels & Resorts, while offering selective independent consulting for brands who need senior-level marketing expertise.”
          </blockquote>
          <div className="positioning-author">
            <strong>Saliya Wimalasena</strong>
            <span>Cluster Manager – Marketing & Communications, AAA Hotels & Resorts</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY STATS */}
      <section className="numbers-strip" aria-label="Key Career Statistics">
        <div className="numbers-intro">
          <span>Impact in numbers</span>
          <p>Strategy is only as meaningful as the result it creates.</p>
        </div>
        <div className="stat">
          <strong>10+</strong>
          <span>Years in Marketing</span>
        </div>
        <div className="stat">
          <strong>3</strong>
          <span>Luxury Resorts Managing</span>
        </div>
        <div className="stat">
          <strong>0 → 30%</strong>
          <span>Direct Booking Growth</span>
        </div>
        <div className="stat">
          <strong>28</strong>
          <span>Social Channels Managed</span>
        </div>
      </section>

      {/* SECTION 4: FEATURED WORK (3 Flagship Case Studies) */}
      <section className="work section-pad" id="featured-work">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span />
              Featured Flagship Work / 01
            </div>
            <h2>
              Evidence, not
              <br />
              <em>adjectives.</em>
            </h2>
          </div>
          <div className="section-heading-right">
            <p className="section-heading-desc">
              Showcasing 3 flagship hospitality transformations with hard commercial revenue metrics.
            </p>
            <button
              onClick={() => handleNav("work")}
              className="section-heading-link"
            >
              View all 10 Case Studies & Projects <Arrow diagonal />
            </button>
          </div>
        </div>

        <div className="project-list">
          {featuredCases.map((project) => (
            <article
              className={`project-card project-${project.colorScheme}`}
              key={project.id}
            >
              <div className="project-meta">
                <span>{project.number}</span>
                <p>{project.category.split("|")[0].trim()}</p>
              </div>
              <div className="project-content">
                <span className="project-client">{project.client}</span>
                <h3>{project.shortTitle}</h3>
                <button
                  onClick={() => handleNav("work", project.slug)}
                  className="project-cta-btn"
                  aria-label={`View Case Study for ${project.title}`}
                >
                  View Case Study <Arrow diagonal />
                </button>
              </div>
              <div className="project-result">
                <strong>{project.resultMetric}</strong>
                <span>{project.resultLabel}</span>
              </div>
              <div className="project-image">
                <img src={project.heroImage} alt={project.title} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 5: SERVICES OVERVIEW */}
      <section className="services-overview-sec section-pad">
        <div className="services-overview-header">
          <div className="section-label">
            <span />
            Core Offerings / 02
          </div>
          <h2 className="services-headline">
            <span className="services-headline-line">Strategic expertise.</span>
            <span className="services-headline-line"><em>Measurable</em> outcomes.</span>
          </h2>
          <p className="lead-text">
            Three dedicated pillars covering cluster resort marketing, independent advisory, and international market expansion.
          </p>
        </div>

        <div className="services-three-grid">
          <div className="s-card">
            <span className="s-num">01</span>
            <h3>Luxury Hospitality Marketing</h3>
            <p>
              Cluster-level marketing and communications leadership for luxury resorts — integrated PR, digital, brand storytelling, and performance marketing across international feeder markets.
            </p>
            <button onClick={() => handleNav("work")} className="learn-more-link">
              Learn More in Work →
            </button>
          </div>

          <div className="s-card highlighted">
            <span className="s-num">02</span>
            <h3>Independent Consulting</h3>
            <p>
              Selective advisory engagements for hospitality, e-commerce, and consumer brands — website development, digital marketing strategy, brand development, and campaign execution.
            </p>
            <button onClick={() => handleNav("services")} className="learn-more-link">
              Learn More in Consulting →
            </button>
          </div>

          <div className="s-card">
            <span className="s-num">03</span>
            <h3>International Business & Exports</h3>
            <p>
              Cross-border marketing expertise across Europe, USA, Middle East, Asia, and Russia — feeder market strategy, international brand positioning, and multi-market campaign delivery.
            </p>
            <button onClick={() => handleNav("about")} className="learn-more-link">
              Learn More in About →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: SKILLS SNAPSHOT */}
      <section className="section-pad skills-section-wrap">
        <SkillsSnapshot />
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="section-pad testimonials-section-dark">
        <TestimonialsSection />
      </section>

      {/* SECTION 8: CTA BAND */}
      <section className="cta-band">
        <div className="cta-band-content">
          <div className="cta-tag">Let's Connect</div>
          <h2>Ready to grow your brand?</h2>
          <p>
            Whether you need a full-service marketing partner or independent expertise for a specific project, I'd love to hear about what you're building.
          </p>
          <button className="button button-primary" onClick={() => handleNav("contact")}>
            Start a Conversation <Arrow />
          </button>
        </div>
      </section>
    </div>
  );
}
