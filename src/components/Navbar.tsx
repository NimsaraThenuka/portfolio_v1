import React, { useState, useEffect } from "react";
import { Arrow, DownloadIcon } from "./Icons";

export type PageId = "home" | "about" | "work" | "services" | "insights" | "contact" | "cv";

interface NavbarProps {
  currentPage: PageId;
  currentSlug?: string;
  onNavigate: (page: PageId, slug?: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const pct = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));
        setScrollProgress(pct);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "services", label: "Services" },
    { id: "insights", label: "Insights" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (pageId: PageId) => {
    setMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <button
        className="brand brand-btn"
        onClick={() => handleNavClick("home")}
        aria-label="Saliya Wimalasena home"
      >
        <span className="brand-signature">Saliya Wimalasena</span>
      </button>

      {/* OVERLAY BACKDROP */}
      {menuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
        <div className="mobile-nav-links">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                className={`nav-link-btn ${isActive ? "active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>
                {isActive && <span className="active-dot" />}
                <span className="mobile-link-arrow">→</span>
              </button>
            );
          })}
        </div>

        <div className="mobile-cv-action">
          <button
            className="mobile-cv-btn"
            onClick={() => handleNavClick("cv")}
          >
            <DownloadIcon className="w-4 h-4 mr-2 inline" /> View & Download CV
          </button>
        </div>
      </nav>

      <div className="header-cta-group">
        <button
          className="header-cta"
          onClick={() => handleNavClick("cv")}
          title="View Online CV / Download PDF"
        >
          Download CV <Arrow diagonal />
        </button>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-bar bar-top" />
        <span className="menu-bar bar-bottom" />
      </button>

      {/* LUXURY SCROLL PROGRESS GLOW BAR */}
      <div
        className="header-scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
