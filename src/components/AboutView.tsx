import React from "react";
import { PageId } from "./Navbar";
import {
  aboutStory,
  philosophies,
  careerTimeline,
  areasOfFocus,
  academicQualifications,
  professionalCertifications,
  beyondWork,
} from "../data/aboutData";
import {
  Arrow,
  AwardIcon,
  SparklesIcon,
  MapPinIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  GemIcon,
  CpuIcon,
  UsersIcon,
  GlobeIcon,
  CheckCircleIcon,
} from "./Icons";

interface AboutViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  images?: {
    beige: string;
    burgundy: string;
    navy: string;
    seated: string;
  };
}

export default function AboutView({ onNavigate, images }: AboutViewProps) {
  const seatedImg = images?.seated || "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1200,c_limit/v1791344666/seated-workspace_xxbwnk.png";
  const beigeImg = images?.beige || "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1000,c_limit/v1791344661/portrait_beige_with_spectacles_pxpt0i.png";
  const navyImg = images?.navy || "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1000,c_limit/v1791344665/SaliyaWimalasena_variation_01_with_spectacles_whrwlk.png";

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="about-page-view">
      {/* HERO SECTION */}
      <section className="about-hero hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Professional Background & Philosophy
          </div>
          <h1>About Saliya</h1>
          <div className="hero-subtitles mt-3">
            <h2 className="hero-h2">Marketing & Communications Professional</h2>
            <h3 className="hero-h3">Luxury Hospitality | Tourism | International Business</h3>
          </div>
          <p className="hero-intro">
            A decade of international leadership bridging high-touch luxury brand positioning with relentless digital performance across the Maldives, Sri Lanka, and global feeder markets.
          </p>
          <div className="about-quick-tags mt-6">
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="w-3.5 h-3.5 text-[var(--acid)]" /> Based in Malé, Maldives
            </span>
            <span className="inline-flex items-center gap-2">
              <BriefcaseIcon className="w-3.5 h-3.5 text-[var(--acid)]" /> Cluster Manager, AAA Hotels
            </span>
            <span className="inline-flex items-center gap-2">
              <GraduationCapIcon className="w-3.5 h-3.5 text-[var(--acid)]" /> 3 Postgraduate Degrees
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={beigeImg}
              alt="Saliya Wimalasena in beige blazer"
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
              Leadership
            </small>
          </div>
          <div className="hero-caption">
            <span>02</span>
            <p>
              Professional Bio
              <br />
              Malé, Maldives
            </p>
          </div>
        </div>
        <div
          className="hero-scroll"
          onClick={() => {
            const nextEl = document.querySelector(".about-story-sec") || document.querySelector(".hero + *");
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

      {/* SECTION 1: MY STORY */}
      <section className="about-story-sec section-pad">
        <div className="story-layout-grid">
          <div className="story-left-col">
            <div className="section-label">
              <span />
              Section 01 / Biography
            </div>
            <h2>
              Where <em>luxury</em> meets
              <br />
              measurable performance.
            </h2>
            <div className="story-quote-card mt-8">
              <p className="story-quote-card-text">
                “Every asset needs to feel worthy of the five-star guest experience while delivering relentless commercial growth.”
              </p>
              <div className="story-quote-card-author">
                <strong>Saliya Wimalasena</strong>
                <span>Cluster Marketing & Communications Leader</span>
              </div>
            </div>
          </div>
          <div className="story-right-col">
            {aboutStory.paragraphs.map((p, idx) => (
              <p key={idx} className={`story-para ${idx === 0 ? "lead-para" : ""}`}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW I WORK (PHILOSOPHY) */}
      <section className="philosophy-sec section-pad">
        <div className="philosophy-header">
          <div className="section-label">
            <span />
            Section 02 / Work Philosophy
          </div>
          <h2>
            Four principles that <em>guide</em>
            <br />
            every engagement.
          </h2>
          <p className="lead-text">
            My approach balances strategic clarity, creative distinction, and analytical precision.
          </p>
        </div>

        <div className="philosophy-grid">
          {philosophies.map((item) => (
            <div className="philosophy-card" key={item.number}>
              <span className="p-num">{item.number}</span>
              <h3>{item.title}</h3>
              <span className="p-summary">{item.summary}</span>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: MY CAREER JOURNEY (TIMELINE) */}
      <section className="career-sec section-pad">
        <div className="career-header-row">
          <div>
            <div className="section-label">
              <span />
              Section 03 / Career Progression
            </div>
            <h2>
              A decade of building<br />across <em>markets.</em>
            </h2>
          </div>
          <p className="career-desc">
            A chronological timeline of marketing leadership across luxury hospitality, corporate B2B conglomerates, export trading, and FMCG.
          </p>
        </div>

        <div className="career-timeline-list">
          {careerTimeline.map((item, idx) => (
            <div className="timeline-card-item" key={idx}>
              <div className="t-time-col">
                <span className="t-period">{item.period}</span>
                <span className="t-loc">{item.location}</span>
                <span className="t-skill-badge">{item.keySkill}</span>
              </div>
              <div className="t-info-col">
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <ul className="t-highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="bullet">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[var(--wine)] inline shrink-0" />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: AREAS OF FOCUS */}
      <section className="focus-sec section-pad">
        <div className="focus-header">
          <div className="section-label">
            <span />
            Section 04 / Core Disciplines
          </div>
          <h2>Areas of focus.</h2>
          <p className="lead-text">
            Specialized domain knowledge cultivated through hands-on campaign delivery.
          </p>
        </div>

        <div className="focus-cards-grid">
          {areasOfFocus.map((f, idx) => (
            <div className="focus-card" key={idx}>
              <div className="focus-top-row">
                <span className="focus-tag">{f.tag}</span>
                <span className="focus-index">0{idx + 1}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: EDUCATION & CREDENTIALS */}
      <section className="credentials-sec section-pad">
        <div className="credentials-header">
          <div className="section-label">
            <span />
            Section 05 / Qualifications
          </div>
          <h2>Academic foundation & credentials.</h2>
        </div>

        <div className="credentials-grid">
          {/* Academic */}
          <div className="cred-block">
            <div className="cred-block-title">
              <GraduationCapIcon className="w-5 h-5 text-[var(--acid)]" />
              <h3>Academic Qualifications</h3>
            </div>
            <div className="academic-list">
              {academicQualifications.map((aq, i) => (
                <div className="academic-item" key={i}>
                  <div className="academic-meta">
                    <span className="academic-country">{aq.country}</span>
                    <span className="academic-inst">{aq.institution}</span>
                  </div>
                  <h4>{aq.degree}</h4>
                  <p>{aq.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="cred-block">
            <div className="cred-block-title">
              <AwardIcon className="w-5 h-5 text-[var(--acid)]" />
              <h3>Professional Certifications</h3>
            </div>
            <div className="cert-list">
              {professionalCertifications.map((pc, i) => (
                <div className="cert-item" key={i}>
                  <div className="cert-status-badge">
                    <span className={`status-pill ${pc.status === "Completed" ? "done" : "progress"}`}>
                      {pc.status === "Completed" ? "Verified Certification" : "Currently Pursuing"}
                    </span>
                  </div>
                  <h4>{pc.title}</h4>
                  <span className="cert-issuer">{pc.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BEYOND WORK */}
      <section className="beyond-work-sec">
        <div className="beyond-box">
          <div className="beyond-copy">
            <div className="section-label">
              <span />
              Section 06 / Passions & Ventures
            </div>
            <h2>Beyond the <em>boardroom.</em></h2>
            <p className="beyond-lead">{beyondWork.text}</p>
            <div className="beyond-ventures-grid">
              <div className="venture-card">
                <div className="venture-icon-wrap">
                  <GemIcon className="w-5 h-5" />
                </div>
                <div className="venture-info">
                  <h4>Chrish Royal Gems & Jewellery</h4>
                  <p>Fine Gems & Bespoke Rings · Maldives & Sri Lanka</p>
                </div>
              </div>
              <div className="venture-card">
                <div className="venture-icon-wrap">
                  <CpuIcon className="w-5 h-5" />
                </div>
                <div className="venture-info">
                  <h4>AI in Creative Operations</h4>
                  <p>Workflow Modernization & Generative Systems</p>
                </div>
              </div>
              <div className="venture-card">
                <div className="venture-icon-wrap">
                  <UsersIcon className="w-5 h-5" />
                </div>
                <div className="venture-info">
                  <h4>Youth Mentorship</h4>
                  <p>Next-Gen Marketer Enablement & Growth</p>
                </div>
              </div>
              <div className="venture-card">
                <div className="venture-icon-wrap">
                  <GlobeIcon className="w-5 h-5" />
                </div>
                <div className="venture-info">
                  <h4>Sustainable Atoll Tourism</h4>
                  <p>Island Conservation & Eco-Community Support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="beyond-media">
            <div className="beyond-ambient-glow" />
            <img
              src={navyImg}
              alt="Saliya Wimalasena in navy blazer"
              className="beyond-portrait-img"
            />
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="cta-band-content">
          <div className="cta-tag">Get in Touch</div>
          <h2>Let's discuss what we can build together.</h2>
          <p>
            Whether you're exploring hospitality cluster leadership or selective independent consulting, I'd welcome the opportunity to connect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <button className="button button-primary" onClick={() => handleNav("contact")}>
              Connect with Me <Arrow />
            </button>
            <button className="button button-secondary-outline" onClick={() => handleNav("cv")}>
              View Full CV / Resume <Arrow diagonal />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
