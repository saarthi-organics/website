import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Saarthi Organics | Bulk Molasses Inquiry & Sourcing Desk',
  description: 'Connect with our bulk molasses sourcing desk in Karnal, Haryana. Submit an RFQ for sugarcane molasses sample kits, tanker rates, and contract pricing.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/contact',
  },
};

export default function ContactPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": ["+91-7055552535", "+91-9927029029", "+91-9837022300"],
    "email": "contact@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Farm House, Liberty Chowk",
      "addressLocality": "Karnal",
      "addressRegion": "Haryana",
      "postalCode": "132001",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "url": "https://www.saarthiorganics.com/contact"
  };

  const contactFaqs = [
    {
      q: "What is the Minimum Order Quantity (MOQ)?",
      a: "Our standard MOQ for commercial liquid sugarcane molasses is 20 to 25 Metric Tons (equivalent to one road tanker). We also offer customized industrial orders in 1000L IBC Totes (approx. 1.4 MT) or steel drums (200L) upon prior logistics arrangement."
    },
    {
      q: "Can we request a pre-shipment sample kit for laboratory testing?",
      a: "Yes. Sourcing and sample kit dispatches (2kg to 5kg in sealed containers) may be discussed and arranged directly to your plant's QC lab. Sourcing documentation or typical specifications can be shared upon request during sample coordination. Contact our sourcing desk via the form or email to discuss options."
    },
    {
      q: "How are inter-state excise permits and logistics clearances managed?",
      a: "Saarthi Organics has an in-house excise and compliance team. We process all regulatory transport permits, state pass clearances, and gate exit licenses in real-time. Transit permits are shared digitally with the tanker crew prior to dispatch."
    },
    {
      q: "What quality metrics are guaranteed in the contract pricing?",
      a: "We focus on providing sugarcane molasses matching standard industrial specifications. Sourcing parameters typically center around 82% Brix density and optimized Total Reducing Sugars (TRS). Product specifications and supporting quality documentation may be discussed based on customer requirements."
    }
  ];

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Inject LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_contact.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">RFQ & Sourcing Desk</span>
          <h1 className="subpage-hero-title">Bulk Sugarcane Molasses Sourcing</h1>
          <p className="subpage-hero-desc">
            Direct coordination with our commercial sales office, logistics managers, and procurement coordinators in Karnal, India. Secure bulk contract allocations, tanker rates, and sample testing kits.
          </p>
        </div>
      </div>

      {/* Sourcing Desk Split Layout */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{
            display: 'flex',
            gap: '60px',
            flexWrap: 'wrap',
            alignItems: 'flex-start'
          }} className="contact-layout-container">
            
            {/* Left Column: Sourcing Desk Info Cards */}
            <div style={{ flex: 0.8, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }} className="contact-info-col">
              
              {/* Card 1: Headquarters & Sourcing Hours */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.5rem' }}>🏢</span>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontFamily: "'Cinzel', serif", fontWeight: 700, margin: 0 }}>
                      Sourcing Headquarters
                    </h3>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <a 
                      href="https://maps.google.com/?q=Liberty+Chowk,+Karnal,+Haryana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link-hover"
                    >
                      <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.5', color: 'inherit' }}>
                        Farm House, Liberty Chowk,<br />
                        Karnal, Haryana - 132001, India
                      </p>
                    </a>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>Sourcing Hours</strong>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      Monday – Saturday: 9:00 AM – 6:00 PM (IST)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Commercial & Sourcing Desk */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.5rem' }}>📞</span>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontFamily: "'Cinzel', serif", fontWeight: 700, margin: 0 }}>
                      Commercial Desk
                    </h3>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Phone Numbers</strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92rem' }}>
                      <a href="tel:+917055552535" className="contact-link-hover" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>+91-7055552535</span>
                      </a>
                      <a href="tel:+919927029029" className="contact-link-hover" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>+91-9927029029</span>
                      </a>
                      <a href="tel:+919837022300" className="contact-link-hover" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>+91-9837022300</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>Corporate Mail</strong>
                    <a href="mailto:contact@saarthiorganics.com" className="contact-link-hover" style={{ fontSize: '0.92rem' }}>
                      contact@saarthiorganics.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Digital Channels & Online Permits */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.5rem' }}>💬</span>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontFamily: "'Cinzel', serif", fontWeight: 700, margin: 0 }}>
                      Digital Desk & Permits
                    </h3>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }} className="quote-contact-actions">
                    <a 
                      href="https://wa.me/917055552535" 
                      className="btn-whatsapp"
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ flex: 1, minWidth: '120px', padding: '10px', fontSize: '0.85rem', borderRadius: '4px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontWeight: 600 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" style={{ width: '14px', height: '14px' }}>
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.09-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                      </svg>
                      WhatsApp Inquiry
                    </a>
                    <a 
                      href="tel:+91-7055552535" 
                      className="btn-secondary"
                      style={{ flex: 1, minWidth: '120px', padding: '10px', fontSize: '0.85rem', borderRadius: '4px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontWeight: 600 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      Call Sourcing
                    </a>
                  </div>
                  <div style={{
                    background: 'rgba(212, 175, 55, 0.05)',
                    border: '1px solid rgba(212, 175, 55, 0.15)',
                    padding: '12px',
                    borderRadius: '4px',
                    fontSize: '0.82rem',
                    lineHeight: '1.4',
                    color: 'var(--text-secondary)'
                  }}>
                    <strong style={{ color: 'var(--accent-gold)' }}>Excise Notice:</strong> Molasses loading is strictly managed under state-regulated permits. Tanker transit permits are processed online in real-time.
                  </div>
                </div>
              </div>

            </div>
            
            {/* Right Column: Inquiry Form & Trust Badges */}
            <div style={{ flex: 1.2, minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '30px' }} className="contact-form-col">
              
              {/* Form Container */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                padding: '10px 0'
              }}>
                <ContactForm hideContactInfo={true} />
              </div>

              {/* B2B Trust Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px'
              }} className="trust-grid-container">
                
                <div className="contact-trust-card" style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '1.8rem', color: 'var(--accent-gold)' }}>📄</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: '0 0 4px 0', fontWeight: '700' }}>GST-Compliant Billing</h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Seamless input tax credit filing and digitized e-way bills generated instantly.</p>
                  </div>
                </div>

                <div className="contact-trust-card" style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '1.8rem', color: 'var(--accent-gold)' }}>🚛</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: '0 0 4px 0', fontWeight: '700' }}>Own Transport Fleet</h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>40+ specialized liquid tankers for secure, contamination-free logistics.</p>
                  </div>
                </div>

                <div className="contact-trust-card" style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '1.8rem', color: 'var(--accent-gold)' }}>📍</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: '0 0 4px 0', fontWeight: '700' }}>Expanded Geographic Reach</h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Excise aligned shipping across Haryana, Punjab, Rajasthan, Delhi NCR, Uttarakhand, Gujarat, Madhya Pradesh, and other industrial markets.</p>
                  </div>
                </div>

                <div className="contact-trust-card" style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '1.8rem', color: 'var(--accent-gold)' }}>🛡</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: '0 0 4px 0', fontWeight: '700' }}>Quality-Focused Procurement</h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Product specifications and supporting documentation may be discussed based on customer requirements.</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      {/* FAQ Accordion Section */}
      <section style={{ padding: '60px 24px 100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">Sourcing Help</span>
            <h2 className="section-title">Procurement & Sourcing FAQ</h2>
            <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Common questions answered for procurement managers, plant heads, and commercial molasses buyers.
            </p>
          </div>

          <div className="faq-list">
            {contactFaqs.map((faq, index) => (
              <details key={index} className="faq-card" style={{ marginBottom: '16px', border: '1px solid var(--border-color)', borderRadius: '6px', background: 'var(--bg-surface)' }}>
                <summary className="faq-question" style={{
                  padding: '24px',
                  fontWeight: '700',
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  listStyle: 'none'
                }}>
                  <span>{faq.q}</span>
                  <span className="faq-arrow-icon" style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', transition: 'transform 0.2s' }}>▼</span>
                </summary>
                <div className="faq-answer" style={{ padding: '24px', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', background: 'var(--bg-surface)' }}>
                  <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>
    </main>
  );
}
