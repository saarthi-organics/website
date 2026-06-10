"use client";

import { useState, FormEvent } from 'react';

export default function ContactForm() {
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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate B2B inquiry processing
    setTimeout(() => {
      setStatus('success');
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
      setTimeout(() => setStatus('idle'), 6000);
    }, 1500);
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
            <div className="quote-contact-icon">📞</div>
            <div className="quote-contact-details">
              <h5>Direct Sourcing Desk</h5>
              <p>+91 7055552535</p>
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
            <a href="tel:+917055552535" className="btn-secondary">
              📞 Call Operator
            </a>
          </div>
        </div>
      </div>

      {/* 10-Field Industrial procurement form */}
      <div className="quote-form-container">
        <h3 className="quote-form-title">Request Bulk Pricing</h3>
        <p className="quote-form-subtitle">GST-compliant wholesale pricing quotation request</p>

        {status === 'success' ? (
          <div style={{
            padding: '30px',
            background: 'rgba(197, 160, 89, 0.08)',
            border: '1px solid var(--accent-gold)',
            borderRadius: '4px',
            textAlign: 'center',
            color: 'var(--text-primary-light)'
          }}>
            <div style={{ fontSize: '3rem', color: 'var(--accent-gold)', marginBottom: '16px' }}>✓</div>
            <h4 style={{ marginBottom: '10px', fontSize: '1.25rem' }}>RFQ Received Successfully</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary-light)', lineHeight: 1.5 }}>
              Thank you. Your industrial procurement inquiry has been logged. Our logistics and pricing analysts will review your delivery coordinates and contact your purchasing manager shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-grid">
            
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
              <label htmlFor="contactPerson">Contact Person *</label>
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
              <label htmlFor="phone">Phone Number *</label>
              <input 
                required 
                type="tel" 
                id="phone"
                name="phone" 
                value={formData.phone} 
                onChange={handleInput} 
                placeholder="E.g. +91 9876543210" 
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Business Email *</label>
              <input 
                required 
                type="email" 
                id="email"
                name="email" 
                value={formData.email} 
                onChange={handleInput} 
                placeholder="E.g. purchase@company.com" 
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="industryType">Industry Type *</label>
              <select 
                id="industryType"
                name="industryType" 
                value={formData.industryType} 
                onChange={handleInput}
                disabled={status === 'submitting'}
              >
                <option value="distillery">Distillery & Ethanol</option>
                <option value="cattle-feed">Cattle Feed Manufacturer</option>
                <option value="yeast">Yeast Industry</option>
                <option value="tobacco">Tobacco Industry</option>
                <option value="food-processing">Food Processing</option>
                <option value="pharma">Pharma Industry</option>
                <option value="foundry">Foundries & Casting</option>
                <option value="other">Other Industrial Sourcing</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="requiredQuantity">Initial Required Quantity (MT) *</label>
              <input 
                required 
                type="text" 
                id="requiredQuantity"
                name="requiredQuantity" 
                value={formData.requiredQuantity} 
                onChange={handleInput} 
                placeholder="E.g. 20 - 50 MT (1 Tanker)" 
                disabled={status === 'submitting'}
              />
            </div>

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

            <div className="form-group">
              <label htmlFor="packagingRequirement">Packaging Requirement *</label>
              <select 
                id="packagingRequirement"
                name="packagingRequirement" 
                value={formData.packagingRequirement} 
                onChange={handleInput}
                disabled={status === 'submitting'}
              >
                <option value="tanker">Bulk Tanker Supply (20 - 50 Metric Tons) (Recommended)</option>
                <option value="ibc">IBC Totes (1000L / 1.4 MT)</option>
                <option value="flexibag">Flexibag (20 - 24 MT)</option>
                <option value="drums">MS / HDPE Drums (200L / 280 kg)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="monthlyRequirement">Estimated Monthly Vol (MT)</label>
              <input 
                type="text" 
                id="monthlyRequirement"
                name="monthlyRequirement" 
                value={formData.monthlyRequirement} 
                onChange={handleInput} 
                placeholder="E.g. 150 MT / Month" 
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message / Specifications</label>
              <textarea 
                id="message"
                name="message" 
                value={formData.message} 
                onChange={handleInput} 
                placeholder="Include specifications like minimum Brix, TRS details, or specific delivery timelines."
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-grid-full">
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', padding: '16px' }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Processing Inquiry...' : 'Request Bulk Pricing (RFQ)'}
              </button>
            </div>

          </form>
        )}
      </div>

    </div>
  );
}
