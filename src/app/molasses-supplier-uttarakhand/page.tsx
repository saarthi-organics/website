import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses Supplier in Uttarakhand | Haridwar Pharma & Distillery Sourcing | Saarthi Organics',
  description: 'Industrial sugarcane molasses supplier in Uttarakhand. High-purity, traceable carbon media for pharmaceutical fermentation and distilleries in Haridwar, Kashipur, and Dehradun.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-uttarakhand',
  },
};

export default function UttarakhandSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Uttarakhand Sourcing)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": "+91-7055552535",
    "email": "contact@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Haridwar",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-uttarakhand"
  };

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_logistics.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Regional Sourcing Hub</span>
          <h1 className="subpage-hero-title">Bulk Molasses Supplier in Uttarakhand</h1>
          <p className="subpage-hero-desc">
            Traceable, heavy-metal tested sugarcane blackstrap molasses dispatches optimized for pharmaceutical fermentation and distilleries in Uttarakhand.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              High-Purity Sourcing for Biopharma & Industrial Fermentation
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Uttarakhand is a premier hub for the Indian biopharmaceutical and distillation industries. Production zones in <strong>Haridwar (SIDCUL), Dehradun, Kashipur, and Pantnagar</strong> require highly consistent, traceable carbon substrates with documented chemical structures.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Saarthi Organics provides a specialized supply chain to support these sensitive manufacturing setups. We source premium blackstrap molasses batches directly from state-of-the-art sugar refining facilities, running strict laboratory titrations to verify refractometric Brix density (82-88 Brix), Total Reducing Sugars (TRS ≥ 45.0%), and mineral metrics.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Uttarakhand Mountain Logistics & Audits</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Transporting high-viscosity liquid tankers through Uttarakhand&apos;s hilly entry pathways requires professional logistics mapping. We use specialized, well-maintained tankers and arrange early deliveries to avoid local traffic bottlenecks. For pharmaceutical audits, we provide a full Certificate of Analysis (COA) and material batch codes prior to gate discharge.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>API Grade Audited Batches</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Sourcing carbon substrates featuring documented trace element profiles (iron, zinc, magnesium).</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Excise Pass Clearance</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Direct, legal transit permits processed from Haryana to Uttarakhand border checkpoints.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Uttarakhand Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Negotiate yearly biopharma-grade or distillery-grade molasses contract terms and request pricing details.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=uttarakhand&subject=Uttarakhand Bulk Sourcing Request" className="btn-primary" style={{ textAlign: 'center' }}>
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
