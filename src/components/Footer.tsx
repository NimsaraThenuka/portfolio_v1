import React from "react";
import { PageId } from "./Navbar";
import { Arrow, MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon } from "./Icons";

interface FooterProps {
  onNavigate: (page: PageId, slug?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-grid">
        <div className="footer-brand-col">
          <button
            className="brand footer-brand"
            onClick={() => handleNav("home")}
            aria-label="Saliya Wimalasena home"
          >
            <span className="brand-signature footer-signature">Saliya Wimalasena</span>
          </button>
          <p className="footer-bio">
            Cluster-level marketing leadership for luxury Maldivian resorts & selective independent consulting across branding, digital performance, and international market entry.
          </p>
          <div className="footer-location-tag">
            <MapPinIcon className="w-3.5 h-3.5 text-[var(--acid)]" />
            <span>Malé, Republic of Maldives</span>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Sitemap</h4>
          <ul>
            <li><button onClick={() => handleNav("home")}>Home</button></li>
            <li><button onClick={() => handleNav("about")}>About Saliya</button></li>
            <li><button onClick={() => handleNav("work")}>Work & Case Studies</button></li>
            <li><button onClick={() => handleNav("services")}>Independent Consulting</button></li>
            <li><button onClick={() => handleNav("insights")}>Insights & Articles</button></li>
            <li><button onClick={() => handleNav("contact")}>Contact & Booking</button></li>
            <li><button onClick={() => handleNav("cv")}>Online CV / Resume</button></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Key Case Studies</h4>
          <ul>
            <li>
              <button onClick={() => { onNavigate("work", "aaa-direct-booking-growth"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                Direct Booking Growth (0% → 30%)
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate("work", "aaa-yandex-russian-market"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                Yandex Russian Market Entry
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate("work", "aaa-medhufushi-india-campaign"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                Medhufushi Indian Market Campaign
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate("work", "muni-project-sales-record"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                Muni 2.5M+ B2B Sales Record
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate("work", "aaa-content-unit"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                In-House Content Studio Unit
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Direct Reach</h4>
          <div className="footer-contact-items">
            <a href="mailto:saliyakasun@gmail.com" className="footer-contact-line">
              <MailIcon className="w-4 h-4 text-[var(--acid)]" />
              <span>saliyakasun@gmail.com</span>
            </a>
            <a href="tel:+9609310940" className="footer-contact-line">
              <PhoneIcon className="w-4 h-4 text-[var(--acid)]" />
              <span>+960 931 0940 (Maldives)</span>
            </a>
            <a href="tel:+94778438570" className="footer-contact-line">
              <PhoneIcon className="w-4 h-4 text-[var(--acid)]" />
              <span>+94 77 843 8570 (Sri Lanka)</span>
            </a>
            <a
              href="https://linkedin.com/in/saliyawimalasena"
              target="_blank"
              rel="noreferrer"
              className="footer-contact-line linkedin-line"
            >
              <LinkedinIcon className="w-4 h-4 text-[var(--acid)]" />
              <span>linkedin.com/in/saliyawimalasena</span>
            </a>
          </div>
        </div>
      </div>

      {/* GIANT LUXURY FOOTER BRAND STATEMENT */}
      <div
        className="footer-giant-statement"
        onClick={() => handleNav("home")}
        role="button"
        tabIndex={0}
        aria-label="Saliya Wimalasena Portfolio Home"
      >
        <div className="footer-giant-track">
          <span className="footer-giant-title">Saliya Wimalasena</span>
          <span className="footer-giant-sub">Portfolio</span>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>© {new Date().getFullYear()} Saliya Wimalasena. All rights reserved.</p>
        <p className="footer-tech-note">Luxury Hospitality · Tourism · International Business</p>
        <button
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Back to top"
        >
          Top ↑
        </button>
      </div>
    </footer>
  );
}
