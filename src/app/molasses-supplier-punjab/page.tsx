import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses Supplier in Punjab | Ludhiana & Jalandhar Bulk Supply | Saarthi Organics',
  description: 'Reliable industrial sugarcane molasses supplier in Punjab. Sourcing solutions for bio-ethanol distilleries and cattle feed mills in Khanna, Jalandhar, Ludhiana, and Patiala.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-punjab',
  },
};

export default function PunjabSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Punjab Sourcing)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": "+91-7055552535",
    "email": "contact@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ludhiana",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-punjab"
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
          <h1 className="subpage-hero-title">Bulk Molasses Supplier in Punjab</h1>
          <p className="subpage-hero-desc">
            Excise-aligned, high Total Reducing Sugars (TRS) sugarcane molasses supply for Punjab&apos;s cattle feed manufacturers and fermentation plants.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Fueling Punjab&apos;s Agriculture & Distillery Sectors
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Punjab represents a major manufacturing belt for dairy feed and alcohol fermentation in India. Feed mill clusters in <strong>Khanna and Ludhiana</strong>, alongside massive bio-ethanol distilleries in <strong>Patiala, Firozpur, and Sangrur</strong>, require high-volume feedstock delivery.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Saarthi Organics provides a dependable logistics network that connects sugar crushing zones in neighboring Haryana directly with Punjab&apos;s heavy industrial consumers. Sourcing raw materials from high-capacity modern sugar refineries, we deliver sugarcane blackstrap molasses with a guaranteed Brix density of 82.0% - 88.0% and low ash parameters.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Interstate Transit & Punjab Excise Passes</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Interstate transport of molasses into Punjab is heavily controlled by state liquor and excise policies. Our dedicated logistics desk manages the entire compliance chain—securing transport permits, generating GSTR-1 aligned invoices, and verifying e-way bill data—to ensure tankers proceed through border checkpoints (such as Shambhu or Lalru) without operational delays.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Interstate Transit Coordination</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Seamless cross-border logistics management from Haryana mills directly to Punjab plant valves.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Feed and Yeast Grade Sourcing</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Supplying highly palatable, mineral-rich animal feed binders and filtered yeast growth substrates.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Punjab Procurement Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Secure stable seasonal volume contracts for distilleries and cattle feed pellet mills across Punjab.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=punjab&subject=Punjab Bulk Sourcing Request" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk Pricing
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Verify Sourcing Logistics
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
