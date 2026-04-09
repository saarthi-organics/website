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
          Aura Molasses
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
            <p className="subtitle-large">
              We source and trade the highest quality molasses globally. Rich, pure, and refined for the most demanding industries. Partner with the industry leader in wholesale natural syrups.
            </p>
            <a href="#contact" className="cta-button" style={{ textDecoration: 'none' }}>
              Request a Quote
            </a>
          </div>
          <div className="hero-image-wrapper">
            <Image
              src="/molasses_hero.png"
              alt="Rich dark pouring molasses"
              width={450}
              height={550}
              className="hero-image"
              priority
            />
          </div>
        </section>

        {/* FEATURES / PRODUCTS */}
        <section id="products">
          <h2 className="title-large" style={{ fontSize: '3rem', textAlign: 'center' }}>
            Unmatched <span className="gradient-text">Quality</span>
          </h2>
          <div className="features-grid">
            <div className="glass-panel glass-card">
              <div className="feature-icon">🌿</div>
              <h3 className="feature-title">100% Pure Organic</h3>
              <p className="feature-desc">
                Our extraction processes ensure zero additives, bringing you pure unrefined organic molasses straight from the sugarcane.
              </p>
            </div>
            <div className="glass-panel glass-card">
              <div className="feature-icon">🚚</div>
              <h3 className="feature-title">Global Wholesale Shipping</h3>
              <p className="feature-desc">
                From barrel to cargo ship, our logistics network securely delivers wholesale quantities of premium molasses anywhere in the world.
              </p>
            </div>
            <div className="glass-panel glass-card">
              <div className="feature-icon">🍯</div>
              <h3 className="feature-title">Rich Flavor Profile</h3>
              <p className="feature-desc">
                Deep, robust, and full-bodied. Ideal for premium culinary applications, craft distilleries, and high-end agriculture.
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
                <h4>Global Headquarters</h4>
                <p>1280 Sweetwater Avenue<br />Miami, FL 33101</p>
              </div>

              <div className="contact-item">
                <h4>Direct Trading Line</h4>
                <p>+1 (800) 555-CANE</p>
              </div>

              <div className="contact-item">
                <h4>Email Inquiries</h4>
                <p>traders@auramolasses.com</p>
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
        <p>&copy; {new Date().getFullYear()} Aura Molasses Trading Group. All rights reserved.</p>
      </footer>
    </>
  );
}
