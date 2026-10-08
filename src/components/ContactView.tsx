import React, { useState } from "react";
import { Arrow, MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, CheckCircleIcon, ClockIcon } from "./Icons";

interface ContactViewProps {
  images?: {
    beige: string;
    burgundy: string;
    navy: string;
    seated: string;
  };
}

export default function ContactView({ images }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    enquiryType: "Consulting",
    preferredMethod: "Email",
    phoneOrWhatsApp: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("saliyakasun@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const heroImg = images?.burgundy || "https://res.cloudinary.com/dyp247eoh/image/upload/f_auto,q_auto,w_1000,c_limit/v1791344662/portrait_burgundy_with_spectacles_1_o2wvzd.png";

  return (
    <div className="contact-page-view">
      {/* HERO SECTION */}
      <section className="contact-hero hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Let's Start a Conversation
          </div>
          <h1>
            Get in <em>touch.</em>
          </h1>
          <div className="hero-subtitles mt-3">
            <h2 className="hero-h2">Leadership & Advisory Inquiries</h2>
            <h3 className="hero-h3">Hospitality Cluster Roles · Consulting · Speaking</h3>
          </div>
          <p className="hero-intro">
            Whether you're a hospitality brand looking for senior marketing leadership, a business seeking independent consulting, or a fellow marketer wanting to connect — I'd love to hear from you.
          </p>
          <div className="about-quick-tags mt-6">
            <span>24–48h Response Guarantee</span>
            <span>Direct WhatsApp Channel</span>
            <span>Malé & Remote Sprints</span>
            <span>Direct Advisory</span>
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
            const nextEl = document.querySelector(".contact-main-grid-sec") || document.querySelector(".hero + *");
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

      {/* MAIN TWO-COLUMN CONTACT SECTION */}
      <section className="contact-main-grid-sec section-pad">
        <div className="contact-columns-grid">
          {/* LEFT: FORM */}
          <div className="contact-form-container">
            <div className="form-heading">
              <span className="form-badge">Direct Inquiry</span>
              <h2>Send a Message</h2>
              <p>Fill out the details below and I'll get back to you promptly.</p>
            </div>

            {submitted ? (
              <div className="form-success-card">
                <div className="success-icon">
                  <CheckCircleIcon className="w-8 h-8 text-[var(--acid)]" />
                </div>
                <h3>Message Received!</h3>
                <p>
                  Thank you for reaching out, <strong>{formData.name}</strong>. I have received your enquiry regarding <strong>{formData.enquiryType}</strong> and will get back to you within 24–48 hours via {formData.preferredMethod}.
                </p>
                <button
                  className="button button-primary mt-6"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      enquiryType: "Consulting",
                      preferredMethod: "Email",
                      phoneOrWhatsApp: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="actual-contact-form">
                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. elena@resorts.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="company">Company / Organisation</label>
                    <input
                      type="text"
                      id="company"
                      placeholder="e.g. Atoll Collection Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="enquiryType">Type of Enquiry *</label>
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    >
                      <option value="Hospitality Leadership">Job Opportunity / Leadership</option>
                      <option value="Consulting">Independent Consulting Engagement</option>
                      <option value="Speaking & Media">Speaking / Media Appearance</option>
                      <option value="General">General Inquiries / Networking</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="preferredMethod">Preferred Contact Method</label>
                    <select
                      id="preferredMethod"
                      value={formData.preferredMethod}
                      onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                    >
                      <option value="Email">Email</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone Call">Phone Call</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone / WhatsApp Number (Optional)</label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="+960 / +94 / international"
                      value={formData.phoneOrWhatsApp}
                      onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your brand, current challenges, timelines, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="button button-primary w-full" disabled={loading}>
                  {loading ? "Transmitting..." : "Send Message"} <Arrow />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: DIRECT CONTACT INFO */}
          <div className="contact-info-cards-col">
            <div className="contact-info-panel">
              <span className="panel-badge">Direct Communication</span>
              <h2>Contact Channels</h2>
              <p className="panel-sub">
                Feel free to reach out directly via email, WhatsApp, or phone.
              </p>

              <div className="direct-cards-stack">
                <div className="direct-card">
                  <div className="direct-icon-wrap">
                    <MailIcon className="w-5 h-5 text-[var(--acid)]" />
                  </div>
                  <div className="direct-details">
                    <span className="direct-lbl">Email Address</span>
                    <a href="mailto:saliyakasun@gmail.com" className="direct-val">
                      saliyakasun@gmail.com
                    </a>
                  </div>
                  <button
                    className="copy-btn"
                    onClick={copyEmailToClipboard}
                    title="Copy Email"
                  >
                    {copiedEmail ? "Copied!" : "Copy"}
                  </button>
                </div>

                <div className="direct-card">
                  <div className="direct-icon-wrap">
                    <PhoneIcon className="w-5 h-5 text-[var(--acid)]" />
                  </div>
                  <div className="direct-details">
                    <span className="direct-lbl">Maldives (Call / WhatsApp)</span>
                    <a href="tel:+9609310940" className="direct-val">
                      +960 931 0940
                    </a>
                  </div>
                </div>

                <div className="direct-card">
                  <div className="direct-icon-wrap">
                    <PhoneIcon className="w-5 h-5 text-[var(--acid)]" />
                  </div>
                  <div className="direct-details">
                    <span className="direct-lbl">Sri Lanka</span>
                    <a href="tel:+94778438570" className="direct-val">
                      +94 77 843 8570
                    </a>
                  </div>
                </div>

                <div className="direct-card">
                  <div className="direct-icon-wrap">
                    <LinkedinIcon className="w-5 h-5 text-[var(--acid)]" />
                  </div>
                  <div className="direct-details">
                    <span className="direct-lbl">Professional Network</span>
                    <a
                      href="https://linkedin.com/in/saliyawimalasena"
                      target="_blank"
                      rel="noreferrer"
                      className="direct-val"
                    >
                      linkedin.com/in/saliyawimalasena ↗
                    </a>
                  </div>
                </div>

                <div className="direct-card">
                  <div className="direct-icon-wrap">
                    <MapPinIcon className="w-5 h-5 text-[var(--acid)]" />
                  </div>
                  <div className="direct-details">
                    <span className="direct-lbl">Current Location</span>
                    <span className="direct-val">Malé, Republic of Maldives</span>
                  </div>
                </div>
              </div>

              {/* WHAT TO EXPECT GUARANTEE */}
              <div className="expect-box">
                <div className="expect-header">
                  <ClockIcon className="w-4 h-4 text-[var(--acid)]" />
                  <h4>What to Expect</h4>
                </div>
                <p>
                  I aim to respond to all enquiries within <strong>24–48 hours</strong>. For time-sensitive matters or urgent campaign questions, WhatsApp is the fastest way to reach me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
