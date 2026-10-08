import React from "react";
import { PageId } from "./Navbar";
import {
  aboutStory,
  careerTimeline,
  academicQualifications,
  professionalCertifications,
  skillsMatrix,
} from "../data/aboutData";
import {
  DownloadIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon,
  CheckCircleIcon,
  AwardIcon,
  Arrow,
} from "./Icons";

interface CvViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  images?: {
    beige: string;
    burgundy: string;
    navy: string;
    seated: string;
  };
}

export default function CvView({ onNavigate, images }: CvViewProps) {
  const photoImg = images?.burgundy || "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1000,c_limit/v1791344662/portrait_burgundy_with_spectacles_1_o2wvzd.png";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-page-view">
      {/* CV TOP ACTION BAR */}
      <div className="cv-action-bar no-print">
        <div className="cv-action-container">
          <div className="cv-action-left">
            <span className="cv-status-pill">● Official Curriculum Vitae</span>
            <span className="cv-updated-text">Updated for 2026</span>
          </div>
          <div className="cv-action-right">
            <button className="button button-primary" onClick={handlePrint}>
              <DownloadIcon className="w-4 h-4 inline mr-2" /> Download / Print PDF CV
            </button>
            <button className="button button-secondary-outline" onClick={() => onNavigate("contact")}>
              Contact Directly <Arrow diagonal />
            </button>
          </div>
        </div>
      </div>

      {/* PRINTABLE CV PAPER */}
      <div className="cv-paper-container" id="cv-printable">
        {/* CV HEADER */}
        <header className="cv-header">
          <div className="cv-header-left">
            <h1 className="cv-name">Saliya Wimalasena</h1>
            <h2 className="cv-headline">
              Marketing & Communications Professional
            </h2>
            <p className="cv-subheadline">
              Specialising in Luxury Hospitality, Tourism & International Business
            </p>
            <div className="cv-contact-strip">
              <span className="cv-contact-item">
                <MailIcon className="w-3.5 h-3.5 inline text-[var(--wine)]" /> saliyakasun@gmail.com
              </span>
              <span className="cv-contact-item">
                <PhoneIcon className="w-3.5 h-3.5 inline text-[var(--wine)]" /> +960 931 0940 (Maldives)
              </span>
              <span className="cv-contact-item">
                <PhoneIcon className="w-3.5 h-3.5 inline text-[var(--wine)]" /> +94 77 843 8570 (Sri Lanka)
              </span>
              <span className="cv-contact-item">
                <MapPinIcon className="w-3.5 h-3.5 inline text-[var(--wine)]" /> Malé, Maldives
              </span>
              <span className="cv-contact-item">
                <LinkedinIcon className="w-3.5 h-3.5 inline text-[var(--wine)]" /> linkedin.com/in/saliyawimalasena
              </span>
            </div>
          </div>
          <div className="cv-header-photo no-print">
            <img
              src={photoImg}
              alt="Saliya Wimalasena"
              loading="eager"
              decoding="async"
            />
          </div>
        </header>

        {/* EXECUTIVE SUMMARY */}
        <section className="cv-section">
          <h3 className="cv-section-title">Executive Summary</h3>
          <p className="cv-summary-text">
            Results-driven Marketing & Communications leader with over 10 years of international experience spanning luxury hospitality, tourism, FMCG, and corporate B2B supply. Currently leading cluster marketing across three luxury Maldivian resorts under AAA Hotels & Resorts, successfully architecting direct booking engines (growing direct share from 0% to 30%), pioneering Yandex Russian market expansion, and orchestrating multi-channel paid acquisition. Holds three postgraduate marketing qualifications (MSc UK, MBA China, BSc Hons Sri Lanka) with verified expertise across MarTech, GTM server-side tracking, brand governance, and broadcast media relations.
          </p>
        </section>

        {/* CORE COMPETENCIES MATRIX */}
        <section className="cv-section">
          <h3 className="cv-section-title">Key Competencies & Technology Stack</h3>
          <div className="cv-skills-grid">
            {skillsMatrix.map((item, idx) => (
              <div className="cv-skill-col" key={idx}>
                <h4>{item.category}</h4>
                <ul>
                  {item.skills.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="cv-section">
          <h3 className="cv-section-title">Professional Experience</h3>
          <div className="cv-experience-list">
            {careerTimeline.map((item, idx) => (
              <div className="cv-job-item" key={idx}>
                <div className="cv-job-header">
                  <div>
                    <h4 className="cv-job-role">{item.role}</h4>
                    <span className="cv-job-company">{item.company} · {item.location}</span>
                  </div>
                  <span className="cv-job-period">{item.period}</span>
                </div>
                <ul className="cv-job-bullets">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & ACADEMIC CREDENTIALS */}
        <section className="cv-section">
          <h3 className="cv-section-title">Academic Qualifications</h3>
          <div className="cv-edu-list">
            {academicQualifications.map((aq, idx) => (
              <div className="cv-edu-item" key={idx}>
                <div className="cv-edu-header">
                  <strong>{aq.degree}</strong>
                  <span>{aq.country}</span>
                </div>
                <span className="cv-edu-inst">{aq.institution}</span>
                <p className="cv-edu-focus">{aq.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROFESSIONAL CERTIFICATIONS */}
        <section className="cv-section">
          <h3 className="cv-section-title">Professional Certifications & Memberships</h3>
          <div className="cv-certs-list">
            {professionalCertifications.map((pc, idx) => (
              <div className="cv-cert-line" key={idx}>
                <CheckCircleIcon className="w-3.5 h-3.5 text-[var(--wine)] shrink-0 mt-0.5" />
                <div>
                  <strong>{pc.title}</strong> — <span>{pc.issuer}</span>
                  {pc.status === "Pursuing" && <span className="cv-pursuing-tag"> (Currently Pursuing)</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ENTREPRENEURSHIP & VENTURES */}
        <section className="cv-section">
          <h3 className="cv-section-title">Entrepreneurial Ventures & Interests</h3>
          <p className="cv-summary-text">
            <strong>Founder & Director — Chrish Royal Gems & Jewellery:</strong> Sri Lankan fine gemstones and bespoke jewellery brand catering to luxury resort clientele in the Maldives and international collectors. Passionate advocate for AI integration in creative workflows, tourism sustainability, and youth marketing mentorship.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="cv-footer">
          <p>References and verified case portfolio dashboards available upon formal request.</p>
        </footer>
      </div>
    </div>
  );
}
