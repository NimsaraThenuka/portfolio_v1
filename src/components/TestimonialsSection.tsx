import React, { useState, useEffect } from "react";
import { testimonials } from "../data/testimonialsData";
import { AwardIcon } from "./Icons";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance testimonials every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="testimonials-wrap">
      <div className="testimonials-header-row">
        <div className="testimonials-header">
          <div className="section-label">
            <span />
            Endorsements & Trust
          </div>
          <h2 className="text-white">
            Leadership <em>perspectives.</em>
          </h2>
          <p className="text-white/60 text-sm max-w-lg mt-3">
            Feedback from resort executive leaders, commercial group directors, and consulting partners.
          </p>
        </div>

        {/* PREV / NEXT ARROW CONTROLS */}
        <div className="testimonial-arrow-controls">
          <button
            className="t-nav-arrow"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            className="t-nav-arrow"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="testimonials-card-main"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="quote-badge">
          <AwardIcon className="w-5 h-5 text-[var(--ink)]" />
        </div>

        {/* SMOOTH SLIDING CAROUSEL TRACK */}
        <div className="testimonials-slider-viewport">
          <div
            className="testimonials-slider-track"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {testimonials.map((t, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  className={`testimonial-slide-item ${isActive ? "is-active" : ""}`}
                  key={t.id}
                  aria-hidden={!isActive}
                >
                  <blockquote className="testimonial-quote">
                    “{t.quote}”
                  </blockquote>

                  <div className="testimonial-meta-row">
                    <div className="author-info">
                      <strong className="author-name">{t.author}</strong>
                      <span className="author-role">{t.role}</span>
                      <span className="author-org">{t.organization}</span>
                    </div>

                    <div className="highlight-pill">
                      <span className="pill-dot" />
                      <span className="pill-text">{t.highlight}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TABS WITH COUNTDOWN PROGRESS BAR */}
        <div className="testimonial-nav-dots">
          {testimonials.map((t, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={t.id}
                className={`t-dot-btn ${isActive ? "active" : ""}`}
                onClick={() => {
                  setActiveIndex(idx);
                }}
                aria-label={`View testimonial ${idx + 1}`}
              >
                {isActive && !isPaused && (
                  <span className="t-dot-progress-bar" key={`${t.id}-${activeIndex}`} />
                )}
                <span className="t-dot-num">0{idx + 1}</span>
                <span className="t-dot-label">{t.organization.split(",")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
