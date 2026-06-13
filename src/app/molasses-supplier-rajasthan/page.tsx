import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses Supplier in Rajasthan | Sourcing Jaipur, Alwar & Kota | Saarthi Organics',
  description: 'Supplying bulk sugarcane molasses to cattle feed plants, distilleries, and casting foundries across Rajasthan including Jaipur, Kota, Alwar, and Udaipur.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-rajasthan',
  },
};

export default function RajasthanSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Rajasthan Sourcing)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": "+91-7055552535",
    "email": "contact@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-rajasthan"
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
          <h1 className="subpage-hero-title">Bulk Molasses Supplier in Rajasthan</h1>
          <p className="subpage-hero-desc">
            Industrial-grade blackstrap molasses dispatches optimized for foundries, feed mills, and chemical plants in Rajasthan.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Heavy Sourcing Support for Arid Manufacturing Zones
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Rajasthan hosts major metal casting foundries, chemical plants, and livestock feed manufacturers. Industrial hubs in <strong>Jaipur, Alwar, Kota, Udaipur, and Bhilwara</strong> demand consistent delivery of heavy binders and fermentation substrates.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Saarthi Organics coordinates long-haul tanker transit lines to supply sugarcane blackstrap molasses across the state. Sourced from high-performance crushing mills in North India, our product maintains a standardized refractometric Brix density of 82.0% - 88.0%, making it highly effective for sand core bonding in foundries and carbohydrate binding in cattle pellet mills.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Long-Haul Temperature Controls</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Because long-distance transport through arid zones can impact product temperature and flowability, our logistics desk monitors all tanker routes. For foundry casting setups requiring high-adhesion media, we guarantee that the molasses delivered is pure and contains minimal ash residue, ensuring excellent mold tensile strength.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Long-Distance Fleet Coordination</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>GPS-tracked bulk liquid tankers ensuring prompt, secure arrival across Rajasthan industrial areas.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Foundry Binder Grading</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Molasses with high adhesive properties for silica sand core binding and mold stabilization.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Rajasthan Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Secure reliable bulk supply and negotiate annual contract terms for Rajasthan manufacturing units.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=rajasthan&subject=Rajasthan Bulk Sourcing Request" className="btn-primary" style={{ textAlign: 'center' }}>
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
