import React, { useState, useEffect } from "react";
import { PageId } from "./Navbar";
import { articles, Article } from "../data/articles";
import { Arrow, ClockIcon, SparklesIcon, CheckCircleIcon } from "./Icons";

interface InsightsViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  selectedSlug?: string;
  images?: {
    beige: string;
    burgundy: string;
    navy: string;
    seated: string;
  };
}

export default function InsightsView({ onNavigate, selectedSlug, images }: InsightsViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentArticle, setCurrentArticle] = useState<Article | null>(() => {
    if (selectedSlug) {
      return articles.find((a) => a.slug === selectedSlug) || null;
    }
    return null;
  });

  useEffect(() => {
    if (selectedSlug) {
      const found = articles.find((a) => a.slug === selectedSlug);
      setCurrentArticle(found || null);
    } else {
      setCurrentArticle(null);
    }
  }, [selectedSlug]);

  const heroImg = images?.beige || "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1000,c_limit/v1791344661/portrait_beige_with_spectacles_pxpt0i.png";

  const categories = [
    { id: "all", label: "All Insights (6)" },
    { id: "Hospitality", label: "Luxury Hospitality (3)" },
    { id: "Performance", label: "Performance Marketing (1)" },
    { id: "Strategy", label: "Marketing Strategy (2)" },
    { id: "Technology", label: "MarTech & Tracking (1)" },
  ];

  const currentCatIndex = categories.findIndex((c) => c.id === activeCategory);
  const safeCatIndex = currentCatIndex >= 0 ? currentCatIndex : 0;

  const handlePrevCategory = () => {
    if (safeCatIndex > 0) {
      const prevId = categories[safeCatIndex - 1].id;
      setActiveCategory(prevId);
      document.querySelector(`[data-cat-chip="${prevId}"]`)?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handleNextCategory = () => {
    if (safeCatIndex < categories.length - 1) {
      const nextId = categories[safeCatIndex + 1].id;
      setActiveCategory(nextId);
      document.querySelector(`[data-cat-chip="${nextId}"]`)?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".article-card").forEach((el) => {
        el.classList.add("is-revealed");
        el.classList.add("in-view");
      });
    }, 10);
    return () => clearTimeout(timer);
  }, [activeCategory, currentArticle]);

  const filteredArticles = articles.filter((art) => {
    if (activeCategory === "all") return true;
    return art.category === activeCategory;
  });

  const handleArticleClick = (article: Article) => {
    onNavigate("insights", article.slug);
    setCurrentArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeArticleReader = () => {
    onNavigate("insights");
    setCurrentArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentArticle) {
    const currentArticleIndex = articles.findIndex((a) => a.slug === currentArticle.slug);
    const prevArticle = currentArticleIndex > 0 ? articles[currentArticleIndex - 1] : null;
    const nextArticle =
      currentArticleIndex >= 0 && currentArticleIndex < articles.length - 1
        ? articles[currentArticleIndex + 1]
        : null;

    return (
      <div className="article-reader-view">
        {/* TOP BREADCRUMB BAR */}
        <div className="article-reader-top-bar">
          <button className="back-to-insights-btn" onClick={closeArticleReader}>
            ← Back to All Articles
          </button>
          <div className="article-breadcrumbs">
            <span onClick={() => onNavigate("home")}>Home</span>
            <span className="sep">/</span>
            <span onClick={closeArticleReader}>Insights</span>
            <span className="sep">/</span>
            <span className="current">{currentArticle.title}</span>
          </div>
        </div>

        {/* FULL-WIDTH EXECUTIVE HERO HEADER */}
        <section className="article-hero-section">
          <div className="article-hero-container">
            <div className="article-meta-tags">
              <span className="article-category-badge">{currentArticle.category}</span>
              <span className="article-date-badge">{currentArticle.date}</span>
              <span className="article-readtime-badge">
                <ClockIcon className="w-3.5 h-3.5 inline mr-1" />
                {currentArticle.readTime}
              </span>
            </div>

            <h1 className="article-main-title">{currentArticle.title}</h1>

            <div className="article-author-row">
              <div className="author-avatar-sm">SW</div>
              <div className="author-details">
                <strong>Saliya Wimalasena</strong>
                <span>Cluster Manager – Marketing & Communications, AAA Hotels & Resorts</span>
              </div>
            </div>
          </div>
        </section>

        {/* FULL-WIDTH HERO IMAGE BANNER */}
        <div className="article-hero-image-banner">
          <div className="article-hero-image-frame">
            <img src={currentArticle.heroImage} alt={currentArticle.title} loading="eager" decoding="async" />
          </div>
        </div>

        {/* ARTICLE BODY CONTENT */}
        <div className="article-body-container">
          <div className="article-hook-box">
            <p className="hook-text">{currentArticle.hook}</p>
          </div>

          <div className="article-context">
            {currentArticle.context.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {currentArticle.sections.map((sec, idx) => (
            <section className="article-section" key={idx}>
              <h2>{sec.heading}</h2>
              {sec.content.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </section>
          ))}

          <div className="article-takeaways-box">
            <div className="takeaways-header">
              <SparklesIcon className="w-5 h-5 text-[var(--acid)]" />
              <h3>Key Strategic Takeaways</h3>
            </div>
            <ul className="takeaways-list">
              {currentArticle.keyTakeaways.map((item, i) => (
                <li key={i}>
                  <CheckCircleIcon className="w-4 h-4 text-[var(--acid)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="article-cta-box">
            <h3>Have questions about implementing this strategy?</h3>
            <p>
              I help luxury resort operators and ambitious brands design, deploy, and scale direct booking and performance marketing infrastructure.
            </p>
            <button
              className="button button-primary"
              onClick={() => {
                onNavigate("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Start a Conversation <Arrow />
            </button>
          </div>

          {/* ARTICLE PAGINATION BAR */}
          <div className="article-pagination-bar">
            {prevArticle ? (
              <button
                className="article-nav-btn prev-btn"
                onClick={() => handleArticleClick(prevArticle)}
              >
                <small>← Previous Article</small>
                <strong>{prevArticle.title}</strong>
              </button>
            ) : (
              <div />
            )}

            {nextArticle && (
              <button
                className="article-nav-btn next-btn"
                onClick={() => handleArticleClick(nextArticle)}
              >
                <small>Next Article →</small>
                <strong>{nextArticle.title}</strong>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="insights-page-view">
      {/* INSIGHTS HERO */}
      <section className="insights-hero hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Thoughts & Industry Analysis
          </div>
          <h1>
            Perspectives on luxury,
            <br />
            <em>martech & growth.</em>
          </h1>
          <div className="hero-subtitles mt-3">
            <h2 className="hero-h2">Actionable Hospitality & Marketing Playbooks</h2>
            <h3 className="hero-h3">Direct Bookings · Feeder Markets · Technical GTM</h3>
          </div>
          <p className="hero-intro">
            Actionable playbooks, strategic breakdowns, and practical insights drawn from over a decade of running marketing for luxury Maldivian resorts and international trade.
          </p>
          <div className="about-quick-tags mt-6">
            <span>6 Featured Articles</span>
            <span>Direct Booking Architecture</span>
            <span>Server-Side Tagging</span>
            <span>Market Feeder Strategy</span>
          </div>
        </div>
        <div className="hero-floating-orbits" aria-hidden="true">
          <div className="orbit-ring orbit-ring-large" />
          <div className="orbit-ring orbit-ring-medium" />
          <div className="orbit-ring orbit-ring-small" />
          <div className="orbit-ring orbit-ring-accent" />
          <div className="orbit-ring orbit-ring-pulse" />
        </div>
        <div
          className="hero-scroll"
          onClick={() => {
            const nextEl = document.querySelector(".insights-filters-bar") || document.querySelector(".hero + *");
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

      {/* CATEGORY FILTERS */}
      <section className="insights-filters-bar">
        <div className="filters-container">
          <div className="filters-header-row">
            <span className="filters-label">Topic:</span>
            <div className="filters-nav-controls">
              <button
                type="button"
                className="filter-arrow-btn prev"
                onClick={handlePrevCategory}
                disabled={safeCatIndex === 0}
                aria-label="Previous topic"
                title="Previous topic"
              >
                ‹
              </button>
              <span className="filter-index-counter">
                {safeCatIndex + 1} / {categories.length}
              </span>
              <button
                type="button"
                className="filter-arrow-btn next"
                onClick={handleNextCategory}
                disabled={safeCatIndex === categories.length - 1}
                aria-label="Next topic"
                title="Next topic"
              >
                ›
              </button>
            </div>
          </div>
          <div className="filters-list">
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-cat-chip={cat.id}
                className={`filter-chip ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="insights-grid-section section-pad">
        <div className="articles-grid">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="article-card"
              onClick={() => handleArticleClick(art)}
            >
              <div className="art-card-img-wrap">
                <img src={art.heroImage} alt={art.title} />
                <span className="art-cat-badge">{art.category}</span>
              </div>
              <div className="art-card-body">
                <div className="art-card-meta">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span>{art.readTime}</span>
                </div>
                <h3>{art.title}</h3>
                <p>{art.excerpt}</p>
                <div className="art-card-footer">
                  <span className="read-more-link">
                    Read Article <Arrow diagonal />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="cta-band-content">
          <div className="cta-tag">Stay Ahead</div>
          <h2>Want bespoke marketing insights for your brand?</h2>
          <p>
            Whether evaluating your direct booking engine or entering new feeder markets like Russia or India, let's connect.
          </p>
          <button className="button button-primary" onClick={() => onNavigate("contact")}>
            Get in Touch <Arrow />
          </button>
        </div>
      </section>
    </div>
  );
}
