import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses Supplier in Haryana | Bulk Sourcing | Saarthi Organics',
  description: 'GST-compliant bulk industrial sugarcane molasses supplier in Haryana. Specialized liquid tanker dispatches sourced from Karnal, Yamunanagar, and Panipat sugar mills.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-haryana',
  },
};

export default function HaryanaSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Haryana Sourcing)",
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
    "url": "https://www.saarthiorganics.com/molasses-supplier-haryana"
  };

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Regional Sourcing Hub</span>
          <h1 className="subpage-hero-title">Bulk Molasses Supplier in Haryana</h1>
          <p className="subpage-hero-desc">
            Direct-from-mill sugarcane blackstrap molasses dispatches with verified 82-88 Brix density, coordinated from our logistics headquarters in Karnal.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Strategic Sourcing in the Sugarcane Corridor
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Haryana forms the backbone of our agricultural sourcing operations. With direct, long-term trade allocations across leading cooperative and private sugar mills in <strong>Karnal, Yamunanagar, Panipat, Rohtak, and Sonipat</strong>, Saarthi Organics secures stable raw material volume year-round, even during the seasonal crushing off-season.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our sales office based in Karnal provides real-time access to the North India industrial belt. We supply high Total Reducing Sugars (TRS ≥ 45.0%) feedstock ideal for local distilleries, cattle feed pellet mills, and yeast processors. By bypasssing third-party brokers, we ensure pure, un-diluted product quality directly delivered to your facility.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Haryana Logistics & Excise Clearance</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Because molasses movement is heavily regulated by state excise laws, our compliance desk in Karnal directly manages all transit documentations, including Haryana Excise passes, e-way bills, and computerized weighment logs. Our in-house fleet of specialized liquid road tankers (20 - 50 MT capacity) guarantees priority dispatch schedules and absolute transit safety.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Direct Mill Sourcing</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Direct logistics loading at Yamunanagar, Shahabad, and Panipat sugar mills, keeping pricing competitive.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Excise Compliant</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Seamless online permit processing and verification to avoid regional transit checkpoints delays.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Haryana Procurement Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Coordinate monthly volume contracts and request bulk pricing quotes for Haryana-based industrial plants.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=haryana&subject=Haryana Bulk Sourcing Request" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk Pricing
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Speak with Sourcing Director
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      <FinalCTA />
    </main>
  );
}
