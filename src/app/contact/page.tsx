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

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Inject LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Connect with Us</span>
          <h1 className="subpage-hero-title">Contact Sourcing & Procurement Desk</h1>
          <p className="subpage-hero-desc">
            Direct access to our commercial sales office, logistics managers, and laboratory testing coordinators based in Karnal, India.
          </p>
        </div>
      </div>

      {/* Procurement Form Block */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{
            display: 'flex',
            gap: '60px',
            flexWrap: 'wrap',
            alignItems: 'flex-start'
          }}>
            
            {/* Form Column */}
            <div style={{ flex: 1.3, minWidth: '320px' }}>
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '10px 0',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}>
                <ContactForm />
              </div>
            </div>

            {/* Address & Business Info Column */}
            <div style={{ flex: 0.7, minWidth: '280px' }}>
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
                
                {/* Brand Identifier */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontFamily: "'Cinzel', serif", fontWeight: 700, margin: '0 0 4px 0' }}>
                    Saarthi Organics
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                    Industrial Sourcing & Logistics
                  </span>
                </div>

                {/* NAP Information Details */}
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Address */}
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Sourcing Headquarters</strong>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                      Farm House, Liberty Chowk,<br />
                      Karnal, Haryana - 132001, India
                    </p>
                  </div>

                  {/* Phones */}
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Commercial Desk</strong>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                      +91-7055552535<br />
                      +91-9927029029
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Corporate Mail</strong>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      contact@saarthiorganics.com
                    </p>
                  </div>

                  {/* Hours */}
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Sourcing Hours</strong>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Monday – Saturday: 9:00 AM – 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>

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
                  <strong style={{ color: 'var(--accent-gold)' }}>Excise Notice:</strong> Molasses loading is managed under state-regulated permits. Tanker arrival and gate delivery permits are processed and shared online in real-time.
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>
    </main>
  );
}
