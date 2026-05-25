"use client";

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import './globals.css';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, integrate with Formspree, Next.js API Routes, etc.
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <>
      <header className="nav-header">
        <div className="nav-logo gradient-text" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Image src="/Logo2_transparent.png" alt="Website Logo" width={72} height={72} style={{ borderRadius: '8px', objectFit: 'fill' }} priority />
          Saarthi Organics
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero-section" id="about">
          <div className="hero-content">
            <h1 className="title-large">
              Premium <br /> <span className="gradient-text">Blackstrap</span> Molasses
            </h1>
            <p className="subtitle-large" style={{ marginBottom: '32px' }}>
              SAARTHI ORGANICS is a trusted name in molasses trading across North India. We specialize in bulk tanker supply, offering consistent quality, transparent billing, and reliable logistics to industrial buyers. With our own transport network and experienced handling, we ensure smooth, safe, and timely delivery of molasses across North India. Our logistics strength allows us to meet urgent and bulk requirements with ease.
            </p>
            <a href="#contact" className="cta-button" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Request a Quote
            </a>

            <div className="trust-lines" style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-gold)' }}>✔</span> Bulk Supply Available
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-gold)' }}>✔</span> PAN India Delivery
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-gold)' }}>✔</span> Consistent Quality
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-gold)' }}>✔</span> Competitive Pricing
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-gold)' }}>✔</span> Custom Packaging Options
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-gold)' }}>✔</span> In-house Transport Network
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <Image
                src="/molasses_hero.png"
                alt="Rich dark pouring molasses"
                width={450}
                height={550}
                className="hero-image"
                priority
              />
              <div className="pour-overlay"></div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section id="why-choose-us" style={{ background: 'linear-gradient(135deg, rgba(245, 176, 65, 0.05), rgba(211, 84, 0, 0.05))', borderRadius: '24px', padding: '60px 40px', margin: '0 auto 60px auto', border: '1px solid var(--glass-border)' }}>
          <h2 className="title-large" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', textAlign: 'center', marginBottom: '40px' }}>
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '0', gap: '24px' }}>
            
            <div className="glass-panel glass-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚛</div>
              <h3 className="feature-title" style={{ fontSize: '1.2rem', marginBottom: '0' }}>Own Transport Fleet</h3>
            </div>

            <div className="glass-panel glass-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📍</div>
              <h3 className="feature-title" style={{ fontSize: '1.2rem', marginBottom: '0' }}>Strong Network in North India</h3>
            </div>

            <div className="glass-panel glass-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📄</div>
              <h3 className="feature-title" style={{ fontSize: '1.2rem', marginBottom: '0' }}>Proper GST Billing & Documentation</h3>
            </div>

            <div className="glass-panel glass-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⏱️</div>
              <h3 className="feature-title" style={{ fontSize: '1.2rem', marginBottom: '0' }}>Timely Delivery</h3>
            </div>

            <div className="glass-panel glass-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🤝</div>
              <h3 className="feature-title" style={{ fontSize: '1.2rem', marginBottom: '0' }}>Trusted by Bulk Buyers</h3>
            </div>

          </div>
        </section>

        {/* APPLICATIONS SECTION */}
        <section id="products">
          <h2 className="title-large" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', textAlign: 'center', marginBottom: '20px' }}>
            Applications of <span className="gradient-text">Blackstrap Molasses</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 50px auto' }}>
            Our high-quality molasses serves as a critical ingredient and raw material across multiple major industries.
          </p>
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            
            <div className="glass-panel glass-card">
              <div className="feature-icon">🐄</div>
              <h3 className="feature-title">Cattle Feed Industry</h3>
              <p className="feature-desc">
                Used as a nutritional supplement and palatability enhancer in animal feed.
              </p>
            </div>

            <div className="glass-panel glass-card">
              <div className="feature-icon">🥃</div>
              <h3 className="feature-title">Ethanol & Distillery</h3>
              <p className="feature-desc">
                Widely used as a raw material for ethanol and alcohol production.
              </p>
            </div>

            <div className="glass-panel glass-card">
              <div className="feature-icon">🦠</div>
              <h3 className="feature-title">Yeast & Fermentation</h3>
              <p className="feature-desc">
                Ideal for yeast cultivation and fermentation processes.
              </p>
            </div>

            <div className="glass-panel glass-card">
              <div className="feature-icon">🚬</div>
              <h3 className="feature-title">Tobacco Industry</h3>
              <p className="feature-desc">
                Used as a flavoring and moisture-retaining agent in tobacco products.
              </p>
            </div>

            <div className="glass-panel glass-card">
              <div className="feature-icon">🏭</div>
              <h3 className="feature-title">Casting & Foundry</h3>
              <p className="feature-desc">
                Used as a binder additive in sand casting applications.
              </p>
            </div>

            <div className="glass-panel glass-card">
              <div className="feature-icon">🌱</div>
              <h3 className="feature-title">Agriculture & Farming</h3>
              <p className="feature-desc">
                Used in organic farming, composting, and as a soil conditioner.
              </p>
            </div>

            <div className="glass-panel glass-card">
              <div className="feature-icon">🍞</div>
              <h3 className="feature-title">Food Processing</h3>
              <p className="feature-desc">
                Used in bakery, confectionery, and food-grade applications.
              </p>
            </div>

            <div className="glass-panel glass-card">
              <div className="feature-icon">🔬</div>
              <h3 className="feature-title">Pharmaceuticals</h3>
              <p className="feature-desc">
                Acts as a vital carbon source in the fermentation of antibiotics and vitamins.
              </p>
            </div>

          </div>
        </section>

        {/* CONTACT / LEAD CARDS */}
        <section id="contact">
          <h2 className="title-large" style={{ fontSize: '3rem' }}>
            Let's <span className="gradient-text">Talk Business</span>
          </h2>

          <div className="contact-section">
            <div className="contact-details">
              <p className="subtitle-large" style={{ marginBottom: '40px' }}>
                Looking to secure a stable and premium supply of molasses for your commercial needs? Reach out to our trading desk today.
              </p>

              <div className="contact-item">
                <h4>Office Address</h4>
                <p>Farm House, Liberty Chowk<br />Karnal - 132001</p>
              </div>

              <div className="contact-item">
                <h4>Direct Contact</h4>
                <p>+91 7055552535<br />+91 9927029029</p>
              </div>

              <div className="contact-item">
                <h4>Email Inquiries</h4>
                <p>contact@saarthiorganics.com</p>
              </div>
            </div>

            <form className="glass-panel lead-form" onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Request Wholesale Pricing</h3>

              {isSubmitted ? (
                <div style={{ padding: '20px', background: 'rgba(46, 204, 113, 0.2)', border: '1px solid #2ecc71', borderRadius: '12px', textAlign: 'center', color: '#2ecc71' }}>
                  Thank you! Your inquiry has been received. Our traders will contact you shortly.
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input required name="name" value={formData.name} onChange={handleInput} type="text" className="form-control" placeholder="John Doe" />
                  </div>

                  <div className="form-group">
                    <label>Company Email</label>
                    <input required name="email" value={formData.email} onChange={handleInput} type="email" className="form-control" placeholder="john@example.com" />
                  </div>

                  <div className="form-group">
                    <label>Company Name</label>
                    <input name="company" value={formData.company} onChange={handleInput} type="text" className="form-control" placeholder="Acme Distillery" />
                  </div>

                  <div className="form-group">
                    <label>Volume Requirement & Details</label>
                    <textarea required name="message" value={formData.message} onChange={handleInput} className="form-control" placeholder="Tell us about your estimated monthly volume..."></textarea>
                  </div>

                  <button type="submit" className="cta-button submit-btn">
                    Submit Inquiry
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Saarthi Organics. All rights reserved.</p>
      </footer>
    </>
  );
}
