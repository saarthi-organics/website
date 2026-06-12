"use client";

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    industryType: 'distillery',
    requiredQuantity: '',
    deliveryLocation: '',
    packagingRequirement: 'tanker',
    monthlyRequirement: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setError('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = (currentStep: number) => {
    setError('');
    if (currentStep === 1) {
      if (!formData.companyName.trim()) {
        setError('Company Name is required.');
        return false;
      }
      if (!formData.contactPerson.trim()) {
        setError('Purchase / Plant Manager name is required.');
        return false;
      }
      if (!formData.industryType) {
        setError('Industry Segment selection is required.');
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.requiredQuantity.trim()) {
        setError('Initial Order Quantity is required.');
        return false;
      }
      if (!formData.packagingRequirement) {
        setError('Packaging Format selection is required.');
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.deliveryLocation.trim()) {
        setError('Delivery Location is required.');
        return false;
      }
      if (!formData.phone.trim()) {
        setError('Contact Number is required.');
        return false;
      }
      if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
        setError('Please enter a valid business email address.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setError('');
    setStep(step - 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    
    setStatus('submitting');
    setError('');

    try {
      const payload = {
        ...formData,
        sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
        website: honeypot,
        
        // Client Marketing Attribution Parameters
        landingPageUrl: typeof window !== 'undefined' ? localStorage.getItem('saarthi_landing_page') || '' : '',
        formPageUrl: typeof window !== 'undefined' ? window.location.href : '',
        referringUrl: typeof window !== 'undefined' ? localStorage.getItem('saarthi_referrer') || '' : '',
        pageName: typeof window !== 'undefined' ? document.title : '',
        utmSource: typeof window !== 'undefined' ? localStorage.getItem('saarthi_utm_source') || '' : '',
        utmMedium: typeof window !== 'undefined' ? localStorage.getItem('saarthi_utm_medium') || '' : '',
        utmCampaign: typeof window !== 'undefined' ? localStorage.getItem('saarthi_utm_campaign') || '' : '',
        utmTerm: typeof window !== 'undefined' ? localStorage.getItem('saarthi_utm_term') || '' : '',
        utmContent: typeof window !== 'undefined' ? localStorage.getItem('saarthi_utm_content') || '' : '',
        trafficSource: typeof window !== 'undefined' ? localStorage.getItem('saarthi_traffic_source') || 'Direct Visit' : 'Direct Visit'
      };

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Push conversion events to GTM dataLayer
        if (typeof window !== 'undefined') {
          const dl = (window as any).dataLayer || [];
          dl.push({
            event: 'form_submission_success',
            inquiryId: result.submissionId || '',
            companyName: payload.companyName,
            industryType: payload.industryType,
            requiredQuantity: payload.requiredQuantity,
            trafficSource: payload.trafficSource,
            utmSource: payload.utmSource,
            utmMedium: payload.utmMedium,
            utmCampaign: payload.utmCampaign
          });
          (window as any).dataLayer = dl;

          // Dispatch standard CustomEvent for other analytics (Meta, CRM, etc.)
          const customEvent = new CustomEvent('saarthi_inquiry_submitted', {
            detail: {
              id: result.submissionId || '',
              company: payload.companyName,
              email: payload.email,
              phone: payload.phone
            }
          });
          window.dispatchEvent(customEvent);
        }

        setStatus('success');
        setStep(1);
        setFormData({
          companyName: '',
          contactPerson: '',
          phone: '',
          email: '',
          industryType: 'distillery',
          requiredQuantity: '',
          deliveryLocation: '',
          packagingRequirement: 'tanker',
          monthlyRequirement: '',
          message: ''
        });
        setHoneypot('');
      } else {
        setStatus('error');
        setError(result.message || 'An error occurred during form submission. Please verify your entries.');
      }
    } catch (err) {
      setStatus('error');
      setError('Connection failure. Your inquiry has been secured. Please call our sourcing desk at +91-7055552535.');
    }
  };

  return (
    <div className="quote-section" id="quote-form-section">
      
      {/* Contact Details & Immediate Action Links */}
      <div className="quote-info">
        <h3 className="quote-info-title">Procurement Desk</h3>
        <p className="quote-info-desc">
          Submit your bulk requirement details. Our commercial sourcing desk will evaluate your logistics coordinates and volume commitments to provide a formal, GST-compliant price quotation.
        </p>

        <div className="quote-contact-card">
          <div className="quote-contact-item">
            <div className="quote-contact-icon">
              {/* iPhone/Google style Phone SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ color: 'var(--accent-gold)' }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="quote-contact-details">
              <h5>Direct Sourcing Desk</h5>
              <p>+91-7055552535</p>
            </div>
          </div>

          <div className="quote-contact-item">
            <div className="quote-contact-icon">✉️</div>
            <div className="quote-contact-details">
              <h5>Official RFQ Email</h5>
              <p>contact@saarthiorganics.com</p>
            </div>
          </div>

          <div className="quote-contact-item">
            <div className="quote-contact-icon">📍</div>
            <div className="quote-contact-details">
              <h5>Corporate Location</h5>
              <p>Farm House, Liberty Chowk, Karnal - 132001, Haryana</p>
            </div>
          </div>

          <div className="quote-contact-actions">
            <a 
              href="https://wa.me/917055552535" 
              className="btn-whatsapp"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.09-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              WhatsApp Inquiry
            </a>
            <a 
              href="tel:+91-7055552535" 
              className="btn-secondary" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Operator
            </a>
          </div>
        </div>
      </div>

      {/* 3-Step Modest & User-Friendly Industrial Procurement Form */}
      <div className="quote-form-container" style={{ position: 'relative', overflow: 'hidden' }}>
        <h3 className="quote-form-title">Request Bulk Pricing</h3>
        <p className="quote-form-subtitle" style={{ marginBottom: '24px' }}>
          GST-compliant wholesale pricing quotation request
        </p>

        {/* Step Indicator */}
        {status !== 'success' && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', position: 'relative', padding: '0 10px' }}>
            <div style={{ position: 'absolute', top: '18px', left: '30px', right: '30px', height: '2px', background: 'var(--border-color)', zIndex: 1 }}></div>
            <div style={{ 
              position: 'absolute', 
              top: '18px', 
              left: '30px', 
              right: '30px', 
              height: '2px', 
              background: 'var(--accent-gold)', 
              zIndex: 2, 
              width: `${((step - 1) / 2) * 88}%`,
              transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
            }}></div>
            
            {[1, 2, 3].map((s) => (
              <div key={s} style={{ zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: step === s ? 'var(--accent-gold)' : step > s ? 'var(--accent-orange)' : 'var(--bg-secondary)',
                  border: `2px solid ${step >= s ? 'transparent' : 'var(--border-color)'}`,
                  color: step >= s ? '#111111' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  boxShadow: step === s ? '0 0 12px rgba(212, 175, 55, 0.4)' : 'none'
                }}>
                  {step > s ? '✓' : s}
                </div>
                <span style={{
                  fontSize: '0.78rem',
                  marginTop: '8px',
                  fontWeight: step === s ? '700' : '500',
                  color: step === s ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  transition: 'color 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {s === 1 ? 'Profile' : s === 2 ? 'Sourcing' : 'Contact'}
                </span>
              </div>
            ))}
          </div>
        )}

        {status === 'success' ? (
          <div style={{
            padding: '40px 20px',
            background: 'rgba(197, 160, 89, 0.08)',
            border: '1px solid var(--accent-gold)',
            borderRadius: '6px',
            textAlign: 'center',
            color: 'var(--text-primary)',
            animation: 'fadeIn 0.5s ease-out'
          }}>
            <div style={{ 
              fontSize: '2.5rem', 
              color: 'var(--accent-gold)', 
              background: 'rgba(212, 175, 55, 0.15)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>✓</div>
            <h4 style={{ marginBottom: '12px', fontSize: '1.3rem', fontWeight: '700', color: 'var(--accent-gold)' }}>RFQ Received Successfully</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto' }}>
              Thank you for contacting Saarthi Organics. Our team will review your requirement and get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px', minHeight: '340px', justifyContent: 'space-between' }}>
            
            {/* Honeypot field (hidden from real users) */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website">Website Address (Leave Blank)</label>
              <input 
                type="text" 
                id="website" 
                name="website" 
                value={honeypot} 
                onChange={(e) => setHoneypot(e.target.value)} 
                tabIndex={-1} 
                autoComplete="off" 
              />
            </div>

            {/* Step Contents */}
            <div style={{ transition: 'all 0.3s ease' }}>
              
              {error && (
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(197, 106, 26, 0.1)',
                  borderLeft: '4px solid var(--accent-orange)',
                  borderRadius: '4px',
                  color: 'var(--accent-orange)',
                  fontSize: '0.88rem',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>
                  {error}
                </div>
              )}

              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.4s ease' }}>
                  <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: '700' }}>
                    Step 1: Company Profile
                  </h4>
                  
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name *</label>
                    <input 
                      required 
                      type="text" 
                      id="companyName"
                      name="companyName" 
                      value={formData.companyName} 
                      onChange={handleInput} 
                      placeholder="E.g. Karnal Distilleries Ltd" 
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactPerson">Purchase / Plant Manager *</label>
                    <input 
                      required 
                      type="text" 
                      id="contactPerson"
                      name="contactPerson" 
                      value={formData.contactPerson} 
                      onChange={handleInput} 
                      placeholder="E.g. Mr. Amit Sharma" 
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="industryType">Industry Segment *</label>
                    <select 
                      id="industryType"
                      name="industryType" 
                      value={formData.industryType} 
                      onChange={handleInput}
                      disabled={status === 'submitting'}
                    >
                      <option value="distillery">Distillery & Bio-Ethanol</option>
                      <option value="cattle-feed">Cattle Feed Manufacturer</option>
                      <option value="yeast">Yeast Processing</option>
                      <option value="tobacco">Tobacco & Hookah Curing</option>
                      <option value="food-processing">Food Processing & Baking</option>
                      <option value="pharma">Pharmaceutical Fermentation</option>
                      <option value="foundry">Foundry Casting & Core Binders</option>
                      <option value="other">Other Sourcing Needs</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.4s ease' }}>
                  <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: '700' }}>
                    Step 2: Sourcing Requirements
                  </h4>

                  <div className="form-group">
                    <label htmlFor="requiredQuantity">Initial Order Quantity (MT) *</label>
                    <input 
                      required 
                      type="text" 
                      id="requiredQuantity"
                      name="requiredQuantity" 
                      value={formData.requiredQuantity} 
                      onChange={handleInput} 
                      placeholder="E.g. 20 - 50 MT (approx. 1 tanker)" 
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="packagingRequirement">Packaging Format *</label>
                    <select 
                      id="packagingRequirement"
                      name="packagingRequirement" 
                      value={formData.packagingRequirement} 
                      onChange={handleInput}
                      disabled={status === 'submitting'}
                    >
                      <option value="tanker">Bulk Tanker Supply (20 - 50 MT)</option>
                      <option value="ibc">IBC Totes (1000L / 1.4 MT)</option>
                      <option value="flexibag">Flexibag (20 - 24 MT)</option>
                      <option value="drums">MS / HDPE Drums (200L)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="monthlyRequirement">Estimated Monthly Volume (MT)</label>
                    <input 
                      type="text" 
                      id="monthlyRequirement"
                      name="monthlyRequirement" 
                      value={formData.monthlyRequirement} 
                      onChange={handleInput} 
                      placeholder="E.g. 150 MT / Month (Optional)" 
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.4s ease' }}>
                  <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: '700' }}>
                    Step 3: Delivery & Contact
                  </h4>

                  <div className="form-group">
                    <label htmlFor="deliveryLocation">Delivery Location (City, State) *</label>
                    <input 
                      required 
                      type="text" 
                      id="deliveryLocation"
                      name="deliveryLocation" 
                      value={formData.deliveryLocation} 
                      onChange={handleInput} 
                      placeholder="E.g. Karnal, Haryana" 
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label htmlFor="phone">Contact Number *</label>
                      <input 
                        required 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInput} 
                        placeholder="E.g. +91-9876543210" 
                        disabled={status === 'submitting'}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Business Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email} 
                        onChange={handleInput} 
                        placeholder="E.g. purchase@company.com" 
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Custom Specifications / Notes</label>
                    <textarea 
                      id="message"
                      name="message" 
                      value={formData.message} 
                      onChange={handleInput} 
                      placeholder="E.g., specific Brix levels, TRS limits, or transit seal specifications."
                      disabled={status === 'submitting'}
                      style={{ minHeight: '80px', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Form Controls */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '14px', fontSize: '0.95rem', cursor: 'pointer' }}
                  disabled={status === 'submitting'}
                >
                  &larr; Back
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-primary"
                  style={{ flex: 2, padding: '14px', fontSize: '0.95rem', cursor: 'pointer' }}
                >
                  Continue &rarr;
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ flex: 2, padding: '14px', fontSize: '0.95rem', cursor: 'pointer' }}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Processing Sourcing Request...' : 'Submit RFQ'}
                </button>
              )}
            </div>
          </form>
        )}
      </div>

    </div>
  );
}

