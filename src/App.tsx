import React, { useState, useEffect } from "react";
import Navbar, { PageId } from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import WorkView from "./components/WorkView";
import CaseStudyDetailView from "./components/CaseStudyDetailView";
import ServicesView from "./components/ServicesView";
import InsightsView from "./components/InsightsView";
import ContactView from "./components/ContactView";
import CvView from "./components/CvView";
import { WhatsAppIcon } from "./components/Icons";

const images = {
  beige:
    "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1000,c_limit/v1791344661/portrait_beige_with_spectacles_pxpt0i.png",
  burgundy:
    "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1000,c_limit/v1791344662/portrait_burgundy_with_spectacles_1_o2wvzd.png",
  navy:
    "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1000,c_limit/v1791344665/SaliyaWimalasena_variation_01_with_spectacles_whrwlk.png",
  seated:
    "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1200,c_limit/v1791344666/seated-workspace_xxbwnk.png",
};

const pageTitles: Record<PageId, string> = {
  home: "Saliya Wimalasena | Marketing & Communications Professional | Luxury Hospitality",
  about: "About Saliya Wimalasena | Marketing Consultant Maldives",
  work: "Work & Projects | Saliya Wimalasena Portfolio",
  services: "Independent Marketing Consulting | Saliya Wimalasena",
  insights: "Insights on Luxury Hospitality Marketing | Saliya Wimalasena",
  contact: "Contact Saliya Wimalasena | Marketing Consultant",
  cv: "Curriculum Vitae | Saliya Wimalasena",
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [currentSlug, setCurrentSlug] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  // Background warm-up / prefetch all header portraits for instant tab switching
  useEffect(() => {
    Object.values(images).forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  // Floating Actions Cluster visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 350;
      setShowBackToTop(isScrolled);
      if (!isScrolled) {
        setWhatsappOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parse initial route from URL hash
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      if (!hash || hash === "home") {
        setCurrentPage("home");
        setCurrentSlug(undefined);
      } else if (hash.startsWith("work/")) {
        setCurrentPage("work");
        setCurrentSlug(hash.replace("work/", ""));
      } else if (hash.startsWith("insights/")) {
        setCurrentPage("insights");
        setCurrentSlug(hash.replace("insights/", ""));
      } else if (
        ["about", "work", "services", "insights", "contact", "cv"].includes(hash)
      ) {
        setCurrentPage(hash as PageId);
        setCurrentSlug(undefined);
      } else {
        setCurrentPage("home");
        setCurrentSlug(undefined);
      }
    };

    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  // Update Page Title
  useEffect(() => {
    document.title = pageTitles[currentPage] || "Saliya Wimalasena | Marketing & Communications";
  }, [currentPage]);

  // Scroll Reveal Observer on Route Change & Scroll
  useEffect(() => {
    const observeElements = () => {
      const selector = [
        "section:not(.hero):not(.about-hero):not(.case-hero)",
        ".reveal-on-scroll",
        ".reveal-fade-up",
        ".section-head-wrap",
        ".section-head",
        ".project-card",
        ".pillar-card",
        ".who-card",
        ".process-step-card",
        ".client-box",
        ".article-card",
        ".timeline-card-item",
        ".philosophy-card",
        ".focus-card",
        ".cred-block",
        ".work-card",
        ".venture-card",
        ".media-card",
        ".direct-card",
        ".contact-form-container",
        ".contact-info-panel",
        ".contact-office-card",
        ".cta-band",
        ".skills-active-panel",
        ".skills-matrix-wrapper",
        ".testimonials-card-main",
        ".numbers-strip .stat",
        ".story-layout-grid",
        ".beyond-box",
        ".case-story-block",
        ".case-challenge-block",
        ".case-approach-block",
        ".case-tools-block",
        ".case-results-block",
        ".learning-card",
        ".visual-proof-block",
        ".cv-section",
        ".cv-item-block",
        ".service-row",
        ".engagement-card",
        ".takeaway-card",
        ".footer-top-grid",
        ".footer-giant-statement",
      ].join(", ");

      if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(selector).forEach((el) => {
          el.classList.add("is-revealed");
          el.classList.add("in-view");
        });
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              entry.target.classList.add("in-view");
            }
          });
        },
        {
          threshold: 0.06,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      const targets = document.querySelectorAll(selector);
      targets.forEach((el) => observer.observe(el));

      return () => {
        targets.forEach((el) => observer.unobserve(el));
      };
    };

    const timer = setTimeout(observeElements, 50);
    return () => clearTimeout(timer);
  }, [currentPage, currentSlug]);

  const handleNavigate = (page: PageId, slug?: string) => {
    setCurrentPage(page);
    setCurrentSlug(slug);

    if (slug) {
      window.location.hash = `#${page}/${slug}`;
    } else {
      window.location.hash = `#${page}`;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      {/* GLOBAL NAVBAR */}
      <Navbar
        currentPage={currentPage}
        currentSlug={currentSlug}
        onNavigate={handleNavigate}
      />

      {/* MAIN ROUTED VIEWS */}
      <main className="main-viewport">
        {currentPage === "home" && (
          <HomeView onNavigate={handleNavigate} images={images} />
        )}

        {currentPage === "about" && (
          <AboutView onNavigate={handleNavigate} images={images} />
        )}

        {currentPage === "work" && !currentSlug && (
          <WorkView onNavigate={handleNavigate} images={images} />
        )}

        {currentPage === "work" && currentSlug && (
          <CaseStudyDetailView slug={currentSlug} onNavigate={handleNavigate} />
        )}

        {currentPage === "services" && (
          <ServicesView onNavigate={handleNavigate} images={images} />
        )}

        {currentPage === "insights" && (
          <InsightsView
            onNavigate={handleNavigate}
            selectedSlug={currentSlug}
            images={images}
          />
        )}

        {currentPage === "contact" && <ContactView images={images} />}

        {currentPage === "cv" && (
          <CvView onNavigate={handleNavigate} images={images} />
        )}
      </main>

      {/* GLOBAL FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* FLOATING ACTIONS CLUSTER (BOTTOM RIGHT) */}
      <div className={`floating-actions-cluster ${showBackToTop ? "is-visible" : ""}`}>
        {/* FLOATING WHATSAPP BUTTON & POPUP (TOP) */}
        <div className="floating-whatsapp-wrap">
          {whatsappOpen && (
            <div className="whatsapp-popup-card">
              <div className="whatsapp-popup-header">
                <div className="whatsapp-header-left">
                  <WhatsAppIcon className="w-4 h-4 whatsapp-header-icon" />
                  <span className="whatsapp-popup-title">Chat on WhatsApp</span>
                </div>
                <button
                  type="button"
                  className="whatsapp-close-btn"
                  onClick={() => setWhatsappOpen(false)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="whatsapp-popup-body">
                <a
                  href="https://wa.me/9609310940?text=Hello%20Saliya%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-line-card"
                  onClick={() => setWhatsappOpen(false)}
                >
                  <div className="whatsapp-line-info">
                    <span className="whatsapp-line-region">Maldives</span>
                    <span className="whatsapp-line-number">+960 931 0940</span>
                  </div>
                  <span className="whatsapp-chat-action">
                    Chat <span>→</span>
                  </span>
                </a>

                <a
                  href="https://wa.me/94778438570?text=Hello%20Saliya%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-line-card"
                  onClick={() => setWhatsappOpen(false)}
                >
                  <div className="whatsapp-line-info">
                    <span className="whatsapp-line-region">Sri Lanka & International</span>
                    <span className="whatsapp-line-number">+94 77 843 8570</span>
                  </div>
                  <span className="whatsapp-chat-action">
                    Chat <span>→</span>
                  </span>
                </a>
              </div>
            </div>
          )}

          <button
            type="button"
            className={`floating-whatsapp-btn ${whatsappOpen ? "is-active" : ""}`}
            onClick={() => setWhatsappOpen((prev) => !prev)}
            aria-label="Chat on WhatsApp"
            title="Chat with Saliya Wimalasena on WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="whatsapp-online-ring" />
          </button>
        </div>

        {/* BACK TO TOP BUTTON (BOTTOM) */}
        <button
          type="button"
          className="floating-back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll back to top"
          title="Scroll to top"
        >
          <span className="back-to-top-arrow">↑</span>
        </button>
      </div>
    </div>
  );
}
