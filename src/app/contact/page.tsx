import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Saarthi Organics | Bulk Molasses Inquiry & Sourcing Desk',
  description: 'Connect with our bulk molasses sourcing desk in Karnal, Haryana. Submit an RFQ for sugarcane blackstrap molasses sample kits, tanker rates, and contract pricing.',
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
    "telephone": "+91-7055552535",
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
      a: "Our standard MOQ for commercial liquid blackstrap molasses is 20 to 25 Metric Tons (equivalent to one road tanker). We also offer customized industrial orders in 1000L IBC Totes (approx. 1.4 MT) or steel drums (200L) upon prior logistics arrangement."
    },
    {
      q: "Can we request a pre-shipment sample kit for laboratory testing?",
      a: "Yes. We coordinate sample kit shipments (2kg to 5kg in sealed containers) directly to your plant's QC lab. A pre-shipment Certificate of Analysis (COA) is enclosed with the kit. Contact our sourcing desk via the form or email to initiate a sample dispatch."
    },
    {
      q: "How are inter-state excise permits and logistics clearances managed?",
      a: "Saarthi Organics has an in-house excise and compliance team. We process all regulatory transport permits, state pass clearances, and gate exit licenses in real-time. Transit permits are shared digitally with the tanker crew prior to dispatch."
    },
    {
      q: "What quality metrics are guaranteed in the contract pricing?",
      a: "We guarantee minimum 82% Brix density, ash content below 12%, and optimized Total Reducing Sugars (TRS) based on industry demands (typically 48% to 52% TRS for distilleries). Batch test sheets from independent NABL-accredited labs are provided for every dispatch."
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
            Direct coordination with our commercial sales office, logistics managers, and quality testing coordinators in Karnal, India. Secure bulk contract allocations, tanker rates, and sample testing kits.
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
            
            {/* Left Column: Sourcing Desk Info & Google Map */}
            <div style={{ flex: 0.8, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '30px' }} className="contact-info-col">
              
              {/* Sourcing Info Card */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '30px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontFamily: "'Cinzel', serif", fontWeight: 700, margin: '0 0 4px 0' }}>
                    Saarthi Organics
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                    Industrial Sourcing & Logistics
                  </span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Address */}
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Sourcing Headquarters</strong>
                    <a 
                      href="https://maps.google.com/?q=Liberty+Chowk,+Karnal,+Haryana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link-hover"
                    >
                      <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: 'inherit' }}>
                        Farm House, Liberty Chowk,<br />
                        Karnal, Haryana - 132001, India
                      </p>
                    </a>
                  </div>

                  {/* Phones */}
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Commercial Desk</strong>
                    <div style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                      <a href="tel:+917055552535" className="contact-link-hover" style={{ display: 'block', marginBottom: '4px' }}>
                        📞 +91-7055552535 (Direct Sourcing)
                      </a>
                      <a href="tel:+919927029029" className="contact-link-hover" style={{ display: 'block' }}>
                        📞 +91-9927029029 (Logistics Office)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Corporate Mail</strong>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>
                      <a href="mailto:contact@saarthiorganics.com" className="contact-link-hover">
                        ✉️ contact@saarthiorganics.com
                      </a>
                    </p>
                  </div>

                  {/* Hours */}
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Sourcing Hours</strong>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Monday – Saturday: 9:00 AM – 6:00 PM (IST)<br />
                      Sunday: Closed
                    </p>
                  </div>

                </div>

                {/* Immediate Mobile CTA Actions */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' }} className="quote-contact-actions">
                  <a 
                    href="https://wa.me/917055552535" 
                    className="btn-whatsapp"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ flex: 1, minWidth: '130px', padding: '12px', fontSize: '0.9rem', borderRadius: '4px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 600 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" style={{ width: '16px', height: '16px' }}>
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.09-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    WhatsApp Inquiry
                  </a>
                  <a 
                    href="tel:+91-7055552535" 
                    className="btn-secondary"
                    style={{ flex: 1, minWidth: '130px', padding: '12px', fontSize: '0.9rem', borderRadius: '4px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 600 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Call Sourcing
                  </a>
                </div>

                {/* Additional Note */}
                <div style={{
                  background: 'rgba(212, 175, 55, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  padding: '16px',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  lineHeight: '1.4',
                  color: 'var(--text-secondary)'
                }}>
                  <strong style={{ color: 'var(--accent-gold)' }}>Excise & Permit Notice:</strong> Molasses loading is strictly managed under state-regulated permits. Tanker arrival permits and gate delivery slips are processed and shared online in real-time.
                </div>

              </div>

              {/* Interactive Google Map Embed */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13840.407981577785!2d76.97495574360349!3d29.687989344445585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e71c667082877%3A0xa1b203c9ee5d7a4b!2sLiberty%20Chowk%2C%20Karnal%2C%20Haryana%20132001!5e0!3m2!1sen!2sin!4v1718280000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="260" 
                  style={{ border: 0, borderRadius: '6px' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="google-map-iframe"
                />
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
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: '0 0 4px 0', fontWeight: '700' }}>PAN India Delivery</h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Excise aligned shipping across North India and major national industrial hubs.</p>
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
                  <span style={{ fontSize: '1.8rem', color: 'var(--accent-gold)' }}>🧪</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: '0 0 4px 0', fontWeight: '700' }}>Lab-Certified Sourcing</h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Standard Certificate of Analysis (COA) specifying Brix (82% Min) and TRS.</p>
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
