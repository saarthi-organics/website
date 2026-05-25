"use client";

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import './globals.css';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    const googleFormUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
    const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    // 1. Check if Google Forms is configured
    if (googleFormUrl && googleFormUrl !== 'YOUR_GOOGLE_FORM_RESPONSE_URL' && googleFormUrl.trim() !== '') {
      try {
        const entryName = process.env.NEXT_PUBLIC_GOOGLE_ENTRY_NAME || '';
        const entryEmail = process.env.NEXT_PUBLIC_GOOGLE_ENTRY_EMAIL || '';
        const entryCompany = process.env.NEXT_PUBLIC_GOOGLE_ENTRY_COMPANY || '';
        const entryMessage = process.env.NEXT_PUBLIC_GOOGLE_ENTRY_MESSAGE || '';

        const formDataBody = new URLSearchParams();
        formDataBody.append(entryName, formData.name);
        formDataBody.append(entryEmail, formData.email);
        formDataBody.append(entryCompany, formData.company || 'N/A');
        formDataBody.append(entryMessage, formData.message);

        // Submitting to Google Forms requires mode: 'no-cors' to avoid browser CORS blocking
        await fetch(googleFormUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formDataBody.toString()
        });

        // With no-cors, we assume success if the fetch promise resolves
        setFormStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } catch (err) {
        console.error('Error submitting to Google Forms:', err);
        setFormStatus('error');
        setErrorMessage('Failed to submit form to Google Sheets. Please check your network and try again.');
      }
      return;
    }

    // 2. Check if Web3Forms is configured
    if (web3formsAccessKey && web3formsAccessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY_HERE' && web3formsAccessKey.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3formsAccessKey,
            name: formData.name,
            email: formData.email,
            subject: `New wholesale inquiry from ${formData.company || formData.name}`,
            from_name: 'Saarthi Organics Website',
            company: formData.company || 'N/A',
            message: formData.message
          })
        });

        const result = await response.json();
        if (response.ok && result.success) {
          setFormStatus('success');
          setFormData({ name: '', email: '', company: '', message: '' });
          setTimeout(() => setFormStatus('idle'), 5000);
        } else {
          setFormStatus('error');
          setErrorMessage(result.message || 'Form submission failed. Please try again.');
        }
      } catch (err) {
        console.error('Error submitting to Web3Forms:', err);
        setFormStatus('error');
        setErrorMessage('A network error occurred. Please check your connection and try again.');
      }
      return;
    }

    // 3. Fallback: Simulation for development/testing
    console.warn("Neither Google Forms nor Web3Forms is configured in environment variables. Running simulator.");
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1200);
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

              {formStatus === 'success' ? (
                <div style={{ padding: '24px', background: 'rgba(46, 204, 113, 0.15)', border: '1px solid rgba(46, 204, 113, 0.4)', borderRadius: '16px', textAlign: 'center', color: '#2ecc71', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <div style={{ fontSize: '2.5rem', lineHeight: 1 }}>✓</div>
                  <h4 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 600 }}>Inquiry Received!</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.5' }}>
                    Thank you! Your inquiry has been received. Our traders will review your volume requirements and contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input required disabled={formStatus === 'submitting'} name="name" value={formData.name} onChange={handleInput} type="text" className="form-control" placeholder="John Doe" />
                  </div>

                  <div className="form-group">
                    <label>Company Email</label>
                    <input required disabled={formStatus === 'submitting'} name="email" value={formData.email} onChange={handleInput} type="email" className="form-control" placeholder="john@example.com" />
                  </div>

                  <div className="form-group">
                    <label>Company Name</label>
                    <input disabled={formStatus === 'submitting'} name="company" value={formData.company} onChange={handleInput} type="text" className="form-control" placeholder="Acme Distillery" />
                  </div>

                  <div className="form-group">
                    <label>Volume Requirement & Details</label>
                    <textarea required disabled={formStatus === 'submitting'} name="message" value={formData.message} onChange={handleInput} className="form-control" placeholder="Tell us about your estimated monthly volume..."></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div style={{ margin: '8px 0 16px 0', padding: '12px 16px', background: 'rgba(231, 76, 60, 0.12)', border: '1px solid rgba(231, 76, 60, 0.3)', borderRadius: '12px', color: '#e74c3c', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>⚠</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button type="submit" disabled={formStatus === 'submitting'} className="cta-button submit-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: formStatus === 'submitting' ? 0.7 : 1, cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer' }}>
                    {formStatus === 'submitting' ? (
                      <>
                        <span className="spinner"></span>
                        Sending Inquiry...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
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
