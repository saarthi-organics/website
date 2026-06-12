import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses Supplier in Delhi NCR | Noida, Gurgaon & Faridabad Bulk Supply',
  description: 'Corporate sugarcane molasses supplier in Delhi NCR. Timely liquid road tanker dispatch to industrial zones in Noida, Faridabad, Gurgaon, and Ghaziabad.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-delhi-ncr',
  },
};

export default function DelhiNCRSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Delhi NCR Sourcing)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": "+91-7055552535",
    "email": "contact@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi NCR",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-delhi-ncr"
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
          <h1 className="subpage-hero-title">Bulk Molasses Supplier in Delhi NCR</h1>
          <p className="subpage-hero-desc">
            Seamless industrial sugarcane blackstrap molasses distribution servicing Noida, Gurgaon, Faridabad, and Ghaziabad manufacturing zones.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              B2B Raw Material Coordination for National Capital Region
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              The Delhi National Capital Region (NCR) hosts numerous industrial corridors. Processing units, casting foundries, and chemical manufacturers in <strong>Gurgaon, Noida, Faridabad, Greater Noida, and Ghaziabad</strong> require high-density, pure carbon media and binding agents.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Saarthi Organics coordinates daily liquid road tanker dispatches to meet these demanding production schedules. Sourced directly from our sugar mill refinery partner network in Haryana and western UP corridors (dispatched legally under excise clears), our molasses is verified at 82-88 Brix to ensure top chemical binding performance and fermentation efficiency.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Peak-Hour Truck Restrictions & Logistics Clearance</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Operating liquid tankers inside Delhi NCR requires strict navigation of traffic rules and timing restrictions. Our logistics desk maps routes dynamically to bypass peak-hour constraints, coordinating evening and early morning gate discharge times. We generate e-way bills and state transit permissions instantly to guarantee zero delays.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Dynamic Route Mapping</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Coordinating gate deliveries aligned with NCR no-entry truck timings to keep discharge under 60 mins.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Industrial Binder Quality</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Supplying highly viscous organic binding media for sand castings and agricultural compounding.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Delhi NCR Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Secure steady industrial-grade sugarcane molasses contract supply across the Delhi NCR region.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=delhincr&subject=Delhi NCR Bulk Sourcing Request" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk Pricing
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Verify Transit Logistics
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
